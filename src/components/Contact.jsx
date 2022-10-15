import React from 'react';
import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = formData => {
        console.log(formData.email);
        window.location.href = `mailto:arvindhdq@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name},${formData.message} (${formData.email})`;
    }

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
            className="max-w-7xl min-h-screen relative flex flex-col md:flex-row p-10 mx-auto items-center justify-evenly text-center md:text-left">
            <h3 className='uppercase text-2xl text-gray-500 absolute top-24 tracking-[20px]'>Contact</h3>
            <div className='absolute top-40 flex flex-col space-y-5'>
                <h4 className='text-4xl font-semibold text-center underline decoration-yellow-400'>Lets Talk</h4>
                <div className='space-y-5'>
                    <div className='flex items-center justify-center space-x-5'>
                        <PhoneIcon className='text-yellow-500 w-7 h-7 animate-pulse' />
                        <p className='text-2xl'>1234567890</p>
                    </div>
                    <div className='flex items-center justify-center space-x-5'>
                        <EnvelopeIcon className='text-yellow-500 w-7 h-7 animate-pulse' />
                        <p className='text-2xl'>abc@gmail.com</p>
                    </div>
                </div>

                <form className='flex flex-col space-y-5 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex space-x-2'>
                        <input 
                            className="contactInput" 
                            type="text" 
                            placeholder='Name' 
                            {...register("name",{required: true})}/>
                        <input 
                            className="contactInput" 
                            type="email" 
                            placeholder='Email' 
                            {...register("email",{required: true})}/>
                    </div>
                    <input 
                        className="contactInput" 
                        type="text" 
                        placeholder='Subject' 
                        {...register("subject",{required: true})}/>
                    <textarea 
                        className="contactInput" 
                        placeholder='Message'
                        {...register("message",{required: true})}></textarea>
                    <button type="submit" className='bg-yellow-500 px-10 py-5 rounded-md cursor-pointer text-black font-bold text-lg hover:opacity-50 transition-all duration-200'>Submit</button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact