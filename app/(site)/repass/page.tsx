'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { Label } from "@/components/ui/label"
import { useState } from "react"
import { toast } from "sonner"
import { useRef } from "react"
export default function Repass(){
const email=useRef<HTMLInputElement>(null)
const [loading,setloading]=useState<boolean>(false)
const [error,seterror]=useState<string>('')
const [iserror,setiserror]=useState<boolean>(false)

async function onclick(){
const emailvalue=email.current?.value
console.log(emailvalue)
if(!emailvalue||emailvalue===''||!emailvalue.includes('@')){
  console.log('asdasd')
  return
}

 setloading(true)
  try{
     
const res= await fetch(`http://localhost:5000/users/resetpass`,{
         method:'PUT',
                    body:JSON.stringify({email:emailvalue})
                    ,
                      headers:{'Content-Type': 'application/json'}
                 })
  
 const Data=await res.json()

     if(!res?.ok){
        throw new Error(Data.message as string)
            }

setloading(false)
setiserror(false)
seterror('')
  toast.success('please check your mail we have sent email to you ')

  }catch(err) {
   const errmes= err instanceof Error? err.message:'somthing went wrong'
   setiserror(true)
    seterror(errmes)
    setloading(false)
  }


}

  return(
    <div className=" flex items-center justify-center h-[650px]  w-full bg-sec text-[3px] sm:text-[4px]   lg:text-[4px]  xl:text-[4px] 2xl:text-[4.5px] " >
         
         <div className="flex flex-col items-center justify-start bg-white p-6 w-[97%] sm:w-[85%] xl:w-[55%] 2xl:w-[50%] rounded-2xl gap-[25px] ">
            <h1 className="w-full underline font-extrabold text-main text-[8em] text-center"> Reset Password</h1>
             <form className="flex flex-col items-center w-[95%] sm:w-[70%] lg:w-[60%] gap-[15px] text-[3em]">
                    <Label className="text-main text-center">Note : We will send a message to your email account to reset a new password</Label>
                    <Label className="self-start">Email</Label>
                     <Input ref={email} type="email" placeholder=" Email" />
                   {iserror&&<p className="text-main self-center text-center w-full flex justify-center text-[1.3em] font-bold">* {error}</p>}
                     
                    <Button onClick={onclick} type='button'
                     className="bg-main text-sec font-bold sm:text-[1.4em] w-[30%] sm:w-[20%] hover:bg-gray-500 hover:cursor-pointer">{loading?'..Sending':'Send'}</Button>
               
             </form>

         </div>
         
        
    </div>
  )

}