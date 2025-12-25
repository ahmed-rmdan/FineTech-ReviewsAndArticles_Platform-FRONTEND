
import React from "react";
import Link from "next/link";
import githublogo from '@/public/SOCIAL MEDIA/github-6980894_1280.png'
import linkedlogo from '@/public/SOCIAL MEDIA/linkdin.png'
import youtubelogo from '@/public/SOCIAL MEDIA/YouTube_full-color_icon_(2024).svg.png'

export function Footer(){
    return(<>
    <section className="flex flex-col items-center justify-center gap-[2%] w-full h-[550px] sm:h-[190px] bg-[#cb1b16]
     text-white text-[0.9em] sm:text-[0.65em] md:text-[1em] xl:text-[1.2em]  ">
        <div className="flex flex-col sm:flex-row font-semibold items-center justify-around w-full h-[250px]  sm:h-[55px] md:h-[60px] " >
                <Link href='/aboutus' className={'hover:underline'} >About Us</Link>
         <Link href='/terms' className={'hover:underline'}>Term&Conditions</Link>
         <Link href={'/contact'} className=" cursor-pointer hover:underline" >Contact Us</Link>
        </div>
       <div className="flex flex-col w-full items-center justify-center gap-[5%] sm:gap-[19%] h-[200px] sm:h-[55%] ">
           <h2 className="underline font-bold text-[1.6em]">Contact ME</h2>
              <div className=" w-[60%] sm:min-w-[35%] sm:max-w-[35%] h-[75%] sm:h-[35%] flex flex-row  items-center gap-[8%] justify-around  ">
                      <a href="https://github.com/ahmed-rmdan" className="min-w-[18%] max-w-[18%] h-[35%] sm:min-h-full sm:max-h-full relative "> 
                       <img alt="github-logo"   className=" absolute min-w-full max-w-full min-h-full max-h-full "  
                       src={githublogo.src}>
                         </img> 
                         
                            </a>
                            <a href="https://www.linkedin.com/in/ahmed-ramadan-63a4272b9/" className="min-w-[18%] max-w-[18%] h-[35%] sm:min-h-full sm:max-h-full relative ">
                              <img   alt='linkdin-logo' src={linkedlogo.src} className=" absolute min-w-full max-w-full min-h-full max-h-full ">
                              </img>   
                               </a>

                             <a href="https://www.youtube.com/@ahmedrmadan2406 " className="min-w-[16%] max-w-[16%] h-[35%] sm:min-h-full sm:max-h-full relative  ">  
                             <img alt="youtube-logo" src={youtubelogo.src} className="  absolute min-w-full max-w-full min-h-full max-h-full">
                             </img>   
                              </a> 
               </div>

       </div>
   
    </section>


     <section className="flex flex-col sm:flex-row items-center  justify-around font-semibold bg-black h-[80px] sm:h-[50px] text-[11px] sm:text-[16px] text-white">
                  <p> https://finetech-platform.vercel.app@2025</p>
                  <p>ahmedrmadan251998@gmail.com</p>
                  
         </section>
    </>
        


    )
}