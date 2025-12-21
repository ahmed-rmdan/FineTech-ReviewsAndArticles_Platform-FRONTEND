'use client'

import Image from "next/image"

import { Trash } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { DeleteComment } from "@/actions/actions"
export function CommentAdmin({mainimage,username,id,date,content}:{mainimage:string,username:string,id:string,date:Date,content:string}){


  async function handledelete(){{

    const confirm=window.confirm( `You are deleting this comment content are you sure ?`)
    
    if(!confirm){
         return
    }
    try{
         await DeleteComment(id)
         toast.success('comment has been deleted ')
    }
    catch(err){
        toast.error('failed to connect')
    }



  }}

  return (
       <div className="flex flex-row items-center  p-2 sm:p-6 justify-between  w-full bg-white min-h-[100px]   ">
            <div className="flex flex-row items-center gap-[10px] ">
                <div className="relative w-[60px] sm:w-[90px] xl:w-[140px] h-[65px]">
                    <Image alt="postitemAdmin" fill src={!mainimage?'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png':mainimage}></Image>
                 </div>
                 <p className="font-bold text-[4em] sm:text-[3em]   lg:text-[5.5em] "> {username}</p>
            </div>
             <Textarea disabled={true} className="w-[30%] text-[3em]" value={content}> </Textarea>
            <div className="flex flex-row items-center gap-[10px]  sm:gap-[15px] xl:gap-[30px] ">
                   

                     <Trash onClick={handledelete} size={'6em'} color="#cb1b16" className="hover:cursor-pointer" ></Trash>
    
                     
                     <p className="text-[3em] text-main">{!date?'' :date.toLocaleDateString('en-US')}</p>
            </div>
                     

         
      </div>
  )
}