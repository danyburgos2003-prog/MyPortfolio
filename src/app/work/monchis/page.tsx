import Image from "next/image";
import Navbar from "@/components/Navbar";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/Section";

const galleryImages = [
  {
    src: "/images/monchis/branding/logo.png",
    alt: "Monchi's logo and brand identity",
  },
  {
    src: "/images/monchis/branding/packaging.png",
    alt: "Monchi's packaging design",
  },
  {
    src: "/images/monchis/products/product-photo-01.png",
    alt: "Monchi's product photography",
  },
  {
    src: "/images/monchis/content/instagram-grid.png",
    alt: "Monchi's Instagram content grid",
  },
  {
    src: "/images/monchis/loyalty/loyalty-card.png",
    alt: "Pedidos Monchosos loyalty card",
  },
  {
    src: "/images/monchis/marketing/marketing.png",
    alt: "Monchi's promotional content",
  },
];

export default function MonchisPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFB]">
      <Navbar />

      <CaseHero
        label="Brand & Entrepreneurship"
        title="Monchi’s: From idea to identity."
        subtitle="A Mexico City snack brand built from the ground up, including naming, visual identity, packaging, social content, product photography, loyalty strategy, and customer experience."
        details={[
          "Brand Identity",
          "Content Strategy",
          "Packaging",
          "Product Photography",
          "Social Media",
          "Entrepreneurship",
        ]}
      />

      <CaseSection
        eyebrow="Opportunity"
        title="Building a brand people could recognize and remember."
      >
        <p>
          Monchi’s began as a small snack idea and became a full brand-building
          project. My goal was to create something that felt playful,
          recognizable, and consistent across every touchpoint.
        </p>

        <p>
          I worked on the brand from concept to launch, including the name,
          visual identity, product presentation, social media content, packaging,
          and customer experience.
        </p>
      </CaseSection>

      <CaseSection
        eyebrow="Brand System"
        title="Creating a visual identity from scratch."
      >
        <p>
          I developed the core identity for Monchi’s, including the logo, colors,
          tone of voice, packaging direction, stickers, labels, and social media
          style.
        </p>

        <p>
          The brand needed to feel fun and approachable while still being clear
          enough to support product launches, menus, loyalty rewards, and
          promotional content.
        </p>
      </CaseSection>

      <CaseSection
        eyebrow="Content"
        title="Designing for Instagram, Facebook, and customer engagement."
      >
        <p>
          Much of Monchi’s lived through social media, especially Instagram. I
          created product posts, stories, reels, launch graphics, educational
          content, and promotional materials for the brand.
        </p>

        <p>
          The Instagram presence,{" "}
          <a
            href="https://www.instagram.com/monchis.mxx"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#C97C5D] underline underline-offset-4"
          >
            @monchis.mxx
          </a>
          , became a central part of how customers discovered the products,
          placed orders, and interacted with the brand.
        </p>
      </CaseSection>

      <CaseSection
        eyebrow="Customer Experience"
        title="Turning ordering into a branded experience."
      >
        <p>
          Beyond the visuals, I designed parts of the customer experience:
          packaging, menus, ordering communication, thank-you details, and the
          Pedidos Monchosos loyalty program.
        </p>

        <p>
          This helped make the brand feel more complete, creating a stronger
          experience from the first Instagram interaction to the final delivered
          product.
        </p>
      </CaseSection>

      <section className="mx-auto max-w-6xl px-8 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#C97C5D]">
          Gallery
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight">
          Brand identity, packaging, content, and product visuals.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-3xl border border-[#ECE5DF] bg-[#FAF7F3] shadow-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={800}
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </section>

      <CaseSection
        eyebrow="Reflection"
        title="Branding is the design of an entire experience."
      >
        <p>
          Monchi’s taught me that a brand is much more than a logo. It is the
          tone, visuals, packaging, content, customer communication, and small
          details that make people remember the product.
        </p>
      </CaseSection>
    </main>
  );
}