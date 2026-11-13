import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#EEEBDC] text-[#49261D]">
      <Navbar />

      <section className="px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 border-b border-[#49261D]/20 pb-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#FB4D00]">
              Contact
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Have a project, opportunity,
              <span className="block font-serif font-normal italic">
                or idea in mind?
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#49261D]/70 md:text-xl">
              I’m open to creative, strategic, digital, and collaborative
              opportunities across design, technology, branding, data, sports,
              and storytelling.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="mailto:dany.burgos2003@gmail.com"
              className="group flex min-h-[320px] flex-col justify-between rounded-[2rem] bg-[#CAE7F7] p-8 transition duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.18em] text-[#49261D]/55">
                  01
                </p>

                <span className="text-xl transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#49261D]/55">
                  Career Opportunities
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em]">
                  Software Engineering, Data & Business Analytics, and Product Development.
                </h2>
              </div>
            </a>

            <a
              href="https://danielaburgos-web.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[320px] flex-col justify-between rounded-[2rem] bg-[#FB4D00] p-8 text-[#EEEBDC] transition duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.18em] text-[#EEEBDC]/70">
                  02
                </p>

                <span className="text-xl transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#EEEBDC]/70">
                  Web Design & Development
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em]">
                  Need a website? Explore my services and work.
                </h2>
              </div>
            </a>

            <a
              href="mailto:dany.burgos2003@gmail.com"
              className="group flex min-h-[320px] flex-col justify-between rounded-[2rem] bg-[#49261D] p-8 text-[#EEEBDC] transition duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.18em] text-[#EEEBDC]/60">
                  03
                </p>

                <span className="text-xl transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#EEEBDC]/60">
                  Collaborate
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em]">
                  Creative projects, partnerships, brands & ideas.
                </h2>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12 md:px-10 md:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#F7F2E7] p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#FB4D00]">
                Direct Contact
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                The easiest way to reach me is
                <span className="block font-serif font-normal italic">
                  directly.
                </span>
              </h2>
            </div>

            <div className="grid gap-4">
              <a
                href="mailto:dany.burgos2003@gmail.com"
                className="flex items-center justify-between border-b border-[#49261D]/20 py-4 transition hover:text-[#FB4D00]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#49261D]/50">
                    Email
                  </p>

                  <p className="mt-2 text-lg font-medium">
                    dany.burgos2003@gmail.com
                  </p>
                </div>

                <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/daniela-burgos-53764b185"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border-b border-[#49261D]/20 py-4 transition hover:text-[#FB4D00]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#49261D]/50">
                    LinkedIn
                  </p>

                  <p className="mt-2 text-lg font-medium">
                    Connect with me
                  </p>
                </div>

                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12 md:px-10 md:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#FB4D00] px-8 py-16 text-[#EEEBDC] md:px-14 md:py-20">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em]">
            Let’s Make Something
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Good ideas are better
            <span className="block font-serif font-normal italic">
              when they’re built.
            </span>
          </h2>

          <a
            href="mailto:dany.burgos2003@gmail.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#49261D] px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] transition hover:bg-[#EEEBDC] hover:text-[#49261D]"
          >
            Send me an email
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}