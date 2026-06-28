type ImagePlaceholderProps = {
  label: string;
};

export default function ImagePlaceholder({ label }: ImagePlaceholderProps) {
  return (
    <div className="mx-auto max-w-6xl px-8 py-10">
      <div className="flex min-h-[420px] items-center justify-center rounded-[2rem] border border-[#ECE5DF] bg-[#F6D4C7]">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-700">
          {label}
        </p>
      </div>
    </div>
  );
}