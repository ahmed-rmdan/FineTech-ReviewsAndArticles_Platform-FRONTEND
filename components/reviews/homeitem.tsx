
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export const HomeItem:React.FC<{title:string,description:string,image:string,score:number,id:string}>=(props)=>{
    



return(
           <div className="min-h-full min-w-full relative flex flex-col-reverse items-center text-[#cb1b16] rounded-[10px]">
                    <Image alt={props.title} fill src={props.image} className=" absolute top-0 min-w-full min-h-full rounded-[10px] ">
                               
                    </Image>
                        <div className="bg-gray-700 absolute top-0 min-w-full min-h-full z-10 opacity-50  rounded-[10px]">

                        </div>
                          
                         <p className="w-[75%] self-start  z-20 text-[7em] wrap-break-word mb-[7%] ml-[2%] lg:mb-[5%] text-white font-bold 2xl:leading-[40px] 2xl:mb-[3%] ">
                          {props.description}
                        </p>
                     
                          <Link href={`/reviews/${props.id}`} className=" w-[97%] z-20 text-[10em] items-center underline font-bold hover:cursor-pointer" >

                         {props.title}
                       </Link>
                      <button className="  w-[50px] h-[50px]  sm:h-[65px] sm:w-[65px]  xl:h-[85px] xl:w-[85px] rounded-[180%] absolute bottom-[5%] xl:bottom-[10%] 
                      right-[6%] z-20 border-2 border-[#cb1b16] text-[9em] 
                      font-bold bg-white">
                                     {props.score.toString()}
                      </button>
                                   
           </div>
    )


    
}