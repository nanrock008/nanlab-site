import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Nan Lab",
  description: "Nan Lab at Tsinghua University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <header style={{ borderBottom: "1px solid #ddd", padding: "16px 40px" }}>
          <nav style={{ display: "flex", gap: "24px" }}>
            <Link href="/">Home</Link>
            <Link href="/people">People</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}