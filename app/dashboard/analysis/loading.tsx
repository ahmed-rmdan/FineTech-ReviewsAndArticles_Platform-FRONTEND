import { Spinner } from "@/components/ui/spinner"

export default  function  Loading(){


    return(
   <div className=" w-full  flex items-center justify-center" >
   <Spinner className=" size-20 sm:size-28 sticky " color={'red'}  />
   </div>
   

    )
}