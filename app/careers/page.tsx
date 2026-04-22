import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import ApplyForm from "@/components/careers/ApplyForm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Holding Care team as a Personal Support Specialist. Full-time and part-time positions available in the Greater Portland Area.",
};

const responsibilities = [
  "Provide one-on-one care and assistance to individuals with disabilities or chronic conditions in their own homes",
  "Help with daily tasks like bathing, dressing, grooming, and preparing meals",
  "Offer companionship and emotional support to clients, helping them feel valued and encouraged",
  "Keep the home environment clean and safe for the people you care for",
];

const requirements = [
  "Preferably a Certified Personal Support Specialist (PSS) in Maine — not yet certified? We offer training to help you get there",
  "A kind, empathetic attitude and a genuine desire to help others",
  "Great communication skills to connect with clients and their families",
  "Reliable transportation and a valid driver's license",
  "Ability to pass a background check and drug screening",
];

const benefits = [
  "Competitive pay to reward your hard work",
  "Flexible scheduling — full-time or part-time, we have options to fit your life",
  "Opportunities for professional growth and advancement",
  "A supportive, friendly team environment where you are appreciated",
];

export default function Careers() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[var(--bg-surface)] border-b border-[var(--border-light)] pt-32 pb-14 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-sm font-mono tracking-widest text-[var(--green)] uppercase mb-4">
              Join Our Team
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-[var(--text)] leading-tight mb-5">
              Careers at Holding Care
            </h1>
            <p className="text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed">
              Do you enjoy helping others and making a real difference in
              people&apos;s lives? We&apos;d love for you to join us.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Job posting */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Left column — job details */}
          <div className="md:col-span-2 space-y-12">
            <FadeIn>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-[var(--green-light)] text-[var(--green-dark)] text-sm font-medium px-4 py-1.5 rounded-full">
                  Full-time
                </span>
                <span className="bg-[var(--green-light)] text-[var(--green-dark)] text-sm font-medium px-4 py-1.5 rounded-full">
                  Part-time
                </span>
                <span className="bg-[var(--blue-light)] text-[var(--blue-dark)] text-sm font-medium px-4 py-1.5 rounded-full">
                  Greater Portland Area
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
                Personal Support Specialist (PSS)
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed">
                We&apos;re looking for compassionate, dedicated Personal Support
                Specialists to support individuals in Maine. Whether you&apos;re
                looking for full-time or part-time work, we have flexible options
                that can fit into your life.
              </p>
            </FadeIn>

            <FadeIn delay={80}>
              <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
                What You&apos;ll Do
              </h3>
              <ul className="space-y-3">
                {responsibilities.map((item) => (
                  <li key={item} className="flex gap-3 text-[var(--text-muted)]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[var(--green)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={120}>
              <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
                What We&apos;re Looking For
              </h3>
              <ul className="space-y-3">
                {requirements.map((item) => (
                  <li key={item} className="flex gap-3 text-[var(--text-muted)]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[var(--blue)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={160}>
              <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
                What We Offer
              </h3>
              <ul className="space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex gap-3 text-[var(--text-muted)]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[var(--green)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Right column — apply sidebar */}
          <div className="md:col-span-1">
            <FadeIn delay={100}>
              <div className="sticky top-28">
                <div className="bg-[var(--bg-surface)] border border-[var(--border-light)] rounded-xl p-6 mb-6">
                  <h3 className="text-base font-semibold text-[var(--text)] mb-3">
                    Quick Apply
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">
                    Send your resume and a brief note to:
                  </p>
                  <a
                    href="mailto:holdhandsinc@gmail.com"
                    className="block text-[var(--green)] font-medium text-sm break-all hover:underline mb-4"
                  >
                    holdhandsinc@gmail.com
                  </a>
                  <p className="text-sm text-[var(--text-muted)] mb-2">
                    Or call us directly:
                  </p>
                  <a
                    href="tel:+12077731400"
                    className="block text-[var(--green)] font-semibold text-lg hover:underline"
                  >
                    (207) 773-1400
                  </a>
                </div>

                <div className="bg-[var(--green-light)] border border-green-200 rounded-xl p-6">
                  <p className="text-sm text-[var(--green-dark)] font-medium mb-2">
                    Not yet certified?
                  </p>
                  <p className="text-sm text-[var(--green-dark)] leading-relaxed">
                    We offer training to help you get your PSS certification.
                    Don&apos;t let that stop you from applying.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-20 px-6 bg-[var(--bg-surface)] border-t border-[var(--border-light)]">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-2">
              Send Us a Message
            </h2>
            <p className="text-[var(--text-muted)] mb-10">
              Fill out the form below and we&apos;ll be in touch. Attach your
              resume when you follow up by email.
            </p>
            <ApplyForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
