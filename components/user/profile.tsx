'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"
import { SquarePen } from 'lucide-react';
import { UserRoundPen } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
export function Profile() {
  const router=useRouter()
  const {data,status}=useSession()
 async function  onclick(){
 await signOut({redirect:false})
  
 router.push('/')
 toast.success('you have been logged out')
 }
  return (
    <Card className="w-full max-w-sm rounded-2xl">

      <CardContent className="flex flex-col items-center gap-3">
        <div className=" relative w-[170px] h-[170px] rounded-[180%] ">
            <Image src={ !data?.user.image?'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png':data.user.image as string} 
           width={170} height={170} alt="profilepic" className="rounded-[180%]" ></Image>
           <SquarePen  size={'6.5em'} className="absolute top-[20px] right-[30px] cursor-pointer " color="#cb1b16"></SquarePen>
        </div>
        <h2 className="text-main font-bold text-[5em]">{data?.user.name}</h2>
           
      </CardContent>
      <CardFooter className="flex-col gap-3.5 border-t-2  p-4 ">
       
       <div className="flex flex-row gap-[7px]">
        <UserRoundPen color="#cb1b16"></UserRoundPen>
           <Link href={'/user/edit'} className="text-main text-[4.5em] font-bold hover:underline"> Edit</Link>
           
       </div>
         <div className="flex flex-row gap-[7px] items-center">
        <Bookmark color="#cb1b16"></Bookmark>
           <Link href={'/user/saved'} className="text-main text-[4.5em] font-bold hover:underline"> Saved</Link>
            
       </div>
         <div className="flex flex-row gap-[7px]">
        <ThumbsUp color="#cb1b16"></ThumbsUp>
           <Link href={'/user/liked'} className="text-main text-[4.5em] font-bold hover:underline"> Liked</Link>
            
       </div>       
         <div className="flex flex-row items-center gap-[7px]">
        <LogOut color="#cb1b16"></LogOut>
           <button  onClick={onclick}   className="text-main text-[4.5em] font-bold hover:underline hover:cursor-pointer "> LogOut</button>
            
       </div>            
                
      </CardFooter>
    </Card>
  )
}