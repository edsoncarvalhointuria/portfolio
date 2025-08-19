import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./dropdown.scss";
import { categorias, type ProjectCategory } from "../../data/projects";

function DropDown({
    currentOption,
    setCurrentOption,
}: {
    currentOption: string | null;
    setCurrentOption: React.Dispatch<
        React.SetStateAction<ProjectCategory | null>
    >;
}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div className={`dropdown ${isOpen ? "dropdown--open" : ""}`}>
            <div
                onClick={() => setIsOpen((v) => !v)}
                className="dropdown__current"
            >
                {currentOption}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key={"dropdown__opcoes"}
                        className="dropdown__opcoes"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {categorias.map((v, i) => (
                            <button
                                key={v + i}
                                className="dropdown__opcoes--btn"
                                onClick={() => {
                                    setCurrentOption(v);
                                    setIsOpen(false);
                                }}
                            >
                                {v}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default DropDown;
