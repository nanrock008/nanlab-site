"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type GalleryEventViewProps = {
  title: string;
  images: string[];
};

export function GalleryEventView({
  title,
  images,
}: GalleryEventViewProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage = useMemo(
    () => (activeIndex === null ? null : images[activeIndex]),
    [activeIndex, images],
  );

  if (!images.length) {
    return (
      <div className="gallery-empty-state">
        <p>No photos have been added to this event yet.</p>
      </div>
    );
  }

  return (
    <>
      <div className="event-gallery-grid">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className="event-gallery-item"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open image ${index + 1} from ${title}`}
          >
            <Image
              src={image}
              alt={`${title} photo ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
              className="event-gallery-image"
              unoptimized
            />
          </button>
        ))}
      </div>

      {activeImage && activeIndex !== null ? (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setActiveIndex(null)}
            aria-label="Close image"
          >
            Close
          </button>
          <div
            className="image-lightbox-frame"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage}
              alt={`${title} enlarged`}
              width={1600}
              height={1200}
              className="image-lightbox-image"
              unoptimized
            />
            <p className="image-lightbox-caption">
              {title} · {activeIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
