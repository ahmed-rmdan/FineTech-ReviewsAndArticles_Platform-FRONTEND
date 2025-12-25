'use server'
import { revalidateTag } from "next/cache"
export async function saveing(id:string,itemid:string,kind:string){
      const res=await fetch(`http://localhost:5000/users/addsave`,{ 
                     method:'POST'    
                     , 
                    cache:'default',
                    headers:{'Content-Type': 'application/json'} ,
                    body:JSON.stringify({id,
                        itemid,
                        kind,
                        
                    })       
                           }
                        )
                      revalidateTag('saved','saved') 
                      
                      return res

}

export async function liking(id:string,itemid:string,kind:string){
      const res=await fetch(`http://localhost:5000/users/addlike`,{ 
                     method:'POST'    
                     , 
                    cache:'default',
                    headers:{'Content-Type': 'application/json'} ,
                    body:JSON.stringify({id,
                        itemid,
                        kind,
                        
                    })       
                           }
                        )
                      revalidateTag('liked','liked') 
                      
                      return res

}

export async function addcomment(userid:string,itemid:string,content:string){
      const res=await fetch(`http://localhost:5000/comments/addcomment`,{ 
                     method:'POST'    
                     , 
                    headers:{'Content-Type': 'application/json'} ,
                    body:JSON.stringify({userid,
                        itemid,
                        content
                        
                    })       
                           }
                        )
                          if (!res.ok) {
                   throw new Error('Failed to add comment')
                      }
                      revalidateTag('comments','comments') 
                      
                     

}

export async function addsubcomment(userid:string,itemid:string,content:string,commentid:string){
      const res=await fetch(`http://localhost:5000/comments/addsubcomment`,{ 
                     method:'POST'    
                     , 
                    headers:{'Content-Type': 'application/json'} ,
                    body:JSON.stringify({userid,
                        itemid,
                        content,
                        commentid
                        
                    })       
                           }
                        )
                          if (!res.ok) {
                   throw new Error('Failed to add comment')
                      }
                      revalidateTag('comments','comments')                                            
}


export async function likingcomment(id:string,itemid:string,kind:string){

      const res=await fetch(`http://localhost:5000/comments/addcommentlike`,{ 
                     method:'PUT'    
                     , 
                    cache:'default',
                    headers:{'Content-Type': 'application/json'} ,
                    body:JSON.stringify({id,
                        itemid,
                        kind,
                        
                    })       
                           }
                        )
              if(!res.ok){
                throw new Error('failed to like')
              }     
                      
                     

}

export async function DeleteComment(id:string){

       const res=await fetch('http://localhost:5000/comments/deletecomment',{
        method:'PUT',
        headers:{    'Content-Type': 'application/json'},
        body:JSON.stringify({id})
       })                             
                       
             if(!res.ok){
                throw new Error('failed to connect')
              }   
              
              revalidateTag('admincomments','admincomments')
                      
                     

}

export async function BanUser(id:string,token:string){

       const res=await fetch('http://localhost:5000/users/banuser',{
        method:'PUT',
        headers:{    'Content-Type': 'application/json',
          Authorization: `Bearer ` + token
        },
        body:JSON.stringify({id}),
        
       })                             
            const data=await res.json()           
             if(!res.ok){
                throw new Error('failed to connect')
              }   
              
              revalidateTag('usersadmin','usersadmin')
                      
                     

}