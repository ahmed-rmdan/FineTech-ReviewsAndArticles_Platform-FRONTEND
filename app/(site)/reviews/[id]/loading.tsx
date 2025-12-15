import { SkeletonPost } from "@/components/skeleton/sskeletonpost"
export default function LoadingPost(){
    return (
        <div className="flex items-center justify-center w-full"> 
          <SkeletonPost></SkeletonPost>
        </div>
   
    )
}