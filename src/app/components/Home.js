import { motion, AnimatePresence, stagger, useAnimate } from "framer-motion";
import jax from "../assets/jax2.jpg";
import Trollface from "../assets/Trollface.png";

import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";
import Project from "./Project.js";

import AA from "../assets/AA.gif";
import CE from "../assets/CE.gif";
import DDV from "../assets/DDV.gif";
import ND from "../assets/ND.gif";
import GTReviews from "../assets/GTReviews.png";
import Roadcode from "../assets/Roadcode.png";
import Therapal from "../assets/Therapal.jpg";
import Resume from "../assets/Nicholas_Suh_Resume.pdf";
import Contact from "./Contact";

import { fadeFromLeft, staggerContainer, staggerContainer2 } from "../utils/anim";

export default function Home({ pageState }) {

    const images = [
        jax.src,
        CE.src,
        DDV.src,
        GTReviews.src,
        ND.src,
        Roadcode.src,
        AA.src,
        Therapal.src,
    ]
    const imageAnimators = useRef(images.map(() => useAnimate()));
    

    


    const [curImageIndex, setCurImageIndex] = useState(0);
    const [imageContainerScope, imageContainerAnimate] = useAnimate();
    const [transitioning, setTransitioning] = useState(false);
    
    const textRef = useRef(null);
    const [scope, animate] = useAnimate();
    const [scope2, animate2] = useAnimate();
    const [frameScope, frameAnimate] = useAnimate();
    const [innerFrameScope, innerFrameAnimate] = useAnimate();

    const animateImage = async (index) => {
        if(index == curImageIndex)
            return;
        const animator = imageAnimators.current[index];
        
        const curAnimator = imageAnimators.current[curImageIndex];
        const options = {
            duration: 0.3,
            ease: "easeOut",
            delay: 0,
        }
        const currentOpacity = animator[0].current.style.opacity;
        
        curAnimator[1](curAnimator[0].current, {
            opacity: [1, 0],
        }, options);
        animator[1](animator[0].current, {
            opacity: [0, 1],
        }, options);
        setCurImageIndex(index);
    }
    // const handleMouseEnter = async (imagesrc) => {
    //     console.log(imagesrc);
    //     if(imagesrc == image)
    //         return;
    //     await imageContainerAnimate(imageContainerScope.current, {
    //         opacity: [1, 0],
    //     }, {
    //         duration: 0.3,
    //         ease: "easeOut",
    //         delay: 0,
    //     });
    //     await setImage(imagesrc);
    //     await imageContainerAnimate(imageContainerScope.current, {
    //         opacity: [0, 1],
    //     }, {
    //         duration: 0.3,
    //         ease: "easeOut",
    //         delay: 0,
    //     });
    // }
    // const handleMouseLeave = async () => {
    //     if(image == jax.src)
    //         return;
    //     await imageContainerAnimate(imageContainerScope.current, {
    //         opacity: [1, 0],
    //     }, {
    //         duration: 0.3,
    //         ease: "easeOut",
    //         delay: 0,
    //     });
    //     setImage(jax.src);
    //     await imageContainerAnimate(imageContainerScope.current, {
    //         opacity: [0, 1],
    //     }, {
    //         duration: 0.3,
    //         ease: "easeOut",
    //         delay: 0,
    //     });
    // }
    useEffect(() => {
        // imageAnimators.current[0][1](imageAnimators.current[0][0].current, {
        //     opacity: [0, 1],
        // }, { duration: 0.1, ease: "easeOut", delay: 0 });

        //USE THIS ANIMATION LATER
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
            for(let i = 0; i < imageAnimators.current.length; i++) {
                
                const animator = imageAnimators.current[i];
                const height = animator[0].current.clientHeight;
                const width = animator[0].current.clientWidth;
                animator[1](animator[0].current, {
                    height: [height, "30vw"],
                    width: [width, "30vw"],
                    borderRadius: [currentBorderRadius, "2vw"],
                }, frameOptions);
            }

            // innerFrameAnimate(innerFrameScope.current, {
            //     height: [innerFrameScope.current.clientHeight, "30vw"],
            //     width: [innerFrameScope.current.clientWidth, "30vw"],
                
            //     borderRadius: [currentBorderRadius , "2vw"],
            // }, frameOptions);
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
                    height: [scope.current.clientHeight, "7vw"],
                }, options);
                animate2(scope2.current, {
                    height: [scope2.current.clientHeight, "7vw"],
                }, options);
            }
            await new Promise(resolve => setTimeout(resolve, 200));
            frameAnimate(frameScope.current, {
                height: [frameScope.current.clientHeight, "25vw"],
                width: [frameScope.current.clientWidth, "25vw"],
                borderRadius: [currentBorderRadius, "17vw"],
            }, frameOptions);

            for(let i = 0; i < imageAnimators.current.length; i++) {
                const animator = imageAnimators.current[i];
                
                const height = animator[0].current.clientHeight;
                const width = animator[0].current.clientWidth;
                animator[1](animator[0].current, {
                    height: [height, "25vw"],
                    width: [width, "25vw"],
                    borderRadius: [currentBorderRadius, "17vw"],
                }, frameOptions);
            }

            // await innerFrameAnimate(innerFrameScope.current, {
            //     height: [innerFrameScope.current.clientHeight, "25vw"],
            //     width: [innerFrameScope.current.clientWidth, "25vw"],
            //     borderRadius: [currentBorderRadius, "17vw"],
            // }, frameOptions);
            // handleMouseLeave();
            animateImage(0);
        }
    }   
    
    
    const imageVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.5 },
        }

    }

    return (
        <div className=" fixed ml-[10vw] h-[75%] w-[65vw] flex items-center justify-between ">
            
            <div ref={frameScope} className="relative z-30 h-[25vw] w-[25vw] bg-black rounded-full "> 
                <AnimatePresence >

                    {/* <motion.div ref={imageContainerScope}>
                        <motion.img alt="image" id="previewImage"
                        priority 
                        
                        ref={innerFrameScope} 
                        src={image}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                         layout className=" absolute h-[25vw] w-[25vw]  bg-blue-100 rounded-full object-cover " />
                        
                    </motion.div> */}
                    {imageAnimators.current.map((animator, index) => {
                        
                        
                        return(
                            <motion.img alt="image" 
                            key={index}
                            
                            ref={animator[0]}
                            src={images[index]}
                            className={`absolute h-[25vw] w-[25vw]  rounded-full object-cover ${index === 0? 'opacity-100' : 'opacity-0'}`}
                            />
                        );
                    })}

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
                        <motion.div variants={fadeFromLeft}  onMouseEnter={() => animateImage(1)} onPointer className=" cursor-pointer " >
                            <Project title="Combat Enchantments" description="Combat Enchantments is a Minecraft Mod that adds various enchantments. Made with Java and the Fabric Modloader, Combat Enchantments has garnered over 250k downloads, and has been featured in various Youtube videos." link="https://www.curseforge.com/minecraft/mc-mods/combat-enchantments"
                            dates="August 2021 - Present" technologies="Java, Gradle, Fabric" role="Creator"
                            />
                        </motion.div >
                        <motion.div variants={fadeFromLeft}  onMouseEnter={() => animateImage(2)} className=" cursor-pointer">
                            <Project title="Dungeon Deja Vu" description="Made for Bevy Game jam 5, Dungeon Deja Vu is a platformer with a circular twist. By community vote, DDV placed 8th out of 77 entries, 3rd in game design. DDV was built with Rust and the Bevy game engine, and will (hopefully) be on Steam soon." link="https://dsfhdshdjtsb.itch.io/dungeon-deja-vu"
                            dates="August 2024 - Present" technologies="Rust, Bevy" role="Programmer, Artist"
                            />
                        </motion.div>
                        <motion.div variants={fadeFromLeft} onMouseEnter={() => animateImage(3)} className=" cursor-pointer">
                            <Project title="GT Reviews" description="GT Reviews is a full stack web app that allows Georgia Tech students to review classes, professors, dining halls, and residence halls. GT Reviews was made for GT Web Dev, and features React, Firebase, and a Rust-built web scraper." link="https://buzzwalk.github.io/reviews/"
                            dates="September - December 2023" technologies="React, Chakra UI, Node.js, Firebase, Rust " role="Project Manager"
                            />
                        </motion.div>
                        <motion.div variants={fadeFromLeft} onMouseEnter={() => animateImage(4)} className=" cursor-pointer">
                            <Project title="Notedrop" description="Notedrop allows users to place pegs and balls on a Pachinko-style board, and listen to the sounds as the balls hit the pegs. Notedrop won Digital Track 1st Place at Horizons 2024, and was built with Rust and Bevy." link="https://devpost.com/software/note-drop"
                            dates="March 2024" technologies="Rust, Bevy" role="Programmer"
                            />
                        </motion.div>
                        <motion.div variants={fadeFromLeft} onMouseEnter={() => animateImage(5)} className=" cursor-pointer">
                            <Project title="Roadcode" description="Roadcode is a vacation planning web app that algorithmically generates a roadtrip with points of interest along the way. Roadcode took best overall out of 500 people at Freyhacks, an MLH season 2022 hackathon." 
                            link="https://devpost.com/software/road-code"
                            dates="June 2022" technologies="Javascript, Node.js, OpenTripMap, Google Maps" role="Programmer"
                            />
                        </motion.div>
                        <motion.div variants={fadeFromLeft}  onMouseEnter={() => animateImage(6)} className=" cursor-pointer">
                            <Project title="Armor Abilities" description="Armor abilities is another Minecraft Mod I made to add activatable abilities to the game, including dashes, teleports, and transforming into anvils. Armor Abilities was made for both Fabric and Forge, and has around 10k downloads" link="https://www.curseforge.com/minecraft/mc-mods/armor-abilities"
                            dates="June 2023" technologies="Java, Gradle, Fabric, Forge" role="Creator"
                            />
                        </motion.div>
                        <motion.div variants={fadeFromLeft} onMouseEnter={() => animateImage(7)} className=" cursor-pointer">
                            <Project title="Therapal" description="Therapal is an omegle-style web app with AI that links together people who struggle with mental disorders. Powered by GPT-3.5, Therapal took 1st place at Hack United 2023, out of 400 people. " link="https://devpost.com/software/note-drop"
                            dates="August 2023" technologies="React, Material UI, GPT-3.5, Firebase, Node.js " role="Programmer"
                            />
                        </motion.div>
                        
                       </motion.div>)}

                </AnimatePresence>
                <AnimatePresence>
                    {pageState == "Contact" && (<Contact />)}
                </AnimatePresence>


            </div>
        


        </div>
    )
}
