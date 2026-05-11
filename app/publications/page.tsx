import { PageHero } from "@/components/page-hero";
import { PublicationsExplorer } from "@/components/publications-explorer";
import {
  publications,
  publicationStats,
  recentPublications,
} from "@/data/publications";

export default function PublicationsPage() {
  return (
    <div className="page-wrap">
      <PageHero
        title="Publications"
        subtitle="Selected journal articles and recent highlights from the Nan Lab."
      />

      <PublicationsExplorer
        publications={publications}
        recentPublications={recentPublications}
        stats={publicationStats}
      />
    </div>
  );
}
