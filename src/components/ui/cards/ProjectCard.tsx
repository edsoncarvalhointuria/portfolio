import { motion, type MotionProps, type Variants } from "framer-motion";
import { isMobileDevice } from "../../../utils/device";
import type { Project } from "../../../data/projects";

const variantsCard: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
    },
};

function ProjectCard({
    project,
    isOnly,
    ...props
}: MotionProps &
    React.HTMLAttributes<HTMLDivElement> & {
        project: Project;
        isOnly: boolean;
    }) {
    document.documentElement.classList.remove("projects-page-overflow");
    return (
        <motion.div
            {...props}
            drag={!isMobileDevice()}
            dragSnapToOrigin={true}
            whileDrag={{ cursor: "grabbing", zIndex: 5 }}
            variants={variantsCard}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            whileHover={{
                y: -10,
                boxShadow: "0 0px 40px rgba(0, 255, 255, 0.3)",
                scale: 1.05,
                transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.8 }}
            className={`projeto-conteudo ${
                isOnly ? "projeto-conteudo--only" : ""
            }`}
        >
            <div className="projeto-conteudo__header">
                <span className="projeto-conteudo__header--verde"></span>
                <span className="projeto-conteudo__header--amarelo"></span>
                <span className="projeto-conteudo__header--vermelho"></span>
            </div>

            <div className="projeto-conteudo__body">
                <div className="projeto-conteudo__body-img">
                    <img
                        loading="lazy"
                        src={project.image}
                        alt={`${project.title} - ${project.category}`}
                    />
                </div>
                <div className="projeto-conteudo__body-title">
                    <p>{project.title}</p>
                </div>
            </div>

            <motion.div
                className="projeto-conteudo--overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
            >
                <img
                    src="./eye.gif"
                    loading="lazy"
                    alt="Gif de um olho piscando"
                />
            </motion.div>
        </motion.div>
    );
}

export default ProjectCard;
