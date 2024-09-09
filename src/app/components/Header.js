"use client";
import Link from "next/link";
import { AnimatePresence, motion, useAnimate, } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const links = [
  { title: "", color: "#3498db" },
  { title: "Projects", color: "#e74c3c" },
  { title: "Contact", color: "#2ecc71" },
]
export default function Header({pageState, setPageState}) {
  
  const [text, setText] = useState("");
  const[dummyText, setDummyText] = useState("");
  const textRef = useRef(null);
  const [textHeight, setTextHeight] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.clientHeight);
      setTextWidth(textRef.current.clientWidth);
    }

  }, []);
  const fadeFromLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.6 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  }
  useEffect(() => {
    if (textHeight > 0 && scope.current)
      animation();
  }, [pageState]);
  const animation = async () => {
    const options = {
      duration: 0.3,
      ease: "easeOut",
      delay: .3,
    }
    const options2 = {
      duration: 0.3,
      ease: "easeOut",
      delay: 0,
    }
    await animate(scope.current, {
      x: [0,  - 20],
      opacity: [1, 0], 
    }, options);
    setText(pageState);
    await new Promise(resolve => setTimeout(resolve, 100));
    await animate(scope.current, {
      x: [ - 20, 0],
      opacity: [0, 1],
    }, options2);
    // await animate(scope.current, {
    //   x: [0, -textWidth - 20],
    // }, options);
    // setText(pageState);
    
    // await new Promise(resolve => setTimeout(resolve, 300)); 
    
    
    // await animate(scope.current, {
    //   x: [-textWidth - 20, 0],

    // }, options);
    // console.log("test");
  }
  


  return (
    <div className="flex justify-between items-center w-[90vw] ml-[5vw] mt-[5vh]">

      <motion.div className="relative z-10 w-fit " ref={scope} initial="hidden" animate="visible" variants={fadeFromLeft}>
        <h1 ref={textRef} className=" font-serif text-[5vw] text-[#413C34] m-0 p-0 inline-block align-bottom leading-none right-0" >{text == "" ? "Nicholas Suh" : text}</h1>
      </motion.div>
      <div className=" absolute z-20 w-[5vw] ml-[-6vw] border-r-2 border-[#413C34] h-[5vw] bg-[#F5F5F5]" >
    

      </div>


      <nav className="flex w-fit space-x-[1vw] text-[1.5vw] text-[#413C34]">
        {links.map(({ title, color }, i) => (
          <div>
            <div
              key={i}
              // href={`/${title.toLowerCase()}`}
              onClick={() => setPageState(title)}
              className="font-serif cursor-pointer"
            >{title == "" ? "Home" : title} </div>
            {title === pageState ? (
              <motion.div layoutId="underline"><hr className="border-1 h-[3px] bg-[#413C34] m-0 p-0 bottom-[1vh]"></hr> </motion.div>
            ) : null}
          </div>

        ))}

      </nav>
    </div>


  );
}
const DURATION = 0.25;

const STAGGER = 0.025;
const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
