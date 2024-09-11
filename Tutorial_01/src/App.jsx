import React from 'react'
import {getDatabase,ref,set} from 'firebase/database'
import {app} from './Firebase'

const db = getDatabase(app);

export default function App() {

  const putData = () => {
    console.log("Working")
    set(ref(db,'users/yash'),{
      id:13,
      name:"Yash Prajapati",
      age:19,
    });
  }

  return (
    <>
    <div>Firebase React</div>
    <button onClick={putData} className='bg-yellow-400 p-3 m-10'>PUT DATA</button>
    </>
  )
}