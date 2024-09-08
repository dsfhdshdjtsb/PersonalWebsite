"use client";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import { useState } from "react";

export default function Landing() {
  const [pageState, setPageState] = useState("");
  
  return (
    <>
    <Header pageState={pageState} setPageState={setPageState}/>
    <Home pageState={pageState}/>
      
    </>
    
    
  );
}


