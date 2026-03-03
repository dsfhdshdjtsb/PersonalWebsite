import { motion, AnimatePresence } from "framer-motion";
import jax from "../assets/jax2.jpg";
import { useEffect, useState, useRef } from "react";
import Project from "./Project.js";

import AA from "../assets/AA.gif";
import CE from "../assets/CE.gif";
import DDV from "../assets/DDV.gif";
import ND from "../assets/ND.gif";
import GTReviews from "../assets/GTReviews.png";
import Roadcode from "../assets/Roadcode.png";
import Therapal from "../assets/Therapal.jpg";
import Raytracer from "../assets/raytracer.png";
import loldrafttool from "../assets/loldrafttool.png";
import Contact from "./Contact";

import { fadeFromLeft, staggerContainer, staggerContainer2 } from "../utils/anim";

const IMAGES = [
    jax.src,
    CE.src,
    DDV.src,
    GTReviews.src,
    ND.src,
    Roadcode.src,
    AA.src,
    Therapal.src,
    loldrafttool.src,
    Raytracer.src,
];

const BASE_TRANSITION = { duration: 0.3, ease: "easeOut" };
const FRAME_TRANSITION = { duration: 0.5, ease: "easeInOut" };

// Specialized variant for word-by-word animation to keep it responsive
const wordStaggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.02, // Fast stagger for words
        },
    },
    exit: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02,
            staggerDirection: -1, // Symmetrical exit
        }
    }
};

const wordFadeVariant = {
    hidden: { opacity: 0, x: "-0.5rem" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: "-0.5rem", transition: { duration: 0.2 } },
};

export default function Home({ pageState }) {
    const [curImageIndex, setCurImageIndex] = useState(0);
    const [isFirstMount, setIsFirstMount] = useState(true);
    const [measuredHeight, setMeasuredHeight] = useState(0);
    const contentRef = useRef(null);
    
    const isProjects = pageState === "Projects";
    const isContact = pageState === "Contact";
    
    // Rem-based dimensions
    const frameSize = isProjects ? "30rem" : "22rem";
    const frameRadius = isProjects ? "1.5rem" : "11rem";

    // Dynamic line height logic
    const containerHeight = isProjects ? "30rem" : (measuredHeight > 0 ? `${measuredHeight}px` : "7rem");

    const animateImage = (index) => {
        if (index !== curImageIndex) {
            setCurImageIndex(index);
        }
    };

    useEffect(() => {
        setIsFirstMount(false);
    }, []);

    // Measure content height for the dividing line
    useEffect(() => {
        if (!contentRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                // We only want to set height for non-project states
                // Projects has a fixed 25rem scroll area height
                setMeasuredHeight(entry.contentRect.height);
            }
        });

        observer.observe(contentRef.current);
        return () => observer.disconnect();
    }, [pageState]);

    useEffect(() => {
        let timer;
        if (pageState === "Projects") {
            timer = setTimeout(() => setCurImageIndex(1), 450);
        } else {
            timer = setTimeout(() => setCurImageIndex(0), 800);
        }
        return () => clearTimeout(timer);
    }, [pageState]);

    const projectList = [
        { 
            index: 1,
            title: "Combat Enchantments", 
            description: "Combat Enchantments is a Minecraft Mod that adds various enchantments. Made with Java and the Fabric Modloader, Combat Enchantments has garnered over 250k downloads, and has been featured in various Youtube videos.",
            link: "https://www.curseforge.com/minecraft/mc-mods/combat-enchantments",
            dates: "August 2021 - December 2023",
            technologies: "Java, Gradle, Fabric"
        },
        { 
            index: 8,
            title: "League of Legends Winrate Predictor", 
            description: "Developed as a project for CS 4641, this web app predicts the outcome of League of Legends games based on champion drafts. The dataset was generated using the Riot Games API and AWS, and the models were trained with PyTorch.",
            link: "https://loldrafttool.vercel.app/",
            dates: "June 2025 - August 2025",
            technologies: "PyTorch, NumPy, React, Tailwind, AWS, SQL"
        },
        { 
            index: 9,
            title: "Raytracer", 
            description: "A simple, zero-dependency WIP raytracer built from the ground up in C++, currently supporting offline rendering. I made this project to learn more about graphics and GPU programming, and I aim to continue developing it whenever I have the time.",
            link: "https://github.com/dsfhdshdjtsb/raytracer",
            dates: "July 2025 - August 2025",
            technologies: "C++"
        },
        { 
            index: 2,
            title: "Dungeon Deja Vu", 
            description: "Made for Bevy Game jam 5, Dungeon Deja Vu is a platformer with a circular twist. By community vote, DDV placed 8th out of 77 entries, 3rd in game design. DDV was built with Rust and the Bevy game engine",
            link: "https://dsfhdshdjtsb.itch.io/dungeon-deja-vu",
            dates: "July 2024",
            technologies: "Rust, Bevy"
        },
        { 
            index: 7,
            title: "Therapal", 
            description: "Therapal is an omegle-style web app with AI that links together people who struggle with mental disorders. Powered by GPT-3.5, Therapal took 1st place at Hack United 2023, out of 400 people. ",
            link: "https://devpost.com/software/therapal",
            dates: "August 2023",
            technologies: "React, Material UI, GPT-3.5, Firebase, Node.js"
        },
        { 
            index: 4,
            title: "Notedrop", 
            description: "Notedrop allows users to place pegs and balls on a Pachinko-style board, and listen to the sounds as the balls hit the pegs. Notedrop won Digital Track 1st Place at Horizons 2024, and was built with Rust and Bevy.",
            link: "https://devpost.com/software/note-drop",
            dates: "March 2024",
            technologies: "Rust, Bevy"
        },
        { 
            index: 6,
            title: "Armor Abilities", 
            description: "Armor abilities is another Minecraft Mod I made to add activatable abilities to the game, including dashes, teleports, and transforming into anvils. Armor Abilities was made for both Fabric and Forge, and has around 10k downloads",
            link: "https://www.curseforge.com/minecraft/mc-mods/armor-abilities",
            dates: "June 2023",
            technologies: "Java, Gradle, Fabric, Forge"
        },
        { 
            index: 3,
            title: "GT Reviews", 
            description: "GT Reviews is a full stack web app that allows Georgia Tech students to review classes, professors, dining halls, and residence halls. GT Reviews was made for GT Web Dev, and features React, Firebase, and a Rust-built web scraper.",
            link: "https://github.com/buzzwalk/reviews",
            dates: "September - December 2023",
            technologies: "React, Chakra UI, Node.js, Firebase, Rust"
        }
    ];

    const aboutText = "Hi, I'm Nick Suh, a 3rd year CS major at Georgia Tech. I am interested in game development, web development, and digital art.";

    return (
        <div className="fixed inset-0 pointer-events-none flex flex-col items-center justify-center">
            <div className="flex items-center gap-0 lg:gap-[3rem] pointer-events-auto">
                {/* Image Wrapper */}
                <div className="hidden lg:flex w-[30rem] h-[30rem] flex-shrink-0 items-center justify-center">
                    <motion.div 
                        className="relative z-30 bg-black overflow-hidden"
                        initial={isFirstMount ? { 
                            opacity: 0,
                            height: frameSize,
                            width: frameSize,
                            borderRadius: frameRadius
                        } : false}
                        animate={{
                            opacity: 1,
                            height: frameSize,
                            width: frameSize,
                            borderRadius: frameRadius
                        }}
                        transition={{
                            opacity: { duration: 0.8, ease: "easeOut", delay: isFirstMount ? 0.2 : (isProjects ? 0.45 : 1.05) },
                            height: { ...FRAME_TRANSITION, delay: isProjects ? 0.45 : 1.05 },
                            width: { ...FRAME_TRANSITION, delay: isProjects ? 0.45 : 1.05 },
                            borderRadius: { ...FRAME_TRANSITION, delay: isProjects ? 0.45 : 1.05 }
                        }}
                    >
                        {IMAGES.map((src, index) => (
                            <motion.img
                                key={index}
                                alt={`Project preview ${index}`}
                                src={src}
                                initial={false}
                                animate={{
                                    opacity: index === curImageIndex ? 1 : 0,
                                }}
                                transition={BASE_TRANSITION}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Text and Content Area */}
                <div className="flex w-[90vw] lg:w-[44rem] h-[30rem] relative items-center flex-shrink-0 justify-center lg:justify-start">
                    {/* Border line */}
                    <motion.div 
                        className="absolute border-r-2 border-[#413C34] z-20 left-0"
                        style={{ transformOrigin: "center" }}
                        initial={isFirstMount ? { opacity: 0, height: containerHeight } : false}
                        animate={{ opacity: 1, height: containerHeight }}
                        transition={{
                            opacity: { duration: 0.3, delay: 0 },
                            height: {
                                ...BASE_TRANSITION,
                                delay: isFirstMount ? 0 : (isProjects ? 0.4 : 1.0)
                            }
                        }}
                    />

                    <div className="pl-[1.5rem] w-full h-full flex flex-col justify-center relative items-start">
                        <AnimatePresence mode="wait">
                            {pageState === "" && (
                                <motion.div
                                    key="about"
                                    ref={contentRef}
                                    className="w-full text-[1.4rem] text-[#413C34] text-left"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={wordStaggerContainer}
                                >
                                    <p className="leading-relaxed">
                                        {aboutText.split(" ").map((word, i) => (
                                            <motion.span
                                                key={i}
                                                variants={wordFadeVariant}
                                                className="inline-block mr-[0.3em]"
                                            >
                                                {word}
                                            </motion.span>
                                        ))}
                                    </p>
                                </motion.div>
                            )}

                            {isProjects && (
                                <motion.div
                                    key="projects"
                                    className="absolute left-0 right-0 h-[30rem] pl-[1.5rem] text-[1.4rem] overflow-auto pr-[1rem] scroll no-scrollbar top-1/2 -translate-y-1/2 flex flex-col items-start"
                                    style={{ overscrollBehavior: 'contain' }}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={staggerContainer2}
                                >
                                    {projectList.map((project) => (
                                        <motion.div 
                                            key={project.title}
                                            variants={fadeFromLeft}
                                            className="cursor-pointer w-full flex justify-start" 
                                            onMouseEnter={() => animateImage(project.index)}
                                        >
                                            <Project {...project} />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}

                            {isContact && (
                                <motion.div 
                                    key="contact-wrapper"
                                    ref={contentRef}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="text-[#413C34] flex flex-col justify-center items-start"
                                >
                                    <Contact animateImage={animateImage} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
