import Navbar from "@/components/Navbar";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/Section";
import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";

export default function MonchisPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFB]">
      <Navbar />

      <CaseHero
        label="Brand Identity"
        title="Monchi's"
        subtitle="Creating a playful snack brand from the ground up—from naming and visual identity to packaging, content strategy, and customer experience."
        details={[
          "Brand Strategy",
          "Creative Direction",
          "Packaging",
          "Content Creation",
          "Social Media",
          "Photography",
        ]}
      />

      <ImagePlaceholder label="Brand Identity Showcase" />

      <CaseSection
        eyebrow="Challenge"
        title="Building a brand people could recognize and remember."
      >
        <p>
          Monchi's began with a simple question: how could homemade snacks feel
          like a modern consumer brand rather than just another local business?
        </p>

        <p>
          The objective wasn't simply to sell products—it was to create an
          identity people wanted to interact with and remember.
        </p>
      </CaseSection>

      <CaseSection
        eyebrow="Identity"
        title="Every detail contributes to the brand."
      >
        <p>
          I developed the complete visual identity, including the name, logo,
          color palette, typography, packaging, stickers, product labels, and
          social media presence.
        </p>

        <p>
          Every touchpoint was designed to feel playful, approachable, and
          consistent across digital and physical experiences.
        </p>
      </CaseSection>

      <ImagePlaceholder label="Packaging • Stickers • Social Media" />

      <CaseSection
        eyebrow="Content"
        title="Building a recognizable voice online."
      >
        <p>
          Beyond the visual identity, I planned and designed Instagram and
          Facebook content, product photography, reels, promotional campaigns,
          loyalty initiatives, and launch announcements.
        </p>

        <p>
          The goal was to create a brand personality rather than simply promote
          products.
        </p>
      </CaseSection>

      <CaseSection
        eyebrow="Reflection"
        title="Branding extends far beyond a logo."
      >
        <p>
          Monchi's taught me that branding is the design of an entire experience.
          Every interaction—from opening a package to seeing a social media
          post—shapes how people remember a company.
        </p>
      </CaseSection>
    </main>
  );
}