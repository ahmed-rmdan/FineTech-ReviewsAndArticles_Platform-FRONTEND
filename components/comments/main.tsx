
import React from "react";

import { Comment } from "./comment";
import { AddComment } from "./addcomment";
import type { comment } from "@/types/types";
export async function Maincomment({id}:{id:string}){
    
      const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/comments/getcomments?id=${id}`,{
        headers:{'Content-Type': 'application/json'} ,
        next:{tags:['comments']}
      }) 
      if(!res.ok){
        throw new Error('somthing went wrong')
      }
     const data:{comments:comment[]}=await res.json()
 console.log(id)

const empty=<p className="text-main font-extrabold text-center text-[8em] p-8  underline">No Comments Yet</p>
let subcommentlength=0
data.comments.forEach(elm=>{
     subcommentlength=elm.subcomments.length+subcommentlength
})
return(
           <div className=" w- flex flex-col h-[23%] w-full sm:w-[90%] xl:w-[60%] items-center justify-start mt-[5px] gap-[10px] ">
              <h2 className="underline  text-[6em] font-bold">  Comments {data.comments.length+subcommentlength}</h2>
                  <AddComment id={id}></AddComment>
                 <div className="flex flex-col  w-full sm:w-[90%] border-t-1 border-black mt-[10px] gap-[5px] ">
                     {  data.comments.length===0?  empty : data.comments.map(elm=>{
                       return <Comment key={elm._id} id={elm._id} itemid={elm.itemid} likes={elm.likes} subcomments={elm.subcomments} date={new Date(elm.createdAt)} content={elm.content} username={elm.name}
                        image={elm.image}></Comment>  
                     }) }
                 </div>
            
          </div>
    )


    
}