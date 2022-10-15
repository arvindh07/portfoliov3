import React, { useEffect, useState } from 'react'
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';
import { client } from '../client';

const WorkExperience = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const query = `*[_type == "experience"]{
            ...,
            companyImage{
                asset->{
                    _id,
                    url,
                }
            },
            technologies[]->{
                image{
                    asset->{
                        url,
                    }
                }
            }
        }`;

        client.fetch(query)
            .then((data) => {
                setExperiences(data);
            });
    }, [])
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.2,
            }}
            className='px-10 relative min-h-screen max-w-full flex flex-col md:flex-row justify-evenly items-center mx-auto text-left overflow-hidden'>
            <h3 className='absolute top-24 text-gray-500 tracking-[20px] text-2xl uppercase'>WorkExperience</h3>
            <div className='relative top-[36px] p-8 xl:p-10 w-full flex flex-row space-x-5 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-500/40 scrollbar-thumb-yellow-400'>
                {experiences.map((exp,index) => {
                    return (
                        <ExperienceCard key={index} experience={exp}/>
                    )
                })}
            </div>
        </motion.div>
    )
}

export default WorkExperience