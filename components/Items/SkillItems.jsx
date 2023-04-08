import Image from 'next/image'
import React from 'react'

const SkillItems = ({ img, title, width, height, url }) => {
  return (
    <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 my-4 md:my-0">
      <a href={`https://${url}`} target='_blank' rel='noreferrer'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          <div className='m-auto'>
            <Image src={img} alt={title} width={width} height={height} />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3>{title}</h3>
          </div>
        </div>
      </a>
    </div>
  )
}

export default SkillItems