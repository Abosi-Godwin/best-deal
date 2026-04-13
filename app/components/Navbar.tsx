"use client";

import Link from "next/link";

import { Menu } from "lucide-react";

const WHATSAPP =
    "https://wa.me/2348133227930?text=Hi! I'd like to shop at Best Deal Supermarket";

const links = [
    { label: "Shop", href: "#categories" },
    { label: "Deals", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Find Us", href: "#location" }
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-dark/95 backdrop-blur-md">
            <div className="font-playfair text-xl font-bold text-gold-light tracking-wide">
                Best<span className="text-white">Deal</span>
            </div>
            <Menu  size={24} className="text-cream"/>
            <ul className="hidden md:flex gap-8 list-none">
                {links.map(link => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className="text-white/75 text-sm font-medium no-underline hover:text-gold-light transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gold text-dark font-semibold text-sm px-5 py-2 rounded-full hover:bg-gold-light transition-all duration-200"
                    >
                        Order Now
                    </a>
                </li>
            </ul>
        </nav>
    );
}
