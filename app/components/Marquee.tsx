const items = [
  "Fresh Groceries",
  "Household Essentials",
  "Drinks & Beverages",
  "Toiletries & Skincare",
  "Baby Products",
  "Snacks & Confectionery",
  "Same Day Delivery in Asaba",
];

const doubled = [...items, ...items];

export default function Marquee() {
  return (
    <div className="bg-gold py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-8 font-bold text-sm text-dark uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 bg-dark rounded-full" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
