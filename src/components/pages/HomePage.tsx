import { motion } from "framer-motion";
import HeroSection from "../sections/hero/HeroSection";
import AboutMeSection from "../sections/sobre_mim/AboutMeSection";
function HomePage() {
    document.documentElement.classList.remove("projects-page-overflow");
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <HeroSection />
            <AboutMeSection />
        </motion.section>
    );
}

export default HomePage;
