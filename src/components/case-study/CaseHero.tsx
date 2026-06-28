type CaseHeroProps = {
  label: string;
  title: string;
  subtitle: string;
  details: string[];
};

export default function CaseHero({
  label,
  title,
  subtitle,
  details,
}: CaseHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-8 pt-44 pb-20">
      <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#C97C5D]">
        {label}
      </p>

      <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
        {title}
      </h1>

      <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-600">
        {subtitle}
      </p>

      <div className="mt-12 flex flex-wrap gap-3">
        {details.map((detail) => (
          <span
            key={detail}
            className="rounded-full border border-[#ECE5DF] bg-[#FAF7F3] px-4 py-2 text-sm text-neutral-700"
          >
            {detail}
          </span>
        ))}
      </div>
    </section>
  );
}