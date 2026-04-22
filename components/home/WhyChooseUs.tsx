import FadeIn from "@/components/ui/FadeIn";

const reasons = [
  {
    title: "Focus on Dignity and Respect",
    body: "We prioritize the dignity and respect of every client. Our caregivers are trained to foster an environment that promotes independence and respects personal choices, making sure clients feel valued and empowered.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Holistic Approach",
    body: "We believe in treating the whole person, not just the medical condition. Our care plans include physical health support as well as emotional and social engagement to enhance overall well-being.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: "Community Connection",
    body: "Holding Care is deeply rooted in the community. We collaborate with local providers, support groups, and organizations to ensure our clients have access to all necessary resources for their health and well-being.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-[var(--bg-surface)]">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="inline-block bg-[var(--green-light)] text-[var(--green-dark)] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Why Holding Care
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            Care You Can Count On
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto">
            We are dedicated to providing top-notch home health services that
            prioritize the well-being and comfort of our clients.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map(({ title, body, icon }, i) => (
            <FadeIn key={title} delay={i * 100}>
              <div className="bg-white border border-[var(--border-light)] rounded-xl p-8 h-full hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[var(--green-light)] rounded-xl flex items-center justify-center text-[var(--green)] mb-6">
                  {icon}
                </div>
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
  );
}
