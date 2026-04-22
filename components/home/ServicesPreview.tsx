import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { services } from "@/lib/services-data";

export default function ServicesPreview() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block bg-[var(--green-light)] text-[var(--green-dark)] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              What We Provide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)]">
              Our Services
            </h2>
          </div>
          <Link
            href="/services"
            className="text-[var(--green)] font-bold hover:underline whitespace-nowrap"
          >
            View all services →
          </Link>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 80}>
              <div className="group border border-[var(--border-light)] rounded-xl p-7 hover:border-[var(--green)] hover:shadow-sm transition-all bg-white">
                <div className="w-10 h-10 rounded-lg bg-[var(--green-light)] flex items-center justify-center text-[var(--green)] mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--text-muted)] text-base leading-relaxed mb-5">
                  {service.summary}
                </p>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-[var(--green)] hover:text-[var(--green-dark)] transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
