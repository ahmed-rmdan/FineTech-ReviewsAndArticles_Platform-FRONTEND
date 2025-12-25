'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export  function SelectCategory({value,type,search}:{value:string,type:string,search?:string}){


function selectcatgory(value:string){
if(type==='admin'){
 location.href=`/dashboard/reviews?activepage=1&sort=Newest&category=${value}`
}
if(type==='searchadmin'){
  location.href=`/dashboard/reviews/search?activepage=1&sort=Newest&category=${value}&search=${search}`
}if(type==='reviews'){
     location.href=`/reviews?activepage=1&sort=Newest&category=${value}`
}if(type==='searchreviews'){
    location.href=`/reviews/search?search=${search}&activepage=1&sort=Newest&category=${value}`
}



 
}
return(
    <Select onValueChange={(value)=>{selectcatgory(value)}} >
  <SelectTrigger className=" w-[45%] sm:w-[22%] xl:w-[15%]  text-[5em]  !text-white bg-main ">
    <SelectValue placeholder={value} className="text-white"/>
  </SelectTrigger>
  <SelectContent className="text-white bg-main  text-[5em]" >
         <SelectItem  value="AllReviews">AllReviews</SelectItem>
    <SelectItem value="Software">Software</SelectItem>
    <SelectItem value="Hardware">Hardware</SelectItem>
    <SelectItem value="Electronics">Electronics</SelectItem>
     <SelectItem value="Other">Other</SelectItem>
  </SelectContent>
</Select>
)

}