import { motion, AnimatePresence, stagger, useAnimate } from "framer-motion";
import jax from "../assets/jax.jpg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Project from "./Project.js";
import { transform } from "next/dist/build/swc";
export default function Home({ pageState }) {

    const [textHeight, setTextHeight] = useState(0);
    const [image, setImage] = useState(jax);
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
        hover: {transform: "translateX(1vw)"}
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
            await new Promise(resolve => setTimeout(resolve, 100));
            animate(scope.current, {
                height: [scope.current.clientHeight, "7vw"],
            }, options);
            animate2(scope2.current, {
                height: [scope2.current.clientHeight, "7vw"],
            }, options);
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
    

    return (
        <div className=" fixed ml-[10vw] h-[75%] w-[65vw] flex items-center justify-between ">
            
            <Frame pageState={pageState} frameScope={frameScope} innerFrameScope={innerFrameScope} image={image} />
            <div ref={scope} className="flex w-[30vw] " style={{ height: "7vw" }}>
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
                            am interested in sex machine, league of legends, and
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
                        <motion.div variants={fadeFromLeft} whileHover="hover" >
                            <Project title="Project 1" description="This is a description of project 1. I want the desciprtion of this project to be really cool and rad so that people like it" />
                        </motion.div >
                        <motion.div variants={fadeFromLeft}>
                            <Project title="Project 2" description="This is a description of project 2" />
                        </motion.div>
                        <motion.div variants={fadeFromLeft}>
                            <Project title="Project 3" description="This is a description of project 3" />
                        </motion.div>
                        <motion.div variants={fadeFromLeft}>
                            <Project title="Project 4" description="This is a description of project 3" />
                        </motion.div>
                        <motion.div variants={fadeFromLeft}>
                            <Project title="Project 5" description="This is a description of project 3" />
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
                <Image ref={innerFrameScope} src={image} className="h-[25vw] w-[25vw]  bg-blue-100 rounded-full object-cover " />
            </div>
            <div className="absolute z-[25] h-[35vw] w-[35vw] translate-y-[-14vw] translate-x-[-4vw] bg-[#F5F5F5]  "></div>
            {/* <div className="absolute z-[25] h-[40vw] w-[30vw] translate-y-[-4vw] translate-x-[-3.0vw] bg-[#F5F5F5]  rotate-45   "></div> */}

            {/* <div className="absolute z-20 h-[33vw] w-[33vw] translate-x-[-4vw] border-2 border-[#413C34] rounded-full "></div> */}
            {/* <div className="absolute z-20 h-[28vw] w-[28vw] translate-y-[1.5vw] translate-x-[-1.5vw] border-2 border-[#413C34] rounded-full "></div> */}

        </>
    );
}