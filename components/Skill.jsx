import Image from 'next/image'
import React from 'react'

// component
import SkillItems from './Items/SkillItems'

// Image Skills
import HTML from '../public/assets/skills/html.png'
import CSS from '../public/assets/skills/css.png'
import Javascript from '../public/assets/skills/javascript.png'
import Tailwind from '../public/assets/skills/tailwind.png'
import Bootstrap from '../public/assets/skills/bootstrap.png'
import ReactJS from '../public/assets/skills/react.png'
import NextJS from '../public/assets/skills/nextjs.png'
import ExpressJS from '../public/assets/skills/express.png'
import NodeJS from '../public/assets/skills/node.png'
import PostgreSQL from '../public/assets/skills/PostgreSQL.png'
import MySQL from '../public/assets/skills/MySQL.png'
import Git from '../public/assets/skills/git.png'
import Github from '../public/assets/skills/github.png'

const Skill = () => {
  return (
    <div id='skill' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-[#071695] text-xl tracking-widest'>skill</p>
        <h2 className='py-2'>What I Can Do</h2>

        {/* language & Framework */}
        <div className='py-2'>
          <h4>Language and Framework</h4>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>

            {/* HTML */}
            <SkillItems img={HTML} title="HTML" height={"64px"} width={"64px"} />

            {/* CSS */}
            <SkillItems img={CSS} title="CSS" height={"64px"} width={"64px"} />

            {/* JS */}
            <SkillItems img={Javascript} title="Javascript" height={"64px"} width={"64px"} />

            {/* Tailwind */}
            <SkillItems img={Tailwind} title="Tailwind" height={"64px"} width={"64px"} />

            {/* Bootstrap */}
            <SkillItems img={Bootstrap} title="Bootstrap" height={"64px"} width={"64px"} />

            {/* React */}
            <SkillItems img={ReactJS} title="React JS" height={"64px"} width={"64px"} />

            {/* Next */}
            <SkillItems img={NextJS} title="Next JS" height={"64px"} width={"64px"} />

            {/* Express */}
            <SkillItems img={ExpressJS} title="Express JS" height={"64px"} width={"64px"} />

            
            {/* Node */}
            <SkillItems img={NodeJS} title="Node JS" height={"64px"} width={"64px"} />
          </div>
        </div>

        {/* Database & Version Control */}
        <div className='py-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Database */}
          <div>
            <h4>Database</h4>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6'>

              {/* MySQL */}
              <SkillItems img={MySQL} title="MySQL" height={"64px"} width={"64px"} />

              {/* PostgreSQL */}
              <SkillItems img={PostgreSQL} title="PostgreSQL" height={"64px"} width={"64px"} />
            </div>
          </div>
          {/* Version Control */}
          <div>
            <h4>Version Control</h4>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6'>

              {/* Git */}
              <SkillItems img={Git} title="Git" height={"64px"} width={"64px"} />
              
              {/* Github */}
              <SkillItems img={Github} title="Github" height={"64px"} width={"64px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill