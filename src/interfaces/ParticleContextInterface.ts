import type { Dispatch, SetStateAction } from "react";

export interface ParticleContextInterface {
    isShake: boolean | null;
    setIsShake: Dispatch<SetStateAction<boolean | null>>;
    collapse: { x: number; y: number };
    setCollapse: Dispatch<SetStateAction<{ x: number; y: number }>>;
    resetCollapse: () => void;
}
