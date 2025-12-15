'use client'
import React, { useRef } from "react";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import type { subcomment } from "@/types/types";
import { ThumbsUp } from 'lucide-react';

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SubComment } from "./subcomment";
import { toast } from "sonner";
import { addsubcomment } from "@/actions/actions";
import { LikeComment } from "../global/likecomments";
export const Comment:React.FC<{id:string,itemid:string ,image:string,date:Date,content:string,username:string,subcomments:subcomment[],likes:string[]}>=(props)=>{
    
const [respone,setrespone]=useState<boolean>(false)
const [loading,setloading]=useState<boolean>(false)
const {data}=useSession()
const content=useRef<HTMLTextAreaElement>(null)
const router=useRouter()
async function handleclick(){
    if(content.current?.value===''){
        return
    }
    if(!data?.user){
          toast.info('you are not logged in')
           router.push('/login')
           return
    }
    
    try{
      setloading(true)
      await addsubcomment(data.user.id as string,props.itemid,content.current?.value as string,props.id)
       setloading(false)
     toast.success('comment has been added')
     setrespone(false)
    }catch(err){
      toast.error('failed to add comment')
    }
}
console.log(props.itemid)
return(
        <div className=" w-full flex flex-col p-2 sm:p-3 border-b-1  border-b-gray-400 mt-[5px] mb-[5px] ">
           <div className="flex flex-row  justify-start items-start  gap-[15px] w-[95%] ">
                  <div className=" h-[60px] sm:h-[70px] w-[60px] sm:w-[70px] rounded-[180%] relative ">
                       <Image  alt="" fill src={!props.image?'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png':props.image} className="absolute top-0 h-[60px] sm:h-[70px] w-[60px] sm:w-[70px] rounded-[180%]" ></Image>
                  </div>
                 <div className="flex  flex-col gpa-[4px]   ">
                       <p className="text-[3.5em] font-bold ">{props.username}</p>
                       <p className="text-[3em] font-semibold"> {props.date.toLocaleDateString('eng-us')}</p>
                   <div className="h-full w-full text-[3.5em] ml-[4px] mt-[5px]  ">
                        <p className="w-full  break-words  "> 
                         {props.content}
                        </p>
                         <div className="flex flex-row items-center justify-start h-[20%] gap-[15px] mt-[5px]">
                                       <LikeComment likes={props.likes} id={props.id} type='comment'></LikeComment>
                                   <button onClick={()=>{setrespone(prev=>!prev)}} className="font-semibold hover:cursor-pointer hover:underline">
                                     respone
                                   </button>
                         </div>

                    </div>
                 </div>
          
                 
            </div>
{      respone &&      <div className="mt-[7px] w-[75%] sm:w-[60%] self-center flex flex-col gap-[5px]">
               <Textarea ref={content} className=" bg-white" placeholder="Type your comment here">
                           
               </Textarea>
               <Button onClick={handleclick}
                className=" w-[25%] sm:w-[18%] bg-main text-white text-[3.5em] self-center font-bold hover:bg-gray-500 hover:cursor-pointer">{loading?'..Adding': 'ADD' }</Button>                 
            </div>} 
             
          { props.subcomments.length===0?'': props.subcomments.map(elm=>{
             return <SubComment key={elm._id} id={elm._id} likes={elm.likes} date={new Date(elm.createdAt)} content={elm.content} username={elm.name}
                image={elm.image}></SubComment>
                  }) }
          
        </div>

    
)


    
}