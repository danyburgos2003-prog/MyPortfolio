import Image from "next/image";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  image: string;
};

const projectLinks: Record<string, string> = {
  Gournal: "gournal",
  "Maroon PR Analytics Dashboard": "maroon-pr",
  "Monchi’s": "monchis",
  BurgoByDaniela: "burgobydaniela",
};

export default function ProjectCard({
  title,
  category,
  description,
  image,
}: ProjectCardProps) {
  const slug = projectLinks[title];

  return (
    <a
      href={slug ? `/work/${slug}` : "#"}
      className="group block cursor-pointer rounded-3xl border border-[#ECE5DF] bg-[#FAF7F3] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#C97C5D]"
    >
      <div className="relative mb-10 flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-[#F6D4C7] p-10">
        <Image
          src={image}
          alt={`${title} logo`}
          width={500}
          height={300}
          className="max-h-full max-w-full object-contain transition duration-700 group-hover:scale-105"
        />
      </div>

      <p className="text-sm uppercase tracking-wider text-[#C97C5D]">
        {category}
      </p>

      <h3 className="mt-4 text-3xl font-semibold tracking-tight">{title}</h3>

      <p className="mt-5 leading-8 text-neutral-600">{description}</p>
    </a>
  );
}