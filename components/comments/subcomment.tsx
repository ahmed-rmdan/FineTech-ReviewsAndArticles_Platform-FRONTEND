
import React from "react";

import Image from "next/image";


import { LikeComment } from "../global/likecomments";




export const SubComment:React.FC<{image:string,date:Date,content:string,username:string,likes:string[],id:string}>=(props)=>{
    



return(
        <div className=" w-[90%]  sm:w-full flex flex-col ml-[10%]  mt-[10px]">
           <div className="flex flex-row  justify-start items-start  gap-[8px] w-full ">
                  <div className=" h-[50px] sm:h-[60px] w-[50px] sm:w-[60px] rounded-[180%] relative ">
                       <Image  alt="" fill src={!props.image?'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png':props.image} 
                       className="absolute top-0 h-[50px] sm:h-[60px] w-[50px] sm:w-[60px] rounded-[180%]" ></Image>
                  </div>
                 <div className="flex  flex-col gpa-[3px]   ">
                       <p className="text-[3.5em] font-bold ">{props.username}</p>
                       <p className="text-[3em] "> {props.date.toLocaleDateString('eng-us')}</p>
                   <div className="h-full w-full text-[3.5em] ml-[4px]   ">
                        <p className="w-full  break-words  "> {
                            props.content
                            }
                        </p>
                         <div className="flex flex-row items-center justify-start h-[20%] gap-[15px] mt-[5px]">
                             <LikeComment likes={props.likes} id={props.id} type='subcomment'></LikeComment>                           
                         </div>

                    </div>
                 </div>         
                 
            </div>            
          
        </div>

    
)


    
}