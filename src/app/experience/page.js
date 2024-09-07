"use client";
import { useState } from "react";
import { motion } from "framer-motion";
export default function ExperiencePage() {
    const [toggle, setToggle] = useState(false);

    return (
      <motion.div layout onClick={() => setToggle(!toggle)} className="w-fit" style={{ border: "1px solid black", padding: "20px" }}>
        {toggle ? "Short Text" : "This is a much longer piece of text that will animate the container size"}
      </motion.div>
    );
}