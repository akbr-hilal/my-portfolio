import React from 'react'
import ProjectItem from './Items/ProjectItem'

import CinemaOnline from '../public/assets/projects/cinema-online.png'

const Project = () => {
  return (
    <div id='project' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className='uppercase text-[#071695] text-xl tracking-widest'>projects</p>
        <h2 className='py-4'>What I have build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Cinema Online" bgImg={CinemaOnline} tech="React JS, Node JS, Express JS, Bootstrap, MySQL" projectUrl='/cinema'/>
        </div>
      </div>
    </div>
  )
}

export default Project