import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { newsItems } from "@/data/news-items";
import { getGalleryAssets } from "@/lib/gallery";

function getNewsImage(item: (typeof newsItems)[number]) {
  if (item.image) return item.image;
  const gallerySlug = item.href?.match(/^\/gallery\/([^/]+)$/)?.[1];
  return gallerySlug ? getGalleryAssets(gallerySlug).coverImage : undefined;
}

export default function NewsPage() {
  const visibleNewsItems = newsItems.slice(0, 4);

  return (
    <div className="page-wrap news-page">
      <PageHero
        title="News"
        subtitle="Updates on publications, awards, talks, and events from the Nan Lab."
      />

      <section className="content-section news-archive-section">
        <div className="news-toolbar">
          <p>{visibleNewsItems.length} latest updates</p>
          <div className="news-toolbar-actions" aria-label="News filters">
            <span>Latest first</span>
            <span>All updates</span>
          </div>
        </div>

        <div className="news-list">
          {visibleNewsItems.map((item) => {
            const image = getNewsImage(item);
            const content = (
              <>
                <div className="news-item-body">
                  <p className="news-item-category">{item.category}</p>
                  <h2>{item.title}</h2>
                  <p className="news-item-date">{item.date}</p>
                  <p className="news-item-summary">{item.summary}</p>
                </div>

                <div className="news-item-media">
                  {image ? (
                    <Image
                      src={image}
                      alt={item.title}
                      width={320}
                      height={220}
                      sizes="(max-width: 760px) 100vw, 220px"
                      className="news-item-image"
                      unoptimized
                    />
                  ) : (
                    <div className="news-item-placeholder">
                      <span>{item.category}</span>
                    </div>
                  )}
                </div>
              </>
            );

            return item.href ? (
              <Link key={`${item.title}-${item.date}`} href={item.href} className="news-item">
                {content}
              </Link>
            ) : (
              <article key={`${item.title}-${item.date}`} className="news-item">
                {content}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
