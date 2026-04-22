import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Holding Care offers Personal Support Specialist services, Respite Care, Companionship, and Household Assistance across the Greater Portland Area.",
};

export default function Services() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[var(--bg-surface)] border-b border-[var(--border-light)] pt-32 pb-14 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-sm font-mono tracking-widest text-[var(--green)] uppercase mb-4">
              What We Offer
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-[var(--text)] leading-tight mb-5">
              Our Services
            </h1>
            <p className="text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed">
              At Holding Care, our primary focus is providing exceptional Personal
              Support Specialist (PSS) services — compassionate care that helps
              individuals live comfortably and independently at home.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 80}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[var(--bg-surface)] border-t border-[var(--border-light)]">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[var(--text)] mb-4">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-[var(--text-muted)] text-lg mb-8">
            Call us or send a message and we&apos;ll help you figure out the best
            plan of care for your situation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[var(--green)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--green-dark)] transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="tel:+12077731400"
              className="border-2 border-[var(--green)] text-[var(--green)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--green-light)] transition-colors"
            >
              (207) 773-1400
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
