"use client";
import {
    ShoppingCart,
    DollarSign,
    Rocket,
    Star,
    RefreshCcw,
    ShieldCheck 
} from "lucide-react";

import { motion } from "motion/react";


const WHATSAPP_ORDER =
    "https://wa.me/2348133227930?text=Hi! I want to place an order 🛒";

const stats = [
    { icon: ShoppingCart, number: "500+", label: "Products In Stock" },
    { icon: Rocket, number: "Fast", label: "Same Day Delivery" },
    { icon: DollarSign, number: "Best", label: "Prices Guaranteed" },
    { icon: Star, number: "4.9★", label: "Customer Rating" },
    { icon: RefreshCcw, number: "Daily", label: "Fresh Stock" },
    { icon: ShieldCheck, number: "100%", label: "Quality Assured" } 
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-dark via-[#1a3d20] to-dark overflow-hidden px-8 pt-24 pb-16 hero-glow-top hero-glow-bottom">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10 w-full">
                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold-light px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
                        <span className="w-1.5 h-1.5 bg-gold-light rounded-full animate-pulse-dot" />
                        Now Open in Asaba
                    </div>

                    <h1 className="font-playfair text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                        Shop Smart.
                        <br />
                        Live{" "}
                        <em className="not-italic text-gold-light">Better.</em>
                    </h1>

                    <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-md">
                        Asaba&apos;s most trusted supermarket. From fresh
                        groceries to household essentials — we stock everything
                        you need at the best prices around.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href={WHATSAPP_ORDER}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gold text-dark font-bold px-7 py-3.5 rounded-full text-sm shadow-[0_4px_20px_rgba(200,151,42,0.4)] hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,151,42,0.5)] transition-all duration-300"
                        >
                            🛒 Order on WhatsApp
                        </a>
                        <a
                            href="#categories"
                            className="inline-flex items-center gap-2 bg-transparent text-white border border-white/30 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gold-light hover:text-gold-light transition-all duration-300"
                        >
                            Browse Products →
                        </a>
                    </div>
                </motion.div>

                {/* Right — Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="grid grid-cols-3 gap-4"
                >
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + i * 0.08
                                }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-md hover:bg-gold/10 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex justify-center mb-2 text-gold-light">
                                    <Icon size={28} />{" "}
                                </div>
                                <div className="font-playfair text-2xl font-black text-gold-light">
                                    {stat.number}
                                </div>
                                <div className="text-white/60 text-xs mt-1">
                                    {stat.label}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
