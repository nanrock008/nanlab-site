#!/usr/bin/env node

import fs from "fs/promises";
import vm from "vm";

const GENERATED_PATH = new URL("../data/publications.generated.ts", import.meta.url);
const OVERRIDES_PATH = new URL("../data/publication-overrides.ts", import.meta.url);

const taxonomy = {
  Spintronics: {
    keywords: {
      "Spin-orbit torque": [
        "spin-orbit torque",
        "sot",
        "spin hall",
        "magnetization switching",
      ],
      "Voltage-control magnetization": [
        "electric-field",
        "voltage",
        "ferroelectric",
        "ferrimagnetic",
        "multiferroic",
      ],
      "Magnon transport": [
        "magnon",
        "spin current",
        "antiferromagnetic",
      ],
      "Compute-in-memory": [
        "compute-in-memory",
        "in-memory",
        "logic-in-memory",
        "neural network",
        "synaptic",
      ],
    },
  },
  MEMS: {
    keywords: {
      "Acoustic antenna": [
        "antenna",
        "acoustic",
        "piezoelectric",
        "surface acoustic wave",
        "magnetoelectric antenna",
      ],
      "Magnetic sensor": [
        "sensor",
        "gmr",
        "magnetic field",
        "magnetometer",
      ],
    },
  },
};

function evaluateTsModule(source, exportsToReturn) {
  const executable = source
    .replace(/export type[\s\S]*?};\n/g, "")
    .replace(/type PublicationOverride = [\s\S]*?};\n\n/g, "")
    .replace(/export const /g, "const ")
    .replace(/const\s+([A-Za-z0-9_]+)\s*:\s*[^=]+=/g, "const $1 =")
    .replace(/\s+as const;/g, ";")
    .replace(/^(\s*)(10\.[^:\n]+):/gm, '$1"$2":');

  const wrapped = `${executable}\n;({ ${exportsToReturn.join(", ")} })`;
  return vm.runInNewContext(wrapped, {});
}

function normalizeText(value) {
  return String(value || "").toLowerCase();
}

function classifyPublication(publication) {
  const haystack = normalizeText(
    `${publication.title} ${publication.abstract || ""} ${publication.journal}`,
  );

  let bestPrimary = null;
  let bestSecondary = [];

  for (const [primary, config] of Object.entries(taxonomy)) {
    const secondaryMatches = [];

    for (const [secondary, cues] of Object.entries(config.keywords)) {
      const matched = cues.some((cue) => haystack.includes(cue));
      if (matched) secondaryMatches.push(secondary);
    }

    if (secondaryMatches.length > bestSecondary.length) {
      bestPrimary = primary;
      bestSecondary = secondaryMatches;
    }
  }

  return {
    topics: bestPrimary ? [bestPrimary] : [],
    keywords: bestSecondary,
  };
}

function serialize(value, indent = 2) {
  return JSON.stringify(value, null, indent);
}

async function run() {
  const generatedSource = await fs.readFile(GENERATED_PATH, "utf8");
  const overridesSource = await fs.readFile(OVERRIDES_PATH, "utf8");

  const { generatedPublications } = evaluateTsModule(generatedSource, [
    "generatedPublications",
  ]);
  const { publicationProfile, manualPublications, publicationOverrides } =
    evaluateTsModule(overridesSource, [
      "publicationProfile",
      "manualPublications",
      "publicationOverrides",
    ]);

  const nextOverrides = { ...publicationOverrides };

  for (const publication of generatedPublications) {
    if (!publication.doi) continue;
    const doi = publication.doi.toLowerCase();
    const existing = nextOverrides[doi] || {};
    const classified = classifyPublication(publication);

    nextOverrides[doi] = {
      ...existing,
      topics:
        existing.topics && existing.topics.length > 0
          ? existing.topics
          : classified.topics,
      keywords:
        existing.keywords && existing.keywords.length > 0
          ? existing.keywords
          : classified.keywords,
    };
  }

  const output = `export const publicationProfile = ${serialize(
    publicationProfile,
  )};\n\n` +
    `type PublicationOverride = {\n` +
    `  topics?: string[];\n` +
    `  keywords?: string[];\n` +
    `  pdfUrl?: string;\n` +
    `  newsUrl?: string;\n` +
    `  image?: string;\n` +
    `  recent?: boolean;\n` +
    `  summary?: string;\n` +
    `  category?: string;\n` +
    `  publicationDate?: string;\n` +
    `};\n\n` +
    `export const manualPublications = ${serialize(manualPublications)} as const;\n\n` +
    `export const publicationOverrides: Record<string, PublicationOverride> = ${serialize(
      nextOverrides,
    )};\n`;

  await fs.writeFile(OVERRIDES_PATH, output, "utf8");
  console.log(`Updated topic overrides for ${generatedPublications.length} publications.`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
