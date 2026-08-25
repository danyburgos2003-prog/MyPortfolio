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
    <section className="px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-[#49261D]/15 pt-10 md:grid-cols-[0.6fr_1.4fr] md:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FB4D00]">
            {eyebrow}
          </p>
        </div>

        <div>
          <h2 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.045em] text-[#49261D] md:text-5xl">
            {title}
          </h2>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-[#49261D]/70">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}