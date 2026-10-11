export type NewsItem = {
  title: string;
  date: string;
  category: "Publication" | "Event" | "Group" | "Award";
  summary: string;
  image?: string;
  href?: string;
};

export const newsItems: NewsItem[] = [
  {
    title: "Tianxiang Nan receives the Oxide Electronics Prize for Excellence in Research",
    date: "September 2026",
    category: "Award",
    summary: "Tianxiang Nan received the Oxide Electronics Prize for Excellence in Research at iWOE32 in Sendai, Japan, recognizing his contributions to efficient spin-orbit torque manipulation in complex oxide thin films and heterostructures.",
    image: "/news/tianxiang-iwoe-2026.jpg",
    href: "https://www3.tagen.tohoku.ac.jp/~iwoe32/prizes.html",
  },
  {
    title: "Dingsong Jiang presents at ESSERC 2026",
    date: "September 2026",
    category: "Event",
    summary: "Dingsong Jiang presented our work on a field-free spin-orbit torque device with controllable switching polarity for logic and memory applications at ESSERC 2026 in Palma de Mallorca, Spain.",
    image: "/news/dingsong-esserc-2026.jpg",
    href: "https://www.esserc2026.org",
  },
  {
    title: "Yahui Ji completes her PhD and joins CRSC",
    date: "September 2026",
    category: "Group",
    summary: "Yahui Ji completed her PhD and joined China Railway Signal & Communication Group (CRSC) as a Hardware Technology Researcher. Congratulations on her graduation and the next chapter of her career. The photo captures her doctoral dissertation defense.",
    image: "/news/yahui-ji-phd-defense-2026.jpg",
    href: "/people/#former-members",
  },
  {
    title: "Guiping Ji completes her postdoctoral appointment and joins HIKSTOR",
    date: "August 2026",
    category: "Group",
    summary: "Guiping Ji completed her postdoctoral appointment in the Nan Lab and joined HIKSTOR as an MRAM engineer. We congratulate her on this next step and wish her every success.",
    href: "/people/#former-members",
  },
  {
    title: "Polar nano-regions enable large spin Hall conductivity in metallic PtCoO2",
    date: "June 12, 2026",
    category: "Publication",
    summary: "Published in Nature Materials, our study shows how polar nano-regions improve charge-to-spin conversion in highly conductive PtCoO2, enabling spin-orbit torque switching with reduced voltage and power.",
    image: "/recent-publications/ptcoo2-feature.png",
    href: "https://www.nature.com/articles/s41563-026-02640-4",
  },
  {
    title: "Unconventional magnon-mediated spin torque enabled by ferroelectric domain engineering in multiferroic BiFeO3",
    date: "April 10, 2026",
    category: "Publication",
    summary: "Published in Nature Communications, our study demonstrates how ferroelectric domain engineering controls magnon spin polarization to enable deterministic, field-free magnetization switching.",
    image: "/recent-publications/bifeo3-feature.png",
    href: "https://www.nature.com/articles/s41467-026-71437-5",
  },
  {
    title: "New work on acoustically mediated piezoelectric antennas",
    date: "February 2026",
    category: "Publication",
    summary:
      "Our recent work introduces an acoustic and electromagnetic co-simulation framework for asymmetrically excited piezoelectric antennas.",
    image: "/recent-publications/liu-feature.png",
    href: "https://doi.org/10.1109/tap.2025.3639509",
  },
  {
    title: "Tuning anisotropic magnon transport in multiferroic oxides",
    date: "October 2025",
    category: "Publication",
    summary:
      "This study explores how crystal symmetry can be used to tune magnon transport in multiferroic oxide systems.",
    image: "/recent-publications/qiu-feature.png",
    href: "https://doi.org/10.1002/adfm.202518681",
  },
  {
    title: "Group meeting and Fragrant Hills Park outing",
    date: "September 2025",
    category: "Event",
    summary:
      "The group held a fall meeting followed by a shared outing to Fragrant Hills Park.",
    href: "/gallery/2025-09",
  },
  {
    title: "Controlling antiferromagnetic magnon transport by interfacial coupling",
    date: "July 2025",
    category: "Publication",
    summary:
      "Our work shows how interfacial coupling can regulate antiferromagnetic magnon transport across distinct transport regimes.",
    image: "/recent-publications/chen-feature.png",
    href: "https://doi.org/10.1002/adfm.202507757",
  },
  {
    title: "Teacher's Day celebration",
    date: "September 2024",
    category: "Group",
    summary:
      "A group gathering for research discussion and Teacher's Day celebration.",
    href: "/gallery/2024-09",
  },
  {
    title: "Spring group meeting and team building exercise",
    date: "March 2024",
    category: "Event",
    summary:
      "The lab came together for group meeting sessions and collaborative team-building activities.",
    href: "/gallery/2024-03",
  },
];
