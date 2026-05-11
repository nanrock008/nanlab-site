import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { teamSections } from "@/data/team-members";

const formerMembers = [
  {
    name: "Yahong Chai",
    nativeName: "柴亚红",
    years: "2020-2025",
    role: "Postdoc",
    current: "Associate Professor, China University of Mining and Technology",
  },
  {
    name: "Yang Yang",
    nativeName: "杨扬",
    years: "2021-2023",
    role: "Postdoc",
    current: "Associate Professor, Beijing Normal University",
  },
  {
    name: "Yuejie Zhang",
    nativeName: "张跃杰",
    years: "2022-2024",
    role: "Postdoc",
    current: "Engineer, Media Group",
  },
  {
    name: "Shiyan Ma",
    nativeName: "马实炎",
    years: "2023-2025",
    role: "Research Assistant",
    current: "PhD student, CAS Institute of Semiconductors",
  },
] as const;

const teamNavItems = [
  { href: "#principal-investigator", label: "PI" },
  { href: "#postdoctoral-researchers", label: "Postdoc" },
  { href: "#phd-students", label: "PhD" },
  { href: "#master-students", label: "Master" },
  { href: "#former-members", label: "Former" },
] as const;

function toSectionId(title: string) {
  return title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function PeoplePage() {
  return (
    <div className="page-wrap team-page">
      <PageHero
        title="Team"
        subtitle="Our group brings together researchers from diverse interdisciplinary backgrounds."
      />

      <div className="team-layout">
        <div className="team-main">
          {teamSections.map((section) => (
            <section
              key={section.title}
              id={toSectionId(section.title)}
              className="content-section team-section"
            >
              <div className="team-section-heading">
                <h2>{section.title}</h2>
              </div>

              <div className="team-grid">
                {section.members.map((member) => (
                  <article
                    key={member.email}
                    className={`team-card${section.title === "Principal Investigator" ? " team-card-pi" : ""}`}
                  >
                    <div className="team-card-media">
                      <div className="team-image-frame">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 180px"
                          className={`team-image${member.imageClassName ? ` ${member.imageClassName}` : ""}`}
                        />
                      </div>
                    </div>

                    <div className="team-card-body">
                      <div className="team-card-header">
                        <h3>{member.name}</h3>
                        {member.nativeName ? (
                          <p className="team-native-name">{member.nativeName}</p>
                        ) : null}
                      </div>

                      <a href={`mailto:${member.email}`} className="team-email">
                        {member.email}
                      </a>

                      {member.bio ? <p className="team-bio">{member.bio}</p> : null}

                      <div className="team-interests">
                        {member.interests.map((interest) => (
                          <span key={interest} className="team-interest-chip">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <section
            id="former-members"
            className="content-section team-section"
          >
            <div className="team-section-heading">
              <h2>Former Members</h2>
            </div>

            <div className="former-members-table-wrap">
              <table className="former-members-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Period</th>
                    <th>Role</th>
                    <th>Current Position</th>
                  </tr>
                </thead>
                <tbody>
                  {formerMembers.map((member) => (
                    <tr key={`${member.name}-${member.years}`}>
                      <td>
                        {member.name}
                        <span className="former-member-native">
                          {member.nativeName}
                        </span>
                      </td>
                      <td>{member.years}</td>
                      <td>{member.role}</td>
                      <td>{member.current}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <aside className="team-side-nav" aria-label="Team sections">
          <div className="team-side-nav-inner">
            {teamNavItems.map((item) => (
              <a key={item.href} href={item.href} className="team-side-nav-link">
                {item.label}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
