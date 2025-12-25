
'use client'

import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion'


export function HomeItem ({title,description,image,score,id}: {title:string,description:string,image:string,score:number,id:string}){
    




return(
           <motion.div 
           whileInView={{opacity:1}} viewport={{once:true,amount:0.5}} transition={{duration:3,type:'spring'}} initial={{ opacity: 0.2 }} 
           className="min-h-full min-w-full relative flex flex-col-reverse items-center text-[#cb1b16] rounded-[10px]">
                    <Image alt={title} fill src={image} className=" absolute top-0 min-w-full min-h-full rounded-[10px] ">
                               
                    </Image>
                        <div className="bg-gray-700 absolute top-0 min-w-full min-h-full z-10 opacity-50  rounded-[10px]">

                        </div>
                          
                         <p className="w-[75%] self-start  z-20 text-[7em] wrap-break-word mb-[7%] ml-[2%] lg:mb-[5%] text-white font-bold 2xl:leading-[40px] 2xl:mb-[3%] ">
                          {description}
                        </p>
                     
                          <Link href={`/reviews/${id}`} className=" w-[97%] z-20 text-[10em] items-center underline font-bold hover:cursor-pointer" >

                         {title}
                       </Link>
                      <button className="  w-[50px] h-[50px]  sm:h-[65px] sm:w-[65px]  xl:h-[85px] xl:w-[85px] rounded-[180%] absolute bottom-[5%] xl:bottom-[10%] 
                      right-[6%] z-20 border-2 border-[#cb1b16] text-[9em] 
                      font-bold bg-white">
                                     {score.toString()}
                      </button>
                                   
           </motion.div>
    )


    
}