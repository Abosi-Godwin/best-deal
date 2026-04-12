"use client";

import { motion } from "motion/react";

const WHATSAPP = "https://wa.me/2348133227930?text=Hi! I want to place an order at Best Deal Supermarket 🛒";

export default function CtaBanner() {
  return (
    <section className="relative bg-gradient-to-br from-green to-[#0f3d20] py-20 px-8 text-center overflow-hidden">
      {/* Glow */}
      <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(200,151,42,0.2)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-xl mx-auto"
      >
        <h2 className="font-playfair text-4xl md:text-5xl font-black text-white mb-4">
          Ready to Shop Smart?
        </h2>
        <p className="text-white/75 text-base leading-relaxed mb-8">
          Message us on WhatsApp, tell us what you need, and we&apos;ll sort you out.
          Fast, easy, and delivered to your door.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-dark font-bold px-8 py-4 rounded-full text-lg shadow-[0_4px_20px_rgba(200,151,42,0.4)] hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-300"
        >
          🛒 Start Shopping on WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
