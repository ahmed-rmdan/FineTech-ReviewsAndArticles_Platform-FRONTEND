
import type { review } from "@/types/types"

import { EditReviewForm } from "./editreviewform"





export default async function Editreview({searchParams}:{searchParams:{id:string}}){


   const params=await searchParams
   const id=params.id

   const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/getreview?id=${id}`,{      
       cache:'no-store',
       headers:{'Content-Type': 'application/json'}        
                      },)
                      if(!res.ok){
                         throw new Error('somthing is wrong')
                      }
                      const data:{review:review}=await res.json()

              console.log(data.review)

                         
  return(
   
      
      <EditReviewForm review={data.review}></EditReviewForm>
  )

}