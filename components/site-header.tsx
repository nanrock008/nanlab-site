"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, startTransition, useState } from "react";

const navItems = [
  { href: "/research", label: "Research" },
  { href: "/people", label: "People" },
  { href: "/publications", label: "Publications" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/join", label: "Join Us" },
];

const contactLinks = {
  email: "mailto:nantianxiang@mail.tsinghua.edu.cn",
  wechat: "https://mp.weixin.qq.com/s/SLvghIsr-VAh3z-FMGb1-Q",
};

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M13.75 13.75L17 17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
      <circle
        cx="8.75"
        cy="8.75"
        r="4.75"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect
        x="2.5"
        y="4.5"
        width="15"
        height="11"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 6L10 10.25L16 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function WechatIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M8.125 4C4.742 4 2 6.246 2 9.017C2 10.647 2.946 12.095 4.414 13.027L3.708 15.5L6.374 14.19C6.931 14.307 7.518 14.367 8.125 14.367C11.508 14.367 14.25 12.12 14.25 9.35C14.25 6.58 11.508 4 8.125 4Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path
        d="M12.375 8.125C15.206 8.125 17.5 9.968 17.5 12.24C17.5 13.434 16.869 14.504 15.869 15.233L16.292 17L14.354 16.028C13.728 16.197 13.064 16.281 12.375 16.281C9.544 16.281 7.25 14.438 7.25 12.167C7.25 9.895 9.544 8.125 12.375 8.125Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <circle cx="6.65" cy="8.95" r="0.8" fill="currentColor" />
      <circle cx="9.6" cy="8.95" r="0.8" fill="currentColor" />
      <circle cx="10.95" cy="12.1" r="0.8" fill="currentColor" />
      <circle cx="13.9" cy="12.1" r="0.8" fill="currentColor" />
    </svg>
  );
}

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M13.25 2.75C10.14 3.15 7.75 5.84 7.75 9.08C7.75 12.58 10.59 15.42 14.08 15.42C15.34 15.42 16.52 15.05 17.5 14.41C16.44 16.45 14.3 17.83 11.83 17.83C8.31 17.83 5.46 14.98 5.46 11.46C5.46 7.99 8.23 5.17 11.68 5.09C12.25 4.21 12.79 3.4 13.25 2.75Z"
        fill="currentColor"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="3.1" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 2.5V4.3M10 15.7V17.5M17.5 10H15.7M4.3 10H2.5M15.3 4.7L14.05 5.95M5.95 14.05L4.7 15.3M15.3 15.3L14.05 14.05M5.95 5.95L4.7 4.7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.dataset.theme === "dark"
        ? "dark"
        : "light";
    }

    return "light";
  });

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = query.trim()
      ? `?q=${encodeURIComponent(query.trim())}`
      : "";

    startTransition(() => {
      router.push(`/search${params}`);
    });
  }

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="header-spacer" aria-hidden="true" />

        <div className="header-center">
          <Link href="/" className="site-logo">
            NANLAB
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`site-nav-link${isActive ? " is-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="header-actions">
          <form className="site-search" onSubmit={handleSearch} role="search">
            <SearchIcon />
            <input
              aria-label="Search this site"
              name="q"
              placeholder="Search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </form>

          <button
            type="button"
            className="header-icon-button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <ThemeIcon dark={theme === "dark"} />
          </button>

          <a
            className="header-icon-button"
            href={contactLinks.email}
            aria-label="Send email"
            title="Email"
          >
            <MailIcon />
          </a>

          <a
            className="header-icon-button"
            href={contactLinks.wechat}
            target="_blank"
            rel="noreferrer"
            aria-label="Open WeChat public account"
            title="WeChat Official Account"
          >
            <WechatIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
