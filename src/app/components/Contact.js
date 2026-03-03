import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import instagram from "../assets/instagram.png";
import discord from "../assets/discord.png";
import github from "../assets/github.png";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { wordFadeVariant } from "../utils/anim";

export default function Contact({ isMobile }) {
  const Resume = "/Nicholas_Suh_Resume.pdf";
  const contactText = "View my resume or contact me at:";
  
  return (
    <div className={`w-full max-w-[35rem] flex flex-col justify-center text-[#413C34] ${isMobile ? 'items-center text-center' : 'items-start text-left'}`}>
      <div className="mb-[0.3rem] leading-tight text-[1.8rem] font-serif">
        {contactText.split(" ").map((word, i) => {
          if (word === "resume") {
            return (
              <motion.span 
                key={i}
                variants={wordFadeVariant}
                className="inline-block mr-[0.3em]"
              >
                <a href={Resume} className="underline hover:opacity-70 transition-opacity">
                  {word}
                </a>
              </motion.span>
            );
          }
          return (
            <motion.span
              key={i}
              variants={wordFadeVariant}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          );
        })}
      </div>
      
      <motion.div variants={wordFadeVariant} className="mt-[0.3rem]">
        <div className={`flex items-center space-x-[1rem] ${isMobile ? 'justify-center' : 'justify-start'}`}>
          <SocialIcon href="https://github.com/dsfhdshdjtsb" src={github} alt="GitHub" size="2.5rem" />
          <SocialIcon href="https://www.linkedin.com/in/nsuh" src={linkedin} alt="LinkedIn" size="3.2rem" />
          <SocialIcon href="mailto:nicksuh@gatech.edu" src={email} alt="Email" size="3.2rem" />
          <SocialIcon href="http://discordapp.com/users/395005138000936960" src={discord} alt="Discord" size="3.2rem" />
          <SocialIcon href="https://www.instagram.com/nick_suh/" src={instagram} alt="Instagram" size="2.8rem" />
        </div>
      </motion.div>
    </div>
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
