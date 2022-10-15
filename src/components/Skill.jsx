import React from 'react';
import { motion } from "framer-motion";

const Skill = (props) => {
    const { dirLeft, src, value } = props;
    return (
        <motion.div
            initial={{
                x: dirLeft ? -200 : 200,
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: 1.2,
            }}
            className="group relative flex cursor-pointer">
            <motion.img
                src={src}
                className="border border-gray-500 w-24 h-24 xl:w-32 xl:h-32 filter rounded-full group-hover:grayscale transition-all ease-in-out duration-300"
            />
            <div className='z-0 absolute top-0 left-0 translate-[50%] opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 xl:w-32 xl:h-32 rounded-full'>
                <div className='flex h-full justify-center items-center'>
                    <p className='text-3xl text-black font-bold opacity-100'>{value}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Skill