import React, { useEffect, useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import profile from "../utils/arvindh.jpg";
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import { client, urlFor } from '../client';

const Hero = () => {
    const [info,setInfo] = useState(null);

    useEffect(() => {
        const query = `*[_type == "pageInfo"]{
            ...,
            heroImage{
                asset->{
                    _id,
                    url,
                },
            },
        }`;

        client.fetch(query)
        .then((data) => {
            setInfo(data[0]);
        });
    }, [])

    const [text, count] = useTypewriter({
        words: ["Hello!,", info?.name],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='flex flex-col items-center justify-center min-h-screen space-y-8 text-center overflow-hidden'>
            <BackgroundCircles />
            <img src={info?.heroImage?.asset?.url} alt="" className='w-[80px] h-[80px] rounded-full object-cover' />
            <div className='z-20'>
                <p className='uppercase tracking-[15px] text-sm text-gray-500 pb-2'>{info?.role}</p>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='#e6ce1a' />
                </h1>
                <div className='pt-5'>
                    <Link to="about"><button className='heroBtn'>About</button></Link>
                    <Link to="experience"><button className='heroBtn'>Experience</button></Link>
                    <Link to="skills"><button className='heroBtn'>Skills</button></Link>
                    <Link to="projects"><button className='heroBtn'>Projects</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Hero