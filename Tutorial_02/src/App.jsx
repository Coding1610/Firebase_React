import React from 'react'
import { useState } from 'react'
import {useFirebaseContext} from './Context/Firebase'

export default function App() {

  // Custom Hook Instance
  const firebase = useFirebaseContext();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

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
            <input className='border p-2 w-[300px] outline-none' type="password" required placeholder='enter your password here' onChange={(e) => {setPassword(e.target.value)}} value={password}/>
        </div>
        <button 
          className='bg-black text-white p-3'
          onClick={ () => {
            firebase.signUp(email,password);
            firebase.putData("users/" + "yashu",{email,password});
          }}
          >
          Sign Up</button>
    </div>
    </>
  )
}