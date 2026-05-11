#!/usr/bin/env node
/*
 * A utility script to generate a structured list of publications from an ORCID
 * profile. The script reads the public works associated with a given ORCID iD
 * via the ORCID Public API and, where possible, enriches each entry with
 * additional bibliographic metadata retrieved from Crossref. The resulting
 * data is written to a TypeScript file that can be imported directly into
 * your Next.js site.
 */

import fs from "fs/promises";

const ORCID_ID =
  process.argv[2] || process.env.ORCID_ID || "0000-0001-6804-2029";

const CROSSREF_MAILTO = process.env.CROSSREF_MAILTO || "";

async function fetchJson(url, options = {}) {
  const accept = options.accept || "application/json";
  const headers = {
    Accept: accept,
    "User-Agent": "NanLabPublicationSyncScript/1.0",
    ...options.headers,
  };

  const restOptions = { ...options };
  delete restOptions.accept;
  const response = await fetch(url, { ...restOptions, headers });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} when fetching ${url}`);
  }

  return response.json();
}

async function getOrcidWorks(orcid) {
  const url = `https://pub.orcid.org/v3.0/${encodeURIComponent(orcid)}/works`;
  const data = await fetchJson(url, {
    accept: "application/vnd.orcid+json",
  });
  return data.group || [];
}

async function getOrcidWorkDetail(orcid, putCode) {
  const url = `https://pub.orcid.org/v3.0/${encodeURIComponent(
    orcid,
  )}/work/${encodeURIComponent(putCode)}`;
  return fetchJson(url, {
    accept: "application/vnd.orcid+json",
  });
}

function getField(object, ...keys) {
  for (const key of keys) {
    if (object && object[key] !== undefined) {
      return object[key];
    }
  }

  return undefined;
}

function extractDoi(workSummary) {
  const externalIds = getField(workSummary, "externalIds", "external-ids");
  if (!externalIds) return null;

  const ids = getField(externalIds, "external-id") || [];
  const doiEntry =
    ids.find(
      (id) =>
        id["external-id-type"]?.toLowerCase() === "doi" &&
        id["external-id-relationship"]?.toLowerCase() === "self",
    ) || ids.find((id) => id["external-id-type"]?.toLowerCase() === "doi");

  if (!doiEntry) return null;

  const value = doiEntry["external-id-value"];
  return value
    ? value.replace(/^https?:\/\/doi\.org\//i, "").toLowerCase()
    : null;
}

function parseOrcidWork(work) {
  const titleGroup = getField(work, "title");
  const title = getField(titleGroup, "title")?.value || "";
  const journal = getField(work, "journal-title")?.value || "";
  const publicationDate = getField(work, "publication-date");
  const yearValue = getField(publicationDate, "year")?.value;
  const url = getField(work, "url")?.value || "";
  const doi = extractDoi(work) || "";

  return {
    title,
    authors: [],
    journal,
    year: yearValue ? Number(yearValue) : null,
    doi,
    url,
    abstract: undefined,
    topics: [],
    image: undefined,
    recent: false,
  };
}

async function getCrossrefMetadata(doi) {
  const query = `https://api.crossref.org/works/${encodeURIComponent(doi)}${
    CROSSREF_MAILTO ? `?mailto=${encodeURIComponent(CROSSREF_MAILTO)}` : ""
  }`;

  try {
    const data = await fetchJson(query);
    return data.message || null;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`Failed to retrieve Crossref data for ${doi}: ${message}`);
    return null;
  }
}

function parseCrossref(meta) {
  const title = meta.title?.[0] ?? "";
  const journal = meta["container-title"]?.[0] ?? "";
  const getYear = (dateObj) => dateObj?.["date-parts"]?.[0]?.[0] ?? null;
  const year =
    getYear(meta.issued) ||
    getYear(meta["published-print"]) ||
    getYear(meta["published-online"]) ||
    null;

  const authors = (meta.author || []).map((author) => {
    const given = author.given || "";
    const family = author.family || "";
    return `${given} ${family}`.trim();
  });

  const doi = meta.DOI || "";
  const url = meta.URL || "";
  let abstract = meta.abstract || "";

  if (abstract) {
    abstract = abstract
      .replace(/<\/?jats:[^>]+>/g, "")
      .replace(/<\/?[^>]+>/g, "")
      .trim();
  }

  return {
    title,
    authors,
    journal,
    year,
    doi,
    url,
    abstract,
    volume: meta.volume || "",
    issue: meta.issue || "",
    pages: meta.page || "",
    topics: [],
    image: undefined,
    recent: false,
  };
}

async function run() {
  console.log(`Fetching works for ORCID iD ${ORCID_ID}...`);

  const groups = await getOrcidWorks(ORCID_ID);
  const publications = [];
  const seenDois = new Set();
  const seenFallbackKeys = new Set();

  for (const group of groups) {
    const summaries = group["work-summary"];
    if (!summaries?.length) continue;

    const summary = summaries.sort(
      (a, b) => (b["display-index"] || 0) - (a["display-index"] || 0),
    )[0];

    const putCode = summary["put-code"];
    let doi = extractDoi(summary);
    let detail = null;

    if (!doi && putCode) {
      try {
        detail = await getOrcidWorkDetail(ORCID_ID, putCode);
        doi = extractDoi(detail);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.warn(`Failed to retrieve ORCID detail for ${putCode}: ${message}`);
      }
    }

    if (!doi) {
      const fallback = parseOrcidWork(detail || summary);
      const fallbackKey = `${fallback.year ?? "unknown"}-${fallback.title}`;

      if (!fallback.title || seenFallbackKeys.has(fallbackKey)) {
        console.warn(`No DOI for work put-code ${putCode}, skipping.`);
        continue;
      }

      seenFallbackKeys.add(fallbackKey);
      publications.push(fallback);
      console.warn(`No DOI for work put-code ${putCode}, using ORCID metadata.`);
      continue;
    }

    if (seenDois.has(doi)) {
      continue;
    }
    seenDois.add(doi);

    const metadata = await getCrossrefMetadata(doi);
    if (!metadata) {
      const fallback = parseOrcidWork(detail || summary);
      fallback.doi = doi;
      publications.push(fallback);
      continue;
    }

    publications.push(parseCrossref(metadata));
  }

  publications.sort((a, b) => {
    if (a.year && b.year && a.year !== b.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
  });

  const lines = [];
  lines.push("// This file is auto-generated by sync-publications.mjs.");
  lines.push("export type Publication = {");
  lines.push("  title: string;");
  lines.push("  authors: string[];");
  lines.push("  journal: string;");
  lines.push("  year: number | null;");
  lines.push("  doi?: string;");
  lines.push("  url?: string;");
  lines.push("  abstract?: string;");
  lines.push("  volume?: string;");
  lines.push("  issue?: string;");
  lines.push("  pages?: string;");
  lines.push("  topics?: string[];");
  lines.push("  image?: string;");
  lines.push("  recent?: boolean;");
  lines.push("};");
  lines.push("");
  lines.push("export const generatedPublications: Publication[] = [");

  for (const publication of publications) {
    lines.push("  {");
    lines.push(`    title: ${JSON.stringify(publication.title)},`);
    lines.push(`    authors: ${JSON.stringify(publication.authors)},`);
    lines.push(`    journal: ${JSON.stringify(publication.journal)},`);
    lines.push(
      `    year: ${publication.year !== null ? publication.year : "null"},`,
    );
    lines.push(
      `    doi: ${publication.doi ? JSON.stringify(publication.doi) : "undefined"},`,
    );
    lines.push(
      `    url: ${publication.url ? JSON.stringify(publication.url) : "undefined"},`,
    );
    lines.push(
      `    abstract: ${
        publication.abstract ? JSON.stringify(publication.abstract) : "undefined"
      },`,
    );
    lines.push(
      `    volume: ${
        publication.volume ? JSON.stringify(publication.volume) : "undefined"
      },`,
    );
    lines.push(
      `    issue: ${
        publication.issue ? JSON.stringify(publication.issue) : "undefined"
      },`,
    );
    lines.push(
      `    pages: ${
        publication.pages ? JSON.stringify(publication.pages) : "undefined"
      },`,
    );
    lines.push("    topics: [],");
    lines.push("    image: undefined,");
    lines.push("    recent: false,");
    lines.push("  },");
  }

  lines.push("];");
  lines.push("");

  const dataDir = new URL("../data/", import.meta.url);
  await fs.mkdir(dataDir, { recursive: true });

  const outPath = new URL("../data/publications.generated.ts", import.meta.url);
  await fs.writeFile(outPath, lines.join("\n"), "utf8");

  console.log(
    `Wrote ${publications.length} publications to ${outPath.pathname}`,
  );
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
