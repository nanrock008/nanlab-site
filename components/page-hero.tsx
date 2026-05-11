import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <h1>{title}</h1>
      <p className="page-hero-subtitle">{subtitle}</p>
      {children}
    </section>
  );
}
