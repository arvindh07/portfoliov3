import React from 'react';
import {motion} from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div 
        className='relative flex items-center justify-center'
        initial={{opacity:0}}
        animate={{
            scale:[1,2,2,3,1],
            opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
            borderRadius:["20%","20%","50%","80%","20%"],
        }}
        transition={{
            duration:2.5,
        }}>
        <div className='absolute border border-[#333333] mt-52 rounded-full w-[100px] h-[100px] animate-ping'></div>
        <div className='rounded-full border border-[rgb(36,36,36)] h-[200px] w-[200px] absolute mt-52' ></div>
        <div className='rounded-full border border-[rgb(36,36,36)] h-[400px] w-[400px] absolute mt-52' ></div>
        <div className='absolute border border-[#f2ed4e] mt-52 opacity-20 rounded-full w-[550px] h-[550px] animate-pulse'></div> 
        <div className='absolute border border-[rgb(36,36,36)] mt-52 rounded-full w-[700px] h-[700px]'></div>
    </motion.div>
  )
}

export default BackgroundCircles