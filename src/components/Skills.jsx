import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import Skill from './Skill';
import { client } from '../client';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = `*[_type == "skill"]{
            ...,
            image{
                asset->{
                    _id,
                    url,
                }
            }
        } | order(_createdAt asc)`;

        client.fetch(query)
            .then((data) => {
                setSkills(data);
            });
    }, [])
  return (
    <motion.div
        initial={{
            opacity:0,
        }}
        whileInView={{
            opacity:1,
        }}
        transition={{
            duration:1.2,
        }}
        className='min-h-screen max-w-[2000px] relative flex flex-col justify-center items-center mx-auto text-center md:text-left xl:flex-row xl:px-10 xl:space-y-0'
    >
        <h3 className='text-2xl text-gray-500 tracking-[20px] absolute top-24 uppercase'>Skills</h3>
        <p className='uppercase text-center text-gray-500 tracking-[8px] absolute top-36 text-sm'>Hover the individual skill to know current proficiency</p>

        <div className='grid grid-cols-4 gap-5'>
            {skills?.map((skill,index) => {
                const half = Math.floor(skills.length / 2);
                if(index < half){
                    return (
                        <Skill key={index*4} dirLeft src={skill?.image?.asset?.url} value={skill.progress} />
                    )
                }else{
                    return (
                        <Skill key={index*4} src={skill?.image?.asset?.url} value={skill.progress} />
                    )
                }
            })}
        </div>
    </motion.div>
  )
}

export default Skills