import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useState, type RefObject } from "react";
import MouseIcon from "./icons/MouseIcon";
import "./coach-hind.scss";

const variantsMouse: Variants = {
    initial: { x: -100, y: 100 },
    animate: {
        x: [null, 15, 5, 0],
        y: [null, 10, 20],
        skewX: [0, "0", "13deg", 0],
        scale: [1, 1, 0.8, 1],
        transition: {
            repeat: 0,
            repeatType: "reverse",
            ease: "easeInOut",
            duration: 2,
        },
    },
    exit: { opacity: 0 },
};

function CoachHind({
    clickRef,
    setShowHint,
}: {
    clickRef: RefObject<HTMLElement | null>;
    setShowHint: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [styleHand, setStyleHand] = useState({
        top: 0 as number | string,
        left: 0 as number | string,
    });
    useEffect(() => {
        const resize = () => {
            if (clickRef.current) {
                const rect = clickRef.current.getBoundingClientRect();
                setStyleHand(() => ({
                    top: rect.top + rect.height - 10,
                    left: rect.left + rect.width,
                }));
            }
        };
        resize();
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, [clickRef]);
    return (
        <motion.div className="coach-hind">
            <motion.div className="coach-hind--hand" style={styleHand}>
                <AnimatePresence>
                    <MouseIcon
                        key={"hand"}
                        variants={variantsMouse}
                        onAnimationComplete={() => setShowHint(false)}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                    />
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}

export default CoachHind;
