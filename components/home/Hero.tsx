import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-white">
      {/* Subtle green tint background shape */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[55%] h-full -z-10"
        style={{
          background:
            "linear-gradient(135deg, #f5faf7 0%, #edf7f1 100%)",
          clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <FadeIn>
            <span className="inline-block bg-[var(--green-light)] text-[var(--green-dark)] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Serving Greater Portland, Maine
            </span>
          </FadeIn>

          <FadeIn delay={80}>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] leading-[1.1] tracking-tight mb-6">
              Compassionate Care{" "}
              <span className="text-[var(--green)]">
                in the Comfort of Your Home
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p className="text-xl text-[var(--text-muted)] leading-relaxed mb-8 max-w-lg">
              At Holding Care, we believe every individual deserves dignified,
              personalized care at home. Our dedicated team is committed to your
              independence and well-being.
            </p>
          </FadeIn>

          <FadeIn delay={240}>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/services"
                className="bg-[var(--green)] text-white px-7 py-3.5 rounded-full font-bold text-base hover:bg-[var(--green-dark)] transition-colors shadow-sm"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[var(--green)] text-[var(--green)] px-7 py-3.5 rounded-full font-bold text-base hover:bg-[var(--green-light)] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={320}>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="text-[var(--green)] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="text-[var(--text-muted)] text-base">
                Call us at{" "}
                <a
                  href="tel:+12077731400"
                  className="text-[var(--green)] font-semibold hover:underline"
                >
                  (207) 773-1400
                </a>
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Image */}
        <FadeIn delay={200} className="hidden md:block">
          <div className="relative">
          <div className="relative rounded-2xl overflow-hidden" style={{ height: "440px" }}>
          <img
              src="/speakingwithclient.jpg"
              alt="Caregiver speaking with client at home"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            {/* Floating trust badge */}
            <div className="absolute -bottom-5 -left-5 bg-white border border-[var(--border-light)] rounded-xl shadow-md px-5 py-4">
              <p className="text-2xl font-bold text-[var(--green)]">10+</p>
              <p className="text-xs text-[var(--text-muted)] font-medium">Years of Care</p>
            </div>
            <div className="absolute -top-5 -right-5 bg-white border border-[var(--border-light)] rounded-xl shadow-md px-5 py-4">
              <p className="text-2xl font-bold text-[var(--blue)]">100%</p>
              <p className="text-xs text-[var(--text-muted)] font-medium">Dedicated to You</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
