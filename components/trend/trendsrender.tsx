'use client'
import { ItemTrend } from "./item";
import type { post } from "@/types/types";
export function TrendsRender({posts}:{posts:post[]}){
    return(
        < >
               {     posts.map(elm=>{
                       return <ItemTrend key={elm._id} title={elm.title} description={elm.description}
                        image={elm.mainimage} watches={elm.views} id={elm._id} ></ItemTrend>    
                 
                                      })             

               }
        </>
    )
}