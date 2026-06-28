type CaseSectionProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export default function CaseSection({
  eyebrow,
  title,
  children,
}: CaseSectionProps) {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-8 py-20 md:grid-cols-[0.7fr_1.3fr]">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-[#C97C5D]">
          {eyebrow}
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-700">
          {children}
        </div>
      </div>
    </section>
  );
}