import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#EEEBDC] text-[#49261D]">
      <Navbar />

      <section className="px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-[#49261D]/20 pb-10">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FB4D00]">
                Selected Work
              </p>

              <p className="text-xs uppercase tracking-[0.18em] text-[#49261D]/45">
                01 — 05
              </p>
            </div>

            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              A collection of projects across
              <span className="block font-serif font-normal italic">
                strategy, design, data & digital.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#49261D]/70 md:text-xl">
              These projects reflect how I approach ideas from different angles:
              building brands, designing products, organizing information, and
              creating digital experiences that feel clear, useful, and
              intentional.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-28">
        <div className="mx-auto max-w-7xl">
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

      <section className="px-6 pb-12 md:px-10 md:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#49261D] px-8 py-14 text-[#EEEBDC] md:px-12 md:py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-[#FB4D00]">
            Across The Work
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
            Different disciplines,
            <span className="block font-serif font-normal italic">
              one way of thinking.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#EEEBDC]/65">
            Whether I’m working with a physical product, a brand, a dashboard,
            or a website, I’m most interested in turning ideas and information
            into experiences that people can understand, use, and remember.
          </p>
        </div>
      </section>

      <section className="px-6 pb-12 md:px-10 md:pb-16">
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
            Get in touch
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}