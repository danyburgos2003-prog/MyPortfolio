import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDFB]">
      <Navbar />

      <Hero />

      <section id="work" className="mx-auto max-w-6xl px-8 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#C97C5D]">
          Selected Work
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight">
          Projects at the intersection of data, product, design, and
          storytelling.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
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
    </main>
  );
}