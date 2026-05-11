import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { galleryEvents } from "@/data/gallery-events";

const imagePattern = /\.(avif|gif|jpe?g|png|webp)$/i;
const coverPattern = /^cover\.(avif|gif|jpe?g|png|webp)$/i;

export type GalleryAssetSet = {
  coverImage?: string;
  galleryImages: string[];
  imageCount: number;
};

export function getGalleryAssets(slug: string): GalleryAssetSet {
  const directory = join(process.cwd(), "public", "gallery", slug);

  if (!existsSync(directory)) {
    return {
      coverImage: undefined,
      galleryImages: [],
      imageCount: 0,
    };
  }

  const files = readdirSync(directory)
    .filter((file) => imagePattern.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const coverFile = files.find((file) => coverPattern.test(file));
  const coverImage = coverFile
    ? `/gallery/${slug}/${encodeURIComponent(coverFile)}`
    : files[0]
      ? `/gallery/${slug}/${encodeURIComponent(files[0])}`
      : undefined;

  const galleryImages = files
    .filter((file) => !coverPattern.test(file))
    .map((file) => `/gallery/${slug}/${encodeURIComponent(file)}`);

  return {
    coverImage,
    galleryImages,
    imageCount: galleryImages.length,
  };
}

export function getGalleryEventCards() {
  return galleryEvents.map((event) => ({
    ...event,
    ...getGalleryAssets(event.slug),
  }));
}
