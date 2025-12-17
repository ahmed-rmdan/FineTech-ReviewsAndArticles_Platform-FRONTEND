'use client'

import { AccordionDemo } from "./accordion"
import { useEffect,useState } from "react"



export function Dashboard() {
const [width,setwidth]=useState(window.innerWidth)
  useEffect(()=>{
  setwidth(window.screen.width)
    window.addEventListener('resize',()=>{
       const size=window.screen.width
       setwidth(size)
  
    })
  
  },[width])

  if(width<768){
    return(
      ''
    )
  }else
  return (
       <div className="flex flex-col items-center p-4 w-[25%]  lg:w-[20%] bg-white rounded-2xl h-[850px] gap-[20px]">
           <h2 className="text-[8em] w-full text-center underline font-bold mt-[20px]">DashBoard</h2>
           <AccordionDemo></AccordionDemo>
      </div>
  )
}