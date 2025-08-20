import { motion, type Variants } from "framer-motion";
import "./conquista.scss";
import EscadaIcon from "./icons/EscadaIcon";

const variantsShow: Variants = {
    hidden: { left: "-50%", opacity: 0.3 },
    visible: { left: 0, opacity: 1 },
};

function Conquista() {
    return (
        <motion.div
            className="conquista"
            variants={variantsShow}
            initial={"hidden"}
            transition={{ duration: 0.5 }}
            animate={"visible"}
            exit={"hidden"}
        >
            <div className="conquista__img">
                <EscadaIcon />
            </div>

            <div className="conquista__infos">
                <div className="conquista__infos--title">
                    <p>🏆 Conquista Desbloqueada!</p>
                </div>
                <div className="conquista__infos--desc">
                    <p className="conquista__infos--name">Primeiros Passos:</p>
                    <p className="conaquista__infos--info">
                        Todo herói começa em algum lugar.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default Conquista;
