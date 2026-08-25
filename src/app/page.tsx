import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEEBDC] text-[#49261D]">
      <Navbar />

      <Hero />

      <section className="px-6 py-10 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2.25rem] bg-[#CAE7F7] md:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-between p-8 md:p-14 lg:p-16">
              <div>
                <div className="mb-10 flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#49261D]/70">
                    About Me
                  </p>

                  <p className="text-xs uppercase tracking-[0.16em] text-[#49261D]/50">
                    01
                  </p>
                </div>

                <h2 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#49261D] md:text-6xl">
                  Hi, I’m
                  <span className="block font-serif font-normal italic">
                    Daniela.
                  </span>
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-8 text-[#49261D]/75">
                  I’m an Information Science graduate, former NCAA Division I
                  athlete, designer, and strategist working at the intersection
                  of technology, storytelling, data, and brand.
                </p>

                <p className="mt-5 max-w-xl text-lg leading-8 text-[#49261D]/75">
                  I enjoy turning ideas and complex information into digital
                  experiences that feel clear, useful, thoughtful, and
                  memorable.
                </p>
              </div>

              <div className="mt-12 flex flex-col gap-6 border-t border-[#49261D]/15 pt-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#49261D]/50">
                    Based in
                  </p>

                  <p className="mt-2 text-lg font-medium">Mexico City</p>
                </div>

                <a
                  href="/about"
                  className="inline-flex w-fit items-center gap-3 rounded-full bg-[#49261D] px-6 py-3 text-sm font-medium text-[#EEEBDC] transition duration-300 hover:bg-[#FB4D00]"
                >
                  More about me
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center bg-[#EEEBDC] p-6 md:p-10">
              <div className="relative aspect-square w-full max-w-[520px] overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/images/daniela/portrait.jpg"
                  alt="Daniela Burgos"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute bottom-5 right-5 rounded-full bg-[#FB4D00] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#EEEBDC]">
                  Strategy · Design · Digital
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-8 border-b border-[#49261D]/20 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#FB4D00]">
                Selected Work
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-6xl">
                Projects across strategy,
                <span className="block font-serif font-normal italic">
                  design, data & digital.
                </span>
              </h2>
            </div>

            <p className="text-sm uppercase tracking-[0.15em] text-[#49261D]/60">
              01 — 05
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-12">
            {projects.map((project, index) => {
              const layoutClasses = [
                "md:col-span-7",
                "md:col-span-5",
                "md:col-span-12",
                "md:col-span-5",
                "md:col-span-7",
              ];

              return (
                <div
                  key={project.title}
                  className={layoutClasses[index]}
                >
                  <ProjectCard
                    number={project.number}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    image={project.image}
                    type={project.type}
                    href={project.href}
                    theme={project.theme}
                    layout={project.layout}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#49261D] px-6 py-24 text-[#EEEBDC] md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#FB4D00]">
            What I Do
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Strategy, design, and digital thinking.
          </h2>

          <div className="mt-16 grid border-t border-[#EEEBDC]/20 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Brand & Strategy",
                description:
                  "Brand positioning, storytelling, campaigns, and creative direction.",
              },
              {
                number: "02",
                title: "Digital Experiences",
                description:
                  "Web design, UX/UI, and digital products designed around real users.",
              },
              {
                number: "03",
                title: "Data & Insights",
                description:
                  "Analytics, visualization, and strategic decision-making.",
              },
              {
                number: "04",
                title: "Content & Communication",
                description:
                  "Visual storytelling, media, and digital communication.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border-b border-[#EEEBDC]/20 py-10 md:px-8 md:first:pl-0 md:even:border-l md:even:border-l-[#EEEBDC]/20"
              >
                <p className="text-xs tracking-[0.18em] text-[#FB4D00]">
                  {item.number}
                </p>

                <h3 className="mt-5 text-3xl font-medium tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-[#EEEBDC]/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#FB4D00]">
              A Little More About Me
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              The experiences behind the work.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              "NCAA DIVISION I ATHLETE",
              "MEXICO CITY",
              "INFORMATION SCIENCE",
              "GOLF SINCE AGE 5",
              "DESIGN + TECHNOLOGY",
              "STRATEGY + STORYTELLING",
            ].map((item, index) => (
              <div
                key={item}
                className={
                  index === 1 || index === 4
                    ? "flex min-h-56 items-end rounded-[1.75rem] bg-[#FB4D00] p-7 text-[#EEEBDC]"
                    : index === 2
                    ? "flex min-h-56 items-end rounded-[1.75rem] bg-[#CAE7F7] p-7"
                    : "flex min-h-56 items-end rounded-[1.75rem] bg-[#FFF8F3] p-7"
                }
              >
                <p className="max-w-xs text-2xl font-semibold leading-tight tracking-[-0.03em]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 md:px-10 md:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#FB4D00] px-8 py-16 text-[#EEEBDC] md:px-14 md:py-20">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em]">
            Let’s Work Together
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Have an idea?
            <span className="block font-serif font-normal italic">
              Let’s make it happen.
            </span>
          </h2>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#49261D] px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] transition hover:bg-[#EEEBDC] hover:text-[#49261D]"
          >
            Work with me
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="bg-[#49261D] px-6 py-10 text-[#EEEBDC] md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-xs uppercase tracking-[0.15em] md:flex-row md:items-center md:justify-between">
          <p>Daniela Burgos © 2026</p>

          <div className="flex gap-6">
            <a href="/about" className="transition hover:text-[#FB4D00]">
              About
            </a>

            <a href="/contact" className="transition hover:text-[#FB4D00]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}