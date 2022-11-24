import About from "../components/About";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Work from "../components/Work";
import Navbar from "../components/Navbar";
import { motion, useScroll } from "framer-motion";

export default function Home() {
    const { scrollYProgress } = useScroll();

    return (
        <div className=" bg-blue-100 overflow-hidden">
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="progress-bar"
            />
            <Navbar />
            <Header />
            <About />
            <Work />
            <Testimonial />
            <Footer />
        </div>
    );
}
