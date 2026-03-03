import { motion } from "framer-motion";

export default function Project({ title, description, link, dates, technologies }) {
  return (
    <motion.div 
      whileHover={{ x: "1rem" }} 
      className="relative w-full"
    >
      <a href={link} className="block group">
        <div 
          className="text-[#413C34] w-full max-w-[42rem] pt-0 pb-[1rem]" 
          style={{ direction: "ltr" }}
        >
          <h1 className="font-serif text-[1.8rem] m-0 p-0 leading-tight">
            {title}
          </h1>
          
          <div className="flex items-stretch mt-[0.3rem]">
            {/* Border line */}
            <div className="mr-[0.6rem] border-r-2 border-[#413C34]" />
            
            <div className="flex-1">
              <p className="text-[1rem] m-0 p-0 leading-normal opacity-80">
                {description}
              </p>
              <div className="flex flex-wrap gap-x-[1rem] gap-y-[0.3rem] mt-[0.3rem] text-[0.8rem]">
                <h2 className="m-0"> <span className="font-bold">Technologies: </span>{technologies}</h2>
                <h2 className="m-0"> <span className="font-bold">Date: </span> {dates}</h2>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
