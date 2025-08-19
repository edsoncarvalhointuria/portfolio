import { AnimatePresence } from "framer-motion";
import "./app.scss";
import ScrollButton from "./components/ui/ScrollButton";
import { useEffect, useRef, useState } from "react";
import SocialMedia from "./components/ui/SocialMedia";
import HomePage from "./components/pages/HomePage";
import ProjectsPage from "./components/pages/ProjectsPage";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
    const [showScroll, setShowScroll] = useState(false);
    const showScrollRef = useRef<boolean>(showScroll);
    const location = useLocation();

    useEffect(() => {
        showScrollRef.current = showScroll;
    }, [showScroll]);

    useEffect(() => {
        const scroll = () => {
            const scroll = window.scrollY > window.innerHeight * 0.3;

            if (showScrollRef.current !== scroll) setShowScroll(scroll);
        };

        window.addEventListener("scroll", scroll);

        return () => {
            window.removeEventListener("scroll", scroll);
        };
    }, []);

    return (
        <main>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route index element={<HomePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                </Routes>
            </AnimatePresence>

            <AnimatePresence>{showScroll && <ScrollButton />}</AnimatePresence>

            <SocialMedia />
        </main>
    );
}

export default App;
