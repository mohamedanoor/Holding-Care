import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Holding Care's founding story, mission, and commitment to compassionate, culturally competent home care in Maine.",
};

const values = [
  {
    title: "Compassion",
    body: "We lead with empathy in every interaction, treating every client with the warmth and care they deserve.",
  },
  {
    title: "Integrity",
    body: "We are honest, transparent, and accountable — to our clients, their families, and our team.",
  },
  {
    title: "Respect",
    body: "We honor the dignity, choices, and individuality of every person in our care.",
  },
  {
    title: "Excellence",
    body: "We hold ourselves to the highest standards of care, continuously improving to serve our clients better.",
  },
];

export default function About() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[var(--bg-surface)] border-b border-[var(--border-light)] pt-32 pb-14 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="inline-block bg-[var(--green-light)] text-[var(--green-dark)] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] leading-tight">
              Who We Are
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <FadeIn>
            <span className="inline-block bg-[var(--green-light)] text-[var(--green-dark)] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Story
            </span>
            <h2 className="text-3xl font-semibold text-[var(--text)] mb-6 leading-snug">
              Founded on Compassion, Built on Trust
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-5">
              Holding Care, LLC was founded with a simple yet profound vision: to
              provide compassionate and culturally competent personal care services
              that empower individuals to live with independence, dignity, and
              comfort in the familiar surroundings of their own homes.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-5">
              Driven by our passion for making a meaningful difference in
              people&apos;s lives, we set out to create a company that prioritizes
              human connection and individualized care. Our commitment to cultural
              competence and sensitivity is at the heart of everything we do,
              ensuring that every client receives care tailored to their unique
              needs and preferences.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Over the years, we have had the privilege of serving a diverse
              community of clients across Maine, building lasting relationships
              based on trust, respect, and empathy.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <ImagePlaceholder
              label="Our team — caring professionals dedicated to your well-being"
              className="h-80 md:h-96"
            />
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-[var(--bg-surface)]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <FadeIn delay={100} className="order-2 md:order-1">
            <ImagePlaceholder
              label="Caregiver providing compassionate in-home support"
              className="h-80 md:h-96"
            />
          </FadeIn>
          <FadeIn className="order-1 md:order-2">
            <span className="inline-block bg-[var(--green-light)] text-[var(--green-dark)] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl font-semibold text-[var(--text)] mb-6 leading-snug">
              Empowering Independence at Home
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Our mission at Holding Care, LLC is to provide culturally competent
              and compassionate personal care services that empower individuals to
              live with independence, dignity, and comfort in the familiar
              surroundings of their own homes. We are dedicated to delivering
              personalized care to the diverse needs of our clients, fostering
              trust, respect, and understanding in every interaction. Through our
              commitment to excellence and affordability, we strive to be the
              trusted partner and advocate for individuals and families on their
              journey to health, healing, and well-being.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="inline-block bg-[var(--green-light)] text-[var(--green-dark)] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              What Guides Us
            </span>
            <h2 className="text-3xl font-bold text-[var(--text)]">
              Our Core Values
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map(({ title, body }, i) => (
              <FadeIn key={title} delay={i * 80}>
                <div className="bg-[var(--bg-surface)] border border-[var(--border-light)] rounded-xl p-8">
                  <div className="w-8 h-1 rounded bg-[var(--green)] mb-5" />
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                    {title}
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed text-base">
                    {body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[var(--green)] text-white">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            We&apos;d love to talk with you about your care needs and how we can
            help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[var(--green)] px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:+12077731400"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              (207) 773-1400
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
