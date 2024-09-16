import React from 'react'
import { app } from './firebase'
import { getFirestore , collection , addDoc , doc , getDoc, query , where , getDocs , limit , updateDoc , deleteField , deleteDoc} from 'firebase/firestore'

// Firestore Instance
const firestore = getFirestore(app);

export default function App(){

  // Make Collection
  const writeData = async () => {
    const result = await addDoc( collection (firestore , "User"), {
      Name:"Yash",
      Age:20,
      DOB:"16/10/2004",
    });
    console.log(result);
  };

  // Make Sub Collection
  const writeSubData = () => {
    addDoc( collection (firestore,"User/YBvkXbLfQwyDmSFrmjGR/Books"), {
      Name:"I Love You",
      Price:"247/-",
      Author:"Jorn Lu",
      Pages:69
    });
  };

  // Getting Data Using Documnet ID , From Firestore
  const readData = async () => {
    const docRef = doc( firestore , "User" , "YBvkXbLfQwyDmSFrmjGR" );
    const snap = await getDoc(docRef);
    console.log( snap.data() );
  }

  // Getting Data Using Query
  const readDataUsingQuery = async() => {
    const collectionRef = collection( firestore , "User" );
    const q = query( collectionRef , where( "Age" , ">" , 18 ) , limit(2) );
    const snap = await getDocs(q);
    snap.forEach( (data) => {
      console.log(data.data());
    });
  };

  // Update Data Using DocID
  const updateData = async() => {
    const docRef = doc( firestore , "User" , "rrRp0O7vu52h4mPFgWai" );
    await updateDoc(docRef , {
      isMale:false
    });
  };

  // Delete Document
  const deleteDocument = async() => {
    const docRef = doc( firestore , "User" , "rrRp0O7vu52h4mPFgWai" );
    await deleteDoc(docRef);
  };

  // Delete Document Field
  const deleteDocumentField = async() => {
    const docRef = doc( firestore , "User" , "YBvkXbLfQwyDmSFrmjGR" );
    await updateDoc( docRef , {
      Name:deleteField(),
      DOB:deleteField()
    });
  };

  return (
    <>
    <div className='flex flex-col gap-4 w-screen h-screen justify-center items-center'>
      <h1 className='text-xl'> Firease : Cloud Firestore</h1>
      <div className='flex gap-3 flex-wrap justify-center items-center'>
        <button onClick={writeData} className='bg-black text-white p-3 hover:bg-slate-900'> make Collection </button>
        <button onClick={writeSubData} className= 'border p-3 hover:bg-slate-100'> make subCollection </button>
        <button onClick={readData} className='bg-black text-white p-3 hover:bg-slate-900'> get Data Using DocID </button>
        <button onClick={readDataUsingQuery} className='border p-3 hover:bg-slate-100'> get Data Using Query </button>
        <button onClick={updateData} className='bg-black text-white p-3 hover:bg-slate-900'> update Data </button>
        <button onClick={deleteDocument} className='border p-3 hover:bg-slate-100'> Delete Document </button>
        <button onClick={deleteDocumentField} className='bg-black text-white p-3 hover:bg-slate-900'> Delete Document Field</button>
        </div>
    </div>
    </>
  )
}