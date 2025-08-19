import { motion, type Variants } from "framer-motion";
import DropDown from "./Dropdown";
import { useEffect, useRef, useState } from "react";
import "./filters.scss";
import { isMobileDevice } from "../../utils/device";
import type { ProjectCategory } from "../../data/projects";

const variantsFilters: Variants = {
    exit: { y: -100, opacity: 0, transition: { duration: 0.7 } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
};

function Filters({
    categoria,
    setCategoria,
    setTagsAtivas,
    tagsAtivas,
    tags,
}: {
    categoria: string | null;
    setCategoria: React.Dispatch<React.SetStateAction<ProjectCategory | null>>;
    setTagsAtivas: React.Dispatch<React.SetStateAction<string[]>>;
    tagsAtivas: string[];
    tags: string[];
}) {
    const [width, setWidth] = useState(100);

    const $containerRef = useRef<HTMLDivElement>(null);
    const $listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if ($listRef.current && $containerRef.current) {
            const diff =
                $listRef.current.scrollWidth -
                $containerRef.current.clientWidth;
            setWidth(diff);
        }
    }, [tags]);
    return (
        <motion.div
            variants={variantsFilters}
            className={`project-filters ${
                isMobileDevice() ? "project-filters--mobile" : ""
            }`}
            initial="exit"
            animate="visible"
            exit="exit"
        >
            <DropDown
                currentOption={categoria}
                setCurrentOption={setCategoria}
            />

            <div className="project-filters__container" ref={$containerRef}>
                <motion.div
                    className="project-filters__list"
                    drag="x"
                    dragConstraints={{
                        right: 0,
                        left: -width,
                    }}
                    ref={$listRef}
                    whileDrag={{ cursor: "grabbing" }}
                    layout
                    transition={{
                        layout: {
                            type: "tween",
                            duration: 0.6,
                            ease: "easeInOut",
                        },
                    }}
                >
                    {tags.map((v, i) => (
                        <motion.button
                            key={v + i}
                            layout
                            onTap={() => {
                                setTagsAtivas((ta) => {
                                    const tagsAtivasCopy = [...ta];

                                    if (tagsAtivasCopy.includes(v))
                                        tagsAtivasCopy.splice(
                                            tagsAtivasCopy.indexOf(v),
                                            1
                                        );
                                    else tagsAtivasCopy.push(v);

                                    return tagsAtivasCopy;
                                });
                            }}
                            className={`project-filters__button ${
                                tagsAtivas.includes(v)
                                    ? "project-filters__button--active"
                                    : ""
                            }`}
                        >
                            {v}
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Filters;
