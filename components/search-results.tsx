"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { searchEntries } from "@/data/site-search";

export function SearchResults() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const query = q.trim().toLowerCase();

  const results = query
    ? searchEntries.filter((entry) => {
        const haystack = [
          entry.title,
          entry.description,
          ...entry.keywords,
        ].join(" ");

        return haystack.toLowerCase().includes(query);
      })
    : searchEntries;

  return (
    <section className="content-section search-section">
      {results.length > 0 ? (
        <div className="search-results">
          {results.map((result) => (
            <Link key={result.href} href={result.href} className="search-item">
              <p className="search-item-label">{result.title}</p>
              <p>{result.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="search-empty">
          No results found. Try another keyword like <span>spintronics</span>,{" "}
          <span>people</span>, or <span>publications</span>.
        </p>
      )}
    </section>
  );
}
