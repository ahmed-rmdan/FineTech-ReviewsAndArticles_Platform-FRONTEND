
'use server'


import React from "react";
import { HomeItem } from "./homeitem";
import type { review } from "@/types/types";

export async function MainReviews(){
 
     const res=await fetch('http://localhost:5000/reviews/gethomereviews',{
        headers:{    'Content-Type': 'application/json'},

       })  
       const data:{reviews:review[]}=await res.json()
     
  

return(
           <section className="flex flex-col lg:flex-row h-[700px]  w-full justify-around p-2
            items-center text-white bg-[#e5e7eb] text-[2.5px] sm:text-[3px]   lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]    ">
                   <div className=" w-[97%] h-[47%] sm:h-[80%] lg:w-[47%]">
                  <HomeItem  title={data.reviews[0].title} id={data.reviews[0]._id} description={data.reviews[0].description}
                         image={data.reviews[0].mainimage} score={data.reviews[0].score} ></HomeItem>
                   </div>
                  <div className="  h-[95%] w-[97%] lg:w-[47%] text-[0.8em] flex flex-col justify-around items-center">
                         <div className="w-[95%] h-[47%]">
                                <HomeItem title={data.reviews[1].title} id={data.reviews[1]._id} description={data.reviews[1].description} 
                                image={data.reviews[1].mainimage} score={data.reviews[1].score} ></HomeItem>
                         </div>
                           <div className="w-[95%] h-[47%]">
                                <HomeItem title={data.reviews[2].title} id={data.reviews[2]._id} description={data.reviews[2].description}
                                image={data.reviews[2].mainimage} score={data.reviews[2].score}></HomeItem>
                         </div>
                  </div>
                   
                                   
           </section>
    )


    
}