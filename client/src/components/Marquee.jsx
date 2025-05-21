import React from 'react'
import { MARQUEE_TEXT } from '../constants'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div className='mt-4 w-full overflow-hidden bg-lime-300 text-black lg:py-6'>
        <div className='flex whitespace-nowrap'>
            {[...Array(2)].map((_,i) => (
                <motion.h1 
                initial={{ x: '0%' }}
                animate={{ x: "-100%"}}
                transition={{ repeat: Infinity , ease: "linear", duration: 20 }}
                key={i} 
                className='mr-8 py-2 text-3xl font-bold leading-none tracking-tighter lg:text-7xl'>
                    {MARQUEE_TEXT}
                </motion.h1>
            ))}
        </div>
    </div>
  )
}

export default Marquee