'use client'

import { Searchinput } from "@/components/global/search";
import { Filter } from "@/components/global/filter";
import { ReviewItem } from "@/components/reviews/itemreview";
import { Categories } from "@/components/global/categories";

import { SelectCategory } from "@/components/global/select";
import { useState } from "react";
import { useEffect } from "react";
import type { review } from "@/types/types";

import { Spinner } from "@/components/ui/spinner";
import { useSearchParams } from "next/navigation";


export default  function Reviews() {
const searchParams = useSearchParams();
const sort = searchParams.get('sort') || 'newest';
const category = searchParams.get('category') || 'all';

const[loading,setloading]=useState<boolean>(false)  
const [page,setpage]=useState<number>(1)
const [scroll,setscroll]=useState(0)
const [reviews,setreviews]=useState<review[]>([])
 const backendUrl = process.env.NODE_ENV === 'production' ? process.env.BACKEND_URL : 'http://localhost:5000'
useEffect(()=>{
  setpage(1);
  setreviews([]);
}, [sort, category]);

useEffect(()=>{
  async function getscrollpages(){
       setloading(true)
      const res=await fetch(`${backendUrl}/reviews/getreviews?page=${page}&sort=${sort}&category=${category}`,{
        cache:'no-store'
      })
      if(!res.ok){
        throw new Error('somthing is wrong')
      }
      const newreviews=reviews
       const data:{reviews:review[],noreviews:number}=await res.json()
     
          data.reviews.map(elm=>{
            newreviews.push(elm)
          })      
         console.log(newreviews)
          setreviews(newreviews)

          setloading(false)
  }

getscrollpages()

},[page, sort, category])

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
}, [])


  return (
    <section className=" w-full flex flex-col items-center bg-[#e5e7eb] text-[2.5px] sm:text-[3px]  pt-3 lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]   " >
      {           loading&&  <div className=" sticky  top-[45%] flex justify-center items-center w-[100px] h-[90px] sm:w-[150px] rounded-2xl sm:h-[120px] bg-white z-[20000]">
                    <Spinner className="size-18 sticky " color={'red'} />
                  
                    </div>   }
     <SelectCategory value={category} type="reviews"></SelectCategory>
      <div className="flex flex-row w-full sm:w-[85%] lg:w-[70%] 2xl:w-[55%] justify-center items-center h-[55px] sm:h-[80px] gap-[11px] sm:gap-[20px]">
           
            <Searchinput type="reviews"></Searchinput>
           <Filter filter="reviews" type="reviews" category={category} ></Filter>
      </div>
               <div className="flex flex-col   w-full 
            items-center text-white bg-[#e5e7eb] text-[2.5px] sm:text-[3px] p-4  lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]    ">
                      <div className="flex flex-col justify-between gap-[20px]  w-full  items-center ">
                     {       reviews.map(elm=>{
                                      return   <ReviewItem  key={elm._id} title={elm.title} description={elm.description}
                                            image={elm.mainimage} likes={elm.likes.length}
                                             comments={elm.comments.length} views={elm.views} date={new Date(elm.createdAt)} score={elm.score} id={elm._id}></ReviewItem>
                                        })    }  
                      </div>
                  
                                   
           </div>
 
    </section>
  );
}
