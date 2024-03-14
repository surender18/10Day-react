import { useState,useCallback,useEffect } from 'react'

import './App.css'

function App() {
  const[length,setLength]=useState(10)
  const[numberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setcharAllowed]=useState(false);
  const [password,setPassword]=useState("")

  const passGen=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+="0123456789"
  if(charAllowed) str +="!@#$%^&*~"
  for(let i=1;i<=length;i++){
    let char = Math.floor(Math.random() *str.length+1)

    pass +=str.charAt(char)
    
  }
  setPassword(pass)
},[length,numberAllowed,charAllowed,setPassword])

  


  useEffect(()=>{passGen()},[length,numberAllowed,charAllowed,passGen])
  
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-md px-4 py-3 my-8 text-orange-400 bg-gray-900'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3' 
      placeholder='password'
      readOnly
      />
      <button className='outline-none bg-blue-600 text-white px-3 py-0.4 shrink-0'>copy</button>

    </div>
    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
    <input type="range"
    min={8}
    max={100}
    value={length}  className='cursor-pointer'
    onChange={(e)=>{setLength(e.target.value)}}
    
    />
    <label >Length:{length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={numberAllowed} name="" id="numberInput" onChange={()=>{setNumberAllowed((prev)=>!prev);
      }} />
      <label htmlFor="numbersInput">Numbers</label>

    </div>

    <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={charAllowed} id="characterrInput" onChange={()=>{setcharAllowed((prev)=>!prev);
      }} />
      <label htmlFor="characterInput">Characters</label>

    </div>
    </div>
    </div>
    </>
  )
}
  
export default App
