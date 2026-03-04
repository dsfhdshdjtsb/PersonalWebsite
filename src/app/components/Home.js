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

import { 
    fadeFromLeft, 
    staggerContainer, 
    staggerContainer2, 
    wordStaggerContainer,
    wordFadeVariant,
    mobileAboutExitUp,
    mobileProjectsEntryDown,
    mobileWordFadeUpVariant
} from "../utils/anim";

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

/**
 * CRITICAL DESIGN MANDATE:
 * 1. Project list and individual project items MUST ALWAYS be left-justified (text-left, items-start).
 * 2. Do NOT center-align project content on mobile.
 */

export default function Home({ pageState }) {
    const [curImageIndex, setCurImageIndex] = useState(0);
    const [isFirstMount, setIsFirstMount] = useState(true);
    const [measuredHeight, setMeasuredHeight] = useState(0);
    const [measuredWidth, setMeasuredWidth] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const contentRef = useRef(null);
    
    const isProjects = pageState === "Projects";
    const isContact = pageState === "Contact";
    
    // Rem-based dimensions
    const frameSize = isProjects ? "30rem" : "22rem";
    const frameRadius = isProjects ? "1.5rem" : "11rem";

    // Dynamic line height/width logic
    const desktopLineHeight = isProjects ? "30rem" : (measuredHeight > 0 ? `${measuredHeight}px` : "7rem");
    const mobileLineWidth = isProjects ? "85vw" : ("20rem");

    useEffect(() => {
        setIsFirstMount(false);
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Measure content height/width for the dividing line
    useEffect(() => {
        if (!contentRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (isMobile) {
                    setMeasuredWidth(entry.contentRect.width);
                } else {
                    setMeasuredHeight(entry.contentRect.height);
                }
            }
        });

        observer.observe(contentRef.current);
        return () => observer.disconnect();
    }, [pageState, isMobile]);

    useEffect(() => {
        let timer;
        if (pageState === "Projects") {
            if (!isMobile) {
                timer = setTimeout(() => setCurImageIndex(1), 700);
            }
        } else {
            // Mobile exit path: projects exit (1.0s), then bar moves down (1.0s-1.6s)
            // Image should swap and appear exactly when bar finished moving down (at 1.6s)
            timer = setTimeout(() => setCurImageIndex(0), isMobile ? 1600 : 1100);
        }
        return () => clearTimeout(timer);
    }, [pageState, isMobile]);

    const projectList = [
        { index: 1, title: "Combat Enchantments", description: "Combat Enchantments is a Minecraft Mod that adds various enchantments. Made with Java and the Fabric Modloader, Combat Enchantments has garnered over 250k downloads, and has been featured in various Youtube videos.", link: "https://www.curseforge.com/minecraft/mc-mods/combat-enchantments", dates: "August 2021 - December 2023", technologies: "Java, Gradle, Fabric" },
        { index: 8, title: "League of Legends Winrate Predictor", description: "Developed as a project for CS 4641, this web app predicts the outcome of League of Legends games based on champion drafts. The dataset was generated using the Riot Games API and AWS, and the models were trained with PyTorch.", link: "https://loldrafttool.vercel.app/", dates: "June 2025 - August 2025", technologies: "PyTorch, NumPy, React, Tailwind, AWS, SQL" },
        { index: 9, title: "Raytracer", description: "A simple, zero-dependency WIP raytracer built from the ground up in C++, currently supporting offline rendering. I made this project to learn more about graphics and GPU programming, and I aim to continue developing it whenever I have the time.", link: "https://github.com/dsfhdshdjtsb/raytracer", dates: "July 2025 - August 2025", technologies: "C++" },
        { index: 2, title: "Dungeon Deja Vu", description: "Made for Bevy Game jam 5, Dungeon Deja Vu is a platformer with a circular twist. By community vote, DDV placed 8th out of 77 entries, 3rd in game design. DDV was built with Rust and the Bevy game engine", link: "https://dsfhdshdjtsb.itch.io/dungeon-deja-vu", dates: "July 2024", technologies: "Rust, Bevy" },
        { index: 7, title: "Therapal", description: "Therapal is an omegle-style web app with AI that links together people who struggle with mental disorders. Powered by GPT-3.5, Therapal took 1st place at Hack United 2023, out of 400 people. ", link: "https://devpost.com/software/therapal", dates: "August 2023", technologies: "React, Material UI, GPT-3.5, Firebase, Node.js" },
        { index: 4, title: "Notedrop", description: "Notedrop allows users to place pegs and balls on a Pachinko-style board, and listen to the sounds as the balls hit the pegs. Notedrop won Digital Track 1st Place at Horizons 2024, and was built with Rust and Bevy.", link: "https://devpost.com/software/note-drop", dates: "March 2024", technologies: "Rust, Bevy" },
        { index: 6, title: "Armor Abilities", description: "Armor abilities is another Minecraft Mod I made to add activatable abilities to the game, including dashes, teleports, and transforming into anvils. Armor Abilities was made for both Fabric and Forge, and has around 10k downloads", link: "https://www.curseforge.com/minecraft/mc-mods/armor-abilities", dates: "June 2023", technologies: "Java, Gradle, Fabric, Forge" },
        { index: 3, title: "GT Reviews", description: "GT Reviews is a full stack web app that allows Georgia Tech students to review classes, professors, dining halls, and residence halls. GT Reviews was made for GT Web Dev, and features React, Firebase, and a Rust-built web scraper.", link: "https://github.com/buzzwalk/reviews", dates: "September - December 2023", technologies: "React, Chakra UI, Node.js, Firebase, Rust" }
    ];

    const animateImage = (index) => {
        if (isMobile) return;
        if (index !== curImageIndex) {
            setCurImageIndex(index);
        }
    };

    const aboutText = "Hi, I'm Nick, a 3rd year at Georgia Tech studying computer science. I am broadly interested in distributed systems, web dev, and game dev.";

    return (
        <div className="fixed inset-0 pointer-events-none flex flex-col items-center justify-center pt-[2rem]">
            <div className={`relative pointer-events-auto ${isMobile ? 'w-full h-[38rem]' : 'flex items-center gap-[3rem] w-fit'}`}>
                
                {/* Image Wrapper */}
                <div className={`flex items-center justify-center 
                    ${isMobile ? 'absolute top-0 left-0 w-full h-[18rem] z-10' : 'relative w-[30rem] h-[30rem] z-30 flex-shrink-0'}`}>
                    <motion.div 
                        className="relative bg-black overflow-hidden mx-auto"
                        initial={isFirstMount ? { 
                            opacity: 0,
                            height: isMobile ? "18rem" : "22rem",
                            width: isMobile ? "18rem" : "22rem",
                            borderRadius: isMobile ? "9rem" : "11rem"
                        } : false}
                        animate={{
                            opacity: isMobile && isProjects ? 0 : 1,
                            height: isMobile ? "18rem" : frameSize,
                            width: isMobile ? "18rem" : frameSize,
                            borderRadius: isMobile ? "9rem" : frameRadius
                        }}
                        transition={{
                            opacity: { 
                                duration: isMobile ? 0.3 : 0.8, 
                                ease: "easeInOut", 
                                delay: isFirstMount ? 0.2 : (isMobile ? (isProjects ? 0.7 : 1.6) : (isProjects ? 0.7 : 1.2)) 
                            },
                            height: { ...FRAME_TRANSITION, delay: isMobile ? (isFirstMount ? 0.2 : 0.45) : (isProjects ? 0.7 : 1.2) },
                            width: { ...FRAME_TRANSITION, delay: isMobile ? (isFirstMount ? 0.2 : 0.45) : (isProjects ? 0.7 : 1.2) },
                            borderRadius: { ...FRAME_TRANSITION, delay: isMobile ? (isFirstMount ? 0.2 : 0.45) : (isProjects ? 0.7 : 1.2) }
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
                <motion.div 
                    className={`flex flex-col lg:flex-row items-center flex-shrink-0 z-20 bg-[#F5F5F5]
                        ${isMobile ? 'absolute left-0 right-0 top-[20rem] min-h-[100vh] overflow-hidden' : 'relative w-[44rem] h-[30rem]'}`}
                    animate={isMobile ? { y: isProjects ? "calc(-28rem)" : "0rem" } : { y: 0 }}
                    transition={{ 
                        duration: 0.6, 
                        ease: "easeInOut", 
                        delay: isMobile ? (isProjects ? 1.0 : 1.0) : 1.0 
                    }}
                >
                    <div className={`${isMobile ? 'h-[100vh] w-full bg-[#F5F5F5] absolute top-0 left-0 -z-10' : 'hidden'}`} />

                    {/* Border line */}
                    <motion.div 
                        className={`absolute border-[#413C34] z-20 ${isMobile ? 'border-b-2 top-0 left-1/2 -translate-x-1/2' : 'border-r-2 left-0 top-1/2 -translate-y-1/2'}`}
                        style={{ transformOrigin: "center" }}
                        initial={isFirstMount ? { 
                             opacity: 0, 
                             height: "0rem",
                             width: "0rem"
                         } : false}
                        animate={{ 
                            opacity: 1, 
                            height: isMobile ? "0rem" : desktopLineHeight,
                            width: isMobile ? mobileLineWidth : "0rem"
                            //width: "20rem"
                        }}
                        transition={{
                            opacity: { duration: 0.3, delay: isFirstMount && isMobile ? 0.6 : 0 },
                            height: {
                                duration: isMobile ? 0.6 : 0.3,
                                ease: "easeInOut",
                                delay: isFirstMount ? (isMobile ? 0.6 : 0) : (isMobile ? (isProjects ? 1.0 : 1.0) : (isProjects ? 0.5 : 1.0))
                            },
                            width: {
                                duration: isMobile ? 0.6 : 0.3,
                                ease: "easeInOut",
                                delay: isFirstMount ? (isMobile ? 0.6 : 0) : (isMobile ? (isProjects ? 1.0 : 1.0) : (isProjects ? 0.5 : 1.0))
                            }
                        }}
                    />

                    {/* Content Container */}
                    <div className={`${isMobile ? 'pt-[2rem] px-[7.5vw] items-start text-left' : 'pl-[1.5rem] items-start text-left'} w-full h-full flex flex-col justify-start lg:justify-center relative z-10`}>
                        <AnimatePresence mode="wait">
                            {pageState === "" && (
                                <motion.div
                                    key="about"
                                    ref={contentRef}
                                    className={`w-full text-[1.4rem] text-[#413C34] ${isMobile ? 'text-center items-center flex flex-col' : 'text-left items-start'}`}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={isMobile ? {
                                        ...wordStaggerContainer,
                                        visible: { ...wordStaggerContainer.visible, transition: { ...wordStaggerContainer.visible.transition, delayChildren: 1.3 } }
                                    } : wordStaggerContainer}
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
                                    className={`absolute ${isMobile ? 'top-0 h-[80vh] left-1/2 -translate-x-1/2 w-[85vw] pt-[2rem] flex flex-col items-start' : 'left-0 right-0 h-[30rem] pl-[1.5rem] top-1/2 -translate-y-1/2 flex flex-col items-start'} text-[1.4rem] overflow-auto pr-[1rem] scroll no-scrollbar`}
                                    style={{ overscrollBehavior: 'contain' }}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={isMobile ? {
                                        ...staggerContainer2,
                                        visible: { ...staggerContainer2.visible, transition: { ...staggerContainer2.visible.transition, delayChildren: 1.1 } }
                                    } : staggerContainer2}
                                >
                                    <div className={`w-full flex flex-col items-start`}>
                                        {projectList.map((project) => (
                                            <motion.div 
                                                key={project.title}
                                                variants={fadeFromLeft}
                                                className="cursor-pointer w-full flex justify-start" 
                                                onMouseEnter={() => animateImage(project.index)}
                                            >
                                                <Project {...project} isMobile={isMobile} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {isContact && (
                                <motion.div 
                                    key="contact-wrapper"
                                    ref={contentRef}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={isMobile ? {
                                        ...wordStaggerContainer,
                                        visible: { ...wordStaggerContainer.visible, transition: { ...wordStaggerContainer.visible.transition, delayChildren: 1.0 } }
                                    } : wordStaggerContainer}
                                    className={`text-[#413C34] flex flex-col justify-center items-center lg:items-start w-full`}
                                >
                                    <Contact animateImage={animateImage} isMobile={isMobile} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
