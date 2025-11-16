'use client'
import type { post } from "@/types/types"
import { ItemSlider } from "./item"
import { useState,useEffect } from "react"
import {motion} from 'framer-motion'

export function Itemgroup({posts}:{posts:post[]}){
const [number,setnumber]=useState<number>(0)

useEffect(()=>{
    const length=posts.length
  
  const timer=setInterval(()=>{
    console.log(number,length)

    if(number<length-1){
      setnumber(prev=>prev+1)
    }else{
        setnumber(0)
    }
   
  },3000)

  return  ()=>clearInterval(timer)
  

},[number])
console.log(number)
    return(
           <motion.ul  className={`min-w-full min-h-full flex flex-row translate-x-[-${number*100}%]`}>
                    {posts.map(elm=>{
                    return  <ItemSlider key={elm._id} title={elm.title} description={elm.description}
                      image={elm.mainimage} id={elm._id}></ItemSlider>
                    })}
                      
                         
            </motion.ul>
    )
}