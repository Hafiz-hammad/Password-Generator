import React, { useState } from 'react'

import './App.css'

function App() {

const [color,setColor]= useState("olive")
  return (
  
<div className='w-full h-screen duration-200' 
style={{backgroundColor:color}}
>

  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>


<button 
onClick={()=>setColor("red")}
className='bg-red-900 px-4 py-1 rounded-full text-white shadow-2xl outline-none'>
  Red
</button>


<button 
onClick={()=>setColor("green")}

className='bg-green-900 px-4 py-1 rounded-full text-white shadow-2xl outline-none'>
  Green
</button>


<button 
onClick={()=>setColor("blue")}

className='bg-blue-900 px-4 py-1 rounded-full text-white shadow-2xl outline-none'>
  Blue
</button>

<button
onClick={()=>setColor("pink")}

className='bg-pink-900 px-4 py-1 rounded-full text-white shadow-2xl outline-none'>
Pink
</button>

<button
onClick={()=>setColor("yellow")}

className='bg-yellow-300 px-4 py-1 rounded-full text-white shadow-2xl outline-none'>
  Yellow
</button>

</div>
  </div>
</div>
  )
}

export default App
