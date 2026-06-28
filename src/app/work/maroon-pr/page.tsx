import Image from "next/image";
import Navbar from "@/components/Navbar";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/Section";

export default function MaroonPRPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFB]">
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

      <section className="mx-auto max-w-6xl px-8 py-10">
        <div className="overflow-hidden rounded-[2rem] border border-[#ECE5DF] bg-white shadow-xl">
          <Image
            src="/images/maroon-pr/dashboard-google.png"
            alt="Google Looker Studio Dashboard"
            width={1600}
            height={900}
            className="w-full object-cover transition duration-700 hover:scale-[1.02]"
            priority
          />
        </div>
      </section>

      <CaseSection
        eyebrow="Challenge"
        title="Centralizing fragmented campaign data."
      >
        <p>
          Maroon PR tracked campaign performance across multiple platforms,
          including Muck Rack, Sprout Social, TVEyes, and Google Alerts.
          Because each platform reported data differently, preparing client
          reports required exporting data manually and consolidating it across
          multiple sources.
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

      <section className="mx-auto max-w-6xl px-8 py-10">
        <div className="overflow-hidden rounded-[2rem] border border-[#ECE5DF] bg-white shadow-xl">
          <Image
            src="/images/maroon-pr/dashboard-powerbi.png"
            alt="Interactive Power BI Dashboard"
            width={1600}
            height={900}
            className="w-full object-cover transition duration-700 hover:scale-[1.02]"
          />
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
          multiple sources could be organized into a centralized reporting system
          that was easier to understand, easier to maintain, and more valuable
          for client-facing presentations.
        </p>
      </CaseSection>

      <CaseSection eyebrow="My Contributions" title="My role throughout the project.">
        <p>
          • Evaluated reporting capabilities and data availability across
          multiple PR and media platforms.
        </p>

        <p>
          • Helped define key performance indicators (KPIs) and reporting
          requirements for client dashboards.
        </p>

        <p>
          • Designed dashboard layouts and data visualizations in Google Looker
          Studio and Power BI to improve reporting clarity.
        </p>

        <p>
          • Collaborated on the team&apos;s final consulting recommendations and
          presented analytical findings to stakeholders.
        </p>
      </CaseSection>

      <CaseSection
        eyebrow="Impact"
        title="Building a scalable foundation for reporting."
      >
        <p>
          The project demonstrated how standardized datasets, reusable
          dashboards, and thoughtful visualization could significantly improve
          reporting consistency while reducing the manual effort required to
          prepare campaign performance reports.
        </p>

        <p>
          Beyond the dashboards themselves, the experience strengthened my
          ability to approach analytics as a communication and decision-making
          challenge, balancing technical analysis with business objectives and
          user needs.
        </p>
      </CaseSection>

      <CaseSection eyebrow="Tools Used" title="Technologies and platforms.">
        <p>
          Google Looker Studio • Power BI • Microsoft Excel • Google Sheets •
          Data Visualization • KPI Development • Business Intelligence •
          Dashboard Design • Team Collaboration
        </p>
      </CaseSection>
    </main>
  );
}