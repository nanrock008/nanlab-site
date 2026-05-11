"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Quasiparticle = "phonon" | "spin" | "magnon";

type ResearchDirection = {
  id: string;
  title: string;
  activeParticles: Quasiparticle[];
  imageLabel: string;
  image?: string;
  imageAspectRatio?: string;
  description: string[];
};

const quasiparticles: Array<{
  id: Quasiparticle;
  label: string;
  image: string;
}> = [
  { id: "phonon", label: "Phonon", image: "/research-icons/phonon.png" },
  { id: "spin", label: "Spin", image: "/research-icons/spin.png" },
  { id: "magnon", label: "Magnon", image: "/research-icons/magnon.png" },
];

const researchDirections: ResearchDirection[] = [
  {
    id: "integrated-piezoelectrics",
    title: "Integrated piezoelectrics",
    activeParticles: ["phonon"],
    imageLabel: "Piezoelectric acoustic platforms",
    image: "/research-directions/integrated-piezoelectrics.png",
    imageAspectRatio: "3066 / 2475",
    description: [
      "We develop integrated piezoelectric microsystems for chip-scale ultrasound technologies, focusing on piezoelectric micromachined ultrasonic transducers (PMUTs). Our research covers thin-film piezoelectric materials, MEMS device design, wafer-level fabrication, array architecture, advanced packaging, and system integration.",
      "Built on a stable 8-inch wafer platform, our PMUT process enables high-yield, highly uniform, and manufacturable devices approaching production-level implementation. By combining CMOS-compatible MEMS fabrication with advanced packaging, we further develop three-dimensionally integrated MEMS-CMOS ultrasound systems for imaging, sensing, and detection applications.",
    ],
  },
  {
    id: "integrated-magnetoelectrics",
    title: "Integrated magnetoelectrics",
    activeParticles: ["phonon", "spin"],
    imageLabel: "Magnetoelectric transduction",
    image: "/research-directions/Magnetoelectric.png",
    imageAspectRatio: "3423 / 1613",
    description: [
      "We develop chip-scale magnetoelectric devices that couple acoustic, electric, and magnetic domains for compact RF, sensing, and spintronic applications. By integrating magnetoelectric materials with MEMS platforms, we use acoustic waves and mechanical vibrations to control electromagnetic radiation, magnetic resonance, and spin textures.",
      "Our representative devices include acoustically driven antennas, magnetically tunable acoustic resonators, and acoustic-wave-controlled magnetic skyrmions. These platforms enable electrically small antennas, reconfigurable RF components, and acoustic control of topological magnetic textures, establishing a pathway toward miniaturized, energy-efficient, and multifunctional magnetoelectric systems.",
    ],
  },
  {
    id: "spintronics-magnonics",
    title: "Spintronics and magnonics",
    activeParticles: ["spin", "magnon"],
    imageLabel: "Spin and magnon transport",
    image: "/research-directions/spintronics.png",
    imageAspectRatio: "4070 / 1485",
    description: [
      "We develop efficient spin-source materials for low-power spin-orbit torque devices, focusing on enhanced charge-to-spin conversion and field-free deterministic magnetization switching. We also explore new SOT device architectures and collaborate with MRAM foundry partners to transfer and integrate these processes into practical device platforms.",
      "In magnonics, we study the mechanisms of magnon transport in magnetic and antiferromagnetic systems, and use multiferroic and other emerging materials to build voltage-controlled magnonic devices. Together, these efforts advance scalable spintronic and magnonic platforms for nonvolatile memory, logic-in-memory, and wave-based information processing.",
    ],
  },
  {
    id: "mram-ai",
    title: "MRAM for AI and AI for MRAM",
    activeParticles: ["spin"],
    imageLabel: "Memory and intelligent hardware",
    image: "/research-directions/MRAM.png",
    imageAspectRatio: "6614 / 6850",
    description: [
      "We develop MRAM-based computing systems for energy-efficient AI hardware, with a focus on compute-in-memory architectures. By leveraging the nonvolatility, high speed, and CMOS compatibility of MRAM, our research explores how spintronic memory can reduce data movement and improve latency, energy efficiency, area efficiency, and reliability for AI workloads.",
      "In parallel, we investigate how AI can accelerate the design and optimization of MRAM technologies. We use data-driven modeling, large language models, and intelligent agents to support device modeling, circuit design, architecture exploration, and system-level co-optimization. This bidirectional research theme, MRAM for AI and AI for MRAM, aims to enable the synergistic development of emerging memory technologies and next-generation AI hardware.",
    ],
  },
];

export function ResearchExplorer() {
  const [activeId, setActiveId] = useState(researchDirections[0].id);
  const [missingImages, setMissingImages] = useState<Set<string>>(new Set());
  const activeDirection = useMemo(
    () =>
      researchDirections.find((direction) => direction.id === activeId) ||
      researchDirections[0],
    [activeId],
  );
  const activeImage =
    activeDirection.image && !missingImages.has(activeDirection.image)
      ? activeDirection.image
      : undefined;

  function handleMissingImage(src: string) {
    setMissingImages((current) => {
      const next = new Set(current);
      next.add(src);
      return next;
    });
  }

  return (
    <section className="page-wrap research-page">
      <div className="research-direction-layout">
        <aside className="research-sidebar">
          <div className="research-sidebar-sticky">
            <header className="research-sidebar-header">
              <h1>Research</h1>
              <p>
                Beyond-CMOS information devices based on quasiparticle-mediated
                information transduction and manipulation.
              </p>
            </header>

            <nav
              className="research-direction-nav"
              aria-label="Research directions"
            >
              {researchDirections.map((direction) => (
                <button
                  key={direction.id}
                  type="button"
                  className={`research-direction-tab${
                    activeDirection.id === direction.id ? " is-active" : ""
                  }`}
                  onClick={() => setActiveId(direction.id)}
                >
                  {direction.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <article className="research-direction-panel">
          <p className="research-overview-copy">
            Our research explores how elementary excitations such as phonons,
            spins, and magnons can be used to manipulate, transmit, and process
            information in emerging devices and integrated systems.
          </p>

          <div className="research-particle-row" aria-label="Quasiparticles">
            {quasiparticles.map((particle) => {
              const isActive = activeDirection.activeParticles.includes(
                particle.id,
              );
              const imageIsMissing = missingImages.has(particle.image);

              return (
                <div
                  key={particle.id}
                  className={`research-particle${isActive ? " is-active" : ""}`}
                >
                  <div className="research-particle-icon" aria-hidden="true">
                    {imageIsMissing ? (
                      <span className="research-particle-fallback">
                        {particle.label.slice(0, 2)}
                      </span>
                    ) : (
                      <Image
                        src={particle.image}
                        alt=""
                        width={96}
                        height={72}
                        className="research-particle-image"
                        onError={() => handleMissingImage(particle.image)}
                        unoptimized
                      />
                    )}
                  </div>
                  <span>{particle.label}</span>
                </div>
              );
            })}
          </div>

          <div
            className={`research-direction-visual${
              activeImage ? " has-image" : ""
            }`}
            style={{
              aspectRatio:
                activeImage && activeDirection.imageAspectRatio
                  ? activeDirection.imageAspectRatio
                  : undefined,
            }}
          >
            {activeImage ? (
              <Image
                src={activeImage}
                alt={activeDirection.title}
                fill
                sizes="(max-width: 980px) 100vw, 900px"
                className="research-direction-image"
                onError={() => handleMissingImage(activeImage)}
                unoptimized
              />
            ) : (
              <div className="research-direction-visual-inner">
                <span>{activeDirection.imageLabel}</span>
              </div>
            )}
          </div>

          <div className="research-direction-copy">
            <h2>{activeDirection.title}</h2>
            {activeDirection.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
