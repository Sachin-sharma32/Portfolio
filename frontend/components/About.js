import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AppWrapp from '../wrapper/AppWrapp'

const About = () => {
  return (
    <div className=' w-full min-h-screen pt-20 mt-20 bg-white flex flex-col justify-center'>
      <motion.h2 whileInView={{y:[100,-20,0]}}  className=' text-center text-3xl font-semibold'>I Know That <span className=' text-blue-600'>Good Design and Functionality</span> <br/> Means <span className=' text-blue-600'>Good Business</span></motion.h2>
      <div className='p-10 grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-4'>
        <motion.div whileInView={{x:[-200,0]}} transition={{delay:0}}>
          <Image src="/dev.jpg" width="300px" height="200px" className=' hover:scale-110 transition-all duration-200 rounded-lg '/>
          <h3 className=' text-lg font-semibold'>Web Development</h3>
          <h5>I am good at web development</h5>
        </motion.div>
        <motion.div whileInView={{x:[-200,0]}} transition={{delay:0.2}}>
          <Image src="/design.jpg" width="300px" height="200px" className=' hover:scale-110 transition-all duration-200 rounded-lg '/>
          <h3 className=' text-lg font-semibold'>Web Design</h3>
          <h5>I am good at web design</h5>
        </motion.div>
        <motion.div whileInView={{x:[200,0]}} transition={{delay:0.2}}>
          <Image src="/development.jpg" width="300px" height="200px" className=' hover:scale-110 transition-all duration-200 rounded-lg '/>
          <h3 className=' text-lg font-semibold'>Ui/Ux</h3>
          <h5>I am good at enhancing user experience</h5>
        </motion.div>
        <motion.div whileInView={{x:[200,0]}} transition={{delay:0}}>
          <Image src="/animation.jpg" width="300px" height="200px" className=' hover:scale-110 transition-all duration-200 rounded-lg '/>
          <h3 className=' text-lg font-semibold'>Web Animations</h3>
          <h5>I am good at aniations</h5>
        </motion.div>
      </div>
    </div>
  )
}

export default AppWrapp(About, "ABOUT") 