import { motion } from "framer-motion";

/**
 * CRITICAL DESIGN MANDATES:
 * 1. Project alignment MUST ALWAYS be left-justified (text-left) on ALL screen sizes.
 * 2. ON-HOVER SLIDE ANIMATION (whileHover={{ x: "1rem" }}):
 *    - MUST BE ENABLED on Desktop.
 *    - MUST BE DISABLED on Mobile to prevent horizontal movement on touch.
 */
export default function Project({ title, description, link, dates, technologies, isMobile }) {
  return (
    <motion.div 
      // Only enable the slide-right animation if NOT on mobile
      whileHover={!isMobile ? { x: "1rem" } : {}} 
      className="relative w-full"
    >
      <a href={link} className="block group">
        {/* Container is strictly text-left for both mobile and desktop */}
        <div 
          className="text-[#413C34] w-full max-w-[42rem] pt-0 pb-[1rem] text-left" 
          style={{ direction: "ltr" }}
        >
          <h1 className="font-serif text-[1.8rem] m-0 p-0 leading-tight text-left">
            {title}
          </h1>
          
          <div className="flex items-stretch mt-[0.3rem]">
            {/* Internal dividing line */}
            <div className="mr-[0.6rem] border-r-2 border-[#413C34]" />
            
            <div className="flex-1 text-left">
              <p className="text-[1rem] m-0 p-0 leading-normal text-left">
                {description}
              </p>
              {/* Metadata labels are also left-justified */}
              <div className="flex flex-wrap gap-x-[1rem] gap-y-[0.3rem] mt-[0.3rem] text-[0.8rem] justify-start opacity-100">
                <h2 className="m-0 text-left"> <span className="font-bold">Technologies: </span>{technologies}</h2>
                <h2 className="m-0 text-left"> <span className="font-bold">Date: </span> {dates}</h2>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
