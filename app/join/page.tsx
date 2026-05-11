import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const applicantGroups = [
  {
    title: "Postdoctoral Researchers",
    description:
      "We welcome postdoctoral applicants with strong research training and interests related to the lab's research directions.",
  },
  {
    title: "Graduate Students",
    description:
      "We welcome graduate applicants from microelectronics, electrical engineering, materials science, physics, and related disciplines who are interested in pursuing research in the lab.",
  },
  {
    title: "Undergraduate Students",
    description:
      "We welcome motivated undergraduate students from Tsinghua University who are interested in gaining research experience.",
  },
] as const;

const faqSections = [
  {
    title: "General Questions",
    items: [
      {
        question: "What research areas are available in the lab?",
        answer: (
          <>
            Our lab works on spintronics and microelectromechanical systems.
            Specific projects may span materials, devices, integrated circuit
            design, and architecture, depending on the background and interests
            of each member. Please check the{" "}
            <Link href="/research" className="inline-link">
              Research page
            </Link>{" "}
            for more details.
          </>
        ),
      },
      {
        question: "What is the working style of the lab?",
        answer: (
          <>
            The lab maintains an open and flexible research environment.
            Graduate students and postdoctoral researchers are encouraged to
            pursue relatively independent research, propose their own ideas, and
            develop their own project directions. We value in-depth discussion
            and aim to provide the resources needed for meaningful research. We
            encourage both exploratory work in unknown directions and
            systematic research motivated by real-world problems and engineering
            applications. Research in the lab is not driven by publishing
            papers. The group also organizes social and team-building
            activities each semester. Please check out our{" "}
            <Link href="/gallery" className="inline-link">
              Gallery page
            </Link>
            .
          </>
        ),
      },
    ],
  },
  {
    title: "For Postdoctoral Applicants",
    items: [
      {
        question:
          "What background is preferred for postdoctoral applicants?",
        answer:
          "We welcome applicants with prior research experience relevant to the lab's current directions. At the same time, we also welcome applicants whose previous background is different from, but complementary to, our existing research areas, especially if they can bring new perspectives or help build interdisciplinary connections.",
      },
      {
        question:
          "What qualities are expected for a postdoctoral position?",
        answer:
          "Postdoctoral applicants are expected to have solid research training and the ability to work independently while collaborating effectively with others in the lab. A strong publication record is appreciated, but it is not the only factor we value.",
      },
      {
        question:
          "What is the typical duration of a postdoctoral appointment?",
        answer:
          "A typical postdoctoral appointment is for two years. Depending on research progress and career plans, it may be extended to three or four years.",
      },
    ],
  },
  {
    title: "For Graduate Applicants",
    items: [
      {
        question: "What backgrounds are suitable for graduate students?",
        answer:
          "Students with backgrounds in microelectronics, electrical engineering, materials science, physics, and related disciplines are encouraged to apply. Interdisciplinary applicants are also welcome.",
      },
      {
        question:
          "Do I need prior experience in the lab's exact research areas?",
        answer:
          "Prior experience in the lab's current research areas is helpful, but it is not required. We value strong fundamentals, curiosity, motivation, and willingness to learn.",
      },
      {
        question:
          "How many positions are typically available each year for graduate applicants?",
        answer:
          "The exact number may vary depending on ongoing projects and admissions arrangements. In general, the lab typically has one academic PhD position, one professional doctoral position, and several master's positions each year.",
      },
      {
        question:
          "How do I decide whether to apply for a PhD program or a master's program?",
        answer:
          "If you already have a clear understanding of the research process, are firmly committed to pursuing a PhD, and hope to continue making contributions in academia in the future, then the PhD track may be the right choice for you. If you are still undecided between a master's and a PhD, it is generally more suitable to apply for a master's program first.",
      },
      {
        question:
          "Will I have opportunities to participate in tape-out projects during my graduate study?",
        answer:
          "Yes. We typically organize one to two tape-out projects each year in the MRAM direction, usually led by PhD students with participation from master's students. In other directions, such as PMUT ultrasound circuits, regular tape-out opportunities are also planned. Students working in these areas will have opportunities to gain tape-out experience.",
      },
    ],
  },
  {
    title: "For Undergraduate Applicants",
    items: [
      {
        question: "Can undergraduate students join the lab?",
        answer:
          "Yes. Motivated undergraduate students who are interested in research are welcome to contact the lab. At present, we only accept undergraduate students from Tsinghua University, as well as final-year undergraduate students from other universities who have already been admitted to graduate programs at Tsinghua.",
      },
      {
        question: "Do I need previous research experience?",
        answer:
          "Previous research experience is helpful but not required. We are more interested in your motivation, reliability, curiosity, and willingness to learn.",
      },
      {
        question:
          "What kind of work can undergraduate students be involved in?",
        answer:
          "Depending on their background and availability, undergraduate students may participate in literature review, simulations, device testing, data analysis, or other research-related tasks. Opportunities may also be available for long-term research training or thesis-related work.",
      },
      {
        question: "How much time commitment is typically expected?",
        answer:
          "This depends on the stage and form of participation. In general, students who can commit consistently over a sustained period are better able to benefit from research training and contribute meaningfully to projects.",
      },
    ],
  },
] as const;

export default function JoinPage() {
  return (
    <div className="page-wrap">
      <PageHero
        title="Join Us"
        subtitle="We welcome applications from self-motivated individuals at the postdoctoral, graduate, and undergraduate levels who are excited about our research."
      />

      <section className="content-section">
        <h2>Who We Are Looking For</h2>
        <div className="join-role-grid">
          {applicantGroups.map((group) => (
            <article key={group.title} className="join-role-card">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>How to Apply</h2>
        <p className="join-apply-copy">
          Please send your CV to{" "}
          <a
            href="mailto:nantianxiang@mail.tsinghua.edu.cn"
            className="inline-link"
          >
            nantianxiang@mail.tsinghua.edu.cn
          </a>
          . You are encouraged to briefly describe your background, research
          interests, and why you would like to join the lab. You are also
          welcome to contact group members whose research interests are
          particularly relevant to yours. If there is a suitable match, we will
          be happy to follow up with you.
        </p>
      </section>

      <section className="content-section">
        <h2>Q&amp;A</h2>
        <div className="faq-section-list">
          {faqSections.map((section) => (
            <section key={section.title} className="faq-group">
              <div className="faq-group-header">
                <h3 className="faq-group-title">{section.title}</h3>
              </div>
              <div className="faq-accordion">
                {section.items.map((item) => (
                  <details key={item.question} className="faq-item">
                    <summary className="faq-question">{item.question}</summary>
                    <div className="faq-answer">
                      {typeof item.answer === "string" ? (
                        <p>{item.answer}</p>
                      ) : (
                        <p>{item.answer}</p>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
