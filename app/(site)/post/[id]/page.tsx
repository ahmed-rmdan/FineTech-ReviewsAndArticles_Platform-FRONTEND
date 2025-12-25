import { Post } from "@/components/posts/post";
import { Maincomment } from "@/components/comments/main";
import type { post } from "@/types/types";



export default async function Postpg({params}:{params:{id:string}}) {
  const resolvedParams = await params;
  console.log(resolvedParams)
    const id= resolvedParams.id
            const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/viewpost?id=${id}`,{      
                    cache:'no-store',
                    headers:{'Content-Type': 'application/json'}        
                           })
                             if(!res.ok){
                              throw new Error('something went wrong')
                             }
                           const data:{post:post}=await res.json()
     console.log(data.post)
  return (
    <section className=" w-full flex flex-col items-center bg-[#e5e7eb] text-[3px] sm:text-[3px]   lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px] p-0 sm:p-3  " >
                 <Post  id={data.post._id} content={data.post.content} date={ new Date(data.post.createdAt)}
                  title={data.post.title} description={data.post.description}
                                image={data.post.mainimage} views={data.post.views} likes={data.post.likes} comments={data.post.comments.length}></Post>      
                <Maincomment id={id}></Maincomment>
    </section>
  );
}
