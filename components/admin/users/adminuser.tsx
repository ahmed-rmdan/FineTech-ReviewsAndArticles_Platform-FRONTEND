'use client'

import Image from "next/image"
import { Ban } from 'lucide-react';
import { toast } from "sonner"
import { BanUser } from "@/actions/actions"
import { UserCheck } from 'lucide-react';
import { useSession } from "next-auth/react";
export function UserAdmin({mainimage,username,id,date,banned}:{mainimage:string,username:string,id:string,date:Date,banned:boolean}){

const {data}=useSession()
  async function banuser(){{
   const state=!banned?'Ban':'unBan'
    const confirm=window.confirm( `You are going to ${state} this User are you sure ?`)
    
    if(!confirm){
         return
    }
    if(!data){
     return
    }
    try{
       
         await BanUser(id ,data.user.token as string)
         toast.success('user has been Updated ')
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
             
            <div className="flex flex-row items-center gap-[10px]  sm:gap-[15px] xl:gap-[30px] ">
                   
                      {!banned?<Ban onClick={banuser} size={'6em'} color="#cb1b16" className="hover:cursor-pointer" ></Ban>:
                    <UserCheck onClick={banuser} size={'6em'} color="#cb1b16" className="hover:cursor-pointer" ></UserCheck>
                      }
                   
    
                     
                     <p className="text-[3em] text-main">{!date?'' :date.toLocaleDateString('en-US')}</p>
            </div>
                     

         
      </div>
  )
}