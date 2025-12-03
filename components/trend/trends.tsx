



import React from "react";
import { ItemTrend } from "./item";
import type { post } from "@/types/types";

export async function Trends(){
    
      const res=await fetch(`http://localhost:5000/posts/gettopreadingposts`,{      
              cache:'no-store',
              headers:{'Content-Type': 'application/json'}        
                     })
                       if(!res.ok){
                        throw new Error('somthing went wrong')
                       }
                     const data:{posts:post[]}=await res.json()


return(
           <section className="flex flex-col lg:flex-row h-[800px]  lg:h-[550px]  xl:h-[700px]  w-full justify-around p-2
            items-center text-white bg-white text-[2.5px] sm:text-[3px]   lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]    ">
               {     data.posts.map(elm=>{
                       return <ItemTrend key={elm._id} title={elm.title} description={elm.description}
                        image={elm.mainimage} watches={elm.views} id={elm._id} ></ItemTrend>    
                 
                                      })             

               }
                 
                   
                                   
           </section>
    )


    
}