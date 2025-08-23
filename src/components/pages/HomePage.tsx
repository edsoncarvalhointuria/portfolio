import { motion } from "framer-motion";
import HeroSection from "../sections/hero/HeroSection";
import AboutMeSection from "../sections/sobre_mim/AboutMeSection";
import "./home-page.scss";
import { useParticleContext } from "../../contexts/ParticleContext";
import { useEffect, useRef } from "react";
import { isMobileDevice } from "../../utils/device";
function HomePage() {
    const { setIsShake } = useParticleContext();
    const lastScroll = useRef(0);
    const touchY = useRef(0);
    const $home = useRef<HTMLDivElement>(null);
    const idTimeout = useRef(0);

    useEffect(() => {
        const scroll = () => {
            const isShake =
                ($home.current?.scrollTop || 0) <=
                ($home.current?.scrollTop || 0) * 0.5;

            if (
                isShake &&
                lastScroll.current > ($home.current?.scrollTop || 0) * 0.5
            )
                setIsShake((v) => !v);

            lastScroll.current = $home.current?.scrollTop || 0;
        };

        const touchstart = (evt: TouchEvent) => {
            touchY.current = evt.touches[0].clientY;
        };
        const touchend = (evt: TouchEvent) => {
            const isShake = ($home.current?.scrollTop || 0) >= 0;

            if (isShake && touchY.current < evt.changedTouches[0]?.clientY) {
                touchY.current = evt.changedTouches[0]?.clientY;
                idTimeout.current = setTimeout(
                    () => setIsShake((v) => !v),
                    200
                );
            }
        };

        if (isMobileDevice()) {
            $home.current?.addEventListener("touchstart", touchstart);
            $home.current?.addEventListener("touchend", touchend);
        } else $home.current?.addEventListener("scroll", scroll);

        return () => {
            $home.current?.removeEventListener("scroll", scroll);
            $home.current?.removeEventListener("touchstart", touchstart);
            $home.current?.removeEventListener("touchend", touchend);
            clearTimeout(idTimeout.current);
        };
    }, []);

    document.documentElement.classList.remove("projects-page-overflow");
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            ref={$home}
            className="home-page"
        >
            <HeroSection />
            <AboutMeSection />
        </motion.section>
    );
}

export default HomePage;
