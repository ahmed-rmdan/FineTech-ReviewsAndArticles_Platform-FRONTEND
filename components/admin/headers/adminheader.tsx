'use client'

import React from "react";
import Link from "next/link";

import { AlignJustify } from 'lucide-react';
import { useState,useEffect } from "react";
import {motion} from 'framer-motion'
import { AnimatePresence } from "framer-motion";
import { AccordionDemo } from "../dashboard/accordion";

import { LogOut } from 'lucide-react';


import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

export function HeaderDashboard(){
    const router=useRouter()
const [width,setwidth]=useState<number>(0)
const [menu,setmenu]=useState<boolean>(false)
const [search,setsearch]=useState<boolean>(false)



useEffect(()=>{
setwidth(window.screen.width)
  window.addEventListener('resize',()=>{
     const size=window.screen.width
     setwidth(size)

  })

},[width])

function handleclick(){
    setmenu(prev=>!prev)
}

function handlenavigate(input:string){
  const section=document.getElementById(`section-${input}`)
  section?.scrollIntoView({behavior:'smooth'})
}
function handlesearch(){
  setsearch(prev=>!prev)
}

async function handlesignout(){
  const confirm=window.confirm('you are logging out are you sure ?')
  if(!confirm){
    return
  }
  router.push('/')
await signOut()
toast.info('you have been logged out')

}


if(width>=768){
return(
           <nav className="flex flex-row xl:flex-row sticky  top-0  z-[10000]  min-w-full  p-5  
            items-center bg-[#cb1b16] text-white text-[2.5px] sm:text-[4px]   lg:text-[4px]  xl:text-[4px] 2xl:text-[4.5px] min-h-[30px]   ">


             <Link href={'/'} onClick={()=>{handlenavigate('1')}} className=" text-end  font-extrabold w-[55%] 
                                sm:text-[6.5em]  lg:text-[10em] 
                                hover:cursor-pointer   ">
                       FineTech
                
              </Link>
              <button onClick={handlesignout} className="w-[40%] flex flex-row justify-center items-center gap-[7px] font-bold ml-[10%]
               text-center sm:text-[4.5em] lg:text-[6em] hover:underline hover:cursor-pointer">
                   <LogOut size={'1em'}  ></LogOut> LogOut
              </button>

                                   
           </nav>
    )
}
else {
  return(
   <nav className="flex flex-row sticky top-0 bg-[#cb1b16]  z-[10000]  min-w-full  p-3  justify-between 
  items-center  text-[2.5px]  min-h-[20px]   ">
             <div className="flex flex-row w-[100%] text-white text-[1em] justify-between items-center gap-[5%]">
                  <AlignJustify color="white" className="min-w-[10%]" onClick={handleclick}></AlignJustify>
             
                      <div className="flex w-[75%] gap-[10%] flex-row items-center justify-center  ">
                          <Link href={'/'}  className=" text-center  font-extrabold w-[60%] 
                                text-[7em]  
                                hover:cursor-pointer ">
                                 FineTech
                
                          </Link>
                          <button className="w-[40%] flex flex-row justify-center items-center gap-[5px] font-bold 
                                text-center text-[4.8em] hover:underline hover:cursor-pointer">
                                      <LogOut size={'1.5em'} onClick={handlesignout} ></LogOut> LogOut
                             </button>
               
                    </div>
        
             </div>
             <AnimatePresence>
              {menu?<motion.div initial={{width:0,opacity:0}} animate={{width:150,opacity:100}} transition={{duration:0.5}}
              exit={{width:0,opacity:0}} className="flex flex-col  absolute left-0 top-[48px] h-[850px] !w-[50%] 
              items-center justify-start bg-white   ">
                           <div className="w-full mt-[30px]">
                              <AccordionDemo></AccordionDemo>      
                           </div>
                           
     
                                    
             </motion.div>: ''}


             </AnimatePresence>       
      
                         
  </nav>

  )
}
    
}