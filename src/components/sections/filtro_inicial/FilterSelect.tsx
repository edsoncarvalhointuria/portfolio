import { useState } from "react";
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

const variantsContainer = {
    exit: {
        transition: {
            delayChildren: stagger(0.1),
        },
    },
};

const variantsCard: Variants = {
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
    document.documentElement.classList.add("projects-page-overflow");
    const filtros: {
        type: string;
        icons: React.ComponentType<any>[];
        name: ProjectCategory;
    }[] = [
        {
            type: "Aplicações Web",
            icons: [NodeIcon, AngularIcon, PostgreeIcon, ReactIcon],
            name: "javascript",
        },
        {
            type: "Python",
            icons: [DjangoIcon, PythonIcon, StreamlitIcon, FlaskIcon],
            name: "python",
        },
        {
            type: "JavaScript, HTML & CSS",
            icons: [JsIcon, BootstrapIcon, HtmlIcon, SassIcon],
            name: "html-css",
        },
    ];
    return (
        <motion.div
            className="filtro-inicial"
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
    );
}

export default FilterSelect;
