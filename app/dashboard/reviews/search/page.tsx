
import type { review } from "@/types/types"

import { Searchinput } from "@/components/global/search"
import { Filter } from "@/components/global/filter"

import { Pages } from "@/components/global/pages"
import { Categories } from "@/components/global/categories"
import { ReviewItemAdmin } from "@/components/admin/reviews/reviewitem"
import { SelectCategory } from "@/components/global/select"

export default async function ReviewsControl({searchParams }:{searchParams:{activepage:string,sort:string,category:string,search:string}}){
  const params =await searchParams
  const activepage=params.activepage
  const sort=params.sort
  const category=params.category
  console.log(params.category)
  const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/getsearchreviews?page=${activepage}&sort=${sort}&category=${category}&search=${params.search}`,{      
      cache:'no-store',next:{tags:['reviews']}      
                     })
                     if(!res.ok){
                        throw new Error('somthing is wrong')
                     }
                     const data:{reviews:review[],noreviews:number}=await res.json()
  return(
    <div className=" min-w-full sm:min-w-[75%]  flex-col   flex items-center justify-center p-4 gap-[10px] sm:gap-[15px] " >
         <div className="w-full text-[0.9em] xl:tex-[1em] flex items-center justify-center">
            <SelectCategory value={category} type="searchadmin" search={params.search}></SelectCategory>
         </div>
          
       <div className="flex flex-row w-full sm:w-full lg:w-[90%] xl:w-[70%] justify-center items-center h-[55px] sm:h-[80px] gap-[11px] sm:gap-[20px]">
             
             <Searchinput type='reviewsadmin'></Searchinput>
            <Filter type="reviews" filter="searchreviewsadmin" category={category} search={params.search}></Filter>
       </div>         
        <div className="flex flex-col w-[99%] sm:w-[90%] xl:w-[75%] gap-[20px] items-center justify-around   ">
          {data.reviews.map(elm=>{
           return <ReviewItemAdmin key={elm._id} title={elm.title} score={Number(elm.score)} date={new Date(elm.createdAt)} mainimage={elm.mainimage}  id={elm._id}></ReviewItemAdmin>
          })}

       </div>         
             <Pages activepage={Number(activepage)} noposts={data.noreviews} types="searchreviewsadmin" category={category} sort={sort}></Pages>
        
    </div>
  )

}