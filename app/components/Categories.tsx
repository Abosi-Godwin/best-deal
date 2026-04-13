"use client";

import { motion } from "motion/react";
import {
    ShoppingBasket,
    CupSoda,
    SprayCan,
    Home,
    Cookie,
    Baby,
    Beef,
    Pill
} from "lucide-react";

const categories = [
    {
        icon: ShoppingBasket,
        name: "Groceries",
        count: "Rice, Pasta, Oil & more"
    },
    { icon: CupSoda, name: "Drinks", count: "Juice, Water, Soda & more" },
    { icon: SprayCan, name: "Toiletries", count: "Soap, Cream, Lotion & more" },
    { icon: Home, name: "Household", count: "Cleaning, Utensils & more" },
    { icon: Cookie, name: "Snacks", count: "Biscuits, Chips & more" },
    { icon: Baby, name: "Baby Care", count: "Diapers, Milk & more" },
    { icon: Beef, name: "Frozen Food", count: "Meat, Fish & more" },
    { icon: Pill, name: "Health", count: "Vitamins, First Aid & more" }
];

export default function Categories() {
    return (
        <section id="categories" className="py-20 px-8 max-w-6xl mx-auto">
            <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block bg-green-pale text-green px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                        Shop By Category
                    </span>
                    <h2 className="font-playfair text-4xl font-black text-dark leading-tight mb-2">
                        Everything You Need,
                        <br />
                        All in One Place
                    </h2>
                    <p className="text-gray-500 text-base max-w-md leading-relaxed">
                        Browse our wide selection across all major categories —
                        stocked fresh daily.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {categories.map((cat, i) => {
                    const Icon = cat.icon;
                    return (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            className="bg-white rounded-2xl p-6 text-center cursor-pointer border-2 border-transparent shadow-sm hover:border-green hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(26,107,60,0.15)] transition-all duration-300"
                        >
                            <div
                                className="text-4xl mb-3 bg-green-pale size-10
                            flex items-center justify-center rounded-full m-auto"
                            >
                                {
                                    <Icon
                                        size={25}
                                        className="text-green-light block
                               "
                                    />
                                }
                            </div>
                            <div className="font-semibold text-sm text-dark">
                                {cat.name}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                                {cat.count}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
