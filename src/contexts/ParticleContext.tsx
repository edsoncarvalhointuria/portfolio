import { createContext, useContext, useState } from "react";
import type { ParticleContextInterface } from "../interfaces/ParticleContextInterface";

const context = createContext({});
export const useParticleContext: () => ParticleContextInterface = () =>
    useContext(context) as ParticleContextInterface;

function ParticleContext({ children }: { children: React.ReactNode }) {
    const [isShake, setIsShake] = useState<boolean | null>(null);
    const [collapse, setCollapse] = useState({ x: 0, y: 0 });
    const resetCollapse = () => setCollapse({ x: 0, y: 0 });

    return (
        <context.Provider
            value={{
                isShake,
                setIsShake,
                collapse,
                setCollapse,
                resetCollapse,
            }}
        >
            {children}
        </context.Provider>
    );
}

export default ParticleContext;
