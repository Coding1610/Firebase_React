import React from 'react'
import { useState } from 'react';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import {app} from '../Firebase'

const auth = getAuth(app);

export default function SigninPage(){

    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const signIn = () => {
        signInWithEmailAndPassword(
            auth,email,pass)
            .then((value) => alert("Sign In Success"))
            .catch((error) => alert("Wrong Username or Password"))
            .catch((error) => {console.log(error)});
        setTimeout(()=>{
            setEmail("");
            setPass("");
        },2000);
    }

  return (
    <>
    <div className='flex h-screen w-screen flex-col justify-center items-center gap-5'>
        <h1>Sign In Page</h1>
        <div className='flex gap-4'>
            <label className='flex justify-center items-center'>Email</label>
            <input onChange={(e) => {setEmail(e.target.value)}} value={email} className='border p-2 w-[300px] outline-none' type="email" required placeholder='enter your email here'/>
        </div>
        <div className='flex gap-4'>
            <label className='flex justify-center items-center'>Password</label>
            <input onChange={(e) => {setPass(e.target.value)}} value={pass} className='border p-2 w-[300px] outline-none' type="password" required placeholder='enter your password here'/>
        </div>
        <button className='bg-black text-white p-3' onClick={signIn}>Sign In</button>
    </div>
    </>
  )
  
}