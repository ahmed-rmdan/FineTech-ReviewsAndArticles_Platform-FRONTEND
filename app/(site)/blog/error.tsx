'use client'

export default function Error(){

    return(
         <div className=" h-[600px] sm:h-[800px] flex flex-col items-center justify-center gap-[10px]  text-main text-[8px] sm:text-[12px] xl:text-[16px]">
              <h1 className="font-bold text-[5em]">404 - Error </h1>
              <p  className='text-[1.7em] text-center' >somthing went wrong please check your Internet connection</p>
         </div>
    )
}