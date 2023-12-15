'use client'

import Image from 'next/image'
import { useState } from 'react'
 
export default function Home() {
  const [count,setCount]= useState(0)
  return (
    <div className='    max-w-lg mx-auto bg-slate-300 bg-opacity-20 rounded-md mt-20  flex flex-col gap-5 justify-center items-center p-10  '>
   
      
      {/* coutnt time */}
      <p className=' text-7xl mx-auto'>{count}</p>
      <div className='flex items-center justify-start  gap-10 '>
        <button className=' p-2 min-w-[200px] rounded-md bg-red-400 text-white text-lg' onClick={()=>count>0&&setCount(count-1)}>Decrease</button>
        <button className=' p-2 min-w-[200px] rounded-md bg-green-400 text-white text-lg' onClick={()=>setCount(count+1)}>Increase</button>
      </div>
     
    </div>
  )
}
