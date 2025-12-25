'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from "next/navigation"

import { Controller } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function AddReview(){


const router=useRouter()
  const schema=z.object({
    title:z.string().max(30,{message:'max length is 30 '}).min(1,{message:'title required'}),
    category:z.string(),
    description:z.string(),
    mainimage:z.any(),
    content:z.string(),
    summary:z.string(),
    score:z.string().min(1,{message:"minimum score should be 1"}).max(10,{message:'maximum score should be 10 '})
  })

  type formfield=z.infer<typeof schema>

  const {register,handleSubmit,formState:{errors,isSubmitting},control,setError}=useForm<formfield>({
    resolver:zodResolver(schema),
    defaultValues:{
      title:'',
       category:'',
      description:'',
      content:'',
      mainimage:'',
      summary:''

    }
  })
  

  const onsubmit:SubmitHandler<formfield>=async(data)=>{
  const checkfile:File=data.mainimage[0]
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
 if(!allowedTypes.includes(checkfile.type)){
  setError('mainimage',{message:'please only upload a image file'})
  return;
 }
console.log('vreating')
console.log(data.category)

 try{
      const res1= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/createreview`,{
         method:'POST',
       headers:{    'Content-Type': 'application/json'},
                    body:JSON.stringify(
                         {title:data.title,description:data.description,content:data.content,summary:data.summary,score:Number(data.score),category:data.category}
                    )
 })
 const reviewdata= await res1.json()
 if(!res1.ok){
throw new Error(reviewdata.message as string)

 }
console.log(reviewdata.id)

  const imagefile:File=data.mainimage[0]
  const formdata=new FormData()
  formdata.append('file',imagefile)

  console.log(formdata.get('file'))

      const res2= await fetch(`${process.env.BACKEND_URL}/reviews/putreviewimage?id=${reviewdata.id}`,{
         method:'PUT',
                    body:formdata
 })
 const reviewdata2= await res2.json()
 if(!res2.ok){
throw Error(reviewdata2.message as string)
 }
   
   
 }catch(error){

   const msg = error instanceof Error ? error.message : String(error);
 setError('root',{type: "manual", message:msg})
 return
 }
 

 router.push('/dashboard/reviews?activepage=1&sort=Newest&category=AllReviews')
toast.success('review has been Created successfully')

  }




  return(
    <div className=" min-w-[75%]   flex items-center justify-center p-5 " onSubmit={handleSubmit(onsubmit)} >
         <div className="bg-white flex flex-col w-[98%] sm:w-[90%] xl:w-[80%] items-center gap-[15px] p-5 rounded-2xl">
               <h1 className="text-main text-[9em] underline font-bold ">Add Review</h1>
                <form className="flex flex-col w-[85%] sm:w-[75%] xl:w-[55%]  gap-[15px] ">
                           <div className="grid gap-2 text-[2em]">
                           <Label  className="text-[2.5em]" htmlFor="Main Title">Main Title</Label>
                                  <Input
                                 id="Main Title"
                                  type="text"
                                placeholder=""
                                 required
                                  {...register('title')}
                                     />
                                     { errors.title&&<p className="text-main font-semibold text-[1.8em] ">{ errors.title?.message}</p>}
                            </div>
                            <div className="grid gap-2 text-[2em]">
                           <Label  className="text-[2.5em]" htmlFor="category">Category</Label>                      
                                   <Controller name="category"  control={control} render={({field})=>(
                                   <Select value={field.value}  onValueChange={(value)=>field.onChange(value)}>
                                      <SelectTrigger className="w-[180px]">
                                       <SelectValue placeholder="Select" />
                                          </SelectTrigger>
                                          <SelectContent>
                                                 <SelectItem value="Software">Software</SelectItem>
                                                 <SelectItem value="Hardware">Hardware</SelectItem>
                                                 <SelectItem value="Electronics">Electronics</SelectItem>
                                                 <SelectItem value="Other">Other</SelectItem>
                                             </SelectContent>
                                          </Select>
                                   )                                     
                                   } >

                                   </Controller>

                            </div>                                                  
                           <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]" htmlFor="Mainimage">Main Image</Label>
                                  <Input
                                 id="Mainimage"
                                  type="file"
                                placeholder=""
                                 required
                                 {...register('mainimage')}
                                     />
                                     { errors.mainimage?.message&&<p className="text-main font-semibold text-[1.8em] ">{errors.mainimage?.message as string}</p>}
                                   
                            </div>
                            <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]" htmlFor="Description">Description</Label>
                                  <Input
                                 id="Description"
                                  type="text"
                                placeholder=""
                                 required
                                 {...register('description')}
                                     />
                                     
                            </div>
                            <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]" htmlFor="content">Content</Label>
                                  <Textarea
                                 id="content"                                 
                                placeholder=""
                                 required
                                 {...register('content')}
                                     />
                               
                            </div>
                            
                            <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]" htmlFor="summary">Summary</Label>
                                  <Textarea
                                 id="summary" 
                                                           
                                placeholder=""
                                 required
                                   {...register('summary')}
                                     />
                                    { errors.summary?.message&&<p className="text-main font-semibold text-[1.8em] ">{errors.summary?.message as string}</p>}
                            </div> 
                            <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]" htmlFor="score">Score</Label>
                                  <Input
                                  className=" w-[30%]"
                                 id="score"                                 
                                placeholder=""
                                 required
                                 type="number"
                                 max={10}
                                 min={1}
                                 {...register('score')}
                                     />
                                     { errors.score?.message&&<p className="text-main font-semibold text-[1.8em] ">{errors.score?.message as string}</p>}
                            </div>                             
                                 {errors.root?.message&&<p className="text-main font-semibold text-[4em]  text-center" >* {errors.root?.message}</p>}
                               <Button disabled={isSubmitting} type='submit' className="w-[30%] self-center !text-[4em] mt-[10px] hover:cursor-pointer bg-main hover:bg-gray-500"
                               > {isSubmitting?'..submitting':'Submit'} </Button>                                                   
                 </form>
         </div>        
        
    </div>
  )

}