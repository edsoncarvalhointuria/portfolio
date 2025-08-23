import ParticleBackground from "../ui/ParticleBackground";
import { useEffect, useMemo, useRef, useState } from "react";
import FilterSelect from "../sections/filtro_inicial/FilterSelect";
import { AnimatePresence, motion } from "framer-motion";
import { useParticleContext } from "../../contexts/ParticleContext";
import ProjectCard from "../ui/cards/ProjectCard";
import ProjectModal from "../ui/cards/ProjectModal";
import "./projects-page.scss";
import Filters from "../ui/Filters";
import {
    projects,
    type Project,
    type ProjectCategory,
} from "../../data/projects";
import Conquista from "../ui/Conquista";
import { isMobileDevice } from "../../utils/device";
import Paginacao from "../ui/Paginacao";

function ProjectsPage() {
    const QTD_PAGINA = isMobileDevice() ? 9 : 9;
    const [showGallery, setShowGallery] = useState(false);
    const [showProjeto, setShowProjeto] = useState<Project | null>(null);
    const [showFilters, setShowFilters] = useState(true);
    const [showConquista, setShowConquista] = useState(false);
    const [projectsState, setProjectsState] = useState<Project[]>([]);
    const [categoria, setCategoria] = useState<ProjectCategory | null>(null);
    const [tags, setTags] = useState<string[]>([]);
    const [tagsAtivas, setTagsAtivas] = useState<string[]>([]);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [totalPaginas, setTotalPaginas] = useState(1);

    const $galeria = useRef<HTMLDivElement>(null);
    const lastScroll = useRef(0);
    const showFiltersRef = useRef(showFilters);
    const isModal = useRef(false);
    const idTimeout = useRef(0);

    const { collapse, resetCollapse } = useParticleContext();

    const projectsMemo = useMemo(
        () => projects.filter((p) => p.category === categoria),
        [categoria, projects]
    );

    useEffect(() => {
        if (showConquista)
            idTimeout.current = setTimeout(() => setShowConquista(false), 3000);

        return () => clearTimeout(idTimeout.current);
    }, [showConquista]);
    useEffect(() => {
        if (!tagsAtivas.length) {
            setProjectsState(() => {
                const indiceInicial = paginaAtual * QTD_PAGINA;
                const p = projectsMemo.slice(
                    indiceInicial,
                    indiceInicial + QTD_PAGINA
                );
                return p;
            });
            setTotalPaginas(Math.ceil(projectsMemo.length / QTD_PAGINA));
            return;
        }
        const indiceInicial = paginaAtual * QTD_PAGINA;
        const filtro = projectsMemo.filter((p) =>
            tagsAtivas.find((c) => p.tags.includes(c))
        );
        setTotalPaginas(Math.ceil(filtro.length / QTD_PAGINA));
        setProjectsState(
            filtro.slice(indiceInicial, indiceInicial + QTD_PAGINA)
        );
    }, [tagsAtivas, paginaAtual]);
    useEffect(() => {
        setTagsAtivas([]);
        const primeiros = ["React", "Angular", "TypeScrit", "Django", "Flask"];

        setTags(
            Array.from(new Set(projectsMemo.map((v) => v.tags).flat())).sort(
                (v) => (primeiros.includes(v) ? -1 : 1)
            )
        );

        setPaginaAtual(0);
    }, [projectsMemo]);
    useEffect(() => {
        if (collapse.x && collapse.y) {
            setTimeout(() => setShowGallery(true), 1400);
            resetCollapse();
        }
    }, [collapse]);
    useEffect(() => {
        showFiltersRef.current = showFilters;
    }, [showFilters]);
    useEffect(() => {
        const scroll = () => {
            if (
                !isModal.current &&
                !showFiltersRef.current &&
                window.scrollY < lastScroll.current
            )
                setShowFilters(true);
            else if (
                window.scrollY > 100 &&
                showFiltersRef.current &&
                window.scrollY > lastScroll.current
            )
                setShowFilters(false);

            lastScroll.current = window.scrollY;
        };
        window.addEventListener("scroll", scroll);

        setProjectsState(projects);

        const tags = projects.reduce((prev, current) => {
            current.tags.forEach((v) => {
                if (!prev.includes(v)) prev.push(v);
            });
            return prev;
        }, [] as string[]);

        setTags(tags);

        return () => window.removeEventListener("scroll", scroll);
    }, []);
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            ref={$galeria}
            className="projects-page"
        >
            {showGallery ? (
                <div className="projetos-galeria">
                    <AnimatePresence>
                        {showFilters && (
                            <Filters
                                categoria={categoria}
                                setCategoria={setCategoria}
                                setTagsAtivas={setTagsAtivas}
                                tags={tags}
                                tagsAtivas={tagsAtivas}
                                key={"project-filters"}
                                setPaginaAtual={setPaginaAtual}
                            />
                        )}
                    </AnimatePresence>
                    {showProjeto ? (
                        <ProjectModal
                            project={showProjeto}
                            closeProject={setShowProjeto}
                            galeria={$galeria}
                            isModal={isModal}
                            setShowFilters={setShowFilters}
                        />
                    ) : (
                        <></>
                    )}
                    <AnimatePresence>
                        {projectsState.map((v) => (
                            <ProjectCard
                                key={v.title + v.id}
                                isOnly={projectsState.length === 1}
                                project={v}
                                dragConstraints={$galeria}
                                onClick={() => {
                                    if (!isModal.current) {
                                        setShowProjeto(v);
                                        setShowFilters(false);
                                        isModal.current = true;
                                        if (v.title === "Portfólio (Antigo)")
                                            setShowConquista(true);
                                    } else {
                                        setShowProjeto(null);
                                        isModal.current = false;
                                    }
                                }}
                                layoutId={`project-card-${v.id}`}
                            />
                        ))}
                    </AnimatePresence>
                    {!showProjeto && (
                        <Paginacao
                            paginaAtual={paginaAtual}
                            setPaginaAtual={setPaginaAtual}
                            totalPaginas={totalPaginas}
                        />
                    )}{" "}
                </div>
            ) : (
                <>
                    <ParticleBackground />
                    <AnimatePresence>
                        {!categoria ? (
                            <FilterSelect
                                key={"filtro-select-component"}
                                galeria={$galeria}
                                setFiltro={setCategoria}
                            />
                        ) : (
                            <></>
                        )}
                    </AnimatePresence>
                </>
            )}
            <AnimatePresence>
                {showConquista && <Conquista key="conquista" />}
            </AnimatePresence>
        </motion.section>
    );
}

export default ProjectsPage;
