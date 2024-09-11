import React from 'react'
import {getDatabase,ref,set} from 'firebase/database'
import {app} from './Firebase'

const db = getDatabase(app);

export default function App() {

  const putData = () => {
    console.log("Working")
    set(ref(db,'users/yash'),{
      id:1,
      name:"Yash Prajapati",
      age:19,
    });
  }

  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center'>
      <button onClick={putData} className='bg-yellow-400 p-5 font-bold'>PUT DATA</button>
    </div>
    </>
  )
}