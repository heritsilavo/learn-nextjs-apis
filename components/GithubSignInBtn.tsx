"use client"
import { signIn } from "next-auth/react"

export default function GithubSignInBtn() {
    return <button onClick={()=>{signIn("github")}} style={{padding:"10px",borderRadius:"5px",margin:"5px"}}> Sign In with github </button>
}