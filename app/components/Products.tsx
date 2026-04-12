"use client";

import { motion } from "motion/react";

const WHATSAPP_BASE = "https://wa.me/2348133227930?text=Hi! I want to order ";
const WHATSAPP_ALL = "https://wa.me/2348133227930?text=Hi! Please send me your full product list 📋";

const products = [
  {
    emoji: "🛢️",
    category: "Groceries",
    name: "Golden Terra Vegetable Oil 5L",
    desc: "Pure vegetable cooking oil, perfect for everyday cooking.",
    price: "₦7,500",
  },
  {
    emoji: "🍚",
    category: "Groceries",
    name: "Royal Stallion Rice 25kg",
    desc: "Premium long grain parboiled rice. Best quality guaranteed.",
    price: "₦38,000",
  },
  {
    emoji: "🥤",
    category: "Drinks",
    name: "Coca-Cola Crate (24 Cans)",
    desc: "Chilled and refreshing. Perfect for events or everyday use.",
    price: "₦12,000",
  },
  {
    emoji: "🧴",
    category: "Toiletries",
    name: "Dettol Antiseptic Liquid 1L",
    desc: "Trusted protection for your home and family.",
    price: "₦3,200",
  },
  {
    emoji: "🍫",
    category: "Snacks",
    name: "Digestive Biscuits Assorted Pack",
    desc: "A mix of your favourite biscuit brands in one pack.",
    price: "₦2,500",
  },
  {
    emoji: "👶",
    category: "Baby Care",
    name: "Pampers Diapers (Size 3, 52pcs)",
    desc: "Soft, absorbent protection for your little one all day.",
    price: "₦14,500",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-dark py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-gold/15 text-gold-light px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
              Today&apos;s Deals
            </span>
            <h2 className="font-playfair text-4xl font-black text-white leading-tight mb-2">
              Featured Products
            </h2>
            <p className="text-white/50 text-base max-w-md leading-relaxed">
              Tap any item to order directly on WhatsApp — fast and easy.
            </p>
          </motion.div>
          <a
            href={WHATSAPP_ALL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-dark font-bold px-6 py-3 rounded-full text-sm hover:bg-gold-light transition-all duration-200"
          >
            See All Products →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/5 border border-white/8 rounded-2xl overflow-hidden hover:bg-white/8 hover:border-gold/30 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="h-40 flex items-center justify-center text-6xl bg-white/[0.03] border-b border-white/6">
                {product.emoji}
              </div>
              <div className="p-5">
                <div className="text-xs font-bold text-gold-light uppercase tracking-widest mb-1">
                  {product.category}
                </div>
                <div className="font-semibold text-white text-base mb-1">{product.name}</div>
                <div className="text-xs text-white/45 mb-4 leading-relaxed">{product.desc}</div>
                <div className="flex justify-between items-center">
                  <span className="font-playfair text-xl font-bold text-gold-light">
                    {product.price}
                  </span>
                  <a
                    href={`${WHATSAPP_BASE}${encodeURIComponent(product.name)} 🛒`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-green text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-green-light hover:scale-105 transition-all duration-200"
                  >
                    🛒 Order
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
