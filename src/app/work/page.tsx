import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFB]">
      <Navbar />

      <section className="mx-auto max-w-6xl px-8 pt-44 pb-20">
        <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#C97C5D]">
          Selected Work
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          A collection of projects across product, data visualization, branding,
          and visual storytelling.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-600">
          These projects reflect how I approach complexity: by organizing
          information, understanding users, and designing experiences that feel
          clear, useful, and human.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-8 pb-28">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-8 pb-28">
        <div className="rounded-3xl border border-[#ECE5DF] bg-[#FAF7F3] p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#C97C5D]">
            More coming soon
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight">
            This portfolio is a living archive of what I’m building, learning,
            and exploring.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Future additions will include data visualization experiments,
            photography collections, UI explorations, and product case studies
            as my work continues to evolve.
          </p>
        </div>
      </section>
    </main>
  );
}