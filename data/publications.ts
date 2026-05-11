import {
  generatedPublications,
  type Publication as GeneratedPublication,
} from "@/data/publications.generated";
import {
  manualPublications,
  publicationOverrides,
  publicationProfile,
} from "@/data/publication-overrides";

export type PublicationRecord = GeneratedPublication & {
  id: string;
  title: string;
  abstract?: string;
  topics: string[];
  keywords: string[];
  pdfUrl?: string;
  newsUrl?: string;
  summary?: string;
  category?: string;
  publicationDate?: string;
  imageVersion?: string;
  displayAuthors: string;
};

const ENTITY_MAP: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
};

const SUBSCRIPT_MAP: Record<string, string> = {
  "0": "₀",
  "1": "₁",
  "2": "₂",
  "3": "₃",
  "4": "₄",
  "5": "₅",
  "6": "₆",
  "7": "₇",
  "8": "₈",
  "9": "₉",
  "+": "₊",
  "-": "₋",
  "=": "₌",
  "(": "₍",
  ")": "₎",
};

const SUPERSCRIPT_MAP: Record<string, string> = {
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
  "+": "⁺",
  "-": "⁻",
  "=": "⁼",
  "(": "⁽",
  ")": "⁾",
};

function decodeEntities(value: string) {
  return value.replace(
    /&amp;|&lt;|&gt;|&quot;|&#39;|&apos;|&nbsp;/g,
    (match) => ENTITY_MAP[match] || match,
  );
}

function mapCharacters(value: string, mapper: Record<string, string>) {
  return value
    .split("")
    .map((character) => mapper[character] || character)
    .join("");
}

function stripMarkup(value?: string) {
  if (!value) return undefined;

  const withSubscripts = value
    .replace(
      /<sub>([\s\S]*?)<\/sub>/gi,
      (_, content: string) => mapCharacters(decodeEntities(content), SUBSCRIPT_MAP),
    )
    .replace(
      /<sup>([\s\S]*?)<\/sup>/gi,
      (_, content: string) =>
        mapCharacters(decodeEntities(content), SUPERSCRIPT_MAP),
    );

  const flattenedMath = withSubscripts
    .replace(/<\/?mml:[^>]+>/g, "")
    .replace(/<\/?jats:[^>]+>/g, "")
    .replace(/<\/?i>/g, "")
    .replace(/<\/?b>/g, "")
    .replace(/<\/?em>/g, "")
    .replace(/<\/?strong>/g, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ");

  const clean = decodeEntities(flattenedMath)
    .replace(/^Abstract\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();

  return clean || undefined;
}

function inferTopics(publication: GeneratedPublication) {
  const haystack = `${publication.title} ${publication.journal}`.toLowerCase();
  const topics = new Set<string>();

  if (haystack.includes("spin") || haystack.includes("magnetic")) {
    topics.add("Spintronics");
  }
  if (
    haystack.includes("magnetoelectric") ||
    haystack.includes("piezoelectric")
  ) {
    topics.add("Magnetoelectrics");
  }
  if (
    haystack.includes("acoustic") ||
    haystack.includes("wave") ||
    haystack.includes("ultrasonic")
  ) {
    topics.add("Acoustics");
  }
  if (haystack.includes("antenna")) {
    topics.add("Antennas");
  }
  if (haystack.includes("sensor")) {
    topics.add("Sensors");
  }
  if (haystack.includes("mems") || haystack.includes("nems")) {
    topics.add("MEMS");
  }
  if (haystack.includes("neural") || haystack.includes("synaptic")) {
    topics.add("AI Hardware");
  }
  if (
    haystack.includes("material") ||
    haystack.includes("oxide") ||
    haystack.includes("alloy")
  ) {
    topics.add("Materials");
  }
  if (haystack.includes("skyrmion")) {
    topics.add("Skyrmions");
  }

  return [...topics];
}

function inferKeywords(publication: GeneratedPublication, topics: string[]) {
  const haystack = `${publication.title} ${publication.journal}`.toLowerCase();
  const keywords = new Set<string>(topics);

  if (haystack.includes("spin-orbit")) keywords.add("Spin-orbit torque");
  if (haystack.includes("magnetic tunnel junction")) {
    keywords.add("magnetic tunnel junction");
  }
  if (haystack.includes("skyrmion")) keywords.add("skyrmion");
  if (haystack.includes("surface acoustic wave")) {
    keywords.add("surface acoustic wave");
  }
  if (haystack.includes("ultrasonic")) keywords.add("ultrasonic");
  if (haystack.includes("antenna")) keywords.add("antenna");
  if (haystack.includes("sensor")) keywords.add("sensor");
  if (haystack.includes("gmr")) keywords.add("GMR");
  if (haystack.includes("magnetoelectric")) keywords.add("magnetoelectric");
  if (haystack.includes("piezoelectric")) keywords.add("piezoelectric");
  if (haystack.includes("ferrimagnetic")) keywords.add("ferrimagnetic");
  if (haystack.includes("oxide")) keywords.add("oxide");
  if (haystack.includes("neural")) keywords.add("neural network");
  if (haystack.includes("mems")) keywords.add("MEMS");
  if (haystack.includes("nems")) keywords.add("NEMS");
  if (
    haystack.includes("electric-field") ||
    haystack.includes("voltage") ||
    haystack.includes("ferroelectric")
  ) {
    keywords.add("Voltage-control magnetization");
  }
  if (haystack.includes("magnon")) {
    keywords.add("Magnon transport");
  }
  if (
    haystack.includes("compute-in-memory") ||
    haystack.includes("logic-in-memory") ||
    haystack.includes("in-memory")
  ) {
    keywords.add("Compute-in-memory");
  }
  if (
    haystack.includes("antenna") &&
    (haystack.includes("acoustic") ||
      haystack.includes("surface acoustic wave") ||
      haystack.includes("magnetoelectric"))
  ) {
    keywords.add("Acoustic antenna");
  }
  if (
    haystack.includes("sensor") ||
    haystack.includes("gmr") ||
    haystack.includes("magnetic field sensor")
  ) {
    keywords.add("Magnetic sensor");
  }

  return [...keywords];
}

function buildOverrideKey(publication: GeneratedPublication) {
  if (publication.doi) return publication.doi.toLowerCase();
  return `${publication.year ?? "unknown"}:${stripMarkup(publication.title)}`;
}

function normalizeAuthors(authors: string[]) {
  if (authors.length === 0) return "Author list unavailable";
  return authors.join(", ");
}

function normalizePublication(publication: GeneratedPublication, index: number) {
  const overrideKey = buildOverrideKey(publication);
  const override = publicationOverrides[overrideKey] || {};
  const title = stripMarkup(publication.title) || "Untitled";
  const abstract = stripMarkup(publication.abstract);
  const inferredTopics = inferTopics(publication) || [];
  const topics =
    override.topics && override.topics.length > 0
      ? override.topics
      : inferredTopics;
  const inferredKeywords = inferKeywords(publication, topics) || [];
  const keywords =
    override.keywords && override.keywords.length > 0
      ? override.keywords
      : inferredKeywords;

  return {
    ...publication,
    id: `${publication.year ?? "unknown"}-${index}-${title}`,
    title,
    abstract,
    topics,
    keywords,
    image: override.image || publication.image,
    pdfUrl: override.pdfUrl,
    newsUrl: override.newsUrl,
    recent: override.recent ?? publication.recent ?? false,
    summary: override.summary,
    category: override.category,
    publicationDate: override.publicationDate,
    imageVersion: override.imageVersion,
    displayAuthors: normalizeAuthors(publication.authors),
  } satisfies PublicationRecord;
}

const mergedPublications = [...generatedPublications];

for (const publication of manualPublications) {
  const exists = mergedPublications.some(
    (item) => item.doi?.toLowerCase() === publication.doi.toLowerCase(),
  );

  if (!exists) {
    mergedPublications.push({
      ...publication,
      authors: [...publication.authors],
      topics: [...publication.topics],
    });
  }
}

export const publications = mergedPublications
  .map(normalizePublication)
  .sort((a, b) => {
    if (a.year && b.year && a.year !== b.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
  });

export const recentPublications = publications
  .filter((publication) => publication.recent)
  .slice(0, 3);

export const publicationStats = {
  totalPublications: publications.length,
  scholarUrl: publicationProfile.scholarUrl,
  orcidUrl: publicationProfile.orcidUrl,
};
