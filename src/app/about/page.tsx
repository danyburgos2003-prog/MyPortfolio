import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFB]">
      <Navbar />

      <section className="mx-auto max-w-6xl px-8 pt-44 pb-28">
        <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#C97C5D]">
          About
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          I design thoughtful digital experiences that make information easier
          to understand and act on.
        </h1>

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div className="rounded-3xl bg-[#F6D4C7] p-8">
            <div className="mb-8 overflow-hidden rounded-2xl">
              <Image
                src="/images/profile/headshot.png"
                alt="Daniela Burgos"
                width={700}
                height={900}
                className="w-full rounded-2xl object-cover"
                priority
              />
            </div>

            <div className="space-y-6 border-t border-black/10 pt-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-700">
                  Based in
                </p>
                <p className="mt-3 text-2xl font-semibold">
                  Mexico City · Maryland
                </p>
              </div>

              <div className="grid gap-3 border-t border-black/10 pt-6 text-neutral-700">
                <p>🎓 University of Maryland</p>
                <p>⛳ NCAA Division I Golfer</p>
                <p>🇲🇽 Mexico City</p>
                <p>💻 Product Design & Data Visualization</p>
                <p>🌎 English & Spanish</p>
              </div>

              <div className="border-t border-black/10 pt-6">
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-700">
                  Interests
                </p>
                <p className="mt-4 leading-8 text-neutral-700">
                  Product Design, UX/UI, Data Visualization, Branding,
                  Entrepreneurship, Photography, Golf, and Human-Centered
                  Technology.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-xl leading-9 text-neutral-700">
            <p>
              I’m Daniela Burgos, a recent University of Maryland graduate with
              a background in Information Design and NCAA Division I golf. My
              work lives at the intersection of data, design, product, and
              storytelling.
            </p>

            <p>
              As both a designer and developer, I enjoy turning complex
              information into experiences that feel intuitive and useful.
              Whether I'm building a product, designing a dashboard, or creating
              a brand identity, I approach every project with curiosity,
              structure, and empathy for the people using it.
            </p>

            <p>
              Golf has shaped the way I solve problems. Years of competing at
              the Division I level taught me discipline, resilience, and the
              value of continuous improvement. That same mindset carries into my
              work: iterate often, communicate clearly, and never stop learning.
            </p>

            <p>
              Today, I'm especially interested in product design, data
              visualization, branding, and technology that helps people make
              better decisions. I love creating work that doesn't just look
              beautiful—it makes information easier to understand and actions
              easier to take.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}