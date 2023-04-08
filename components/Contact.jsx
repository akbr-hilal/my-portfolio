import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import ContactImg from '../public/assets/contacts.jpg'

const Contact = () => {

  const [alert, setAlert] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_sc6r5u2', 'template_o9g1rs2', e.target, 'Fl0j89OvkSoifM_Fc')
    .then(res => {
      console.log(res)
      const alert = (
        <div className="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full" role="alert">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
          </svg>
          Send Message Success
        </div>
      )
      setAlert(alert)
    })
    .catch(err => console.log(err))
  }
  return (
    <div id='contact' className='w-full lg:h-screen p-2 pt-[6rem]'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-[#071695] text-xl tracking-widest'>contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image className='roundex-xl' src={ContactImg} alt="/" />
              </div>
              <div>
                <h2 className="py-2">Hilal Akbar</h2>
                <p>Full-Stack Developer</p>
                <p className='py-4'>
                  I am available for freelance or contract or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect with me</p>
                <div className='flex w-full items-center justify-between py-4'>
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
                <div className='flex justify-center pt-4'>
                  <a href="https://drive.google.com/file/d/1LocTYhL7DKiPMJN7LplAEByFr2t25nEB/view?usp=sharing" target="_blank" rel="noreferrer">
                    <button className='w-full p-4 text-gray-100'>
                      Download My CV
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className='col-span-3 w-full h-auto shadow-md shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
            {alert}
              <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">Name</label>
                    <input type="text" className='border-2 rounded-lg p-2 flex border-gray-400' name='name' id='name' placeholder='Your Name'/>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="uppercase text-sm py-2">Phone number</label>
                    <input type="number" className='border-2 rounded-lg p-2 flex border-gray-400' name='phone' id='phone' placeholder='Your Phone Number'/>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                    <label htmlFor="email" className="uppercase text-sm py-2">email</label>
                    <input type="email" className='border-2 rounded-lg p-2 flex border-gray-400' name='email' id='email' placeholder='Your Email'/>
                </div>
                <div className="flex flex-col py-2">
                    <label htmlFor="subject" className="uppercase text-sm py-2">subject</label>
                    <input type="text" className='border-2 rounded-lg p-2 flex border-gray-400' name='subject' id='subject' placeholder='Your Subject'/>
                </div>
                <div className="flex flex-col py-2">
                    <label htmlFor="message" className="uppercase text-sm py-2">message</label>
                    <textarea name="message" id="message" rows="8" className='border-2 rounded-lg p-2 flex border-gray-400' placeholder='Your Message'></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact