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

export default function Home({ pageState }) {


    const [transitioning, setTransitioning] = useState(false);
    const [image, setImage] = useState(jax);
    const [newImage, setNewImage] = useState(jax);
    
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
    
    useEffect(() => {
        if (textRef.current) {
            setTextHeight(textRef.current.clientHeight);
        }
    }, []);
    useEffect(() => {
        setNewImage(jax);
        if (scope.current)
        {
            
            animation();
            
        }
        
    }, [pageState]);
    useEffect(() => {
        
        if(innerFrameScope.current) {
            projectImageAnimation();
        }
    },[newImage]);
    console.log( newImage.src);
    console.log(image.src);
    const projectImageAnimation = async () => {
        const options = {
            duration: 0.2,
            ease: "easeOut",
            
        }

        await innerFrameAnimate(innerFrameScope.current, {
            opacity: [1, 0],
        }, options);
        setImage(newImage);
        innerFrameAnimate(innerFrameScope.current, {
            opacity: [0, 1],
        }, options);
    }
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
        const currentBorderRadius = frameScope.current.style.borderRadius;
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
            innerFrameAnimate(innerFrameScope.current, {
                height: [innerFrameScope.current.clientHeight, "25vw"],
                width: [innerFrameScope.current.clientWidth, "25vw"],
                borderRadius: [currentBorderRadius, "17vw"],
            }, frameOptions);
        }
        
        
        
    }
    useEffect(() => {
        console.log(transitioning);
    }
    , [transitioning]);
    

    return (
        <div className=" fixed ml-[10vw] h-[75%] w-[65vw] flex items-center justify-between ">
            
            <div ref={frameScope} className="relative z-30 h-[25vw] w-[25vw]  bg-blue-100 rounded-full "> 
                <AnimatePresence >
                    <motion.img alt="image" priority key={1} ref={innerFrameScope} src={image.src} layout className=" absolute h-[25vw] w-[25vw]  bg-blue-100 rounded-full object-cover " />

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
                            am interested in VALORANT, league of legends, and
                        </motion.p>
                        <motion.p variants={fadeFromLeft}>
                            trolling on internet forums.
                        </motion.p>
                    </motion.div>)}
                </AnimatePresence>
                <AnimatePresence mode="wait">
                    {pageState=="Projects" && (<motion.div
                        className="absolute w-[40vw] text-[1.5vw] overflow-auto h-[30vw] scroll no-scrollbar"
                        
                        style={{ direction: "rtl" }}
                        initial="hidden"
                        animate="visible"
                        exit="exit" // Add exit variant here
                        key="projects"
                        variants={staggerContainer2}
                    >
                        <motion.div variants={fadeFromLeft} onMouseEnter={()=> setNewImage(Trollface)} onMouseLeave={() => setNewImage(jax)} className=" cursor-pointer " >
                            <Project title="Combat Enchantments" description="Combat Enchantments is a Minecraft Mod that adds various enchantments. Made with Java and the fabric Modloader, Combat Enchantments has garnered over 250k downloads" link="https://www.curseforge.com/minecraft/mc-mods/combat-enchantments"/>
                        </motion.div >
                        <motion.div variants={fadeFromLeft}  className=" cursor-pointer">
                            <Project title="Dungeon Deja Vu" description="Made for Bevy Game jam 5, Dungeon Deja Vu is a scrolling, circular platformer game. DDV was made with Rust and the Bevy Game Engine" link="https://dsfhdshdjtsb.itch.io/dungeon-deja-vu"/>
                        </motion.div>
                        <motion.div variants={fadeFromLeft} className=" cursor-pointer">
                            <Project title="GT Reviews" description="This is a description of project 3. I want the desciprtion of this project to be really cool and rad so that people like it" link="https://buzzwalk.github.io/reviews/"/>
                        </motion.div>
                        <motion.div variants={fadeFromLeft}  className=" cursor-pointer">
                            <Project title="Roadcode" description="Roadcode is a vacation planning web app that algorithmically generates a roadtrip with points of interest along the way. Roadcode took 1st place at Freyhacks 2022, out of 500 people" link="https://www.google.com"/>
                        </motion.div>
                        <motion.div variants={fadeFromLeft}  className=" cursor-pointer">
                            <Project title="Armor Abilities" description="Armor abilities is another Minecraft Mod I made to add activatable abilities to the game, such as dashes and teleports. Armor Abilities was made for both Fabric and Forge" link="https://www.curseforge.com/minecraft/mc-mods/armor-abilities"/>
                        </motion.div>
                        <motion.div variants={fadeFromLeft}  className=" cursor-pointer">
                            <Project title="Therapal" description="Therapal is an omegle-style web app with AI that links together people who struggle with mental disorders. Therapal took 1st place at Hack United 2023, out of 400 people " link="https://www.google.com"/>
                        </motion.div>
                        <motion.div variants={fadeFromLeft}  className=" cursor-pointer">
                            <Project title="Altarune" description="Altarune is a roguelike tower defense game featuring pixelated 3D graphics. Altarune is currently in development as part of the VGDev club at Georgia Tech" link="https://www.google.com"/>
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
                            <h1 className="text-[2.5vw] font-serif"> View my <a href="" className=" underline">resume</a> or contact me at: </h1>
                        </motion.div >
                        <motion.div variants={fadeFromLeft}>
                            <div className="flex items-center space-x-[1vw] ml-[-0.5vw]">
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


const Frame = ({pageState, frameScope, innerFrameScope, image}) => {
    
    
    return (
        <>
            {/* can prolly deelete this later */}
            <div ref={frameScope} className="relative z-30 h-[25vw] w-[25vw]  bg-blue-100 rounded-full "> 
                <Image ref={innerFrameScope} src={image} className=" absolute h-[25vw] w-[25vw]  bg-blue-100 rounded-full object-cover " />
                <Image ref={innerFrameScope} src={image} className=" absolute h-[25vw] w-[25vw]  bg-blue-100 rounded-full object-cover " />

            </div>
            <div className="absolute z-[25] h-[35vw] w-[35vw] translate-y-[-14vw] translate-x-[-4vw] bg-[#F5F5F5]  "></div>
            {/* <div className="absolute z-[25] h-[40vw] w-[30vw] translate-y-[-4vw] translate-x-[-3.0vw] bg-[#F5F5F5]  rotate-45   "></div> */}

            {/* <div className="absolute z-20 h-[33vw] w-[33vw] translate-x-[-4vw] border-2 border-[#413C34] rounded-full "></div> */}
            {/* <div className="absolute z-20 h-[28vw] w-[28vw] translate-y-[1.5vw] translate-x-[-1.5vw] border-2 border-[#413C34] rounded-full "></div> */}

        </>
    );
}