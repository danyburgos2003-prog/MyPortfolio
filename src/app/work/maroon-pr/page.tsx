import Image from "next/image";
import Navbar from "@/components/Navbar";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/Section";

export default function MaroonPRPage() {
  return (
    <main className="min-h-screen bg-[#EEEBDC] text-[#49261D]">
      <Navbar />

      <CaseHero
        label="Consulting Project"
        title="Centralizing PR Analytics for Maroon PR"
        subtitle="A semester-long consulting engagement with Maroon PR focused on transforming fragmented campaign data into a centralized reporting system through data strategy, dashboard design, and visualization."
        details={[
          "Data Strategy",
          "Business Intelligence",
          "Dashboard Design",
          "Team Collaboration",
          "Consulting",
        ]}
      />

      <section className="px-6 pb-10 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-[#F7F2E7]">
            <Image
              src="/images/maroon-pr/dashboard-google.png"
              alt="Google Looker Studio Dashboard"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      <CaseSection
        eyebrow="Challenge"
        title="Centralizing fragmented campaign data."
      >
        <p>
          Maroon PR tracked campaign performance across multiple platforms,
          including Muck Rack, Sprout Social, TVEyes, and Google Alerts. Because
          each platform reported data differently, preparing client reports
          required exporting data manually and consolidating it across multiple
          sources.
        </p>

        <p>
          Our challenge was to design a reporting workflow that transformed
          fragmented campaign data into a centralized, consistent analytics
          system capable of supporting faster reporting and more informed
          strategic decisions.
        </p>
      </CaseSection>

      <CaseSection
        eyebrow="Process"
        title="Defining the right metrics before designing the dashboard."
      >
        <p>
          I worked with my team to identify key performance indicators related
          to reach, engagement, and campaign effectiveness. From there, we built
          dashboard views that organized the data into a clearer reporting
          structure.
        </p>

        <p>
          The design focused on hierarchy: showing the most important takeaways
          first, then allowing supporting metrics to provide additional context.
        </p>
      </CaseSection>

      <section className="px-6 py-8 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Reach",
              text: "Understand how far campaign content traveled across channels.",
            },
            {
              number: "02",
              title: "Engagement",
              text: "Measure how audiences interacted with earned and social content.",
            },
            {
              number: "03",
              title: "Effectiveness",
              text: "Connect performance metrics to clearer client-facing insights.",
            },
          ].map((item, index) => (
            <div
              key={item.number}
              className={
                index === 0
                  ? "rounded-[1.75rem] bg-[#CAE7F7] p-7"
                  : index === 1
                    ? "rounded-[1.75rem] bg-[#49261D] p-7 text-[#EEEBDC]"
                    : "rounded-[1.75rem] bg-[#FB4D00] p-7 text-[#EEEBDC]"
              }
            >
              <p className="text-xs uppercase tracking-[0.18em] opacity-60">
                {item.number}
              </p>

              <h3 className="mt-10 text-3xl font-semibold tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 opacity-75">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-[#F7F2E7]">
            <Image
              src="/images/maroon-pr/dashboard-powerbi.png"
              alt="Interactive Power BI Dashboard"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      <CaseSection
        eyebrow="Solution"
        title="Designing a reporting system that turns data into decisions."
      >
        <p>
          Working within a multidisciplinary consulting team, we researched
          reporting workflows, evaluated platform capabilities, and designed a
          standardized analytics process using Google Looker Studio and Power BI.
          Rather than simply displaying metrics, the dashboards prioritized the
          information decision-makers needed most through clear visual hierarchy
          and intuitive layouts.
        </p>

        <p>
          Our proposed solution demonstrated how campaign performance from
          multiple sources could be organized into a centralized reporting
          system that was easier to understand, easier to maintain, and more
          valuable for client-facing presentations.
        </p>
      </CaseSection>

      <CaseSection
        eyebrow="My Contributions"
        title="My role throughout the project."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Evaluated reporting capabilities and data availability across multiple PR and media platforms.",
            "Helped define key performance indicators and reporting requirements for client dashboards.",
            "Designed dashboard layouts and data visualizations in Google Looker Studio and Power BI.",
            "Collaborated on the final consulting recommendations and presented analytical findings to stakeholders.",
          ].map((item, index) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-[#49261D]/10 bg-[#F7F2E7] p-6"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[#FB4D00]">
                0{index + 1}
              </p>

              <p className="mt-4 leading-7 text-[#49261D]/70">{item}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection
        eyebrow="Impact"
        title="Building a scalable foundation for reporting."
      >
        <p>
          The project demonstrated how standardized datasets, reusable
          dashboards, and thoughtful visualization could improve reporting
          consistency while reducing the manual effort required to prepare
          campaign performance reports.
        </p>

        <p>
          Beyond the dashboards themselves, the experience strengthened my
          ability to approach analytics as a communication and decision-making
          challenge, balancing technical analysis with business objectives and
          user needs.
        </p>
      </CaseSection>

      <CaseSection eyebrow="Tools Used" title="Technologies and platforms.">
        <div className="flex flex-wrap gap-3">
          {[
            "Google Looker Studio",
            "Power BI",
            "Microsoft Excel",
            "Google Sheets",
            "Data Visualization",
            "KPI Development",
            "Business Intelligence",
            "Dashboard Design",
            "Team Collaboration",
          ].map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-[#49261D]/15 bg-[#F7F2E7] px-4 py-2 text-sm text-[#49261D]/75"
            >
              {tool}
            </span>
          ))}
        </div>
      </CaseSection>

      <section className="px-6 pb-12 pt-8 md:px-10 md:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#49261D] px-8 py-14 text-[#EEEBDC] md:px-12 md:py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-[#FB4D00]">
            Maroon PR
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
            From scattered metrics
            <span className="block font-serif font-normal italic">
              to clearer decisions.
            </span>
          </h2>
        </div>
      </section>
    </main>
  );
}