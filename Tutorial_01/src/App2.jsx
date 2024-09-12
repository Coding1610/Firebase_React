import React from 'react'
import SignupPage from './Pages/SignupPage'
import SigninPage from './Pages/SigninPage'

export default function App2() {
  return (
    <>
    <div className='flex w-screen h-screen gap-5'>
        <SignupPage/>
        <SigninPage/>
    </div>
    </>
  )
}