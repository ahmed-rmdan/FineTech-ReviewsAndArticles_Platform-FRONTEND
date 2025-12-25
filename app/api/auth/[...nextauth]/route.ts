import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { user } from "@/types/types";
import GoogleProvider from "next-auth/providers/google"
import { dbconnection } from "@/lib/database";
const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try{
         const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/signin`,{
           method:'POST'
          ,
           headers:{'Content-Type': 'application/json'},
           body:JSON.stringify({username:credentials?.username,password:credentials?.password})     
         })
         const data:user&{token:string,role:string,message:string}=await res.json()
            if(!res.ok){
              throw new Error(data.message as string)
            }
            console.log(data.token)
                 return {
          id: data._id,
          email: data.email,
          name:data.name,
          image:data.image,
          role:data.role,
          token:data.token
          
        };
         
        }catch(err){
           const errmsg=err instanceof Error? err.message:'somthing went wrong'
           throw new Error(errmsg)
        }       
      },
    }),
    GoogleProvider({
      name:'google'
      ,
  clientId: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  allowDangerousEmailAccountLinking: true,
})

  ],

  callbacks: {
    async jwt({ token, user ,trigger,session}) {
       
      if (user) {
              const db= (await dbconnection()).db()
      const finduser=await db.collection('users').findOne({email:user.email})  
        token.id = finduser?._id.toString() as string;
        token.name=finduser?.name as string
         token.image=finduser?.image as string
         token.role=finduser?.role as string
         token.token=user.token as string
      }
            if (trigger === "update" && session?.image) {
                 token.image = session.image;   
              }
            if (trigger === "update" && session?.name) {
                 token.name = session.name;   
              }         
      return token;
    },

    async session({ session, token }) {
      if (!session.user) session.user ={}; 

      session.user.id = token.id;
      session.user.name=token.name
      session.user.image=token.image as string
      session.user.role=token.role
      session.user.token=token.token
      return session;
    },
      async signIn({ user, account }) {
    if (account?.provider === "google") {
      const db= (await dbconnection()).db()
      const finduser=await db.collection('users').findOne({email:user.email})     
      if (!finduser) {
     await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/creategoogleuser`,{
         method:'POST',
       headers:{    'Content-Type': 'application/json'},
                    body:JSON.stringify(
         {username:user.email,email:user.email,name:user.name,image:user.image}
                   )
          })
          return true
      }
      if(finduser.provider==='credentials'){
        return false
      }

    }

    return true
  },
  },
});

export { handler as GET, handler as POST };