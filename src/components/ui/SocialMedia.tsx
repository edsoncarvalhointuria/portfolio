import { useEffect, useState } from "react";
import "./social-media.scss";

function SocialMedia() {
    const [show, setShow] = useState(true);
    const [githubKey, setGithubKey] = useState(0);
    const [linkedinKey, setLinkendinKey] = useState(0);
    const [intro, setIntro] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
            setIntro(false);
        }, 2000);
    }, []);
    return (
        <div
            className={`social-media ${show ? "social-media--show" : ""}`}
            onMouseOver={() => setShow(true)}
            onMouseOut={() => {
                setShow(false);
            }}
            onClick={() => setShow(true)}
        >
            <div className="social-media__links">
                <a href="#">
                    <img
                        src={`./github${
                            !intro ? "-hover" : ""
                        }.gif?key=${githubKey}`}
                        alt="Logo Linkedin"
                        onMouseOver={() => setGithubKey((v) => v + 1)}
                    />
                </a>
                <a href="#">
                    <img
                        src={`./linkedin${
                            !intro ? "-hover" : ""
                        }.gif?key=${linkedinKey}`}
                        alt="Logo Linkedin"
                        onMouseOver={() => setLinkendinKey((v) => v + 1)}
                    />
                </a>
            </div>

            <div className="social-media__seta"></div>
            <div className="social-media__hover"></div>
        </div>
    );
}

export default SocialMedia;
