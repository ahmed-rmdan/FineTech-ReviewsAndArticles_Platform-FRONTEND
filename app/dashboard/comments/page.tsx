
'use server'

import { Pages } from "@/components/global/pages"
import type { comment} from "@/types/types"
import { CommentAdmin } from "@/components/admin/comments/admincomment"


export default  async function  CommentControl({searchParams }:{searchParams:{activepage:string}}){
   
  const params=await searchParams
     
  const res=await fetch(`${process.env.BACKEND_URL}/comments/getadmincomments?page=${params.activepage}`,{      
            cache:'no-store',
            next:{tags:['admincomments']}        
                     })
                     if(!res.ok){
                        throw new Error('somthing is wrong')
                     }
                     const data:{comments:comment[],nocomments:number}=await res.json()
 

  return(
    <div className=" min-w-full sm:min-w-[75%]  flex-col   flex items-center justify-center p-2 gap-[15px] sm:gap-[25px] " >

       <div className="flex flex-row w-full sm:w-full lg:w-[90%] xl:w-[70%] justify-center items-center h-[55px] sm:h-[80px] gap-[11px] sm:gap-[20px]">

                   </div>         
                      <div className="flex flex-col w-[99%] sm:w-[90%] xl:w-[75%] gap-[20px] items-center justify-around   ">
                         { data.comments.map((elm,i)=>{
                           return  <CommentAdmin content={elm.content} id={elm._id} key={i} username={elm.name} mainimage={elm.image} date={new Date(elm.createdAt) } ></CommentAdmin>
                         }) }
                        </div>         
              <Pages activepage={Number(params.activepage)} noposts={data.nocomments} types="commentsadmin"  sort={'Newest'}></Pages>
        
    </div>
  )

}