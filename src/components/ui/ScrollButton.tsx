import { motion } from "framer-motion";
import "./scroll-button.scss";
import { useParticleContext } from "../../contexts/ParticleContext";
import ArrowIcon from "./icons/ArrowIcon";

function ScrollButton() {
    const { setIsShake } = useParticleContext();

    return (
        <motion.button
            className="scroll-button"
            key="div-scroll"
            initial={{ opacity: 0, x: 15, rotate: 180 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: 15, rotate: 180 }}
            whileTap={{
                scale: 0.9,
                border: "1px white solid",
            }}
            onTap={() => {
                window.scrollTo({ behavior: "smooth", top: 0 });

                setTimeout(() => setIsShake((v) => !v), 200);
            }}
        >
            <ArrowIcon />
        </motion.button>
    );
}

export default ScrollButton;
