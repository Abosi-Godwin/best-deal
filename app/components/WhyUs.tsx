"use client";
import { motion } from "motion/react";
import {
    BadgeDollarSign,
    Package,
    MessageCircle,
    ShieldCheck
} from "lucide-react";

const reasons = [
    {
        icon: BadgeDollarSign,
        title: "Best Prices in Asaba",
        desc: "We work directly with suppliers so you always get the most competitive prices on every product."
    },
    {
        icon: Package,
        title: "Daily Fresh Stock",
        desc: "Our shelves are restocked daily so you never find expired or old products in our store."
    },
    {
        icon: MessageCircle,
        title: "WhatsApp Ordering",
        desc: "Order from the comfort of your home and get delivery same day within Asaba."
    },
    {
        icon: ShieldCheck,
        title: "Quality Guaranteed",
        desc: "Every product on our shelves is quality checked. We only stock trusted brands you can rely on."
    }
];

export default function WhyUs() {
    return (
        <section className="bg-green-pale py-20 px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <span className="inline-block bg-white text-green px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                        Why Choose Us
                    </span>
                    <h2 className="font-playfair text-4xl font-black text-dark leading-tight mb-2">
                        The Best Deal
                        <br />
                        Every Time
                    </h2>
                    <p className="text-gray-500 text-base max-w-md leading-relaxed">
                        We&apos;re not just a supermarket. We&apos;re your
                        neighbourhood shopping partner.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, i) => {
                        const Icon = reason.icon;
                        return (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(26,107,60,0.12)] transition-all duration-300"
                            >
                                <div className="w-13 h-13 bg-green-pale rounded-xl flex items-center justify-center text-2xl mb-5">
                                    <Icon size={24} className="text-green" />
                                </div>
                                <div className="font-bold text-base text-dark mb-2">
                                    {reason.title}
                                </div>
                                <div className="text-sm text-gray-500 leading-relaxed">
                                    {reason.desc}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
