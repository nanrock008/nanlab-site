import { Suspense } from "react";

import { PageHero } from "@/components/page-hero";
import { SearchResults } from "@/components/search-results";

export default function SearchPage() {
  return (
    <div className="page-wrap">
      <PageHero
        title="Search"
        subtitle="Search across the main pages of the Nan Lab website."
      />

      <Suspense
        fallback={
          <section className="content-section search-section">
            <p className="search-empty">Loading search results...</p>
          </section>
        }
      >
        <SearchResults />
      </Suspense>
    </div>
  );
}
