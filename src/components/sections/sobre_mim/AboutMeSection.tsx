import { motion, stagger, type Variants } from "framer-motion";
import "./about-me-section.scss";
import { useRef } from "react";
import { isMobileDevice } from "../../../utils/device";

function AboutMeSection() {
    const HABILIDADES = [
        "react",
        "typescript",
        "python",
        "node.js",
        "javascript",
        "html/css",
        "sass",
        "angular",
        "SQL",
        "postgreSQL",
        "mySQL",
        "oracleDB",
    ];
    const $sobre_mim = useRef<HTMLDivElement>(null);

    const variantsShow: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const variantsContainer: Variants = {
        hidden: {},
        visible: {
            opacity: 1,
            y: 0,
            transition: { delayChildren: stagger(0.07) },
        },
    };

    const variantsVisible: Variants = {
        hidden: {},
        visible: {
            transition: { delayChildren: stagger(0.3) },
        },
    };
    const variantsImagem: Variants = {
        hidden: { opacity: 0, y: 50, x: -80, rotate: 90 },
        visible: { opacity: 1, y: 0, x: 0, rotate: 0 },
    };
    const variantsHabilidades: Variants = {
        hidden: { opacity: 0, y: 50, x: 80 },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { delayChildren: 0.1 },
        },
    };

    return (
        <motion.section
            className="sobre-mim"
            variants={variantsVisible}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            ref={$sobre_mim}
        >
            <motion.div
                variants={variantsImagem}
                whileHover={{
                    boxShadow: "0px 0px 35px rgba(255, 255, 255, 0.8)",
                }}
                whileTap={{
                    scale: 0.9,
                    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                }}
                className="sobre-mim__imagem"
                dragConstraints={$sobre_mim}
                dragSnapToOrigin={true}
                drag={!isMobileDevice()}
            >
                <img
                    src="./EDSON_IMG.jpg"
                    alt="Imagem EDSON CARVALHO INTURIA"
                    loading="lazy"
                />
            </motion.div>

            <motion.div
                variants={variantsHabilidades}
                className="sobre-mim__container"
            >
                <h2 className="sobre-mim__h2">sobre mim</h2>
                <motion.ul
                    variants={variantsContainer}
                    className="sobre-mim__list"
                >
                    {HABILIDADES.map((v, i) => (
                        <motion.li
                            drag={true}
                            variants={variantsShow}
                            whileHover={{
                                y: -5,
                                textShadow: "0 0 8px #ffffff",
                                scale: 1.05,
                            }}
                            whileTap={{ scale: 0.5 }}
                            key={v + i}
                        >
                            {v}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.section>
    );
}

export default AboutMeSection;
