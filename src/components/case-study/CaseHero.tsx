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
    <section className="px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-[#49261D]/20 pb-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FB4D00]">
              {label}
            </p>

            <p className="text-xs uppercase tracking-[0.18em] text-[#49261D]/45">
              Case Study
            </p>
          </div>

          <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#49261D] md:text-7xl">
            {title}
          </h1>

          <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <p className="max-w-3xl text-lg leading-8 text-[#49261D]/70 md:text-xl md:leading-9">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-3 md:justify-end">
              {details.map((detail) => (
                <span
                  key={detail}
                  className="rounded-full border border-[#49261D]/15 bg-[#F7F2E7] px-4 py-2 text-sm text-[#49261D]/75"
                >
                  {detail}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}