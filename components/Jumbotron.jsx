import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react';

const Jumbotron = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Let&#39;s Build Something Stunning Together</p>
          <h1 className='py-3 text-gray-700'>
            Hello, I am <span className='text-[#071695]'>Hilal</span>
          </h1>
          <h1 className='text-gray-700'>
            A Full-Stack Web Developer
          </h1>
          <p className='py-4 text-gray-700 max-w-[80%] mx-auto'>
            I am a full-stack web developer. Even though I don&#39;t have any work experience, I am a front-end MVP participant at Hackaton Dumbways.id Batch 36.
          </p>
          <div className='flex w-full items-center justify-between max-w-[300px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://www.linkedin.com/in/hilal-akbar/" target="_blank" rel="noreferrer">
                <Icon icon="fa:linkedin" width="20" />
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://github.com/akbr-hilal/"  target="_blank" rel="noreferrer">
                <Icon icon="fa:github" width="20" />
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://www.tiktok.com/@akbr_hilal/"  target="_blank" rel="noreferrer">
                <Icon icon="fa-brands:tiktok" width="19"/>
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://www.instagram.com/akbr_hilal/"  target="_blank" rel="noreferrer">
                <Icon icon="fa:instagram" width="22" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron