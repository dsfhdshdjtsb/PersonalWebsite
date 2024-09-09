import { motion, AnimatePresence, stagger, useAnimate } from "framer-motion";
export default function Project({title, description , link, dates, technologies, role}) {
  return (
    <>
    
    <motion.div whileHover={{transform: "translateX(2vw)", transition: {duration: .2}}} className="mt-[-1.5vw] relative  ">
      <a href={link}>
        <div className=" text-[#413C34]   h-[7w] w-[42vw] p-[1vw] relative left-[-3vw]" style={{direction: "ltr"}}>
          
              <h1 className="  font-serif text-[2.0vw] m-0 p-0 align-bottom ">{title}</h1>
            
              
            <div className="flex items-center ">
              <div className="relative left-[1.2vw] h-[6vw]">
                <p className="text-[1.0vw]  m-0 p-0  align-bottom overflow">{description}</p>
                <div className="flex w-fit  h-fit space-x-[1vw] text-[1vw]">
                  <h2 className="text-[0.7vw] "> <span className="font-bold">Date: </span> {dates}</h2>
                  <h2 className="text-[0.7vw] "> <span className="font-bold">Technologies: </span>{technologies}</h2>
                  <h2 className="text-[0.7vw] "> <span className="font-bold">Role: </span>{role}</h2>
                </div>
              </div>
              <div className=" absolute border-r-2 h-[6vw] w-[0vw] left-[1.5vw] border-[#413C34]"></div>
              
            </div>
        </div>
        
      </a>
    </motion.div>
    {/* <motion.div whileHover={{transform: "translateX(2vw)", transition: {duration: .2}}}>
      <a href={link}>
        <div className=" text-[#413C34]   h-[7w] w-[40vw] p-[1vw]" style={{direction: "ltr"}}>
          <div className="flex items-center">
              <h1 className=" ml-[0.5vw] font-serif text-[2.0vw] m-0 p-0 align-bottom ">{title}</h1>
            <div className=" absolute border-r-2 h-[2vw] w-[0vw] border-[#413C34]"></div>
          </div>
              
              <p className=" text-[1.0vw]  m-0 p-0  align-bottom">{description}</p>
              <div className="flex w-[40vw] h-[0vw] space-x-[1vw] text-[1vw]">
              <h2 className="text-[0.7vw] "> <span className="font-bold">Date: </span> August 2021 - present</h2>

              <h2 className="text-[0.7vw] "> <span className="font-bold">Technologies: </span>Java, Gradle, Fabric</h2>
              <h2 className="text-[0.7vw] "> <span className="font-bold">Role: </span>Creator</h2>
              </div>
        </div>
        
      </a>
    </motion.div> */}
    
        
    </>
    
  );
}