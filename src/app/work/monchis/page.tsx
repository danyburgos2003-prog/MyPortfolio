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
    <main className="min-h-screen bg-[#EEEBDC] text-[#49261D]">
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
            className="font-medium text-[#FB4D00] underline decoration-[#FB4D00]/40 underline-offset-4 transition hover:text-[#49261D]"
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

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-[#49261D]/15 pt-10">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#FB4D00]">
              Gallery
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Brand identity, packaging,
              <span className="block font-serif font-normal italic">
                content & product visuals.
              </span>
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {galleryImages.map((image, index) => (
                <div
                  key={image.src}
                  className={
                    index === 0 || index === 5
                      ? "relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-[#F7F2E7] md:col-span-2"
                      : "relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#F7F2E7]"
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      index === 0 || index === 5
                        ? "(max-width: 768px) 100vw, 1200px"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="object-cover transition duration-700 hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          </div>
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

      <section className="px-6 pb-12 pt-8 md:px-10 md:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#FB4D00] px-8 py-14 text-[#EEEBDC] md:px-12 md:py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-[#EEEBDC]/70">
            Monchi’s
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
            From a small idea
            <span className="block font-serif font-normal italic">
              to a complete brand experience.
            </span>
          </h2>
        </div>
      </section>
    </main>
  );
}