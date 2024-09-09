import { motion, AnimatePresence, stagger, useAnimate } from "framer-motion";
import jax from "../assets/jax2.jpg";
import Trollface from "../assets/Trollface.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import instagram from "../assets/instagram.png";
import discord from "../assets/discord.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Project from "./Project.js";
import github from "../assets/github.png";
import AA from "../assets/AA.gif";
import CE from "../assets/CE.gif";
import DDV from "../assets/DDV.gif";
import ND from "../assets/ND.gif";
import GTReviews from "../assets/GTReviews.png";
import Roadcode from "../assets/Roadcode.png";
import Therapal from "../assets/Therapal.jpg";
import Resume from "../assets/Nicholas_Suh_Resume.pdf";
export default function Home({ pageState }) {

    const [image, setImage] = useState(jax.src);
    const [imageContainerScope, imageContainerAnimate] = useAnimate();
    const [transitioning, setTransitioning] = useState(false);
    
    const textRef = useRef(null);
    const [scope, animate] = useAnimate();
    const [scope2, animate2] = useAnimate();
    const [frameScope, frameAnimate] = useAnimate();
    const [innerFrameScope, innerFrameAnimate] = useAnimate();
    
    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 1.1, // Delay before children start animating
                staggerChildren: 0.1, // Delay between each child (p tag) animation
                
            },
        },
        exit: {
            opacity: 1,
            transition: { staggerChildren: 0.1, staggerDirection: -1 }, // Reverse the stagger animation
        }
    };
    const staggerContainer2 = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.9, // Delay before children start animating
                staggerChildren: 0.1, // Delay between each child (p tag) animation
                
            },
        },
        exit: {
            opacity: 1,
            transition: { staggerChildren: 0.1, staggerDirection: -1 }, // Reverse the stagger animation
        }
    };

    const fadeFromLeft = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5} },
        exit: { opacity: 0, x: -20, transition: { duration: 0.3} },
        hover: {transform: "translateX(1vw)", transition: {duration: 0.2}},
    }

    const handleMouseEnter = async (imagesrc) => {
        console.log(imagesrc);
        if(imagesrc == image)
            return;
        await imageContainerAnimate(imageContainerScope.current, {
            opacity: [1, 0],
        }, {
            duration: 0.3,
            ease: "easeOut",
            delay: 0,
        });
        await setImage(imagesrc);
        await imageContainerAnimate(imageContainerScope.current, {
            opacity: [0, 1],
        }, {
            duration: 0.3,
            ease: "easeOut",
            delay: 0,
        });
    }
    const handleMouseLeave = async () => {
        if(image == jax.src)
            return;
        await imageContainerAnimate(imageContainerScope.current, {
            opacity: [1, 0],
        }, {
            duration: 0.3,
            ease: "easeOut",
            delay: 0,
        });
        setImage(jax.src);
        await imageContainerAnimate(imageContainerScope.current, {
            opacity: [0, 1],
        }, {
            duration: 0.3,
            ease: "easeOut",
            delay: 0,
        });
    }
    
    useEffect(() => {
        if (textRef.current) {
            setTextHeight(textRef.current.clientHeight);
        }
    }, []);
    useEffect(() => {
        if (scope.current)
        {
            
            animation();
            
        }
        
    }, [pageState]);

    
    const animation = async () => {
        
        
        const options = {
            duration: 0.3,
            ease: "easeOut",
            delay: 0.3,
        }
        const frameOptions = {
            duration: 0.5,
            ease: "easeInOut",
            delay: .3,
        }
        var currentBorderRadius = "vw";
        if (frameScope) {
            currentBorderRadius = frameScope.current.style.borderRadius;
            console.log(currentBorderRadius);
        }
        const currentOpacity = frameScope.current.style.opacity;
        if(pageState == "Projects") {
            animate(scope.current, {
                height: [scope.current.clientHeight, "30vw"],
            }, options);
            animate2(scope2.current, {
                height: [scope2.current.clientHeight, "30vw"],
            }, options);
            await new Promise(resolve => setTimeout(resolve, 200));
            frameAnimate(frameScope.current, {
                height: [frameScope.current.clientHeight, "30vw"],
                width: [frameScope.current.clientWidth, "30vw"],
                
                borderRadius: [currentBorderRadius, "2vw"],
            }, frameOptions);
            innerFrameAnimate(innerFrameScope.current, {
                height: [innerFrameScope.current.clientHeight, "30vw"],
                width: [innerFrameScope.current.clientWidth, "30vw"],
                
                borderRadius: [currentBorderRadius , "2vw"],
            }, frameOptions);
        } else {
            
            await new Promise(resolve => setTimeout(resolve, 500));
            if(pageState == "") {
                animate(scope.current, {
                    height: [scope.current.clientHeight, "7vw"],
                }, options);
                animate2(scope2.current, {
                    height: [scope2.current.clientHeight, "7vw"],
                }, options);
            } else {
                animate(scope.current, {
                    height: [scope.current.clientHeight, "10vw"],
                }, options);
                animate2(scope2.current, {
                    height: [scope2.current.clientHeight, "10vw"],
                }, options);
            }
            await new Promise(resolve => setTimeout(resolve, 200));
            frameAnimate(frameScope.current, {
                height: [frameScope.current.clientHeight, "25vw"],
                width: [frameScope.current.clientWidth, "25vw"],
                borderRadius: [currentBorderRadius, "17vw"],
            }, frameOptions);
            await innerFrameAnimate(innerFrameScope.current, {
                height: [innerFrameScope.current.clientHeight, "25vw"],
                width: [innerFrameScope.current.clientWidth, "25vw"],
                borderRadius: [currentBorderRadius, "17vw"],
            }, frameOptions);
            handleMouseLeave();
        }
        
        
        
    }
    
    

    return (
        <div className=" fixed ml-[10vw] h-[75%] w-[65vw] flex items-center justify-between ">
            
            <div ref={frameScope} className="relative z-30 h-[25vw] w-[25vw] bg-black rounded-full "> 
                <AnimatePresence >
                    <motion.div ref={imageContainerScope}>
                        <motion.img alt="image" priority key={1} ref={innerFrameScope} src={image} layout className=" absolute h-[25vw] w-[25vw]  bg-blue-100 rounded-full object-cover " />
                        
                    </motion.div>

                </AnimatePresence>

            </div>
            <div className="absolute z-[25] h-[35vw] w-[35vw] translate-y-[-14vw] translate-x-[-4vw] bg-[#F5F5F5]  "></div><div ref={scope} className="flex w-[30vw] " style={{ height: "7vw" }}>
                <div ref={scope2} className="absolute border-r-2 border-[#413C34]  w-[30vw] z-20 right-[31vw] h-[7vw] " style={{transformOrigin: "bottom"}}></div>

                <AnimatePresence mode="wait">
                    {pageState == "" && (<motion.div
                        className="absolute w-[40vw] text-[1.5vw]"
                        initial="hidden"
                        animate="visible"
                        key="home"
                        exit="exit" // Add exit variant here
                        variants={staggerContainer}
                    >
                        {/* Staggered animation for each <p> tag */}
                        <motion.p variants={fadeFromLeft}>
                            Hi, I'm Nick Suh, a 2nd year CS major at Georgia Tech. I
                        </motion.p>
                        <motion.p variants={fadeFromLeft}>
                            am interested in game development, web development,
                        </motion.p>
                        <motion.p variants={fadeFromLeft}>
                            and digital artistry.
                        </motion.p>
                    </motion.div>)}
                </AnimatePresence>
                <AnimatePresence mode="wait">
                    {pageState=="Projects" && (<motion.div
                        className="absolute w-[44vw] text-[1.5vw] overflow-auto h-[30vw] scroll no-scrollbar "
                        
                        style={{ direction: "rtl" }}
                        initial="hidden"
                        animate="visible"
                        exit="exit" // Add exit variant here
                        key="projects"
                        variants={staggerContainer2}
                    >
                        <motion.div variants={fadeFromLeft} onMouseEnter={() => handleMouseEnter(CE.src)} className=" cursor-pointer " >
                            <Project title="Combat Enchantments" description="Combat Enchantments is a Minecraft Mod that adds various enchantments. Made with Java and the Fabric Modloader, Combat Enchantments has garnered over 250k downloads, and has been featured in various Youtube videos." link="https://www.curseforge.com/minecraft/mc-mods/combat-enchantments"
                            dates="August 2021 - Present" technologies="Java, Gradle, Fabric" role="Creator"
                            />
                        </motion.div >
                        <motion.div variants={fadeFromLeft}  onMouseEnter={() => handleMouseEnter(DDV.src)} className=" cursor-pointer">
                            <Project title="Dungeon Deja Vu" description="Made for Bevy Game jam 5, Dungeon Deja Vu is a platformer with a circular twist. By community vote, DDV placed 8th out of 77 entries, 3rd in game design. DDV was built with Rust and the Bevy game engine, and will (hopefully) be on Steam soon." link="https://dsfhdshdjtsb.itch.io/dungeon-deja-vu"
                            dates="August 2024 - Present" technologies="Rust, Bevy" role="Programmer, Artist"
                            />
                        </motion.div>
                        <motion.div variants={fadeFromLeft} onMouseEnter={() => handleMouseEnter(GTReviews.src)} className=" cursor-pointer">
                            <Project title="GT Reviews" description="GT Reviews is a full stack web app that allows Georgia Tech students to review classes, professors, dining halls, and residence halls. GT Reviews was made for GT Web Dev, and features React, Firebase, and a Rust-built web scrape.r" link="https://buzzwalk.github.io/reviews/"
                            dates="September - December 2023" technologies="React, Chakra UI, Node.js, Firebase, Rust, " role="Project Manager"
                            />
                        </motion.div>
                        <motion.div variants={fadeFromLeft} onMouseEnter={() => handleMouseEnter(ND.src)} className=" cursor-pointer">
                            <Project title="Notedrop" description="Notedrop allows users to place pegs and balls on a Pachinko-style board, and listen to the sounds as the balls hit the pegs. Notedrop won Digital Track 1st Place at Horizons 2024, and was built with Rust and Bevy." link="https://devpost.com/software/note-drop"
                            dates="March 2024" technologies="Rust, Bevy" role="Programmer"
                            />
                        </motion.div>
                        <motion.div variants={fadeFromLeft} onMouseEnter={() => handleMouseEnter(Roadcode.src)} className=" cursor-pointer">
                            <Project title="Roadcode" description="Roadcode is a vacation planning web app that algorithmically generates a roadtrip with points of interest along the way. Roadcode took best overall out of 500 people at Freyhacks, an MLH season 2022 hackathon." 
                            link="https://devpost.com/software/road-code"
                            dates="June 2022" technologies="Javascript, Node.js, OpenTripMap, Google Maps"
                            />
                        </motion.div>
                        <motion.div variants={fadeFromLeft}  onMouseEnter={() => handleMouseEnter(AA.src)} className=" cursor-pointer">
                            <Project title="Armor Abilities" description="Armor abilities is another Minecraft Mod I made to add activatable abilities to the game, including dashes, teleports, and transforming into anvils. Armor Abilities was made for both Fabric and Forge, and has around 10k downloads" link="https://www.curseforge.com/minecraft/mc-mods/armor-abilities"
                            dates="June 2023" technologies="Java, Gradle, Fabric, Forge" role="Creator"
                            />
                        </motion.div>
                        <motion.div variants={fadeFromLeft} onMouseEnter={() => handleMouseEnter(Therapal.src)} className=" cursor-pointer">
                            <Project title="Therapal" description="Therapal is an omegle-style web app with AI that links together people who struggle with mental disorders. Powered by GPT-3.5, Therapal took 1st place at Hack United 2023, out of 400 people. " link="https://devpost.com/software/note-drop"
                            dates="August 2023" technologies="React, Material UI, GPT-3.5, Firebase, Node.js " role="Programmer"
                            />
                        </motion.div>
                        
                       </motion.div>)}

                </AnimatePresence>
                <AnimatePresence>
                    {pageState == "Contact" && (<motion.div
                        className="absolute w-[40vw] h-[13vw]  flex-col items-center "
                        initial="hidden"
                        animate="visible"
                        exit="exit" // Add exit variant here
                        key="contact"
                        variants={staggerContainer}>

                        <motion.div variants={fadeFromLeft}>
                            <h1 className="text-[2.5vw] font-serif"> View my <a href={Resume} className=" underline">resume</a> or contact me at: </h1>
                        </motion.div >
                        <motion.div variants={fadeFromLeft}>
                            <div className="flex items-center space-x-[1vw] ml-[0.3vw]">
                                <motion.a className="w-[4vw] h-[4vw] opacity-30 cursor-pointer" href="https://github.com/dsfhdshdjtsb"  whileHover={{ opacity: 1 }}> 
                                    <Image alt="icon" className=" w-[100%] h-[100%] object-cover" src={github}></Image>
                                </motion.a>
                                <motion.a className="w-[5vw] h-[5vw] opacity-30 cursor-pointer" href="https://www.linkedin.com/in/nsuh"  whileHover={{ opacity: 1 }}> 
                                    <Image  alt="icon" className=" w-[100%] h-[100%] object-cover" src={linkedin}></Image>
                                </motion.a>
                                <motion.a className="w-[5vw] h-[5vw] opacity-30 cursor-pointer " href="mailto:nicksuh@gatech.edu"  whileHover={{ opacity: 1 }}> 
                                    <Image  alt="icon" className=" w-[100%] h-[100%] object-cover" src={email}></Image>
                                </motion.a>
                                <motion.a className="w-[5vw] h-[5vw] opacity-30 cursor-pointer" href="http://discordapp.com/users/395005138000936960"  whileHover={{ opacity: 1 }}> 
                                    <Image alt="icon"  className=" w-[100%] h-[100%] object-cover" src={discord}></Image>
                                </motion.a>
                                <motion.a className="w-[4.5vw] h-[4.5vw] opacity-30 cursor-pointer" href="https://www.instagram.com/nick_suh/"  whileHover={{ opacity: 1 }}> 
                                    <Image  alt="icon" className=" w-[100%] h-[100%] object-cover" src={instagram}></Image>
                                </motion.a>
                            </div>
                        </motion.div>

                            
                        </motion.div>)}
                </AnimatePresence>


            </div>
        


        </div>
    )
}
