'use client'

import { ThumbsUp } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { useAppSelector } from "@/state/hook"
import { useState } from "react"
import { useAppDispatch } from "@/state/hook"
import { useractions } from "@/state/state"
import { likingcomment } from "@/actions/actions"


export function LikeComment({likes,id,type}:{likes:string[],id:string,type:'comment'|'subcomment'}){

const dispatch=useAppDispatch()
const {data}=useSession()
const [likesnum,setlikesnum]=useState<number>(likes.length)
const liked=useAppSelector(state=> state.user.likes)
const router=useRouter()
console.log(liked)
console.log(id)
function handlenotauth(){
    toast.warning('you are not logged in')
    router.push('/login')
}


async function  addlike(){
   
    if(liked.includes(id)){
        dispatch(useractions.addlike({id:id,type:'like'}))
        setlikesnum(prev=>prev-1)
    }else{
     dispatch(useractions.addlike({id:id,type:'like'}))
     setlikesnum(prev=>prev+1)
    }
   
    try{
    await likingcomment(data?.user.id as string,id,type)
    }catch(err){
      toast.error('failed to connect')
    }
    
                            
}
console.log(liked)

     return(   
     
             <div className="flex flex-row items-center font-bold  gap-[5px]">
                                      {  !data?.user ? <>
                                      <ThumbsUp onClick={handlenotauth} size={'1.5em'} className="hover:cursor-pointer"></ThumbsUp>
                                                 {likesnum}
                                      </>     :
                                      <>
                                        <ThumbsUp onClick={addlike} fill={!liked.includes(id)?'white':'black'} size={'1.5em'} className="hover:cursor-pointer"></ThumbsUp>
                                                 {likesnum}
                                      </>
                                 }
               </div>
          
     )
    
                              
                                  
    
}