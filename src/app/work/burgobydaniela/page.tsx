import Image from "next/image";
import Navbar from "@/components/Navbar";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/Section";

const posters = [
  {
    src: "/images/burgobydaniela/poster-01.png",
    alt: "BurgoByDaniela poster design 1",
  },
  {
    src: "/images/burgobydaniela/poster-02.png",
    alt: "BurgoByDaniela poster design 2",
  },
  {
    src: "/images/burgobydaniela/poster-03.png",
    alt: "BurgoByDaniela poster design 3",
  },
  {
    src: "/images/burgobydaniela/poster-04.png",
    alt: "BurgoByDaniela poster design 4",
  },
  {
    src: "/images/burgobydaniela/poster-05.png",
    alt: "BurgoByDaniela poster design 5",
  },
  {
    src: "/images/burgobydaniela/poster-06.png",
    alt: "BurgoByDaniela poster design 6",
  },
  {
    src: "/images/burgobydaniela/poster-07.png",
    alt: "BurgoByDaniela poster design 7",
  },
  {
    src: "/images/burgobydaniela/poster-08.png",
    alt: "BurgoByDaniela poster design 8",
  },
];

export default function BurgoByDanielaPage() {
  return (
    <main className="min-h-screen bg-[#EEEBDC] text-[#49261D]">
      <Navbar />

      <CaseHero
        label="Creative Practice"
        title="BurgoByDaniela"
        subtitle="An independent creative practice exploring poster design, visual communication, typography, and everyday inspiration through printed and digital work."
        details={[
          "Poster Design",
          "Visual Communication",
          "Typography",
          "Creative Direction",
          "Etsy Shop",
          "2026",
        ]}
      />

      <CaseSection eyebrow="Studio" title="A space to explore visual ideas.">
        <p>
          BurgoByDaniela is my independent creative project and Etsy shop,
          currently focused on poster design and visual communication.
        </p>

        <p>
          It gives me a space to experiment with typography, layout, color, and
          composition while developing my own visual language.
        </p>
      </CaseSection>

      <CaseSection
        eyebrow="Direction"
        title="Designing pieces that feel personal, warm, and intentional."
      >
        <p>
          The project is inspired by travel, culture, everyday moments, and the
          feeling of collecting objects that make a space feel more personal.
        </p>

        <p>
          My goal is to create designs that feel simple but meaningful — pieces
          that can live in someone’s room, workspace, or home and still feel
          connected to a story.
        </p>
      </CaseSection>

      <section className="px-6 py-8 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Typography",
              text: "Using type as both information and visual personality.",
            },
            {
              number: "02",
              title: "Composition",
              text: "Exploring hierarchy, balance, spacing, and visual rhythm.",
            },
            {
              number: "03",
              title: "Story",
              text: "Turning everyday inspiration into pieces with a point of view.",
            },
          ].map((item, index) => (
            <div
              key={item.number}
              className={
                index === 0
                  ? "rounded-[1.75rem] bg-[#CAE7F7] p-7"
                  : index === 1
                    ? "rounded-[1.75rem] bg-[#FB4D00] p-7 text-[#EEEBDC]"
                    : "rounded-[1.75rem] bg-[#49261D] p-7 text-[#EEEBDC]"
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
        eyebrow="Process"
        title="Using posters as a way to practice creative direction."
      >
        <p>
          Each poster becomes a small design exercise: choosing a concept,
          defining the mood, building the visual hierarchy, and refining the
          final composition.
        </p>

        <p>
          Through BurgoByDaniela, I am building a creative practice that allows
          me to keep experimenting, producing, and developing a stronger point
          of view as a designer.
        </p>
      </CaseSection>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-[#49261D]/15 pt-10">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#FB4D00]">
              Gallery
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Selected poster designs
              <span className="block font-serif font-normal italic">
                & visual experiments.
              </span>
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {posters.map((poster, index) => (
                <div
                  key={poster.src}
                  className={
                    index === 0 || index === 5
                      ? "relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#F7F2E7] sm:col-span-2"
                      : "relative aspect-[2/3] overflow-hidden rounded-[2rem] bg-[#F7F2E7]"
                  }
                >
                  <Image
                    src={poster.src}
                    alt={poster.alt}
                    fill
                    sizes={
                      index === 0 || index === 5
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 100vw, 25vw"
                    }
                    className="object-cover transition duration-700 hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CaseSection
        eyebrow="Reflection"
        title="A creative practice grows by making things consistently."
      >
        <p>
          BurgoByDaniela is still evolving, but that is part of what makes it
          important to me. It represents the beginning of a more intentional
          relationship with design, creative direction, and visual storytelling.
        </p>
      </CaseSection>

      <section className="px-6 pb-12 pt-8 md:px-10 md:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#49261D] px-8 py-14 text-[#EEEBDC] md:px-12 md:py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-[#FB4D00]">
            BurgoByDaniela
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
            A space to experiment,
            <span className="block font-serif font-normal italic">
              make & develop a point of view.
            </span>
          </h2>
        </div>
      </section>
    </main>
  );
}