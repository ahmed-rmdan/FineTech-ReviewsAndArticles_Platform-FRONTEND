

import type { post } from "@/types/types"
import { EditpostForm } from "./editpostform"




export const dynamic = 'force-dynamic';

export default async function Editpost({searchParams}:{searchParams:{id:string}}){


   const params=await searchParams
   const id=params.id

   const res=await fetch(`${process.env.BACKEND_URL}/posts/getpost?id=${id}`,{      
       cache:'no-store',
       headers:{'Content-Type': 'application/json'}        
                      },)
                      if(!res.ok){
                         throw new Error('somthing is wrong')
                      }
                      const data:{post:post}=await res.json()

              console.log(data.post)

                         
  return(
   
        <EditpostForm post={data.post}></EditpostForm>
  )

}