import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Holding Care. We serve the Greater Portland Area and are available Monday through Friday, 8am to 6pm.",
};

export default function Contact() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[var(--bg-surface)] border-b border-[var(--border-light)] pt-32 pb-14 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="inline-block bg-[var(--green-light)] text-[var(--green-dark)] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold text-[var(--text)] leading-tight mb-5">
              Get in Touch
            </h1>
            <p className="text-xl text-[var(--text-muted)] max-w-xl leading-relaxed">
              Ready to learn more about our services? We&apos;re here to help.
              Reach out and we&apos;ll respond promptly.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-16">
          {/* Form */}
          <FadeIn className="md:col-span-3">
            <ContactForm />
          </FadeIn>

          {/* Info sidebar */}
          <FadeIn delay={150} className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-sm font-bold text-[var(--green)] mb-3">
                Phone
              </h3>
              <a
                href="tel:+12077731400"
                className="text-2xl font-semibold text-[var(--text)] hover:text-[var(--green)] transition-colors"
              >
                (207) 773-1400
              </a>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                Call us during business hours
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[var(--green)] mb-3">
                Email
              </h3>
              <a
                href="mailto:holdhandsinc@gmail.com"
                className="text-[var(--text)] hover:text-[var(--green)] transition-colors font-medium break-all"
              >
                holdhandsinc@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[var(--green)] mb-3">
                Location
              </h3>
              <address className="not-italic text-[var(--text-muted)] leading-relaxed">
                203 Anderson Street
                <br />
                Portland, ME 04101
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=203+Anderson+Street+Portland+ME+04101"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--green)] hover:underline mt-2 inline-block"
              >
                View on Google Maps →
              </a>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[var(--green)] mb-3">
                Hours
              </h3>
              <p className="text-[var(--text-muted)]">Monday – Friday</p>
              <p className="text-[var(--text)] font-medium">8:00 am – 6:00 pm</p>
            </div>

            <div className="bg-[var(--green-light)] border border-green-200 rounded-xl p-6">
              <p className="text-[var(--green-dark)] font-semibold mb-1">
                Need immediate assistance?
              </p>
              <p className="text-sm text-[var(--green-dark)] leading-relaxed">
                Please call us directly at{" "}
                <a href="tel:+12077731400" className="font-semibold hover:underline">
                  (207) 773-1400
                </a>{" "}
                for the fastest response.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
