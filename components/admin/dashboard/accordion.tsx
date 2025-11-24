import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Link from "next/link"

import { Newspaper } from 'lucide-react';
import { Star } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Users } from 'lucide-react';
import { ChartPie } from 'lucide-react';

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className=" w-[95%] xl:w-[60%]  "
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" >
        <AccordionTrigger className=" text-[5.5em] xl:text-[7em] text-center justify-center items-center" >    <Newspaper></Newspaper> Posts</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-6 text-balance items-center justify-center text-[1em] xl:text-[1.5em]">
          <Link className="hover:underline" href={'/dashboard/addpost'}>
             Add Post
          </Link>
            <Link className="hover:underline" href={'/dashboard/posts?activepage=1&sort=all'}>
               Posts 
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" >
        <AccordionTrigger className="text-[5.5em] xl:text-[7em] text-center justify-center items-center" >    <Star></Star> Reviews</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-6 text-balance items-center justify-center text-[1em] xl:text-[1.5em]">
          <Link className="hover:underline" href={'/dashboard/addreview'}>
             Add Review
          </Link>
            <Link className="hover:underline" href={'/dashboard/reviews?activepage=1&sort=Newest&category=AllReviews'}>
               Reviews 
          </Link>
        </AccordionContent>
      </AccordionItem>
    <AccordionItem value="item-3" >
        <AccordionTrigger className="text-[5em] xl:text-[7em] text-center justify-center items-center" >    <MessageCircle></MessageCircle> Comments</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-6 text-balance items-center justify-center text-[1em] xl:text-[1.5em]">

            <Link className="hover:underline" href={'/dashboard/comments'}>
               Comments Control
          </Link>
        </AccordionContent>
      </AccordionItem>
          <AccordionItem value="item-4" >
        <AccordionTrigger className="text-[5.5em] xl:text-[7em] text-center justify-center items-center" >    <Users></Users> Users</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-6 text-balance items-center justify-center text-[1em] xl:text-[1.5em]">

            <Link className="hover:underline" href={'/dashboard/users'}>
               Users Control
          </Link>
        </AccordionContent>
      </AccordionItem>
          <AccordionItem value="item-5" >
        <AccordionTrigger className="text-[5.5em] xl:text-[7em] text-center justify-center items-center" >    <ChartPie></ChartPie> Analytsis</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-6 text-balance items-center justify-center text-[1em] xl:text-[1.5em]">

            <Link className="hover:underline" href={'/dashboard/analytsis'}>
               Analytsis
          </Link>
        </AccordionContent>
      </AccordionItem>      
    </Accordion>
  )
}