'use client'


import { Searchinput } from "@/components/global/search";
import { Filter } from "@/components/global/filter";
import { ItemPost } from "@/components/posts/itempost";
import { useEffect } from "react";

import { useState } from "react";
import { Spinner } from "@/components/ui/spinner"
import type { post } from "@/types/types";
import { useSearchParams } from "next/navigation";
export default function Blog() {
const[loading,setloading]=useState<boolean>(false)  
const [page,setpage]=useState<number>(1)
const [scroll,setscroll]=useState(0)
const [posts,setposts]=useState<post[]>([])
 const searchParams=useSearchParams()
 const sort=searchParams.get('sort')||''


useEffect(()=>{

  async function getscrollpages(){
    try {
      setloading(true)
      const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/getposts?page=${page}&sort=${sort}`,{
        cache:'no-store',
        headers:{'Content-Type': 'application/json'}
      })
      if(!res.ok){
        console.error('Failed to fetch posts:', res.status, res.statusText)
        setloading(false)
        return
      }
      const data:{posts:post[],noposts:number}=await res.json()
      setposts(prevPosts => [...prevPosts, ...data.posts])
      setloading(false)
    } catch (error) {
      console.error('Error fetching posts:', error)
      setloading(false)
    }
  }

getscrollpages()

},[page])

useEffect(()=>{
  const handleScroll = () => {
    const scrolly = window.scrollY
    setscroll(scrolly)
    
    let scrollpage
    if(window.innerWidth > 425){
      scrollpage = Math.ceil(scrolly / 770)
    } else {
      scrollpage = Math.ceil(scrolly / 600)
    }
    setpage(prev => prev < scrollpage ? prev + 1 : prev)
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [scroll])

console.log(posts)


  return (

    <section className=" w-full  flex flex-col items-center bg-[#e5e7eb] text-[2.5px] sm:text-[3px]   lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]   " >
{           loading&&  <div className=" sticky  top-[45%] flex justify-center items-center w-[100px] h-[90px] sm:w-[150px] rounded-2xl sm:h-[120px] bg-white z-[20000]">
                    <Spinner className="size-18 sticky " color={'red'} />                 
                    </div>   }
      <div className="flex flex-row w-full sm:w-[85%] lg:w-[70%] 2xl:w-[55%] justify-center items-center h-[55px] sm:h-[80px] gap-[11px] sm:gap-[20px]">
            <Searchinput type="searchposts"></Searchinput>
           <Filter filter="posts" type="blog"></Filter>
      </div>
               <div className="flex flex-col   w-full 
            items-center text-white bg-[#e5e7eb] text-[2.5px] sm:text-[3px] p-4  lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]    ">
                      <div className="flex flex-col justify-between gap-[20px]  w-full  items-center ">
                         {posts.map(elm=>{
                          return       <ItemPost key={elm._id} watches={elm.views} date={new Date(elm.createdAt)} likes={elm.likes.length} comments={elm.comments.length}
                           id={elm._id} title={elm.title} description={elm.description}
                                image={elm.mainimage}></ItemPost>
                         })}                     
                      </div>                                                   
           </div>
           
 
    </section>
  );
}
