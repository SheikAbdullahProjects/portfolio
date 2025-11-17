import React from 'react'
import Project from './Project'
import { assets } from '../assets/assets'

const ProjectList = () => {
  return (
    <div className='my-6 py-6 px-4 sm:px-8 md:px-12 lg:px-16' id="projects">
    <h2 className="text-center text-3xl mb-5">Projects <hr className="w-15 mx-auto" /></h2>

    <div className='flex gap-4 flex-wrap items-center justify-center'>
      <Project title="User Authentication" description="User Authentication system with secure login and registration with email verification." tags={["React", "Node.js", "Express Js", "MySQL"]} image={assets.project_1} link="https://github.com/SheikAbdullahProjects/User-auth" />
      <Project title="Social Media Backend" description="Backend services for a social media platform including user management and content delivery." tags={["Node.js", "Express Js", "MySQL"]} image={assets.project_3} link="https://github.com/SheikAbdullahProjects/Social-mdeia-backend" />
      <Project title="Blog App" description="A blogging platform with admin Functionality to publish and unpublish posts." tags={["React", "Node.js", "Express Js", "MySQL"]} image={assets.project_2} link="https://blog-app-frontend-08qd.onrender.com/" />
    </div>
    </div>
  )
}

export default ProjectList