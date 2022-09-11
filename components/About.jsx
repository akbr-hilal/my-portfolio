import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import AboutImg from '../public/assets/profile/about.jpg'

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center justify-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-6">
        <div className='col-span-2'>
          <p className='uppercase text-[#071695] text-xl tracking-widest'>about</p>
          <h2 className='py-4'>Who Am I</h2>
          <p className='py-2 text-gray-500'> / / I am not your average developer</p>
          <p className='py-2 text-gray-500'>
          I am a Javascript Full Stack Developer. i can do both The Back End (Server Side) and Front End (Client Side). I have a great interest in becoming a specialist in Front End Developers. although I don&#39;t have any work experience yet, but I have been doing Full Stack Developer bootcamp training in Dumbways.id for 8 weeks. In addition, I have skills in the field of UI / UX Design and have experience in UI / UXdesign internships
          </p>
          <Link href="/#project">
          <p className='py-2 cursor-pointer hover:underline hover:text-[#071695]'>Check out some of my latest projects.</p>
          </Link>
        </div>
        <div className='flex items-center justify-center p-4'>
          <Image src={AboutImg} alt="My Photos" height={300} width={400} className='rounded-xl' />
        </div>
      </div>
    </div>
  )
}

export default About