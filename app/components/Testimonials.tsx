"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    initials: "CU",
    name: "Chioma Uche",
    role: "Regular Customer",
    text: "Best Deal is truly the best! Their prices are unbeatable and the products are always fresh. I do all my family shopping here.",
  },
  {
    initials: "EO",
    name: "Emeka Okafor",
    role: "Delivery Customer",
    text: "I ordered on WhatsApp and they delivered within 2 hours. Very professional and the items were well packaged. Will keep coming back!",
  },
  {
    initials: "AN",
    name: "Adaeze Nwosu",
    role: "Loyal Customer",
    text: "I love that they stock everything — from groceries to baby items to cleaning products. No need to go to multiple stores anymore.",
  },
];

export default function Testimonials() {
  return (
    <section id="about" className="py-20 px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="inline-block bg-green-pale text-green px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
          Customer Reviews
        </span>
        <h2 className="font-playfair text-4xl font-black text-dark leading-tight mb-2">
          What Asaba is Saying
        </h2>
        <p className="text-gray-500 text-base max-w-md leading-relaxed">
          Real feedback from real customers who shop with us regularly.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-green hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            <div className="text-gold text-lg mb-4">★★★★★</div>
            <p className="text-dark text-sm leading-relaxed mb-5 italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-pale flex items-center justify-center font-bold text-green text-sm">
                {t.initials}
              </div>
              <div>
                <div className="font-bold text-sm text-dark">{t.name}</div>
                <div className="text-xs text-gray-400">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
