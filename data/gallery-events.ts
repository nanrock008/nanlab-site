export type GalleryEvent = {
  slug: string;
  title: string;
  date: string;
  eyebrow: string;
  description: string;
};

export const galleryEvents: GalleryEvent[] = [
  {
    slug: "2025-09",
    title: "Summary Meeting and Fragrant Hills Park",
    date: "September 2025",
    eyebrow: "Autumn Outing · September 2025",
    description:
      "A fall summary meeting followed by a shared outing to Fragrant Hills Park.",
  },
  {
    slug: "2025-09-1",
    title: "2025 Teacher's Day",
    date: "September 2025",
    eyebrow: "Teacher's Day · September 2025",
    description:
      "Celebrating 2025 Teacher's Day together with the group in an early autumn gathering.",
  },
  {
    slug: "2024-09",
    title: "Summary Meeting and Teacher's Day",
    date: "September 2024",
    eyebrow: "Lab Gathering · September 2024",
    description:
      "An early-semester event bringing the team together for group discussion and a Teacher's Day celebration.",
  },
  {
    slug: "2024-03",
    title: "Summary Meeting and Team Building Exercise",
    date: "March 2024",
    eyebrow: "Spring Retreat · March 2024",
    description:
      "A spring team event with group meeting sessions followed by collaborative team-building activities.",
  },
  {
    slug: "2023-09",
    title: "2023 Teacher's Day",
    date: "September 2023",
    eyebrow: "Teacher's Day · September 2023",
    description:
      "Celebrating 2023 Teacher's Day together as the group continued to grow across multiple research directions.",
  },
  {
    slug: "2023-08",
    title: "Badaling Great Wall and Wildlife Park",
    date: "August 2023",
    eyebrow: "Summer Outing · August 2023",
    description:
      "A summer outing featuring a trip to Badaling Great Wall and the wildlife park, with time for conversation beyond the lab.",
  },
  {
    slug: "2023-03",
    title: "Summary Meeting and Wargame",
    date: "March 2023",
    eyebrow: "Team Exercise · March 2023",
    description:
      "A team event that combined an internal group meeting with a wargame session for collaboration and fun.",
  },
  {
    slug: "2022-09",
    title: "2022 Teacher's Day",
    date: "September 2022",
    eyebrow: "Teacher's Day · September 2022",
    description:
      "A Teacher's Day celebration marking an important moment in the early growth of the group.",
  },
  {
    slug: "2022-08",
    title: "Yudu Mountain",
    date: "August 2022",
    eyebrow: "Mountain Picnic · August 2022",
    description:
      "A summer outing to Yudu Mountain with a picnic and time together outside the lab environment.",
  },
  {
    slug: "2022-02",
    title: "Team Events",
    date: "February 2022",
    eyebrow: "Lab Life · February 2022",
    description:
      "A set of early team activities including billiards and other casual events that helped build group connection.",
  },
  {
    slug: "2020-08",
    title: "Escape Room",
    date: "August 2020",
    eyebrow: "First Group Activity · August 2020",
    description:
      "The lab's first group activity, when the team had only six members, captured in an escape room outing.",
  },
];

export function getGalleryEvent(slug: string) {
  return galleryEvents.find((event) => event.slug === slug);
}
