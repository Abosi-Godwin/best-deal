import Link from "next/link";

const links = [
  { label: "Shop", href: "#categories" },
  { label: "Deals", href: "#products" },
  { label: "Reviews", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "WhatsApp", href: "https://wa.me/2348133227930", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-dark px-8 pt-12 pb-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-6 pb-6 border-b border-white/8 mb-6">
        <div className="font-playfair text-xl font-bold text-gold-light">
          Best<span className="text-white">Deal</span>{" "}
          <span className="text-white/60 font-sans font-normal text-base">Supermarket</span>
        </div>
        <ul className="flex flex-wrap gap-6 list-none">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-white/50 text-sm no-underline hover:text-gold-light transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4 text-xs text-white/40">
        <span>© 2026 Best Deal Supermarket. All rights reserved.</span>
        <span>
          Built by{" "}
          <a
            href="https://abosi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-light hover:underline"
          >
            Abosi Godwin
          </a>
        </span>
      </div>
    </footer>
  );
}
