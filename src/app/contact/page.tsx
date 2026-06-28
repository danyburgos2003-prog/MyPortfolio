import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFB]">
      <Navbar />

      <section className="mx-auto max-w-6xl px-8 pt-44 pb-28">
        <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#C97C5D]">
          Contact
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          Let’s build something.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-600">
          I’m always open to opportunities in product, data visualization,
          design, technology, sports, and creative storytelling.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <a
            href="mailto:dany.burgos2003@gmail.com"
            className="rounded-3xl border border-[#ECE5DF] bg-[#FAF7F3] p-8 transition hover:-translate-y-1 hover:border-[#C97C5D]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#C97C5D]">
              Email
            </p>
            <p className="mt-5 text-2xl font-semibold">
              dany.burgos2003@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/daniela-burgos-53764b185"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-[#ECE5DF] bg-[#FAF7F3] p-8 transition hover:-translate-y-1 hover:border-[#C97C5D]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#C97C5D]">
              LinkedIn
            </p>
            <p className="mt-5 text-2xl font-semibold">
              Connect with me
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}