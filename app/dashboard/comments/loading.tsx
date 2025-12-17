
import { LoadingItemAdmin } from "@/components/skeleton/itemadmin"

export default function LoadingPosts(){
    return(
        <div className="flex flex-col items-center justify-center gap-[30px] w-[70%]">
           <LoadingItemAdmin></LoadingItemAdmin>
           <LoadingItemAdmin></LoadingItemAdmin>
           <LoadingItemAdmin></LoadingItemAdmin>
           <LoadingItemAdmin></LoadingItemAdmin>
        </div>
    )
}