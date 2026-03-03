"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const links = [
  { title: "", label: "Home", href: "/" },
  { title: "Projects", label: "Projects", href: "/projects" },
  { title: "Contact", label: "Contact", href: "/contact" },
];

const fadeFromLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, delay: 0.5 } 
  },
  exit: { 
    opacity: 0, 
    x: -20, 
    transition: { duration: 0.3 } 
  },
};

export default function Header({ pageState }) {
  const displayTitle = pageState === "" ? "Nicholas Suh" : pageState;

  return (
    <header className="flex justify-between items-center w-[90vw] ml-[5vw] mt-[5vh]">
      <div className="relative z-10 w-fit h-[5vw] flex items-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={displayTitle}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeFromLeft}
            className="font-serif text-[5vw] text-[#413C34] m-0 p-0 leading-none"
          >
            {displayTitle}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Decorative vertical line box */}
      <motion.div 
        className="absolute z-20 w-[5vw] ml-[-6vw] border-r-2 border-[#413C34] h-[5vw] bg-[#F5F5F5]" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      <nav className="flex w-fit space-x-[1vw] text-[1.5vw] text-[#413C34]">
        {links.map(({ title, label, href }, i) => (
          <div key={title || "home"} className="flex flex-col items-center">
            <Link
              href={href}
              className="font-serif cursor-pointer border-none bg-transparent p-0 text-inherit focus:outline-none"
            >
              {label}
            </Link>
            <div className="h-[3px] w-full mt-[2px]">
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
    </header>
  );
}
