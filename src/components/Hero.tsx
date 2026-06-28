export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-8 pt-44 pb-28">
      <p className="mb-6 text-sm uppercase tracking-[0.25em] text-neutral-500">
        Information Scientist · Product Builder · Designer
      </p>

      <h1 className="max-w-5xl text-6xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
        Designing clarity through data, design, and technology.
      </h1>

      <p className="mt-10 max-w-2xl text-xl leading-9 text-neutral-600">
        I build products and experiences that transform complex information
        into intuitive, human-centered solutions.
      </p>

      <div className="mt-12 flex gap-4">
        <a
          href="#work"
          className="rounded-full bg-[#262626] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#C97C5D]"
        >
          View selected work
        </a>

        <a
          href="#contact"
          className="rounded-full border border-[#ECE5DF] px-6 py-3 text-sm font-medium transition hover:border-[#C97C5D] hover:text-[#C97C5D]"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}