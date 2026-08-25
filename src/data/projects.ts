export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  type: "case-study" | "external";
  href?: string;
  theme: "blue" | "orange" | "brown" | "cream";
  layout: "small" | "large" | "featured";
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Tempo",
    category: "Brand Strategy · Product Design · Entrepreneurship",
    description:
      "A performance journaling brand built around rhythm, intention, and reflection, combining thoughtful physical products with a cohesive visual identity and brand experience.",
    image: "/images/tempo/preview.png",
    type: "case-study",
    theme: "blue",
    layout: "large",
  },
  {
    number: "02",
    title: "Monchi’s",
    category: "Brand Identity · Entrepreneurship",
    description:
      "A consumer snack brand built from concept to launch, including identity, packaging, social content, and customer experience.",
    image: "/images/monchis/preview.png",
    type: "case-study",
    theme: "cream",
    layout: "small",
  },
  {
    number: "03",
    title: "Web Design & Development",
    category: "Web Design · Development · Digital Experiences",
    description:
      "A freelance web design practice creating custom websites, portfolios, and digital experiences for brands, businesses, and individuals.",
    image: "/images/web-design/preview.png",
    type: "external",
    href: "https://danielaburgos-web.vercel.app/",
    theme: "orange",
    layout: "featured",
  },
  {
    number: "04",
    title: "Maroon PR Analytics Dashboard",
    category: "Data Visualization · KPI Reporting",
    description:
      "A campaign analytics dashboard built to translate performance data into clear insights for non-technical stakeholders.",
    image: "/images/maroon-pr/preview.png",
    type: "case-study",
    theme: "cream",
    layout: "small",
  },
  {
    number: "05",
    title: "BurgoByDaniela",
    category: "Creative Direction · Visual Design",
    description:
      "An independent creative practice exploring poster design, visual communication, typography, and everyday inspiration.",
    image: "/images/burgobydaniela/preview.png",
    type: "case-study",
    theme: "brown",
    layout: "large",
  },
];