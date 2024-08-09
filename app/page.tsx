"use client"
import GithubSignInBtn from "@/components/GithubSignInBtn";
import GoogleSignInBtn from "@/components/GoogleSignInBtn";
import LogOutBtn from "@/components/LogOutBtn";
import {useSession } from "next-auth/react"
import { useEffect } from "react";
export default  function Home() {
  const {data:session}=useSession();

  useEffect(function() {
    console.log(session);
  },[session])

  if (!session) {
    return <main>
      <h1>You need to login</h1>
      <GoogleSignInBtn></GoogleSignInBtn>
      <GithubSignInBtn></GithubSignInBtn>
    </main>   
  }
  
  return <div>Welcome to your dashboard, {session?.user?.name}! <LogOutBtn></LogOutBtn> </div>;
}