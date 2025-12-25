'use client'
import Image from "next/image"

import { Pencil } from 'lucide-react';
import { Trash } from 'lucide-react';
import { Eye } from 'lucide-react';

import { toast } from "sonner"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export   function PostItemAdmin({title,mainimage,date,id,views}
  :{title:string,mainimage:string,date:Date,id:string,views:number}) {
const router= useRouter()
 const {data:session}=useSession()
  async function handledelete(){{
    const confirm=window.confirm( `You are deleting post:${title} parmently from the database are you sure ?`)
    
    if(!confirm){
         return
    }
    console.log(session?.user.token)
    try{
            const res=await fetch(`${process.env.BACKEND_URL}/posts/deletepost`,{
        method:'DELETE',
        headers:{    'Content-Type': 'application/json',
           Authorization: `Bearer ` + session?.user.token
        },
        body:JSON.stringify({id})
       })  
        const data=await res.json()
       if(!res.ok){
        throw new Error(data.message as string)
       }

        router.push(`/dashboard/posts?activepage=1&sort=Newest`)   
       toast.success('post has been deleted ')

    }catch(err){
      const errmsg=err instanceof Error?err.message:'somthing went wrong'
      toast.error(errmsg)
      return
    }





  }}

  return (
       <div className="flex flex-row items-center  p-2 sm:p-6 justify-between  w-full bg-white h-[80px]   ">
            <div className="flex flex-row items-center gap-[10px] ">
                <div className="relative w-[60px] sm:w-[90px] xl:w-[140px] h-[65px]">
                    <Image alt="postitemAdmin" fill src={mainimage}></Image>
                 </div>
                 <p className="font-bold text-[4em] sm:text-[3em]   lg:text-[5.5em] "> {title}</p>
            </div>
            <div className="flex flex-row items-center gap-[10px]  sm:gap-[15px] xl:gap-[30px] ">
                     <Pencil  size={'6em'} color="#cb1b16" className="hover:cursor-pointer" onClick={()=>{router.push(`/dashboard/postedit?id=${id}`)}} ></Pencil>
                     <Trash size={'6em'} color="#cb1b16" className="hover:cursor-pointer" onClick={handledelete}></Trash>
                     <div className="flex flex-row gap-[8px]">
                      <Eye size={'6em'} color="#cb1b16" className="hover:cursor-pointer "></Eye>
                        <p className="text-[4em] text-main"> {views}</p>
                     </div>
                     
                     <p className="text-[3em] text-main">{ date.toLocaleDateString('en-US')}</p>
            </div>
                     

         
      </div>
  )

}