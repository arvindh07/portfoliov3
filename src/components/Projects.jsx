import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import p1 from "../utils/p1-yt-clone.PNG";
import { client } from '../client';

const Projects = () => {
    const [projectDetails, setProjectDetails] = useState([]);

    useEffect(() => {
        const query = `*[_type == "projects"]{
            ...,
            image{
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
                setProjectDetails(data);
            });
    }, [])
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="z-0 max-w-full min-h-screen flex flex-col justify-evenly items-center relative text-left md:flex-row">
            <h3 className='absolute top-24 text-gray-500 text-2xl tracking-[20px] uppercase'>Projects</h3>
            <div className='relative w-full z-20 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory flex scrollbar-thin scrollbar-track-gray-500/40 scrollbar-thumb-yellow-400'>
                {projectDetails.map((project, index) => {
                    return (<div key={index*6} className="flex flex-col flex-shrink-0 w-screen h-screen justify-center items-center snap-center space-y-5 p-20 md:p-44">
                        <motion.img 
                        initial={{
                            opacity:0,
                            y:-200,
                        }}
                        whileInView={{
                            opacity:1,
                            y:0,
                        }}
                        transition={{
                            duration:1.2,
                        }}
                        viewport={{once:true,}}
                        src={project?.image?.asset?.url} 
                        alt="" 
                        className='w-[250px] h-[200px] rounded-2xl' />
                        <div className='flex flex-col space-y-5 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-yellow-400'>{index + 1} of {projectDetails.length}</span>
                                &nbsp;: {project?.name}</h4>

                            <div className='flex space-x-3 items-center justify-center'>
                                {project?.technologies?.map((link,index) => {
                                    return (
                                        <img className="w-10 h-10" src={link?.image?.asset?.url} alt="" key={index*10}/>
                                    )
                                })}
                            </div>
                            <p className='text-center md:text-left text-lg'>{project?.summary}</p>
                        </div>
                    </div>)
                })}
            </div>
            <div className='absolute top-[30%] left-0 -z-[1] w-full h-[300px] bg-yellow-400 opacity-10 -skew-y-12'></div>
        </motion.div>
    )
}

export default Projects