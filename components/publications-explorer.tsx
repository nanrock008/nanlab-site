"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { PublicationRecord } from "@/data/publications";

type PublicationsExplorerProps = {
  publications: PublicationRecord[];
  recentPublications: PublicationRecord[];
  stats: {
    totalPublications: number;
    scholarUrl: string;
    orcidUrl: string;
  };
};

const topicTree = {
  Spintronics: [
    "Spin-orbit torque",
    "Voltage-control magnetization",
    "Magnon transport",
    "Compute-in-memory",
  ],
  MEMS: ["Acoustic antenna", "Magnetic sensor"],
} as const;

function ScholarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4L3 8.5L12 13L21 8.5L12 4Z"
        fill="currentColor"
      />
      <path
        d="M6.5 11.2V15.2C6.5 17.4 9 19 12 19C15 19 17.5 17.4 17.5 15.2V11.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function OrcidIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M9.15 8.3H7.9V15.7H9.15V8.3ZM8.53 6.55C8.08 6.55 7.72 6.91 7.72 7.36C7.72 7.82 8.08 8.18 8.53 8.18C8.99 8.18 9.35 7.82 9.35 7.36C9.35 6.91 8.99 6.55 8.53 6.55ZM16.15 12.32C16.15 10.14 14.73 8.76 12.72 8.76H10.18V15.7H12.65C14.71 15.7 16.15 14.36 16.15 12.32ZM14.83 12.34C14.83 13.73 13.96 14.58 12.63 14.58H11.45V9.88H12.66C13.98 9.88 14.83 10.82 14.83 12.34Z"
        fill="#fff"
      />
    </svg>
  );
}

function formatCitationMeta(publication: PublicationRecord) {
  const parts = [publication.journal];

  if (publication.volume) parts.push(`Vol. ${publication.volume}`);
  if (publication.issue) parts.push(`No. ${publication.issue}`);
  if (publication.pages) parts.push(`pp. ${publication.pages}`);
  if (publication.year) parts.push(String(publication.year));

  return parts.filter(Boolean).join(" · ");
}

function formatRecentCitationMeta(publication: PublicationRecord) {
  const parts = [publication.journal];

  if (publication.volume) parts.push(`Vol. ${publication.volume}`);
  if (publication.pages) parts.push(`pp. ${publication.pages}`);
  if (publication.year) parts.push(String(publication.year));

  return parts.filter(Boolean).join(" · ");
}

function buildYearFilters(publications: PublicationRecord[]) {
  const years = Array.from(
    new Set(
      publications
        .map((publication) => publication.year)
        .filter((year): year is number => typeof year === "number"),
    ),
  )
    .sort((a, b) => b - a)
    .slice(0, 5)
    .map(String);

  return ["All", ...years, "Earlier"];
}

function matchesYear(publication: PublicationRecord, yearFilter: string) {
  if (yearFilter === "All") return true;
  if (yearFilter === "Earlier") {
    return typeof publication.year === "number" && publication.year <= 2021;
  }
  return String(publication.year ?? "") === yearFilter;
}

function truncate(value: string, maxLength: number) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength).trim()}...`;
}

function formatPublicationDate(value?: string) {
  if (!value) return undefined;

  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const date = new Date(`${value}T00:00:00`);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  }

  if (/^\d{4}-\d{2}$/.test(value)) {
    const date = new Date(`${value}-01T00:00:00`);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
    }).format(date);
  }

  return value;
}

export function PublicationsExplorer({
  publications,
  recentPublications,
  stats,
}: PublicationsExplorerProps) {
  const [selectedPrimaryTopic, setSelectedPrimaryTopic] = useState<
    keyof typeof topicTree | "All"
  >("All");
  const [selectedSecondaryTopic, setSelectedSecondaryTopic] = useState("All");
  const yearFilters = useMemo(() => buildYearFilters(publications), [publications]);
  const [selectedYear, setSelectedYear] = useState("All");
  const [animatedCount, setAnimatedCount] = useState(stats.totalPublications);
  const [activeImage, setActiveImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    const durationMs = 900;
    const frameMs = 16;
    const steps = Math.max(1, Math.floor(durationMs / frameMs));
    let currentStep = 0;

    let animationTimer: number | undefined;
    const resetTimer = window.setTimeout(() => {
      setAnimatedCount(0);

      animationTimer = window.setInterval(() => {
        currentStep += 1;
        const progress = Math.min(currentStep / steps, 1);
        setAnimatedCount(Math.round(stats.totalPublications * progress));

        if (progress >= 1 && animationTimer) {
          window.clearInterval(animationTimer);
        }
      }, frameMs);
    }, 0);

    return () => {
      window.clearTimeout(resetTimer);
      if (animationTimer) window.clearInterval(animationTimer);
    };
  }, [stats.totalPublications]);

  const secondaryOptions =
    selectedPrimaryTopic === "All" ? [] : topicTree[selectedPrimaryTopic];

  const filtered = useMemo(
    () =>
      publications.filter((publication) => {
        const primaryTopicMatch =
          selectedPrimaryTopic === "All" ||
          publication.topics.includes(selectedPrimaryTopic);
        const secondaryTopicMatch =
          selectedSecondaryTopic === "All" ||
          publication.keywords.some(
            (keyword) =>
              keyword.toLowerCase() === selectedSecondaryTopic.toLowerCase(),
          );
        const yearMatch = matchesYear(publication, selectedYear);
        return primaryTopicMatch && secondaryTopicMatch && yearMatch;
      }),
    [publications, selectedPrimaryTopic, selectedSecondaryTopic, selectedYear],
  );

  const grouped = useMemo(() => {
    const groups = new Map<string, PublicationRecord[]>();

    for (const publication of filtered) {
      const yearLabel = publication.year ? String(publication.year) : "Unknown";
      const current = groups.get(yearLabel) || [];
      current.push(publication);
      groups.set(yearLabel, current);
    }

    return [...groups.entries()];
  }, [filtered]);

  return (
    <>
      <section className="publications-topbar">
        <div className="publications-count">
          <span className="publications-count-number">{animatedCount}</span>
          <span className="publications-count-label">publications</span>
        </div>
        <div className="profile-icon-links" aria-label="Profiles">
          <a
            href={stats.scholarUrl}
            target="_blank"
            rel="noreferrer"
            className="profile-icon-link"
            title="Google Scholar"
            aria-label="Google Scholar"
          >
            <ScholarIcon />
          </a>
          <a
            href={stats.orcidUrl}
            target="_blank"
            rel="noreferrer"
            className="profile-icon-link"
            title="ORCID"
            aria-label="ORCID"
          >
            <OrcidIcon />
          </a>
        </div>
      </section>

      <section className="content-section">
        <h2>Recent Publications</h2>
        <div className="recent-gallery">
          {recentPublications.map((publication) => {
            const href =
              publication.url ||
              (publication.doi ? `https://doi.org/${publication.doi}` : undefined);
            const imageSrc = publication.image
              ? `${publication.image}?v=${publication.imageVersion || "1"}`
              : null;

            return (
              <article key={publication.id} className="recent-gallery-card">
                <button
                  type="button"
                  className="recent-gallery-media recent-gallery-button"
                  onClick={() => {
                    if (imageSrc) {
                      setActiveImage({ src: imageSrc, title: publication.title });
                    }
                  }}
                  aria-label={
                    imageSrc
                      ? `Open image for ${publication.title}`
                      : `No image for ${publication.title}`
                  }
                >
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={publication.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      className="recent-gallery-image"
                      unoptimized
                    />
                  ) : (
                    <div className="recent-gallery-placeholder">
                      <span>{publication.journal}</span>
                      <strong>{publication.year ?? "Recent"}</strong>
                    </div>
                  )}
                </button>
                <div className="recent-gallery-body">
                  <h3 className="recent-gallery-title">
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer">
                        {publication.title}
                      </a>
                    ) : (
                      publication.title
                    )}
                  </h3>
                  <p className="recent-gallery-summary">
                    {publication.summary ||
                      truncate(
                        publication.abstract ||
                          formatCitationMeta(publication),
                        220,
                      )}
                  </p>
                  {publication.publicationDate ? (
                    <p className="recent-gallery-date">
                      {formatPublicationDate(publication.publicationDate)}
                    </p>
                  ) : null}
                  <p className="recent-gallery-citation">
                    {formatRecentCitationMeta(publication)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {activeImage ? (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close image"
          >
            Close
          </button>
          <div
            className="image-lightbox-frame"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.title}
              width={1600}
              height={1000}
              className="image-lightbox-image"
              unoptimized
            />
            <p className="image-lightbox-caption">{activeImage.title}</p>
          </div>
        </div>
      ) : null}

      <section className="content-section filters-section">
        <div className="filters-topic-panel">
          <h2>Topics</h2>
          <div className="filter-chip-row">
            <button
              type="button"
              className={`filter-chip${selectedPrimaryTopic === "All" ? " is-active" : ""}`}
              onClick={() => {
                setSelectedPrimaryTopic("All");
                setSelectedSecondaryTopic("All");
              }}
            >
              All
            </button>
            {Object.keys(topicTree).map((topic) => (
              <button
                key={topic}
                type="button"
                className={`filter-chip${selectedPrimaryTopic === topic ? " is-active" : ""}`}
                onClick={() => {
                  setSelectedPrimaryTopic(topic as keyof typeof topicTree);
                  setSelectedSecondaryTopic("All");
                }}
              >
                {topic}
              </button>
            ))}
          </div>

          {secondaryOptions.length > 0 ? (
            <div className="subtopic-row">
              <button
                type="button"
                className={`subtopic-chip${selectedSecondaryTopic === "All" ? " is-active" : ""}`}
                onClick={() => setSelectedSecondaryTopic("All")}
              >
                All
              </button>
              {secondaryOptions.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  className={`subtopic-chip${selectedSecondaryTopic === topic ? " is-active" : ""}`}
                  onClick={() => setSelectedSecondaryTopic(topic)}
                >
                  {topic}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="content-section">
        <h2>All Publications</h2>

        <div className="all-publications-layout">
          <aside className="filters-year-panel">
            <h2>Years</h2>
            <div className="year-filter-column">
              {yearFilters.map((year) => (
                <button
                  key={year}
                  type="button"
                  className={`year-filter-button${selectedYear === year ? " is-active" : ""}`}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </aside>

          <div className="year-group-list">
            {grouped.map(([year, items]) => (
              <section key={year} className="year-group">
                <h3 className="year-group-heading">{year}</h3>
                <div className="publication-list">
                  {items.map((publication) => {
                    const href =
                      publication.url ||
                      (publication.doi ? `https://doi.org/${publication.doi}` : undefined);

                    return (
                      <article key={publication.id} className="publication-item">
                        <p className="publication-authors">
                          {publication.displayAuthors}
                        </p>
                        <h3 className="publication-title">
                          {href ? (
                            <a href={href} target="_blank" rel="noreferrer">
                              {publication.title}
                            </a>
                          ) : (
                            publication.title
                          )}
                        </h3>
                        <p className="publication-meta">
                          {formatCitationMeta(publication)}
                        </p>
                        {publication.pdfUrl || publication.newsUrl ? (
                          <div className="publication-link-row">
                            {publication.pdfUrl ? (
                              <a
                                href={publication.pdfUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-link"
                              >
                                PDF
                              </a>
                            ) : null}
                            {publication.newsUrl ? (
                              <a
                                href={publication.newsUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-link"
                              >
                                News
                              </a>
                            ) : null}
                          </div>
                        ) : null}
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
