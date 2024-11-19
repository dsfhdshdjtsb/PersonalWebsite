import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import instagram from "../assets/instagram.png";
import discord from "../assets/discord.png";
import github from "../assets/github.png";
import Resume from "../assets/Nicholas Suh Resume.pdf";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { fadeFromLeft, staggerContainer } from "../utils/anim";
export default function Contact(){
    return (
        <motion.div
            className="absolute w-[40vw] h-[13vw]  flex-col items-center "
            initial="hidden"
            animate="visible"
            exit="exit" // Add exit variant here
            key="contact"
            variants={staggerContainer}>

            <motion.div variants={fadeFromLeft}>
                <h1 className="text-[2.0vw] font-serif"> View my <a href={Resume} className=" underline">resume</a> or contact me at: </h1>
            </motion.div >
            <motion.div variants={fadeFromLeft}>
                <div className="flex items-center space-x-[1vw] ml-[0.3vw]">
                    <motion.a className="w-[3vw] h-[3vw] opacity-30 cursor-pointer" href="https://github.com/dsfhdshdjtsb"  whileHover={{ opacity: 1 }}> 
                        <NextImage alt="icon" className=" w-[100%] h-[100%] object-cover" src={github}></NextImage>
                    </motion.a>
                    <motion.a className="w-[4vw] h-[4vw] opacity-30 cursor-pointer" href="https://www.linkedin.com/in/nsuh"  whileHover={{ opacity: 1 }}> 
                        <NextImage  alt="icon" className=" w-[100%] h-[100%] object-cover" src={linkedin}></NextImage>
                    </motion.a>
                    <motion.a className="w-[4vw] h-[4vw] opacity-30 cursor-pointer " href="mailto:nicksuh@gatech.edu"  whileHover={{ opacity: 1 }}> 
                        <NextImage  alt="icon" className=" w-[100%] h-[100%] object-cover" src={email}></NextImage>
                    </motion.a>
                    <motion.a className="w-[4vw] h-[4vw] opacity-30 cursor-pointer" href="http://discordapp.com/users/395005138000936960"  whileHover={{ opacity: 1 }}> 
                        <NextImage alt="icon"  className=" w-[100%] h-[100%] object-cover" src={discord}></NextImage>
                    </motion.a>
                    <motion.a className="w-[3.5vw] h-[3.5vw] opacity-30 cursor-pointer" href="https://www.instagram.com/nick_suh/"  whileHover={{ opacity: 1 }}> 
                        <NextImage  alt="icon" className=" w-[100%] h-[100%] object-cover" src={instagram}></NextImage>
                    </motion.a>
                </div>
            </motion.div>

                
        </motion.div>
    );
}