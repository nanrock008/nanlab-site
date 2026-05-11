"use client";

import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 480);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="back-to-top-button"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>
  );
}
