import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { client } from '../client';

const Header = () => {
  const [socials,setSocials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "social"]';

    client.fetch(query)
      .then((data) => setSocials(data));
  }, [])
  
  return (
    <header className='sticky top-0 z-10 flex items-start xl:items-center justify-between p-5 max-w-screen-xl mx-auto'>
        <motion.div 
          className='flex items-center' 
          initial={{x:-500,opacity:0.5,scale:0.5}}
          animate={{x:0,opacity:1,scale:1}}
          transition={{duration:1}}>
            {socials.map((social) => {
              return (
                <SocialIcon key={social._id} url={social.url} fgColor='gray' bgColor='transparent'/>
              )
            })}
        </motion.div>
        <motion.div 
          className="flex items-center cursor-pointer"
          initial={{x:500,opacity:0.5,scale:0.5}}
          animate={{x:0,opacity:1,scale:1}}
          transition={{duration:1}}>
            <SocialIcon network='email' fgColor='gray' bgColor='transparent'/>
            <p className='uppercase hidden md:inline-block text-sm text-gray-400'>Get in Touch</p>
        </motion.div>
    </header>
  )
}

export default Header