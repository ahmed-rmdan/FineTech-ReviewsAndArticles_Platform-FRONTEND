import { SkeletonDemo } from "@/components/skeleton/skeletoneitem"
export default function LoadingLikes(){
    return(
       <div className="flex flex-col items-center w-full justify-center gap-[30px] p-10">
            <SkeletonDemo></SkeletonDemo>
            <SkeletonDemo></SkeletonDemo>
            <SkeletonDemo></SkeletonDemo>
           
       </div>
    )
}