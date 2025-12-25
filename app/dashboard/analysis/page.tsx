import { Compare } from "@/components/admin/analysis/compare"
import { Views } from "@/components/admin/analysis/views"
import { Likes } from "@/components/admin/analysis/likes"

export const dynamic = 'force-dynamic';
export default  async function  Analysis(){
   
            const res=await fetch(`http://localhost:5000/getreport`,{                          
                    headers:{'Content-Type': 'application/json'}        
                           })
               const data:{postsnop:number,reviewsnop:number,postslikes:number,reviewslikes:number,postsviews:number,reviewsviews:number,allviews:number}=await res.json()
 

  return(
    <div className=" w-[97%] sm:w-[80%] flex flex-col gap-[20px] items-center justify-center" >
       <div className=" w-[100%] sm:w-[80%]  h-[400px] bg-white p-0 sm:p-4 rounded-2xl flex flex-col items-center justify-center">
           <Views allviews={data.allviews} postsviews={data.postsviews} reviewsviews={data.reviewsviews}></Views>
       </div>
       <div className="flex  flex-col sm:flex-row gap-[15px]  h-[600px] sm:h-[350px] items-center justify-around w-[100%] sm:w-[80%]  rounded-2xl">
         <div className=" w-[100%] sm:w-[47%] flex items-center justify-center h-full p-2 sm:p-3 bg-white ">
         <Compare postsnop={data.postsnop} reviewsnop={data.reviewsnop}></Compare>
         </div>
        <div className="w-[100%] sm:w-[47%] flex items-center justify-center h-full p-2 sm:p-3 bg-white ">
          <Likes postslikes={data.postslikes} reviewslikes={data.reviewslikes}></Likes>
        </div>
        
       </div>

    </div>
  )

}