'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import type { post } from "@/types/types"


import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Controller } from "react-hook-form";
import { useRouter } from "next/navigation"

import { toast } from "sonner"



export  function EditpostForm({post}:{post:post}){

const router=useRouter()
  const schema=z.object({
    title:z.string().max(25,{message:'max length is 25 '}).min(1,{message:'title required'}),
    description:z.string(),
    mainimage:z.any(),
    content:z.string(),
    mainslider:z.boolean()
  })

   type formfield=z.infer<typeof schema>

  const {register,handleSubmit,formState:{errors,isSubmitting},control,setError}=useForm<formfield>({
    resolver:zodResolver(schema),
    defaultValues:{
      title:post.title,
      description:post.description,
      mainslider:post.mainslider,
      content:post.content,
      mainimage:''
    }
  })


const onsubmit:SubmitHandler<formfield>=async(data)=>{

    if(data.mainimage!==''){
       const checkfile:File=data.mainimage[0]
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
 if(!allowedTypes.includes(checkfile.type)){
  setError('mainimage',{message:'please only upload a image file'})
  return;
 }
    }


 try{
      const res1= await fetch(`${process.env.BACKEND_URL}/posts/editpost`,{
         method:'POST',
       headers:{    'Content-Type': 'application/json'},
                    body:JSON.stringify(
                         {title:data.title,description:data.description,content:data.content,mainslider:data.mainslider,id:post._id}
                    )
 })
 const postdata= await res1.json()
 if(!res1.ok){
throw new Error(postdata.message as string)
 }
   if(data.mainimage===''){
    toast.success('POST has been edited successfully')
    return router.push('/dashboard/posts?activepage=1&sort=all')       
   }

  const imagefile:File=data.mainimage[0]
  const formdata=new FormData()
  formdata.append('file',imagefile)

  console.log(formdata.get('file'))

      const res2= await fetch(`${process.env.BACKEND_URL}/posts/editpostimage?id=${post._id}`,{
         method:'PUT',
                    body:formdata
 })
 const postdata2= await res2.json()
 if(!res2.ok){
throw Error(postdata2.message as string)
 }
   
   
 }catch(error){

   const msg = error instanceof Error ? error.message : String(error);
 setError('root',{type: "manual", message:msg})
 }
 

 router.push('/dashboard/posts?activepage=1&sort=all')
toast.success('POST has been edited successfully')

  }


                         
  return(
   
    <div className=" min-w-[75%]   flex items-center justify-center p-5 " >
         <div className="bg-white flex flex-col w-[98%] sm:w-[80%] items-center gap-[15px] p-5 rounded-2xl">
               <h1 className="text-main text-[9em] underline font-bold ">Edit Post</h1>
                <form className="flex flex-col w-[85%] sm:w-[70%] xl:w-[50%]  gap-[15px]  " onSubmit={handleSubmit(onsubmit)}>
                           <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]"   htmlFor="Main Title">Main Title</Label>
                                  <Input
                                 id="Main Title"
                                  type="text"
                                placeholder=""
                                 required
                               
                                 {...register('title')}
                                     />
                                     {/* <p className="text-main font-semibold text-[1.8em] ">* dsadsadsa</p> */}
                            </div>                  
                           <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]"  htmlFor="Main Title">Main Image</Label>
                                  <Input
                                 id="Main Title"
                                  type="file"
                                placeholder=""
                                  {...register('mainimage')}
                                     />
                                   { errors.mainimage?.message&&<p className="text-main font-semibold text-[1.8em] ">{errors.mainimage?.message as string}</p>}
                            </div>
                            <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]"  htmlFor="Description">Description</Label>
                                  <Input
                                 id="Description"
                                  type="text"
                                placeholder=""
                                 required
                                
                                 {...register('description')}
                                     />
                                  
                            </div>
                            <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]"  htmlFor="content">Content</Label>
                                  <Textarea
                                 id="content"                                 
                                placeholder=""
                                 required
                               
                                 {...register('content')}
                                     />
                                
                            </div>
                                   <Controller  name="mainslider" control={control} 
                                   render={({field})=>(
                                      <div className="flex items-center gap-3 mt-2">
                                       <Checkbox  id="mainslider" 
                                       checked={field.value}
                                       onCheckedChange={(checked)=>{
                                        field.onChange(!!checked)
                                       }}
                                       />
                                     <Label className="font-semibold text-[3.5em]" htmlFor="mainslider">Add the post to the main Home page Slider</Label>
                                       </div>
                                   )}
                                   >
                                   
                                      
                                   </Controller>
                                 {/* <p className="text-main font-semibold text-[2em] ">* dsadsadsa</p> */}
                               <Button className="w-[30%] self-center !text-[4em] mt-[10px] hover:cursor-pointer bg-main hover:bg-gray-500"> {isSubmitting?'..Saving':'Save'} </Button>                                                     
                 </form>
         </div>        
        
    </div>
  )

}