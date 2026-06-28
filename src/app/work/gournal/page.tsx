import Image from "next/image";
import Navbar from "@/components/Navbar";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/Section";

export default function GournalPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFB]">
      <Navbar />

      <CaseHero
        label="Product Design"
        title="Gournal"
        subtitle="An athlete performance platform designed to help athletes turn daily reflections, training notes, and performance data into meaningful insights."
        details={[
          "Product Design",
          "UX/UI",
          "Data Visualization",
          "Athlete Performance",
          "2026",
        ]}
      />

      <section className="mx-auto max-w-6xl px-8 py-10">
         <div className="overflow-hidden rounded-[2rem] border border-[#ECE5DF] bg-white shadow-xl">
            <Image
            src="/images/gournal/dashboard-home.png"
            alt="Gournal Dashboard"
            width={1600}
            height={900}
            priority
            className="w-full object-cover transition duration-700 hover:scale-[1.02]"
            />
        </div>
    </section>

      <CaseSection eyebrow="Challenge" title="Athletes collect information everywhere.">
        <p>
          Athletes are constantly receiving feedback from practices, tournaments,
          coaches, stats, emotions, and routines. The challenge is that much of
          that information gets lost, scattered, or forgotten.
        </p>
        <p>
          Gournal began as a way to create a more intentional system for
          reflection, tracking, and progress.
        </p>
      </CaseSection>

      <CaseSection eyebrow="Approach" title="Designing around the athlete experience.">
        <p>
          I focused on creating a platform that feels useful, simple, and
          motivating. Instead of overwhelming athletes with data, the goal is to
          help them recognize patterns and understand what to improve next.
        </p>
        <p>
          The product combines journaling, performance tracking, dashboard
          design, and user feedback to support better decision-making over time.
        </p>
      </CaseSection>

      <CaseSection eyebrow="Role" title="Founder, designer, and builder.">
        <p>
          I worked across product direction, user experience, data organization,
          dashboard concepts, and feature planning. This project allowed me to
          combine my background as a Division I athlete with my interest in
          Information Science, design, and technology.
        </p>
      </CaseSection>
    </main>
  );
}