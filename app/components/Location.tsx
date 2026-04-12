"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Clock, Truck } from "lucide-react";

const MAPS_URL = "https://maps.app.goo.gl/E1zvFQ4sMBA8MreT9";

const details = [
  {
    icon: <MapPin size={20} className="text-green" />,
    label: "Address",
    value: "1 DBS Road, Frank Apokwu Crescent,\nNear Vienna Hotels, Central Core Area, Asaba",
  },
  {
    icon: <Phone size={20} className="text-green" />,
    label: "Phone / WhatsApp",
    value: "+234 813 322 7930",
  },
  {
    icon: <Clock size={20} className="text-green" />,
    label: "Opening Hours",
    value: "Monday – Saturday: 8:00am – 9:00pm\nSunday: 10:00am – 7:00pm",
  },
  {
    icon: <Truck size={20} className="text-green" />,
    label: "Delivery",
    value: "Same day delivery available within Asaba",
  },
];

export default function Location() {
  return (
    <section id="location" className="bg-cream py-20 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-green-pale text-green px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            Find Us
          </span>
          <h2 className="font-playfair text-4xl font-black text-dark leading-tight mb-2">
            Visit Us in Asaba
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            We&apos;re conveniently located and easy to find. Come shop or order online.
          </p>

          <div className="flex flex-col gap-6">
            {details.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 min-w-11 bg-green-pale rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <strong className="block text-sm font-bold text-dark mb-0.5">{item.label}</strong>
                  <span className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-green-pale rounded-3xl h-72 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-green/20"
        >
          <span className="text-5xl">📍</span>
          <p className="font-semibold text-green text-sm text-center leading-relaxed">
            Best Deal Supermarket<br />Asaba, Delta State
          </p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-green-light transition-colors duration-200"
          >
            Get Directions →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
