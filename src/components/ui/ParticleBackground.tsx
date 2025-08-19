import { useEffect, useRef } from "react";
import Particle from "../../classes/Particle";
import { useParticleContext } from "../../contexts/ParticleContext";

function ParticleBackground() {
    const { isShake, collapse } = useParticleContext();
    const $canvas = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const mouse = useRef({ x: 0 as number | null, y: 0 as number | null });
    const orientation = useRef({ x: 0, y: 0 });
    const idAnimation = useRef(0);
    const QTD_PARTICULAS = 250;

    useEffect(() => {
        if (isShake !== null) particles.current.forEach((v) => v.shake());
    }, [isShake]);

    useEffect(() => {
        if (collapse.x && collapse.y)
            particles.current.forEach((v) =>
                v.collapse(collapse.x, collapse.y)
            );
    }, [collapse]);

    useEffect(() => {
        const canvas = $canvas.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) throw new Error("Canvas não encontrado");

        // ---- Tamanho Canvas -----
        canvas.width = document.documentElement.clientWidth;
        canvas.height = window.innerHeight;

        // ---- Criando particular ----
        particles.current = [];
        for (let i = 0; i < QTD_PARTICULAS; i++)
            particles.current.push(
                new Particle(
                    canvas,
                    canvas.width * Math.random(),
                    canvas.height * Math.random(),
                    Math.random() * 4 + 2,
                    `hsl(${Math.random() * 360}, 75%, 75%)`
                )
            );

        // ---- Event Listener Orientation -----
        const orientationEvent = (evt: DeviceOrientationEvent) => {
            orientation.current.x = evt.gamma || 0;
            orientation.current.y = evt.beta || 0;
        };

        window.addEventListener("deviceorientation", orientationEvent);

        // ---- Renderizando Particulas -----
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.current.forEach((p) => {
                p.update(
                    mouse.current.x,
                    mouse.current.y,
                    orientation.current.x,
                    orientation.current.y
                );
                p.draw();
            });

            idAnimation.current = requestAnimationFrame(render);
        };

        idAnimation.current = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(idAnimation.current);
            window.removeEventListener("deviceorientation", orientationEvent);
        };
    }, []);

    return (
        <canvas
            ref={$canvas}
            onMouseMove={(evt) => {
                mouse.current.x = evt.pageX;
                mouse.current.y = evt.pageY;
            }}
            onTouchMove={(evt) => {
                const touch = evt.touches[0];
                mouse.current.x = touch.pageX;
                mouse.current.y = touch.pageY;
            }}
            onTouchEnd={() => {
                mouse.current.x = null;
                mouse.current.y = null;
            }}
        ></canvas>
    );
}

export default ParticleBackground;
