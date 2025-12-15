'use client'

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState,useRef } from "react"
import { addcomment } from "@/actions/actions"
import { useSession } from "next-auth/react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
export function AddComment({id}:{id:string}){
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
      await addcomment(data.user.id as string,id,content.current?.value as string)
       setloading(false)
     toast.success('comment has been added')
    }catch(err){
      toast.error('failed to add comment')
    }
    
 
    

}
    return(
                     <div className=" w-[90%] sm:w-[70%] flex flex-col mt-[10px] items-center gap-[8px]">
                         <Textarea ref={content} className="bg-white text-black" placeholder="Type your comment here" ></Textarea>
                          <Button onClick={handleclick} className=" w-[25%] sm:w-[15%] bg-main text-white text-[5em] sm:text-[4em] font-bold hover:bg-gray-500 hover:cursor-pointer"> 
                            {loading?'..Adding':'ADD'} </Button>
                 </div>
    )
}