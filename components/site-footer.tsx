import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

import Image from "next/image";
import Link from "next/link";

const footerLogoDirectory = join(process.cwd(), "public", "footer");
const footerLogoFile = existsSync(footerLogoDirectory)
  ? readdirSync(footerLogoDirectory).find(
      (file) => file === "footer-logo-cropped.png",
    ) ||
    readdirSync(footerLogoDirectory).find((file) =>
      /\.(png|jpg|jpeg|webp|svg)$/i.test(file),
    )
  : undefined;
const footerLogoPath = footerLogoFile
  ? encodeURI(`/footer/${footerLogoFile}`)
  : null;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-block">
          <div className="footer-title">Nan Lab</div>
          <div className="footer-text">
            School of Integrated Circuits, Tsinghua University
          </div>
          <div className="footer-text">
            <a
              className="footer-inline-link"
              href="mailto:nantianxiang@mail.tsinghua.edu.cn"
            >
              nantianxiang@mail.tsinghua.edu.cn
            </a>
          </div>
        </div>

        <div className="footer-right footer-block">
          {footerLogoPath ? (
            <div className="footer-logo-wrap">
              <Link
                href="https://www.sic.tsinghua.edu.cn"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit the School of Integrated Circuits, Tsinghua University"
                className="footer-logo-link"
              >
                <Image
                  src={footerLogoPath}
                  alt="School of Integrated Circuits, Tsinghua University"
                  width={6441}
                  height={991}
                  sizes="(max-width: 640px) 70vw, 24rem"
                  className="footer-logo-image"
                  unoptimized
                />
              </Link>
            </div>
          ) : (
            <div className="footer-logo-note">
              Add the school logo image to `public/footer/tsinghua-sic-logo.png`
              and it will appear here automatically.
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
