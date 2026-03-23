
import React from "react";
import Link from "next/link";
import githublogo from '@/public/SOCIAL MEDIA/github-6980894_1280.png'
import linkedlogo from '@/public/SOCIAL MEDIA/linkdin.png'
import youtubelogo from '@/public/SOCIAL MEDIA/YouTube_full-color_icon_(2024).svg.png'

export function Footer(){
    return(<>
    <section className="flex flex-col items-center justify-center gap-6 w-full py-8 bg-gradient-to-r from-[#cb1b16] to-[#a01712] text-white shadow-lg  sm:text-[0.95em] lg:text-[1.05em] xl:text-[1.15em] 2xl:text-[1.25em]">
        <div className="flex flex-col sm:flex-row font-semibold items-center justify-center gap-6 sm:gap-24 w-full">
                <Link href='/aboutus' className='hover:underline hover:text-gray-200 transition-colors duration-300'>About Us</Link>
         <Link href='/terms' className='hover:underline hover:text-gray-200 transition-colors duration-300'>Terms & Conditions</Link>
         <Link href='/contact' className="hover:underline hover:text-gray-200 transition-colors duration-300">Contact Us</Link>
        </div>
       <div className="flex flex-col items-center justify-center gap-4">
           <h2 className="font-bold text-[1.25em]">Follow Me</h2>
              <div className="flex flex-row items-center gap-10">
                      <a href="https://github.com/ahmed-rmdan" className="h-10 w-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform duration-300">
                       <img alt="github-logo" className="w-full h-full object-contain" src={githublogo.src} />
                      </a>
                            <a href="https://www.linkedin.com/in/ahmed-ramadan-63a4272b9/" className="h-10 w-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform duration-300">
                              <img alt='linkedin-logo' src={linkedlogo.src} className="w-full h-full object-contain" />
                               </a>
                             <a href="https://www.youtube.com/@ahmedrmadan2406" className="h-10 w-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform duration-300">
                             <img alt="youtube-logo" src={youtubelogo.src} className="w-full h-full object-contain" />
                              </a>
               </div>
       </div>
   
    </section>


     <section className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4 font-semibold bg-gradient-to-r from-gray-900 to-black text-white border-t border-gray-700">
                  <p className="text-[0.9em]">&copy; 2025 truetech-platform.vercel.app All rights reserved.</p>
                  <p>ahmedrmadan251998@gmail.com</p>
         </section>
    </>
        


    )
}