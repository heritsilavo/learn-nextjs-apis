import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import clientPromise from "@/lib/mongodb"
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string
    }),
    GithubProvider({
        clientId:process.env.NEXT_PUBLIC_GITHUB_ID as string,
        clientSecret:process.env.NEXT_PUBLIC_GITHUB_SECRET as string,
        httpOptions:{
            timeout:10000
        }
    })
    // Ajoutez d'autres fournisseurs ici
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXT_PUBLIC_SECRET,
  callbacks: {
    async session({ session, user, token }) {
      return {id:user.id,...session};
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});