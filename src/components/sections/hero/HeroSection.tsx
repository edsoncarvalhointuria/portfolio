import ParticleBackground from "../../ui/ParticleBackground";
import { motion, stagger, type Variants } from "framer-motion";
import "./hero-section.scss";
import { Link } from "react-router-dom";

function HeroSection() {
    const variantsShow: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
    const variantsContainer: Variants = {
        hidden: {},
        visible: {
            opacity: 1,
            y: 0,
            transition: { delayChildren: stagger(0.04) },
        },
    };

    return (
        <section className="hero">
            <ParticleBackground />
            <motion.div
                className="hero__container"
                variants={variantsContainer}
                initial="hidden"
                animate="visible"
            >
                <h1 className="hero__h1">
                    {Array.from("edson carvalho inturia").map((v, i) =>
                        v === " " ? (
                            "\u00A0"
                        ) : (
                            <motion.span variants={variantsShow} key={v + i}>
                                {v}
                            </motion.span>
                        )
                    )}
                </h1>
                <motion.p variants={variantsShow} className="hero__text">
                    Transformando ideias em código.
                </motion.p>
                <Link to={"/projects"} className="hero__link">
                    <motion.button
                        variants={variantsShow}
                        whileHover={{
                            transition: {
                                duration: 0.3,
                                boxShadow: {
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                },
                            },
                            borderColor: "rgba(255, 255, 255, 0.8)",
                            background:
                                "linear-gradient(45deg, rgba(255,255,255,0.9), rgba(114, 114, 114, 0.9))",
                            borderRadius: "1rem",
                            color: "#000",
                            scale: 1.1,
                            boxShadow: [
                                "0px 0px 15px rgba(255, 255, 255, 0.8)",
                                "0px 0px 30px rgba(255, 255, 255, 0.9)",
                                "0px 0px 15px rgba(255, 255, 255, 0.8)",
                            ],
                        }}
                        whileTap={{
                            scale: 0.95,
                            backgroundColor: "#dddddd",
                        }}
                        onClick={() => {
                            if (
                                typeof (DeviceOrientationEvent as any)
                                    .requestPermission === "function"
                            ) {
                                (DeviceOrientationEvent as any)
                                    .requestPermission()
                                    .then((permissionState: string) => {
                                        if (permissionState === "granted") {
                                            // Permissão concedida! Agora o listener vai funcionar.
                                        }
                                    })
                                    .catch(console.error);
                            }
                        }}
                        className="hero__button"
                    >
                        Explorar Projetos
                    </motion.button>
                </Link>
            </motion.div>
        </section>
    );
}

export default HeroSection;
