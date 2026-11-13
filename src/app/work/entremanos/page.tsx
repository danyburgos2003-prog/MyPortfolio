
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CaseHero from "@/components/case-study/CaseHero";
import CaseSection from "@/components/case-study/Section";

const gallery = [
  {
    src: "/images/entremanos/website-home.png",
    alt: "EntreManos website homepage",
    title: "Website Design",
  },
  {
    src: "/images/entremanos/brand-identity.png",
    alt: "EntreManos visual identity and branding",
    title: "Brand Identity",
  },
  {
    src: "/images/entremanos/social-media.png",
    alt: "EntreManos social media designs",
    title: "Digital Presence",
  },
];

export default function EntreManosPage() {
  return (
    <main className="min-h-screen bg-[#EEEBDC] text-[#49261D]">
      <Navbar />

      <CaseHero
        label="Client Project · 2026–Present"
        title="EntreManos"
        subtitle="Building a creative brand from the ground up through visual identity, web development, and digital storytelling."
        details={[
          "Brand Identity",
          "Web Development",
          "Next.js & React",
          "Digital Marketing",
          "Client Collaboration",
          "2026–Present",
        ]}
      />

      <CaseSection
        eyebrow="Overview"
        title="Creating a digital home for creativity and connection."
      >
        <p>
          EntreManos is a Mexico City-based creative brand
          offering workshops and shared artistic experiences.
          Its mission is to bring people together through
          creativity, hands-on activities, and meaningful
          experiences.
        </p>

        <p>
          I was hired by the founders to develop the brand's
          visual identity, build its website, and establish
          its social media presence.
        </p>

        <p>
          The objective was to create a cohesive digital
          experience that communicates the brand's personality
          while making it easy for visitors to explore
          workshops and experiences.
        </p>
      </CaseSection>

      <section className="px-6 py-8 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Brand Identity",
              text: "Developed the logo, visual direction, color palette, and typography to create a recognizable brand.",
            },
            {
              number: "02",
              title: "Web Development",
              text: "Built a responsive multi-page website using Next.js, React, TypeScript, and modern frontend practices.",
            },
            {
              number: "03",
              title: "Digital Presence",
              text: "Established the brand's social media identity and created visual content to support its launch.",
            },
          ].map((item, index) => (
            <div
              key={item.number}
              className={
                index === 0
                  ? "rounded-[1.75rem] bg-[#CAE7F7] p-7"
                  : index === 1
                    ? "rounded-[1.75rem] bg-[#C9785C] p-7 text-[#EEEBDC]"
                    : "rounded-[1.75rem] bg-[#49261D] p-7 text-[#EEEBDC]"
              }
            >
              <p className="text-xs uppercase tracking-[0.18em] opacity-60">
                {item.number}
              </p>

              <h3 className="mt-10 text-3xl font-semibold tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 opacity-75">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CaseSection
        eyebrow="Brand Identity"
        title="A warm, organic, and approachable visual language."
      >
        <p>
          The visual identity was designed to reflect the
          handmade nature of the brand. Warm terracotta tones,
          soft neutrals, and expressive visual elements
          create an inviting and recognizable aesthetic.
        </p>

        <p>
          I developed the logo concept, selected the color
          palette and typography, and established a
          consistent visual direction across the website
          and social media.
        </p>
      </CaseSection>

      <CaseSection
        eyebrow="Web Development"
        title="Turning a brand identity into a functional website."
      >
        <p>
          I developed the EntreManos website using Next.js,
          React, TypeScript, and CSS, creating responsive
          layouts and reusable components.
        </p>

        <p>
          The website includes pages for workshops, private
          experiences, the brand's story, and a gallery.
          Its structure supports future updates as the
          business expands its offerings.
        </p>

        <p>
          I managed version control through GitHub and
          deployed the website using Vercel, including
          domain configuration and ongoing updates.
        </p>
      </CaseSection>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-[#49261D]/15 pt-10">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#C9785C]">
              Selected Work
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              From visual identity
              <span className="block font-serif font-normal italic">
                to digital experience.
              </span>
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {gallery.map((item) => (
                <div key={item.src}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#F7F2E7]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <p className="mt-4 text-sm font-medium">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CaseSection
        eyebrow="Reflection"
        title="Connecting design, technology, and business."
      >
        <p>
          EntreManos allowed me to work across multiple
          disciplines while collaborating directly with
          the founders to translate their vision into a
          functional digital presence.
        </p>

        <p>
          The project strengthened my experience in frontend
          development, visual design, client communication,
          and turning business requirements into
          real-world digital solutions.
        </p>
      </CaseSection>

      <section className="px-6 pb-12 pt-8 md:px-10 md:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#49261D] px-8 py-14 text-[#EEEBDC] md:px-12 md:py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-[#E4B9A8]">
            EntreManos
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
            Creativity brought to life,
            <span className="block font-serif font-normal italic">
              online and beyond.
            </span>
          </h2>

          <a
            href="https://entremanos.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#EEEBDC] px-6 py-3 text-sm font-semibold text-[#49261D] transition hover:bg-[#E4B9A8]"
          >
            Visit Live Website ↗
          </a>
        </div>
      </section>
    </main>
  );
}
