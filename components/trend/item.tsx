
import React from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import Link from "next/link";
export const ItemTrend:React.FC<{title:string,description:string,image:string,watches:number,id:string}>=(props)=>{
    



return(
           <div className=" h-[32%] w-[95%] sm:h-[33%] sm:w-[75%] lg:h-[80%] lg:w-[32%] bg-[#cb1b16] relative flex flex-col items-center rounded-[5px] text-white ">
                  
                    
                     <div className="w-full min-h-[60%] relative rounded-[5px]  ">
                          <Image alt={props.title} fill src={props.image} className=" absolute top-0 min-w-full min-h-full rounded-[5px] ">
                               
                          </Image>
                            <div className="bg-gray-700 absolute top-0 min-w-full min-h-full z-10 opacity-50 rounded-[5px] ">

                           </div>
                           <div className="absolute w-[90px]  h-[40px] sm:w-[125px] sm:h-[50px] z-10 rounded-2xl text-white flex  items-center
                            justify-center text-center font-extrabold text-[4em] bg-[#cb1b16] top-[20px] left-[20px]">
                                  Top Reading
                           </div>
                             <div className="flex flex-row items-center text-[5.5em] font-bold z-10 absolute top-[30px] right-[30px] gap-[5px]  ">
                                        <Eye size={'1.7em'}></Eye>
                                        {props.watches}
                                 </div>
                    </div>
                    <div className="w-[98%] max-h-[40%] flex flex-row item-center justify-center ">
                           <div className="w-full flex flex-col">
                                <Link href={`/post/${props.id}`} className=" w-full z-20 text-[9em] items-center underline font-bold hover:cursor-pointer" >

                                    {props.title}
                                </Link>
                                  <p className="w-[95%] z-20 text-[6em] wrap-break-word overflow-auto mb-[5%] sm:mb-[2%] lg:mb-[5%] ">
                                  {props.description}
                                 </p>
                           </div>                          
                    
                     </div>
                   
                                   
           </div>
    )


    
}