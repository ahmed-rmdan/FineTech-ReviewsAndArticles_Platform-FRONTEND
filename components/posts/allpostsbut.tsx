'use client'
import Link from "next/link";
import {motion} from 'framer-motion'
export function AllPostsButton(){
    return(
        <motion.div whileHover={{scale:1.1}} transition={{duration:1,type:'spring'}} className=" h-[45px] sm:h-[55px] w-[30%] sm:w-[15%] xl:w-[10%] flex items-center 
                       justify-center text-[5.5em] rounded-2xl font-extrabold bg-[#cb1b16] hover:bg-gray-600 ">
          <Link href={`/blog?sort=${'Newest'}`} className=" h-full w-full flex items-center justify-center">
                                 ALL POSTS
             </Link>
        </motion.div>
    )
}