import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

import Logo from '../public/assets/brand/Logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const router = useRouter()

  useEffect(() => {
    if (
      router.asPath === '/cinema'
    ) {
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    } else {
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  }, [router])

  const handleNav = () => {
    setNav(!nav)
  }

  const handleShadow = () => {
    if(window.scrollY >= 90) {
      setShadow(true)
    } else {
      setShadow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleShadow)
  },[])
  return (
    <div style={{ backgroundColor: `${navBg}` }} className={shadow ? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]" : "fixed w-full h-20 z-[100]"}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={Logo} alt="Logo Hilal Akbar" width="80" height="60" className='cursor-pointer'/>
        </Link>
        <div>
          <ul className='hidden md:flex' style={{ color: `${linkColor}` }}>
            <Link href="/">
              <li className='ml-10 text-sm uppercase horver:border-b py-2'>Home</li>
            </Link>
            <Link href="/#about">
              <li className='ml-10 text-sm uppercase horver:border-b py-2'>About</li>
            </Link>
            <Link href="/#skill">
              <li className='ml-10 text-sm uppercase horver:border-b py-2'>Skill</li>
            </Link>
            <Link href="/#project">
              <li className='ml-10 text-sm uppercase horver:border-b py-2'>Project</li>
            </Link>
            <Link href="/#contact">
              <li className='ml-10 text-sm uppercase horver:border-b py-2'>Contact</li>
            </Link>
          </ul>
          <div className='md:hidden cursor-pointer' onClick={handleNav}>
            <Icon icon="bx:menu-alt-right" width="32"/>
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ""}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src={Logo} alt="Logo Hilal Akbar" width="70" height="50" />
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer' onClick={handleNav}>
                <Icon icon="akar-icons:cross" />
              </div>
            </div>
            <div className='border-b border-gray-400 my-4'>
              <p className='w-[85%] md:w-[90%] py-2 md:py-4 text-sm sm:text-base'>Let&#39;s build something stunning together</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href="/">
                <li onClick={() => setNav(false)} className='text-sm py-2 horver:border-b'>Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className='text-sm py-2 horver:border-b'>About</li>
              </Link>
              <Link href="/#skill">
                <li onClick={() => setNav(false)} className='text-sm py-2 horver:border-b'>Skill</li>
              </Link>
              <Link href="/#project">
                <li onClick={() => setNav(false)} className='text-sm py-2 horver:border-b'>Project</li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className='text-sm py-2 horver:border-b'>Contact</li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5651e5]">Les&#39;t Connect</p>
              <div className='flex mt-2 items-center justify-between'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <a href="https://www.linkedin.com/in/hilal-akbar/"  target="_blank" rel="noreferrer">
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
                    <Icon icon="fa-brands:tiktok" width="19" />
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
      </div>
    </div>
  )
}

export default Navbar