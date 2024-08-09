"use client"
import { signIn,signOut } from "next-auth/react"

export default function LogOutBtn() {
    return <button onClick={()=>{signOut()}} style={{padding:"10px",borderRadius:"5px",margin:"5px"}}> Sign Out </button>
}