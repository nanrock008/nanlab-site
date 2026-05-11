import Link from "next/link";
import { notFound } from "next/navigation";
import { GalleryEventView } from "@/components/gallery-event-view";
import { PageHero } from "@/components/page-hero";
import { galleryEvents, getGalleryEvent } from "@/data/gallery-events";
import { getGalleryAssets } from "@/lib/gallery";

export async function generateStaticParams() {
  return galleryEvents.map((event) => ({ slug: event.slug }));
}

export default async function GalleryEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getGalleryEvent(slug);

  if (!event) {
    notFound();
  }

  const assets = getGalleryAssets(slug);

  return (
    <div className="page-wrap">
      <PageHero title={event.title} subtitle={event.description}>
        <p className="gallery-detail-eyebrow">{event.eyebrow}</p>
      </PageHero>

      <section className="content-section">
        <div className="gallery-detail-header">
          <div className="gallery-detail-meta">
            <span>{event.date}</span>
            <span>{assets.imageCount} photos</span>
          </div>
          <Link href="/gallery" className="inline-link">
            Back to all events
          </Link>
        </div>

        <GalleryEventView title={event.title} images={assets.galleryImages} />
      </section>
    </div>
  );
}
