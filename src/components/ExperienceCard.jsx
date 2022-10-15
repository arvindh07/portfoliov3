import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = (props) => {
    const {experience} = props;
    return (
        <article className='overflow-hidden opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-300 p-6 xl:p-10 snap-center bg-[#292929] flex flex-col rounded-lg flex-shrink-0 px-10 space-y-2 justify-around items-center w-[450px] h-[500px] xl:w-[500px]'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.2,
                }}
                viewport={{
                    once: true,
                }}
                src={experience?.companyImage?.asset?.url}
                alt=""
                className='w-14 h-14 xl:h-24 xl:w-24 rounded-full object-cover object-center' />
            <div className='px-0 md:px-10'>
                <h4 className='text-2xl font-light'>{experience?.jobTitle}</h4>
                <p className='mt-1 text-2xl font-bold'>{experience?.company}</p>
                <div className='flex space-x-2 my-2'>
                    {/* techs */}
                    {experience?.technologies?.map((tech) => {
                        return (
                            <div>
                                <img className="w-10 h-10 object-cover" src={tech?.image?.asset?.url} alt="" />
                            </div>
                        )
                    })}
                </div>
                <p className='py-5 uppercase text-gray-300'>{new Date(experience?.dateStarted).toLocaleDateString()} - {experience?.isCurrentlyWorkingHere ? "present" : experience?.dateEnded}</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {/* works */}
                    {experience?.points?.map((point,index) => {
                        return (
                            <li key={index*2}>{point}</li>
                        )
                    })}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard