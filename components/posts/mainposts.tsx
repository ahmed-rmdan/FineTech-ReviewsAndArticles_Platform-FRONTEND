



import React from "react";
import { ItemPost } from "./itempost";
import Link from "next/link";
import type { post } from "@/types/types";
import { AllPostsButton } from "./allpostsbut";
export async function MainPosts(){
    
            const res=await fetch(`http://localhost:5000/posts/getposts?page=1&sort=Newest`,{      
                    cache:'no-store',
                    headers:{'Content-Type': 'application/json'}        
                           })
                             if(!res.ok){
                              throw new Error('somthing went wrong')
                             }
                           const data:{posts:post[]}=await res.json()


return(
           <section className="flex flex-col  w-full justify-around p-6
            items-center text-white bg-[#e5e7eb] text-[2.5px] sm:text-[3px]  gap-[20px]  lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]    ">
                      <div className="flex flex-col justify-between w-full h-[90%] gap-[15px] sm:gap-[20px] items-center p-2 ">
                        {  data.posts.map(elm=>{
                                      return<ItemPost key={elm._id} title={elm.title} description={elm.description}
                                                id={elm._id} image={elm.mainimage} date={new Date(elm.createdAt)} watches={elm.views} likes={elm.likes.length} comments={elm.comments.length}></ItemPost>
                                            })
                                    }            

                      </div>
                      <AllPostsButton ></AllPostsButton>
                                   
           </section>
    )


    
}