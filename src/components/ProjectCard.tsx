import Image from "next/image";

type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  type?: string;
  href?: string;
  theme?: "blue" | "orange" | "brown" | "cream";
  layout?: "small" | "large" | "featured";
};

const projectLinks: Record<string, string> = {
  Tempo: "tempo",
  "Maroon PR Analytics Dashboard": "maroon-pr",
  "Monchi’s": "monchis",
  BurgoByDaniela: "burgobydaniela",
};

const themeStyles = {
  blue: {
    card: "bg-[#CAE7F7] text-[#49261D]",
    muted: "text-[#49261D]/65",
    border: "border-[#49261D]/15",
    button: "bg-[#49261D] text-[#EEEBDC]",
  },

  orange: {
    card: "bg-[#FB4D00] text-[#EEEBDC]",
    muted: "text-[#EEEBDC]/75",
    border: "border-[#EEEBDC]/25",
    button: "bg-[#49261D] text-[#EEEBDC]",
  },

  brown: {
    card: "bg-[#49261D] text-[#EEEBDC]",
    muted: "text-[#EEEBDC]/65",
    border: "border-[#EEEBDC]/20",
    button: "bg-[#FB4D00] text-[#EEEBDC]",
  },

  cream: {
    card: "bg-[#F7F2E7] text-[#49261D]",
    muted: "text-[#49261D]/65",
    border: "border-[#49261D]/15",
    button: "bg-[#49261D] text-[#EEEBDC]",
  },
};

export default function ProjectCard({
  number,
  title,
  category,
  description,
  image,
  type,
  href,
  theme = "cream",
  layout = "small",
}: ProjectCardProps) {
  const slug = projectLinks[title];

  const link =
    type === "external" && href
      ? href
      : slug
        ? `/work/${slug}`
        : "#";

  const styles = themeStyles[theme];

  const isFeatured = layout === "featured";
  const isLarge = layout === "large";

  return (
    <a
      href={link}
      target={type === "external" ? "_blank" : undefined}
      rel={type === "external" ? "noopener noreferrer" : undefined}
      className={`group flex h-full flex-col overflow-hidden rounded-[2rem] border transition duration-500 hover:-translate-y-1 ${styles.card} ${styles.border}`}
    >
      <div
        className={`flex items-center justify-between border-b px-7 py-5 text-xs uppercase tracking-[0.18em] ${styles.border}`}
      >
        <span>{number}</span>

        <span>{type === "external" ? "External" : "Case Study"}</span>
      </div>

      <div
        className={
          isFeatured
            ? "grid flex-1 gap-8 p-7 md:grid-cols-[0.8fr_1.2fr] md:p-10"
            : "flex flex-1 flex-col"
        }
      >
        <div
          className={
            isFeatured
              ? "flex flex-col justify-between"
              : "flex flex-col p-7 md:p-8"
          }
        >
          <div>
            <p className={`text-xs uppercase tracking-[0.18em] ${styles.muted}`}>
              {category}
            </p>

            <h3
              className={`mt-5 font-semibold leading-[0.95] tracking-[-0.045em] ${
                isFeatured
                  ? "text-4xl md:text-6xl"
                  : isLarge
                    ? "text-4xl md:text-5xl"
                    : "text-3xl md:text-4xl"
              }`}
            >
              {title}
            </h3>

            <p className={`mt-6 max-w-xl leading-7 ${styles.muted}`}>
              {description}
            </p>
          </div>

          <div className="mt-8">
            <span
              className={`inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium transition duration-300 ${styles.button}`}
            >
              {type === "external" ? "Explore services" : "View project"}
              <span aria-hidden="true">↗</span>
            </span>
          </div>
        </div>

        <div
          className={
            isFeatured
              ? "relative min-h-[300px] overflow-hidden rounded-[1.5rem] bg-[#EEEBDC] md:min-h-[380px]"
              : "relative mx-7 mb-7 mt-auto aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-[#EEEBDC] md:mx-8 md:mb-8"
          }
        >
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            sizes={
              isFeatured
                ? "(max-width: 768px) 100vw, 60vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </a>
  );
}