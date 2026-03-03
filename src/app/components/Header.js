"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { title: "", label: "About", href: "/" },
  { title: "Projects", label: "Projects", href: "/projects" },
  { title: "Contact", label: "Contact", href: "/contact" },
];

const fadeFromLeft = {
  hidden: { opacity: 0, x: "-1.5rem" },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5 } 
  },
  exit: { 
    opacity: 0, 
    x: "-1.5rem", 
    transition: { duration: 0.3 } 
  },
};

export default function Header({ pageState }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayTitle = pageState === "" ? "Nick Suh" : pageState;
  const isProjects = pageState === "Projects";

  return (
    <header className="fixed top-[2rem] left-0 right-0 z-50 w-[90%] max-w-[120rem] mx-auto">
      <div className="flex justify-between items-center w-full">
        <div className="relative z-10 w-fit h-[5rem] flex items-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={displayTitle}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                ...fadeFromLeft,
                visible: { 
                  ...fadeFromLeft.visible, 
                  transition: { 
                    ...fadeFromLeft.visible.transition, 
                    delay: isMobile ? (isProjects ? 1.0 : 0.6) : 0.4 
                  } 
                }
              }}
              className="font-serif text-[3rem] lg:text-[4.5rem] text-[#413C34] m-0 p-0 leading-none"
            >
              {displayTitle}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Decorative vertical line box - Hidden on very small mobile */}
        <motion.div 
          className="hidden sm:block absolute z-20 w-[4rem] ml-[-5rem] border-r-2 border-[#413C34] h-[4rem] bg-[#F5F5F5]" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex w-fit space-x-[2rem] text-[1.4rem] text-[#413C34]">
          {links.map(({ title, label, href }) => (
            <div key={title || "home"} className="flex flex-col items-center">
              <Link
                href={href}
                className="font-serif cursor-pointer border-none bg-transparent p-0 text-inherit focus:outline-none hover:opacity-70 transition-opacity"
              >
                {label}
              </Link>
              <div className="h-[2px] w-full mt-[0.2rem]">
                {title === pageState && (
                  <motion.div
                    layoutId="underline"
                    className="h-full bg-[#413C34]"
                  />
                )}
              </div>
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-50 flex flex-col justify-center items-center w-[3rem] h-[3rem] space-y-[0.6rem] focus:outline-none relative"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: "0.8rem" } : { rotate: 0, y: 0 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="w-full h-[2px] bg-[#413C34] block"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="w-full h-[2px] bg-[#413C34] block"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: "-0.8rem" } : { rotate: 0, y: 0 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="w-full h-[2px] bg-[#413C34] block"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-[6rem] right-0 bg-[#F5F5F5] border-2 border-[#413C34] p-[2rem] flex flex-col space-y-[1.5rem] text-[1.8rem] text-[#413C34] z-40 rounded-lg shadow-xl"
          >
            {links.map(({ title, label, href }) => (
              <Link
                key={title || "home"}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`font-serif ${title === pageState ? 'underline underline-offset-8' : ''}`}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
