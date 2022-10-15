import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { client } from '../client';
import profile from "../utils/arvindh.jpg";

const About = () => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const query = `*[_type == "pageInfo"]{
            ...,
            profilePic{
                asset->{
                    _id,
                    url,
                }
            }
        }`;

        client.fetch(query)
            .then((data) => {
                setInfo(data[0]);
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
            name="about"
            className='max-w-7xl px-10 relative flex flex-col min-h-screen justify-evenly items-center mx-auto md:flex-row text-center md:text-left'>
            <h3 className='absolute top-24 uppercase text-2xl tracking-[20px] text-gray-500'>About</h3>
            <motion.img
                initial={{
                    opacity: 0,
                    x: -200,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                viewport={{
                    once: true,
                }}
                src={info?.profilePic?.asset?.url}
                className='-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-3xl md:w-56 md:h-56 xl:w-[200px] xl:h-[250px]' />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a &nbsp;
                    <span className='underline decoration-[#e6ce1a]'>little</span>
                    &nbsp; background
                </h4>
                <p className='text-base'>
                    {info?.backgroundInformation}
                </p>
            </div>
        </motion.div>

    )
}

export default About