import { motion, stagger, type Variants } from "framer-motion";
import { useState } from "react";
import { useParticleContext } from "../../../contexts/ParticleContext";
import type { ProjectCategory } from "../../../data/projects";
import { isMobileDevice } from "../../../utils/device";
const variantsCard: Variants = {
    hidden: {
        transition: { delayChildren: stagger(0.05, { from: "last" }) },
    },
    visible: (isHint: boolean) => {
        if (isHint)
            return {
                scale: 0.8,
            };
        return { scale: 1, transition: { delayChildren: stagger(0.2) } };
    },
    exit: {
        scale: 0,
        y: 50,
        transition: { duration: 0.4 },
    },
};

const variantsIcon: Variants = {
    hidden: {
        opacity: 0,
        scale: 0,
        x: 0,
        y: 0,
        transition: { duration: 0.3, rotate: { duration: 0 } },
    },
    visible: (values: { qtd: number; ind: number }) => {
        const fatia = (Math.PI * 2) / values.qtd;
        const angulo = fatia * values.ind;
        const raio = 120;

        const xFinal = Math.cos(angulo) * raio;
        const yFinal = Math.sin(angulo) * raio;

        return {
            x: xFinal,
            y: [yFinal, yFinal - 5, yFinal],
            scale: 1.1,
            opacity: 1,
            rotate: -360,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                rotate: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                },
                y: {
                    duration: 0.7,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                },
            },
        };
    },
};

function FilterCard({
    filtro,
    index,
    name,
    setHoverIndex,
    hoverIndex,
    icons,
    setFiltro,
}: {
    filtro: string;
    index: number;
    name: ProjectCategory;
    setHoverIndex: React.Dispatch<React.SetStateAction<number | null>>;
    hoverIndex: number | null;
    icons: React.ComponentType<any>[];
    setFiltro: React.Dispatch<React.SetStateAction<ProjectCategory | null>>;
}) {
    const [gifKey, setGifKey] = useState(0);
    const { setCollapse } = useParticleContext();
    return (
        <motion.div
            className={`filtro-inicial__opcao ${
                isMobileDevice() ? "filtro-inicial__opcao--mobile" : ""
            }`}
            onMouseEnter={() => {
                setHoverIndex(index);
                setGifKey((v) => v + 1);
            }}
            onMouseLeave={() => setHoverIndex(null)}
            whileHover={{
                scale: 1.05,
            }}
            whileTap={{ scale: 0.8 }}
            variants={variantsCard}
            animate={hoverIndex === index ? "visible" : "hidden"}
            initial={"hidden"}
            onClick={(evt) => {
                setFiltro(name);
                const rect = evt.currentTarget.getBoundingClientRect();
                const centroX = rect.left + rect.width / 2;

                const centroY =
                    rect.top +
                    rect.height / 2 -
                    (window.innerWidth >= 480 ? 10 : 20);
                setCollapse({
                    x: centroX,
                    y: centroY,
                });
            }}
        >
            <img src={`${filtro}-hover.gif?key=${gifKey}`} alt={filtro} />
            <p>{filtro}</p>

            <motion.div
                className="filtro-inicial__opcao-imagens"
                animate={
                    hoverIndex === index
                        ? {
                              rotate: 360,
                              transition: {
                                  duration: 15,
                                  repeat: Infinity,
                                  ease: "linear",
                              },
                          }
                        : {
                              opacity: 0,
                              transition: {
                                  duration: 0,
                              },
                          }
                }
            >
                {icons.map((Icon, ind) => (
                    <Icon
                        custom={{
                            qtd: icons.length,
                            ind,
                        }}
                        variants={variantsIcon}
                        key={filtro + ind}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
}

export default FilterCard;
