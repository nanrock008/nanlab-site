import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { getGalleryEventCards } from "@/lib/gallery";

export default function GalleryPage() {
  const events = getGalleryEventCards();

  return (
    <div className="page-wrap gallery-page">
      <PageHero
        title="Gallery"
        subtitle="Moments from group activities, celebrations, and shared experiences across the years."
      />

      <section className="content-section">
        <div className="gallery-event-grid">
          {events.map((event) => (
            <Link
              key={event.slug}
              href={`/gallery/${event.slug}`}
              className="gallery-event-card"
            >
              <div className="gallery-event-cover">
                {event.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={event.coverImage}
                    alt={event.title}
                    className="gallery-event-cover-image"
                  />
                ) : (
                  <div className="gallery-event-placeholder">
                    <span>{event.eyebrow}</span>
                    <strong>{event.title}</strong>
                  </div>
                )}

                <div className="gallery-event-overlay">
                  <p className="gallery-event-eyebrow">{event.eyebrow}</p>
                  <h3>{event.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
