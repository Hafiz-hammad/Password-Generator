import React, { useCallback, useEffect, useState } from 'react'


function App() {
const [length, setLength] =useState(8)
const [numberAllowed, setNumberAllowed] =useState(false)
const [charAllowed, setCharAllowed] =useState(false)
const [password, setPassword] =useState("")
const passwordGenerator = useCallback(()=>{
  let pass = "";
  let str ="ABDCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnoprstuvwxyz";
  if (numberAllowed) str+="0123456789"
  if (charAllowed) str+=",.<>?/;''}{][+-=()*&^%$#@!`~"
  for (let i=1; i<= length;i++){
    let char = Math.floor(Math.random()* str.length+1)
    pass += str.charAt(char)
  // password =pass 
  }
  setPassword(pass)
  console.log(pass)
},[length,numberAllowed,charAllowed,setPassword])

useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])
return (


<div className='rounded-lg p-3 px-4 my-8 text-orange-500 bg-gray-800 w-full max-w-md mx-auto shadow-lg'>
<h1 className='flex justify-center font-bold text-xl pb-4'>Password Generator</h1>
<div className='flex shadow  rounded-lg overflow-hidden mb-4'>
<input 
type='text'
value={password}
className='outline-none w-full py-1 px-3'
placeholder='Password'
readOnly
/>
<button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

</div>

<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
  <input
  type='range'
  min={6}
  max={100}
  value={length}
  className='cursor-pointer'
  onChange={(e)=>setLength(e.target.value)}
  />
  <label>Length : {length}</label>
</div>
<div className='flex items-center gap-x-1'>
<input
type='checkbox'
defaultChecked={numberAllowed}
id='NumberInput'
onChange={()=>{
  setNumberAllowed((prev)=>!prev)
}}

/>
<label htmlFor='NumberInput'>Numbers</label>

</div>

<div className='flex items-center gap-x-1'>
  <input
  type='checkbox'
  defaultChecked={charAllowed}
  id='CharInput'
  onChange={()=>{
    setCharAllowed((prev)=>!prev)
  }}
  
  />
  <label htmlFor='CharInput'>Characters</label>
</div>

</div>


</div>

  )
}

export default App
