import React from 'react'
import { motion } from 'framer-motion'
import { EXPERIENCES } from '../constants'

const containerVarients = {
    hidden:{
        opacity:0,
        y:50
    },
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:0.6,
            ease:"easeOut",
            staggerChildren:0.2
        }
    }
}

const childVarients = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const Experience = () => {
    
  return (
    <section className='px-4 py-8 lg:px-16 lg:py-16' id='experience'>
        <h2 className='text-4xl md:text-6xl font-medium tracking-tight mb-10'>
            Work Experience
        </h2>
        <div className='h-1 w-20 mb-8 bg-white'></div>
        <motion.div
            className='space-y-10'
            initial='hidden'
            whileInView='visible'
            variants={containerVarients}
            viewport={{ once: true, amount: 0.3 }}
        >
            {EXPERIENCES.map((experience, index) => (
                <motion.div
                    key={index}
                    className='flex flex-col md:flex-row md:justify-between'
                    variants={childVarients}
                >
                    <div className='text-sm md:w-1/4 mb-2 md:mb-0 p-4'>
                        {experience.yearRange}
                    </div>
                    <div className='md:w-3/4 mb-10'>
                        <div className='max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg'>
                            <h2 className='text-xl mb-2'>
                                {experience.title}
                            </h2>
                            <p className='text-sm mb-4 italic'>
                                {experience.location}
                            </p>
                            <ul className='list-disc list-inside space-y-2'> 
                                {experience.description.map((desc,index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </section>
  )
}

export default Experience