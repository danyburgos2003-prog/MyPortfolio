import Image from "next/image";
import Navbar from "@/components/Navbar";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/Section";

const galleryImages = [
  {
    src: "/images/tempo/gallery/everyday-journal.png",
    alt: "Tempo Everyday Practice Journal",
  },
  {
    src: "/images/tempo/gallery/tournament-journal.png",
    alt: "Tempo Tournament Journal",
  },
  {
    src: "/images/tempo/gallery/interior-layout.png",
    alt: "Tempo journal interior layout",
  },
];

export default function TempoPage() {
  return (
    <main className="min-h-screen bg-[#EEEBDC] text-[#49261D]">
      <Navbar />

      <CaseHero
        label="Brand Strategy · Product Design · Entrepreneurship"
        title="Tempo: Designing a journaling system for better performance."
        subtitle="A performance journaling brand built around rhythm, intention, and reflection, combining physical products, visual identity, digital experience, and athlete-centered product thinking."
        details={[
          "Brand Strategy",
          "Product Design",
          "Visual Identity",
          "Editorial Design",
          "Web Design",
          "Entrepreneurship",
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 pb-12 md:px-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-[#B7D3A8]">
          <Image
            src="/images/tempo/gallery/everyday-journal.png"
            alt="Tempo Everyday Practice Journal"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </section>

      <CaseSection
        eyebrow="The Idea"
        title="Creating a tool for the part of performance that data does not always capture."
      >
        <p>
          Tempo began with a simple idea: athletes track scores, statistics,
          workouts, and results, but many of the patterns that influence
          performance live somewhere else—in preparation, mindset, routines,
          reflection, and the way a player responds from one day to the next.
        </p>

        <p>
          I wanted to create a physical product that made reflection feel
          structured and useful rather than abstract. The goal was not simply to
          create a notebook, but to build a system athletes could return to
          consistently as part of their performance routine.
        </p>
      </CaseSection>

      <CaseSection
        eyebrow="Brand Strategy"
        title="Building the brand around rhythm, intention, and performance."
      >
        <p>
          The name Tempo reflects the idea that strong performance has a rhythm.
          It is shaped by preparation, repetition, awareness, and the ability to
          return to a process even when results fluctuate.
        </p>

        <p>
          The brand system was developed around three core ideas: Rhythm,
          Intention, and Performance. These principles shaped the visual
          identity, product structure, tone of voice, and overall experience of
          using Tempo.
        </p>
      </CaseSection>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Rhythm",
              text: "Creating repeatable routines that support consistency over time.",
            },
            {
              number: "02",
              title: "Intention",
              text: "Helping athletes practice and compete with a clearer sense of purpose.",
            },
            {
              number: "03",
              title: "Performance",
              text: "Turning reflection into information that can support better decisions.",
            },
          ].map((item, index) => (
            <div
              key={item.number}
              className={
                index === 1
                  ? "rounded-[1.75rem] bg-[#FB4D00] p-7 text-[#EEEBDC]"
                  : index === 2
                    ? "rounded-[1.75rem] bg-[#49261D] p-7 text-[#EEEBDC]"
                    : "rounded-[1.75rem] bg-[#B7D3A8] p-7 text-[#2F5D50]"
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

      <CaseSection
        eyebrow="Product System"
        title="Physical tools designed for different moments in the athlete journey."
      >
        <p>
          Tempo was designed as a product system rather than a single journal.
          The products serve different moments in an athlete&apos;s routine
          while sharing the same philosophy and visual language.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-[1.5rem] bg-[#F7F2E7] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[#FB4D00]">
              Everyday Practice Journal
            </p>

            <p className="mt-4 leading-7 text-[#49261D]/70">
              A structured 16-week journal for daily practice, reflection,
              routines, and long-term progress.
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-[#CAE7F7] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[#49261D]/55">
              Tournament Journal
            </p>

            <p className="mt-4 leading-7 text-[#49261D]/70">
              A competition-focused journal for preparation, strategy,
              post-round reflection, and learning across tournament days.
            </p>
          </div>
        </div>
      </CaseSection>

      <CaseSection
        eyebrow="Physical Product Design"
        title="Treating the journal itself as a user experience."
      >
        <p>
          Designing Tempo required thinking beyond pages and prompts. Physical
          dimensions, portability, writing space, section sequencing, visual
          hierarchy, and frequency of reflection all influence whether an
          athlete will actually use the product consistently.
        </p>

        <p>
          I approached the journals as an interaction design problem translated
          into print: reduce friction, create clear patterns, and provide enough
          structure to guide the athlete without making the experience feel
          rigid.
        </p>
      </CaseSection>

      <CaseSection
        eyebrow="Visual Identity"
        title="A calm visual system designed to support focus."
      >
        <p>
          Tempo uses a restrained visual identity built around soft green, deep
          green, black, and white. The system balances performance and structure
          with a calmer editorial feeling that fits the reflective nature of the
          products.
        </p>

        <p>
          Typography, spacing, journal layouts, and the logo system were
          designed to create a consistent experience across physical products,
          digital touchpoints, and brand communication.
        </p>
      </CaseSection>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#FB4D00]">
          Product Gallery
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
          From the physical journals to
          <span className="block font-serif font-normal italic">
            the experience inside.
          </span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={
                index === 2
                  ? "relative aspect-[16/8] overflow-hidden rounded-[2rem] bg-[#F7F2E7] md:col-span-2"
                  : "relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#F7F2E7]"
              }
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  index === 2
                    ? "(max-width: 768px) 100vw, 1200px"
                    : "(max-width: 768px) 100vw, 50vw"
                }
                className="object-cover transition duration-700 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </section>

      <CaseSection
        eyebrow="Reflection"
        title="Tempo became an exercise in designing an entire product experience."
      >
        <p>
          Building Tempo brought together product thinking, branding, editorial
          design, entrepreneurship, and my own experience as an athlete.
        </p>

        <p>
          The biggest lesson was that strong product design is not only about
          what something looks like. It is about understanding when people use
          it, why they return to it, what information matters, and how every
          interaction supports the larger purpose of the product.
        </p>
      </CaseSection>

      <section className="px-6 pb-12 pt-8 md:px-10 md:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#FB4D00] px-8 py-14 text-[#EEEBDC] md:px-12 md:py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-[#EEEBDC]/70">
            Tempo
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
            Rhythm.
            <span className="font-serif font-normal italic"> Intention.</span>
            <span className="block">Performance.</span>
          </h2>
        </div>
      </section>
    </main>
  );
}