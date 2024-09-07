"use client";
import Link from "next/link";
import { AnimatePresence, motion, useAnimate, } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const links = [
  { title: "", color: "#3498db" },
  { title: "Projects", color: "#e74c3c" },
  { title: "Experience", color: "#2ecc71" },
]
export default function Header() {
  const [pageState, setPageState] = useState("");
  const [text, setText] = useState("");
  const[dummyText, setDummyText] = useState("");
  const textRef = useRef(null);
  const [textHeight, setTextHeight] = useState(0);

  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.clientHeight);
    }

  }, []);

  useEffect(() => {
    if (textHeight > 0)
      animation();
  }, [pageState]);
  const animation = async () => {
    const options = {
      duration: 0.5,
      ease: "easeInOut",

    }

    await animate(scope.current, {
      y: [textHeight, 0],
    }, options);
    setDummyText(pageState);
    await new Promise(resolve => setTimeout(resolve, 300)); 
    setText(pageState);
    
    await animate(scope.current, {
      y: [0, textHeight],

    }, options);
    console.log("test");
  }


  return (
    <div className="flex justify-between items-center w-[90vw] ml-[5vw] mt-[5vh]">

      <div className="w-fit " ref={textRef}>
        <h1 className="font-serif text-[5vw] text-[#413C34] m-0 p-0 inline-block align-bottom leading-none">{text == "" ? "Nicholas Suh" : text}</h1>

      </div>
      {textHeight > 0 && <motion.div ref={scope}

        initial={{ y: textHeight }}
        className="bg-[#F5F5F5] absolute w-fit" style={{ y: textHeight }} 
        layout>
        <hr className="border-1 h-[3px] bg-[#413C34] m-0 p-0"></hr>
        <h1 className="font-serif text-[5vw]  text-[#F5F5F5] m-0 p-0 inline-block align-bottom leading-none">{dummyText == "" ? "Nicholas Suh" : dummyText}</h1>

      </motion.div>}


      <nav className="flex w-fit space-x-[1vw] text-[1.5vw] text-[#413C34]">
        {links.map(({ title, color }, i) => (
          <div>
            <Link
              key={i}
              href={`/${title.toLowerCase()}`}
              onClick={() => setPageState(title)}
              className="font-serif"
            >{title == "" ? "Home" : title} </Link>
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
