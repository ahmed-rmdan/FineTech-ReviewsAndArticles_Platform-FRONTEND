'use client'

import { Star } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const category=['Software','Hardware','Electronics','Other']


export function ReviewsDrop(){
    const [onhover,setonhover]=useState<boolean>(false)
    function handleclick(elm:string){
        location.href=`/reviews?sort=Newest&category=${elm}`
    }
return(

         <div className="flex flex-row gap-[5px] items-center ">
                      <Star size={'1.4em'} ></Star>
            <Link href={'/reviews?sort=Newest&category=AllReviews'}  onMouseEnter={()=>setonhover(true)}  onClick={()=>location.href='/reviews?sort=Newest&category=AllReviews'}
                       className="hover:underline hover:cursor-pointer text-[1.05em]"> Reviews</Link>
            { onhover && <div onMouseLeave={()=>setonhover(false)} className=" absolute  top-[70px] left-[150px]  lg:left-[200px]  xl:left-[300px] 2xl:left-[410px] flex flex-col
           w-[200px]  lg:w-[240px] border-[0.5px] border-main rounded-[5px]">
                  {category.map((elm,i)=>{
                    return   <button key={i} onClick={()=>handleclick(elm)} className=" flex items-center justify-center text-center w-full  h-[40px] border-b-2 text-[0.8em] xl:text-[0.65em]
                     text-main bg-white hover:bg-[#cb1b16] hover:border-[#cb1b16] hover:text-white hover:cursor-pointer" >
                                       {elm}
                              </button>
                  })}



            </div>}

                       
         </div>  
)
 

}