
import type { review } from "@/types/types"

import { EditReviewForm } from "./editreviewform"





export default async function Editreview({searchParams}:{searchParams:{id:string}}){


   const params=await searchParams

   const res=await fetch(`http://localhost:5000/reviews/getreview?id=${params.id}`,{      
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