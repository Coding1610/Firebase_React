import React from 'react'
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from '../Firebase'
import { useState } from 'react';

export default function SignupPage(){

    const auth = getAuth(app);

    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    const signUp = () => {
        createUserWithEmailAndPassword( auth , email , pass ).then( (value) => alert("Succsess") );
        setTimeout(()=>{
            setEmail("");
            setPass("");
        },2000);
    }

  return (
    <>
    <div className='flex h-screen w-screen flex-col justify-center items-center gap-5'>
        <h1>Sign Up Page</h1>
        <div className='flex gap-4'>
            <label className='flex justify-center items-center'>Email</label>
            <input className='border p-2 w-[300px] outline-none' type="email" required placeholder='enter your email here' onChange={(e) => {setEmail(e.target.value)}} value={email}/>
        </div>
        <div className='flex gap-4'>
            <label className='flex justify-center items-center'>Password</label>
            <input className='border p-2 w-[300px] outline-none' type="password" required placeholder='enter your password here' onChange={(e) => {setPass(e.target.value)}} value={pass}/>
        </div>
        <button className='bg-black text-white p-3' onClick={signUp}>Sign Up</button>
    </div>
    </>
  )
}