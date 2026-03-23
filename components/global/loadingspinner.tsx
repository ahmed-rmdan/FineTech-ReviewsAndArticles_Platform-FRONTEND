import { Spinner } from "@/components/ui/spinner"

export function LoadingSpinner(){
    return(
         <div className=" sticky  top-[45%] flex flex-col gap-[10px] justify-center items-center
                 w-[100px] h-[90px] sm:w-[150px] rounded-2xl sm:h-[120px] bg-white z-[20000]">
                    <Spinner className="size-16 sticky " color={'#cb1b16'} /> 
                    <p className="text-[#cb1b16] text-[5.5em] sm:text-[5em]">Loading..</p>                
                    </div>  

    )
}