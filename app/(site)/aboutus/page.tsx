'use client'

import { motion } from "framer-motion";



export default function Aboutuspg(){
    return(
     <div className="container flex flex-col w-full mx-auto  gap-[10px] text-[5.5px] md:text-[8px] xl:text-[10px] md:gap-[20px] p-4">
      <motion.h1 initial={{x:-250,opacity:0}} transition={{duration:1}} animate={{x:0,opacity:100}} className="w-full font-bold text-main underline
       text-[5em] text-center   "> About Us</motion.h1>
      <motion.p initial={{x:-500,opacity:0}} transition={{duration:1.2}} animate={{x:0,opacity:100}} className=" mx-auto w-[90%] text-[3em] text-center text leading-loose">
       Finetech is a modern fintech content platform designed to help users make smarter financial decisions through trusted reviews insightful articles and real user experiences.

Our mission is to simplify complex financial products and technologies by providing clear unbiased content that anyone can understand. Whether you are exploring digital banking investment platforms payment solutions or emerging financial technologies Finetech gives you the knowledge you need in one place.

We believe that the best financial insights come from real people. That is why Finetech allows users to rate reviews share opinions comment on articles and engage in meaningful discussions with others. Users can reply to comments express their views with likes and save articles or reviews to read later.

Finetech is built to be more than just a reading platform. It is a community where ideas are exchanged experiences are shared and financial awareness grows through interaction and transparency.

We are committed to creating a secure user friendly environment that encourages open discussion and continuous learning in the world of financial technology.

Join Finetech and become part of a growing community shaping the future of finance through knowledge and collaboration.</motion.p>



     </div>
                      
                      
    )
          
}