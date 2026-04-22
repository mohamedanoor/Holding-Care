import Link from "next/link";
import { type Service } from "@/lib/services-data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white border border-[var(--border-light)] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      <div className="grid md:grid-cols-5">
        {/* Icon column */}
        <div className="md:col-span-1 bg-[var(--green-light)] flex items-center justify-center p-8">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[var(--green)] shadow-sm">
            {service.icon}
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-4 p-8">
          <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
            {service.title}
          </h3>
          <p className="text-[var(--text-muted)] leading-relaxed mb-6">
            {service.description}
          </p>

          {service.details && (
            <ul className="grid sm:grid-cols-2 gap-2 mb-6">
              {service.details.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-[var(--text-muted)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )}

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--green)] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--green-dark)] transition-colors"
          >
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
