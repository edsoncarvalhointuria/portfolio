import { motion } from "framer-motion";
import "./paginacao.scss";
import ArrowIcon from "./icons/ArrowIcon";

function Paginacao({
    paginaAtual,
    setPaginaAtual,
    totalPaginas,
}: {
    paginaAtual: number;
    setPaginaAtual: React.Dispatch<React.SetStateAction<number>>;
    totalPaginas: number;
}) {
    return (
        <motion.div className="paginacao" layout>
            <button
                className="paginacao__seta"
                onClick={() =>
                    setPaginaAtual(
                        () => (paginaAtual - 1 + totalPaginas) % totalPaginas
                    )
                }
            >
                <ArrowIcon />
            </button>
            <motion.div className="paginacao__numeros" layout>
                <div className="paginacao__numeros--outro">
                    {paginaAtual !== 0 ? paginaAtual : ""}
                </div>
                <div className="paginacao__numeros--atual">
                    {paginaAtual + 1}
                </div>
                <div className="paginacao__numeros--outro">
                    {(paginaAtual + 1) % totalPaginas !== 0
                        ? ((paginaAtual + 1) % totalPaginas) + 1
                        : ""}
                </div>
            </motion.div>
            <button
                className="paginacao__seta"
                onClick={() =>
                    setPaginaAtual(() => (paginaAtual + 1) % totalPaginas)
                }
            >
                <ArrowIcon />
            </button>
        </motion.div>
    );
}

export default Paginacao;
