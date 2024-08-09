"use client"
import { signIn } from "next-auth/react"

export default function GoogleSignInBtn() {
    return <button onClick={()=>{signIn("google")}} style={{padding:"10px",borderRadius:"5px",margin:"5px"}}> Sign In with google </button>
}