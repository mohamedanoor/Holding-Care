import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--text)] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
        <div className="mb-4">
  <Image src="/logo.png" alt="Holding Care" width={140} height={48} className="h-12 w-auto" />
</div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Compassionate, culturally competent personal care services — helping
            individuals live with independence and dignity at home.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-mono tracking-widest text-green-400 uppercase mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-mono tracking-widest text-green-400 uppercase mb-5">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <a
                href="tel:+12077731400"
                className="text-white font-semibold text-lg hover:text-green-400 transition-colors block"
              >
                (207) 773-1400
              </a>
              <span className="text-xs">Mon – Fri, 8am – 6pm</span>
            </li>
            <li>
              <a
                href="mailto:holdhandsinc@gmail.com"
                className="hover:text-white transition-colors"
              >
                holdhandsinc@gmail.com
              </a>
            </li>
            <li>
              203 Anderson Street
              <br />
              Portland, ME 04101
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Holding Care, LLC. All rights reserved.</p>
          <p>Serving the Greater Portland Area, Maine</p>
        </div>
      </div>
    </footer>
  );
}
