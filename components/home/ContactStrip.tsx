import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactStrip() {
  return (
    <section className="py-20 px-6 bg-[var(--blue)] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Contact us today and we&apos;ll help you find the right care plan
              for you or your loved one. We&apos;re here to answer every
              question.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-[var(--blue)] px-7 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Send a Message
              </Link>
              <a
                href="tel:+12077731400"
                className="border-2 border-white text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                (207) 773-1400
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Address", value: "203 Anderson Street\nPortland, ME 04101" },
                { label: "Phone", value: "(207) 773-1400" },
                { label: "Hours", value: "Monday – Friday\n9:00 am – 5:00 pm" },
                { label: "Email", value: "holdhandsinc@gmail.com" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-white/10 rounded-xl p-5 border border-white/20"
                >
                  <p className="text-xs font-mono tracking-widest text-blue-200 uppercase mb-2">
                    {label}
                  </p>
                  <p className="text-white font-medium text-sm whitespace-pre-line leading-relaxed break-all">
  {value}
</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
