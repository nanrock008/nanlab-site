import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

const homePhotoDirectory = join(process.cwd(), "public", "home");
const homePhotoFile = existsSync(homePhotoDirectory)
  ? readdirSync(homePhotoDirectory).find((file) =>
      /\.(avif|gif|jpe?g|png|webp)$/i.test(file),
    )
  : undefined;
const homePhotoPath = homePhotoFile
  ? encodeURI(`/home/${homePhotoFile}`)
  : undefined;

export default function Home() {
  return (
    <div className="home-page">
      {homePhotoPath ? (
        <Image
          src={homePhotoPath}
          alt="Nan Lab group photo"
          width={1800}
          height={1100}
          priority
          className="home-group-photo"
          unoptimized
        />
      ) : (
        <div className="home-photo-placeholder">
          <span>NANLAB</span>
          <p>Add a group photo to public/home/</p>
        </div>
      )}

      <p className="home-statement">
        We encourage independent thinking, curiosity-driven exploration, and
        research motivated by both scientific questions and real-world
        engineering challenges. If our work resonates with your interests, we
        invite you to learn more about our research and explore opportunities to
        join us.
      </p>
    </div>
  );
}
