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
    <main className="min-h-screen bg-[#FFFDFB]">
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
          me to keep experimenting, producing, and developing a stronger point of
          view as a designer.
        </p>
      </CaseSection>

      <section className="mx-auto max-w-6xl px-8 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#C97C5D]">
          Gallery
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight">
          Selected poster designs and visual experiments.
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posters.map((poster) => (
            <div
              key={poster.src}
              className="overflow-hidden rounded-3xl border border-[#ECE5DF] bg-[#FAF7F3] shadow-sm"
            >
              <Image
                src={poster.src}
                alt={poster.alt}
                width={600}
                height={900}
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
          ))}
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
    </main>
  );
}