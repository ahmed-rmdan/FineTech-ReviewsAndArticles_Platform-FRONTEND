'use client'
import React from "react";
import { motion } from "framer-motion";



export default function Aboutuspg(){
    return(
     <div className="container flex flex-col w-full mx-auto  gap-[10px] text-[5.5px] md:text-[8px] xl:text-[10px] md:gap-[20px] p-4">
      <motion.h1 initial={{x:-250,opacity:0}} transition={{duration:1}} animate={{x:0,opacity:100}} className="w-full font-bold text-main underline
       text-[5em] text-center   "> About Us</motion.h1>
      <motion.p initial={{x:-500,opacity:0}} transition={{duration:1.2}} animate={{x:0,opacity:100}} className=" mx-auto w-[90%] text-[3em] text-center text leading-loose">At Modex
        . we believe that fashion is more than just clothing — its a lifestyle an attitude and a way to express who you are. Born from a passion for modern style and youth culture our online store is dedicated to bringing you the latest trends in mens fashion at affordable prices.

We carefully curate our collections to suit every mood and moment — from streetwear essentials to standout pieces that make a statement. Whether you are dressing for a casual day out or a night to remember. Modex is your go-to destination for quality. comfort. and style.

Join our growing community of bold fashion-forward individuals. At Modex we dont just follow trends — we set them.</motion.p>



     </div>
                      
                      
    )
          
}