'use client'

import { Star, Code, HardDrive, Zap, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Arrow } from "./arrow";
const category=['Software','Hardware','Electronics','Other']


export function ReviewsDrop(){
    const [onhover,setonhover]=useState<boolean>(false)
    function handleclick(elm:string){
        location.href=`/reviews?sort=Newest&category=${elm}`
    }
    function getIcon(elm: string) {
        switch (elm) {
            case 'Software':
                return <Code size={'1em'} />;
            case 'Hardware':
                return <HardDrive size={'1em'} />;
            case 'Electronics':
                return <Zap size={'1em'} />;
            case 'Other':
                return <MoreHorizontal size={'1em'} />;
            default:
                return null;
        }
    }
return(

         <div className="flex flex-row gap-[5px] items-center">
                      <Star size={'1.4em'} ></Star>
            <Link href={'/reviews?sort=Newest&category=AllReviews'}  onMouseEnter={()=>setonhover(true)}  onClick={()=>location.href='/reviews?sort=Newest&category=AllReviews'}
                       className="flex flex-row items-center gap-[7px] hover:underline hover:cursor-pointer text-[1.05em]"> Reviews <Arrow active={onhover}></Arrow></Link>
            { onhover && <div onMouseLeave={()=>setonhover(false)}
             className=" absolute  top-[70px] left-[150px]  lg:left-[200px]  xl:left-[300px] 2xl:left-[410px] flex flex-col border-[#cb1b16]
           w-[200px]  lg:w-[240px] border-[0.5px] border-main rounded-[5px]">
                  {category.map((elm,i)=>{
                    return   <button key={i} onClick={()=>handleclick(elm)} className=" flex items-center justify-center text-center w-full  h-[40px] border-b-2 text-[0.8em] xl:text-[0.65em]
                     text-main bg-white hover:bg-[#cb1b16] hover:border-[#cb1b16] hover:text-white hover:cursor-pointer gap-2" >
                                       {getIcon(elm)} {elm}
                              </button>
                  })}



            </div>}

                       
         </div>  
)
 

}