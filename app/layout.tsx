import "./globals.css";
import type { Metadata } from "next";
import { BackToTopButton } from "@/components/back-to-top-button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Nan Lab",
  description: "Nan Lab at Tsinghua University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem("theme");
                const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light";
                document.documentElement.dataset.theme = storedTheme || systemTheme;
              } catch (error) {
                document.documentElement.dataset.theme = "light";
              }
            `,
          }}
        />
        <div className="site-shell">
          <SiteHeader />
          <main className="site-main">{children}</main>
          <BackToTopButton />
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
