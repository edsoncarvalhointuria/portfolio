import { useEffect, useRef, useState } from "react";
import { motion, stagger, type Variants } from "framer-motion";
import NodeIcon from "../../ui/icons/NodeIcon";
import AngularIcon from "../../ui/icons/AngularIcon";
import PostgreeIcon from "../../ui/icons/PostgreeIcon";
import ReactIcon from "../../ui/icons/ReactIcon";
import StreamlitIcon from "../../ui/icons/StreamlitIcon";
import FlaskIcon from "../../ui/icons/FlaskIcon";
import PythonIcon from "../../ui/icons/PythonIcon";
import DjangoIcon from "../../ui/icons/DjangoIcon";
import JsIcon from "../../ui/icons/JsIcon";
import FilterCard from "../../ui/cards/FilterCard";
import BootstrapIcon from "../../ui/icons/BootstrapIcon";
import HtmlIcon from "../../ui/icons/HtmlIcon";
import "./filter-select.scss";
import type { ProjectCategory } from "../../../data/projects";
import SassIcon from "../../ui/icons/SassIcon";
import CoachHind from "../../ui/CoachHind";
import { getCookie, setCookie } from "../../../utils/cookie";

const variantsContainer = {
    exit: {
        transition: {
            delayChildren: stagger(0.1),
        },
    },
};

const variantsCard: Variants = {
    visible: (showHint: boolean) => {
        if (showHint)
            return {
                zIndex: 31,
                scale: [1, 1, 1, 0.8, 1],
                transition: { duration: 2 },
            };
        return { scale: 1 };
    },
    exit: {
        scale: 0,
        transition: { duration: 0.4 },
    },
};

function FilterSelect({
    galeria,
    setFiltro,
}: {
    setFiltro: React.Dispatch<React.SetStateAction<ProjectCategory | null>>;
    galeria: React.RefObject<HTMLDivElement | null>;
}) {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const [showHint, setShowHint] = useState(false);
    const $card = useRef<HTMLImageElement>(null);
    const filtros: {
        type: string;
        icons: React.ComponentType<any>[];
        name: ProjectCategory;
    }[] = [
        {
            type: "Python",
            icons: [DjangoIcon, PythonIcon, StreamlitIcon, FlaskIcon],
            name: "python",
        },
        {
            type: "Aplicações Web",
            icons: [NodeIcon, AngularIcon, PostgreeIcon, ReactIcon],
            name: "javascript",
        },
        {
            type: "JavaScript, HTML & CSS",
            icons: [JsIcon, BootstrapIcon, HtmlIcon, SassIcon],
            name: "html-css",
        },
    ];

    useEffect(() => {
        // if (getCookie("showHintFilters")) return;

        setTimeout(() => {
            setCookie("showHintFilters", "true", 1);
            setShowHint(true);
        }, 1500);
    }, []);

    document.documentElement.classList.add("projects-page-overflow");
    return (
        <>
            <motion.div
                className={`filtro-inicial ${
                    showHint ? "filtro-inicial--hint" : ""
                }`}
                variants={variantsContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {filtros.map((v, i) => {
                    return (
                        <motion.div
                            drag={true}
                            whileDrag={{ cursor: "grabbing" }}
                            dragConstraints={galeria}
                            key={v.type + i}
                            variants={variantsCard}
                            custom={showHint && i === 1}
                            ref={i === 1 ? $card : null}
                        >
                            <FilterCard
                                filtro={v.type}
                                icons={v.icons}
                                index={i}
                                name={v.name}
                                hoverIndex={hoverIndex}
                                setHoverIndex={setHoverIndex}
                                setFiltro={setFiltro}
                            />
                        </motion.div>
                    );
                })}
            </motion.div>
            {showHint && (
                <CoachHind clickRef={$card} setShowHint={setShowHint} />
            )}
        </>
    );
}

export default FilterSelect;
