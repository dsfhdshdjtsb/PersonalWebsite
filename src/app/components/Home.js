import { motion, AnimatePresence } from "framer-motion";
import jax from "../assets/jax2.jpg";
import { useEffect, useState } from "react";
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

export default function Home({ pageState }) {
    const [curImageIndex, setCurImageIndex] = useState(0);
    const [isFirstMount, setIsFirstMount] = useState(true);
    const isProjects = pageState === "Projects";
    const isContact = pageState === "Contact";
    
    const containerHeight = isProjects ? "30vw" : "7vw";
    const frameSize = isProjects ? "30vw" : "25vw";
    const frameRadius = isProjects ? "2vw" : "17vw";

    const animateImage = (index) => {
        if (index !== curImageIndex) {
            setCurImageIndex(index);
        }
    };

    useEffect(() => {
        setIsFirstMount(false);
    }, []);

    useEffect(() => {
        let timer;
        if (pageState === "Projects") {
            timer = setTimeout(() => setCurImageIndex(1), 450);
        } else {
            timer = setTimeout(() => setCurImageIndex(0), 1050);
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
            technologies: "Java, Gradle, Fabric",
            role: "Creator"
        },
        { 
            index: 8,
            title: "League of Legends Winrate Predictor", 
            description: "Developed as a project for CS 4641, this web app predicts the outcome of League of Legends games based on champion drafts. The dataset was generated using the Riot Games API and AWS, and the models were trained with PyTorch.",
            link: "https://loldrafttool.vercel.app/",
            dates: "June 2025 - August 2025",
            technologies: "PyTorch, NumPy, React, Tailwind, AWS, SQL",
            role: "Programmer"
        },
        { 
            index: 9,
            title: "Raytracer", 
            description: "A simple, zero-dependency WIP raytracer built from the ground up in C++, currently supporting offline rendering. I made this project to learn more about graphics and GPU programming, and I aim to continue developing it whenever I have the time.",
            link: "https://github.com/dsfhdshdjtsb/raytracer",
            dates: "July 2025 - August 2025",
            technologies: "C++",
            role: "Programmer"
        },
        { 
            index: 2,
            title: "Dungeon Deja Vu", 
            description: "Made for Bevy Game jam 5, Dungeon Deja Vu is a platformer with a circular twist. By community vote, DDV placed 8th out of 77 entries, 3rd in game design. DDV was built with Rust and the Bevy game engine",
            link: "https://dsfhdshdjtsb.itch.io/dungeon-deja-vu",
            dates: "July 2024",
            technologies: "Rust, Bevy",
            role: "Programmer, Artist"
        },
        { 
            index: 7,
            title: "Therapal", 
            description: "Therapal is an omegle-style web app with AI that links together people who struggle with mental disorders. Powered by GPT-3.5, Therapal took 1st place at Hack United 2023, out of 400 people. ",
            link: "https://devpost.com/software/therapal",
            dates: "August 2023",
            technologies: "React, Material UI, GPT-3.5, Firebase, Node.js",
            role: "Programmer"
        },
        { 
            index: 4,
            title: "Notedrop", 
            description: "Notedrop allows users to place pegs and balls on a Pachinko-style board, and listen to the sounds as the balls hit the pegs. Notedrop won Digital Track 1st Place at Horizons 2024, and was built with Rust and Bevy.",
            link: "https://devpost.com/software/note-drop",
            dates: "March 2024",
            technologies: "Rust, Bevy",
            role: "Programmer"
        },
        { 
            index: 6,
            title: "Armor Abilities", 
            description: "Armor abilities is another Minecraft Mod I made to add activatable abilities to the game, including dashes, teleports, and transforming into anvils. Armor Abilities was made for both Fabric and Forge, and has around 10k downloads",
            link: "https://www.curseforge.com/minecraft/mc-mods/armor-abilities",
            dates: "June 2023",
            technologies: "Java, Gradle, Fabric, Forge",
            role: "Creator"
        },
        { 
            index: 3,
            title: "GT Reviews", 
            description: "GT Reviews is a full stack web app that allows Georgia Tech students to review classes, professors, dining halls, and residence halls. GT Reviews was made for GT Web Dev, and features React, Firebase, and a Rust-built web scraper.",
            link: "https://github.com/buzzwalk/reviews",
            dates: "September - December 2023",
            technologies: "React, Chakra UI, Node.js, Firebase, Rust",
            role: "Project Manager"
        }
    ];

    return (
        <div className="fixed ml-[10vw] h-[75%] w-[65vw] flex items-center justify-between">
            {/* Image Container */}
            <motion.div 
                className="relative z-30 bg-black overflow-hidden"
                initial={{ 
                    opacity: 0,
                    height: frameSize,
                    width: frameSize,
                    borderRadius: frameRadius
                }}
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

            {/* Decorative background block */}
            <div className="absolute z-[25] h-[35vw] w-[35vw] translate-y-[-14vw] translate-x-[-4vw] bg-[#F5F5F5]"></div>

            {/* Text and Content Area */}
            <div className="flex w-[30vw] relative h-[30vw] items-center">
                {/* Border line */}
                <motion.div 
                    className="absolute border-r-2 border-[#413C34] w-[30vw] z-20 right-[31vw]"
                    style={{ transformOrigin: "bottom" }}
                    initial={{ opacity: 0, height: containerHeight }}
                    animate={{ opacity: 1, height: containerHeight }}
                    transition={{
                        opacity: { duration: 0.3, delay: 0 },
                        height: {
                            ...BASE_TRANSITION,
                            delay: isFirstMount ? 0 : (isProjects ? 0.3 : 0.9)
                        }
                    }}
                />

                <AnimatePresence mode="wait">
                    {pageState === "" && (
                        <motion.div
                            key="home"
                            className="absolute w-[40vw] text-[1.5vw]"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={staggerContainer}
                        >
                            <motion.p variants={fadeFromLeft}>
                                Hi, I'm Nick Suh, a 3rd year CS major at Georgia Tech. I
                            </motion.p>
                            <motion.p variants={fadeFromLeft}>
                                am interested in game development, web development,
                            </motion.p>
                            <motion.p variants={fadeFromLeft}>
                                and digital art.
                            </motion.p>
                        </motion.div>
                    )}

                    {isProjects && (
                        <motion.div
                            key="projects"
                            className="absolute w-[44vw] text-[1.5vw] overflow-auto h-[30vw] scroll no-scrollbar top-0"
                            style={{ direction: "rtl" }}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={staggerContainer2}
                        >
                            {projectList.map((project) => (
                                <motion.div 
                                    key={project.title}
                                    variants={fadeFromLeft}
                                    className="cursor-pointer" 
                                    onMouseEnter={() => animateImage(project.index)}
                                >
                                    <Project {...project} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {isContact && (
                        <div key="contact-wrapper" className="absolute h-full flex flex-col justify-center">
                            <Contact />
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
