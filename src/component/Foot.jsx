import { motion } from 'framer-motion'
import React from 'react'


function Foot() {
  return (
    
    <div className='w-full h-[30vw] bg-zinc-900 border-t-4 border-zinc-400 mt-5 flex justify-center items-center'>
      <div className='w-1/2 bg-slate-950 h-[20vw] rounded-lg flex justify-center items-center '>
        <h2 className='capitalize font-semibold text-[20px] '>Thankyou for visiting my website</h2>
      </div>
    </div>
  )
}

export default Foot