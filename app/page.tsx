import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Categories from "./components/Categories";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import CtaBanner from "./components/CtaBanner";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Marquee />
            <Categories />
            <Products />
            <WhyUs />
            <Testimonials />
            <CtaBanner />
            <Location />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}
