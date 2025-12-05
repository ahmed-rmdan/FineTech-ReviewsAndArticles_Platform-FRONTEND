import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
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
        const database = await dbconnection();
        const db = database.db();
        console.log(credentials)
          
        const finduser = await db
          .collection("users")
          .findOne({ username: credentials?.username });

        if (!finduser) {
          throw new Error(`username or password not right `);
        }

        const isequal = await bcrypt.compare(
          credentials!.password,         
          finduser.password             
        );

        if (!isequal) {
          throw new Error(" password not right");
        }

        return {
          id: finduser._id.toString(),
          email: finduser.email,
          name:finduser.name
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name=user.name
      }
      return token;
    },

    async session({ session, token }) {
      if (!session.user) session.user = {}; 

      session.user.id = token.id;
      session.user.name=token.name
      return session;
    },
  },
});

export { handler as GET, handler as POST };