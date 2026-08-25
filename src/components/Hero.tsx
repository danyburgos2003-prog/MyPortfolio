export default function Hero() {
  return (
    <section className="bg-[#EEEBDC] px-6 pb-20 pt-36 text-[#49261D] md:px-10 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 text-xs font-medium uppercase tracking-[0.18em] md:flex-row md:items-center md:justify-between">
          <p>Mexico City · 2026</p>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FB4D00]" />
            <span>Open to creative + strategic opportunities</span>
          </div>
        </div>

        <div className="max-w-6xl">
          <h1 className="text-[clamp(4rem,8.5vw,8rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em]">
            Creative
            <span className="block font-serif text-[0.8em] font-normal italic normal-case tracking-[-0.04em]">
              strategist &
            </span>
            Digital Builder
          </h1>
        </div>

        <div className="mt-12 grid gap-10 border-t border-[#49261D]/20 pt-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <p className="max-w-xl text-lg leading-8 md:text-xl">
            I turn ideas, information, and stories into thoughtful digital
            experiences, brands, and strategies.
          </p>

          <div className="md:text-right">
            <p className="text-sm uppercase leading-7 tracking-[0.16em]">
              Strategy · Design · Data · Digital
            </p>

            <a
              href="#work"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#49261D] px-6 py-3 text-sm font-medium text-[#EEEBDC] transition duration-300 hover:bg-[#FB4D00]"
            >
              Explore selected work
              <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}