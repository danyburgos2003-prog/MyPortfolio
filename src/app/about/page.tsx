import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#EEEBDC] text-[#49261D]">
      <Navbar />

      <section className="px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 border-b border-[#49261D]/20 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#FB4D00]">
                About
              </p>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                I build at the intersection of
                <span className="block font-serif font-normal italic">
                  strategy, design, data & story.
                </span>
              </h1>
            </div>

            <p className="max-w-sm text-sm uppercase leading-6 tracking-[0.14em] text-[#49261D]/60">
              Information Science · NCAA Division I · Mexico City
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-[#CAE7F7] p-5 md:p-6">
              <div className="relative aspect-square overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/profile/headshot.png"
                  alt="Daniela Burgos"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-6 grid gap-6 border-t border-[#49261D]/15 pt-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#49261D]/50">
                    Based in
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                    Mexico City
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-[1.4rem] bg-[#EEEBDC] p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-[#49261D]/50">
                      Education
                    </p>
                    <p className="mt-3 font-medium">
                      University of Maryland
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] bg-[#FB4D00] p-5 text-[#EEEBDC]">
                    <p className="text-xs uppercase tracking-[0.16em] text-[#EEEBDC]/70">
                      Background
                    </p>
                    <p className="mt-3 font-medium">
                      NCAA Division I Athlete
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#F7F2E7] p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.18em] text-[#FB4D00]">
                Hi, I’m Daniela
              </p>

              <div className="mt-8 space-y-7 text-lg leading-8 text-[#49261D]/75 md:text-xl md:leading-9">
                <p>
                  I’m an Information Science graduate, designer, strategist, and
                  former NCAA Division I athlete. My work lives where technology,
                  visual communication, data, and storytelling meet.
                </p>

                <p>
                  I enjoy taking complex ideas and turning them into experiences
                  that feel clear, thoughtful, and useful. That might mean
                  designing a website, building a dashboard, shaping a brand, or
                  creating a product from the ground up.
                </p>

                <p>
                  My background in competitive golf has shaped the way I work.
                  Years of competing at the Division I level taught me discipline,
                  resilience, preparation, and the value of continuous
                  improvement.
                </p>

                <p>
                  Today, I’m especially interested in creative strategy, digital
                  experiences, branding, data-driven decision making, and work
                  that brings together strong ideas with strong execution.
                </p>
              </div>

              <div className="mt-10 border-t border-[#49261D]/15 pt-8">
                <p className="text-xs uppercase tracking-[0.18em] text-[#49261D]/50">
                  Areas I enjoy working in
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    "Brand Strategy",
                    "Web Design",
                    "UX/UI",
                    "Data Visualization",
                    "Digital Products",
                    "Creative Direction",
                    "Storytelling",
                    "Entrepreneurship",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#49261D]/15 px-4 py-2 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#49261D] px-6 py-24 text-[#EEEBDC] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#FB4D00]">
            How I Work
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Curious by nature.
            <span className="block font-serif font-normal italic">
              Structured by experience.
            </span>
          </h2>

          <div className="mt-14 grid border-t border-[#EEEBDC]/20 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                text: "Start with the problem, the people, and the context before jumping into a solution.",
              },
              {
                number: "02",
                title: "Build",
                text: "Turn ideas into tangible systems, products, visuals, and digital experiences.",
              },
              {
                number: "03",
                title: "Refine",
                text: "Test, iterate, and improve until the work feels both useful and intentional.",
              },
            ].map((item, index) => (
              <div
                key={item.number}
                className={`border-b border-[#EEEBDC]/20 py-9 md:px-8 ${
                  index > 0 ? "md:border-l md:border-l-[#EEEBDC]/20" : "md:pl-0"
                }`}
              >
                <p className="text-xs tracking-[0.18em] text-[#FB4D00]">
                  {item.number}
                </p>

                <h3 className="mt-5 text-3xl font-medium tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-sm leading-7 text-[#EEEBDC]/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex min-h-60 flex-col justify-between rounded-[1.75rem] bg-[#FB4D00] p-7 text-[#EEEBDC]">
              <p className="text-xs uppercase tracking-[0.18em] text-[#EEEBDC]/70">
                Sport
              </p>

              <p className="max-w-xs text-3xl font-semibold leading-tight tracking-[-0.04em]">
                NCAA Division I golf shaped how I compete, prepare, and improve.
              </p>
            </div>

            <div className="flex min-h-60 flex-col justify-between rounded-[1.75rem] bg-[#CAE7F7] p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-[#49261D]/50">
                Perspective
              </p>

              <p className="max-w-xs text-3xl font-semibold leading-tight tracking-[-0.04em]">
                I move comfortably between analytical and creative thinking.
              </p>
            </div>

            <div className="flex min-h-60 flex-col justify-between rounded-[1.75rem] bg-[#F7F2E7] p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-[#49261D]/50">
                Languages
              </p>

              <p className="max-w-xs text-3xl font-semibold leading-tight tracking-[-0.04em]">
                English + Spanish, with experience across Mexico and the U.S.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12 md:px-10 md:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#FB4D00] px-8 py-16 text-[#EEEBDC] md:px-14 md:py-20">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em]">
            What’s Next
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Interested in working together?
            <span className="block font-serif font-normal italic">
              I’d love to connect.
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