import React from 'react'
import Skill from './Skill'
import { AppWindow, CodeXml, Database, SquareCode } from 'lucide-react';

const SkillsList = () => {

  const frontend = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 98 },
    { name: "React", level: 96 },
    { name: "Tailwind CSS", level: 88 },
  ];
  const backend = [
    { name: "Node Js", level: 95 },
    { name: "Express Js", level: 98 },
    { name: "REST API", level: 95 },
    { name: "FatsAPI", level: 90 },
  ];
  const database = [
    { name: "MYSQL", level: 95 },
    { name: "PostgreSQL", level: 90 },
  ];
  const programmingLanguage = [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Python", level: 95 },
  ];
  return (
    <div className="my-6 py-6 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#F9FAFB]" id="skills">
    <h2 className="text-center text-4xl font-bold mb-5">Skills <hr className="w-15 mx-auto" /></h2>
    <div className='mx-auto flex justify-center gap-10 flex-wrap mt-10'>
    
    <Skill skills={programmingLanguage} name="Programming Language" color="#FF9494" icon={<AppWindow />} text="Creating responsive ,accessible and performant user interfaces with modern technologies." />
    <Skill skills={frontend} name="Frontend Development" color="#9333EA" icon={<SquareCode />} text="Creating responsive ,accessible and performant user interfaces with modern technologies." />
    <Skill skills={backend} name="Backend Development" color="#16A34A" icon={<CodeXml />} text="Building robust,scalable APIs and server-side
applications with modern technologies." />
    <Skill skills={database} name="Database" color="#D93ABC" icon={<Database />} text="Skilled in designing and managing relational databases,API integration with databases." />
    
    </div>
    </div>
  )
}

export default SkillsList
