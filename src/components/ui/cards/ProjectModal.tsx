import { motion, stagger, type Variants } from "framer-motion";
import { useState, type RefObject } from "react";
import { isMobileDevice } from "../../../utils/device";
import type { Project } from "../../../data/projects";

const variantsButton: Variants = {
    initial: {
        boxShadow: "0 0 0px rgba(0, 255, 255, 0.6)",
        color: "rgba(255, 255, 255, 0.8)",
    },
    whileHover: {
        color: "rgba(255, 255, 255)",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.6)",
        scale: 1.05,
    },
    whileTap: { scale: 0.6 },
};

const variantsContainer: Variants = {
    hidden: {},
    visible: { transition: { delayChildren: stagger(0.2) } },
};

const variantsTag: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

function ProjectModal({
    project,
    closeProject,
    galeria,
    isModal,
    setShowFilters,
}: {
    project: Project;
    closeProject: React.Dispatch<React.SetStateAction<Project | null>>;
    galeria: RefObject<HTMLDivElement | null>;
    isModal: RefObject<boolean>;
    setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [isVideoLoading, setIsVideoLoading] = useState(true);

    const stopTouch = (evt: TouchEvent) => {
        evt.preventDefault();
    };
    return (
        <motion.div
            transition={{ type: !isMobileDevice() ? "spring" : "tween" }}
            layoutId={`project-card-${project.id}`}
            className="projeto-modal"
            dragConstraints={galeria}
            whileDrag={{ cursor: "grabbing" }}
            onDragStart={() => {
                isMobileDevice() &&
                    document.body.addEventListener("touchmove", stopTouch, {
                        passive: false,
                    });
            }}
            onDragEnd={() =>
                isMobileDevice() &&
                document.body.removeEventListener("touchmove", stopTouch)
            }
            drag={true}
        >
            <div className="projeto-modal__header">
                <h2>{project.title}</h2>
                <div className="projeto-modal__header--luzes">
                    <span className="projeto-modal__header--verde"></span>
                    <span className="projeto-modal__header--amarelo"></span>
                    <span
                        className="projeto-modal__header--vermelho"
                        onClick={() => {
                            closeProject(null);
                            setShowFilters(true);
                            isModal.current = false;
                        }}
                    ></span>
                </div>
            </div>

            <div className="projeto-modal__body">
                <div
                    className={`projeto-modal__body-video ${
                        isVideoLoading
                            ? "projeto-modal__body-video--spinner"
                            : ""
                    }`}
                >
                    <video
                        muted
                        autoPlay
                        loop
                        src={project.video}
                        onCanPlay={() => setIsVideoLoading(false)}
                    />
                </div>
                <div className="projeto-modal__body-description">
                    <p>{project.description}</p>
                </div>

                <motion.div
                    variants={variantsContainer}
                    initial={"hidden"}
                    animate={"visible"}
                    className="projeto-modal__body-tags"
                >
                    {project.tags.map((v) => (
                        <motion.span
                            key={v + project.id}
                            variants={variantsTag}
                            whileHover={{
                                y: -5,
                                textShadow: "0 0 8px #ffffff",
                                scale: 1.05,
                            }}
                            whileTap={{ scale: 0.5 }}
                        >
                            {v}
                        </motion.span>
                    ))}
                </motion.div>

                <div className="projeto-modal__body-buttons">
                    <motion.button
                        variants={variantsButton}
                        initial="initial"
                        whileHover="whileHover"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                        ver no github
                    </motion.button>
                    {project.liveUrl && (
                        <motion.button
                            variants={variantsButton}
                            initial="initial"
                            whileHover="whileHover"
                            onClick={() =>
                                window.open(project.liveUrl!, "_blank")
                            }
                        >
                            ver ao vivo
                        </motion.button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectModal;
