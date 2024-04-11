import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import data from '../../data.json';
export default function Carrousel(){

  const [widthCurrent, setWidthCurrent] = useState(0);
  const skills = data.skills || [];
  const carrousel = useRef();
  useEffect(()=> {
    console.log(carrousel.current?.scrollWidth, carrousel.current?.offsetWidth)
    setWidthCurrent(carrousel.current?.scrollWidth-carrousel.current?.offsetWidth);
  }, [])
  return(
    <div>
      <motion.div ref={carrousel} className="carrousel" whileTap={{cursor: 'grabbing'}}>
        <motion.div className="inner" drag={'x'} dragConstraints={{right:0, left: -widthCurrent}} initial={{x:300}} animate={{x:0}} transition={{duration: 1.5}}>
        {skills.map(item=>(
          <motion.div><img className="icon_skill" src={item.logo_skill} alt="Icons skills"/></motion.div>
        ))}
        </motion.div>
      </motion.div>
    </div>
  )
}