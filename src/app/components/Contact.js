import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import instagram from "../assets/instagram.png";
import discord from "../assets/discord.png";
import github from "../assets/github.png";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { fadeFromLeft, staggerContainer } from "../utils/anim";

export default function Contact() {
  const Resume = "/Nicholas_Suh_Resume.pdf";
  
          return (
              <motion.div
                  className="w-[35rem] flex flex-col justify-center text-[#413C34]"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  key="contact"
                  variants={staggerContainer}
              >
                  <motion.div variants={fadeFromLeft}>
                      <h1 className="text-[1.8rem] font-serif mb-[0.5rem] leading-tight">
                          View my <a href={Resume} className="underline hover:opacity-70 transition-opacity">resume</a> or contact me at:
                      </h1>
                  </motion.div >
      
      <motion.div variants={fadeFromLeft}>
        <div className="flex items-center space-x-[1rem]">
          <SocialIcon href="https://github.com/dsfhdshdjtsb" src={github} alt="GitHub" size="2.5rem" />
          <SocialIcon href="https://www.linkedin.com/in/nsuh" src={linkedin} alt="LinkedIn" size="3.2rem" />
          <SocialIcon href="mailto:nicksuh@gatech.edu" src={email} alt="Email" size="3.2rem" />
          <SocialIcon href="http://discordapp.com/users/395005138000936960" src={discord} alt="Discord" size="3.2rem" />
          <SocialIcon href="https://www.instagram.com/nick_suh/" src={instagram} alt="Instagram" size="2.8rem" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function SocialIcon({ href, src, alt, size }) {
  return (
    <motion.a 
      href={href} 
      className="opacity-30 cursor-pointer block"
      whileHover={{ opacity: 1 }}
      style={{ width: size, height: size }}
    >
      <NextImage 
        alt={alt} 
        className="w-full h-full object-contain" 
        src={src} 
      />
    </motion.a>
  );
}
