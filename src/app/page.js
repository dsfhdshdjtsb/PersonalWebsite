"use client";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import { useState } from "react";

import jax from "./assets/jax.jpg";

export default function Landing() {
  const [pageState, setPageState] = useState("");
  const [newImage, setNewImage] = useState(jax);
  return (
    <>
    <Header pageState={pageState} setPageState={setPageState} />
    <Home pageState={pageState} />
      
    </>
    
    
  );
}


