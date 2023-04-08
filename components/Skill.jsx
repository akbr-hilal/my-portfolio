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
import Java from '../public/assets/skills/java.png'
import Spring from '../public/assets/skills/spring.png'
import OracleSQL from '../public/assets/skills/oracle.png'

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
            <SkillItems img={HTML} title="HTML" height={"64px"} width={"64px"} url={"developer.mozilla.org/en-US/docs/Web/HTML"} />

            {/* CSS */}
            <SkillItems img={CSS} title="CSS" height={"64px"} width={"64px"} url={"developer.mozilla.org/en-US/docs/Web/CSS"}/>

            {/* JS */}
            <SkillItems img={Javascript} title="Javascript" height={"64px"} width={"64px"} url={"developer.mozilla.org/en-US/docs/Web/javascript"} />

            {/* Java */}
            <SkillItems img={Java} title="Java" height={"64px"} width={"64px"} url={"www.java.com/en/"} />

            {/* Tailwind */}
            <SkillItems img={Tailwind} title="Tailwind" height={"64px"} width={"64px"} url={"tailwindcss.com"} />

            {/* Bootstrap */}
            <SkillItems img={Bootstrap} title="Bootstrap" height={"64px"} width={"64px"} url={"getbootstrap.com"} />

            {/* React */}
            <SkillItems img={ReactJS} title="React JS" height={"64px"} width={"64px"} url={"react.dev"} />

            {/* Next */}
            <SkillItems img={NextJS} title="Next JS" height={"64px"} width={"64px"} url={"nextjs.org"} />

            {/* Express */}
            <SkillItems img={ExpressJS} title="Express JS" height={"64px"} width={"64px"} url={"expressjs.com"} />
            
            {/* Node */}
            <SkillItems img={NodeJS} title="Node JS" height={"64px"} width={"64px"} url={"nodejs.org"} />

             {/* Spring */}
             <SkillItems img={Spring} title="Java Spring" height={"64px"} width={"64px"} url={"spring.io"} />
          </div>
        </div>

        {/* Database & Version Control */}
        <div className='py-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Database */}
          <div>
            <h4>Database</h4>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6'>

              {/* MySQL */}
              <SkillItems img={MySQL} title="MySQL" height={"64px"} width={"64px"} url={"www.mysql.com"} />

              {/* PostgreSQL */}
              <SkillItems img={PostgreSQL} title="PostgreSQL" height={"64px"} width={"64px"} url={"www.postgresql.org"} />

              
              {/* OracleSQl */}
              <SkillItems img={OracleSQL} title="Oracle SQL" height={"64px"} width={"64px"} url={"www.oracle.com/database"} />
            </div>
          </div>
          {/* Version Control */}
          <div>
            <h4>Version Control</h4>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6'>

              {/* Git */}
              <SkillItems img={Git} title="Git" height={"64px"} width={"64px"} url={"git-scm.com"} />
              
              {/* Github */}
              <SkillItems img={Github} title="Github" height={"64px"} width={"64px"} url={"github.com"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill