import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import SkillsList from './components/SkillsList'
import ProjectList from './components/ProjectList'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <SkillsList />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  )
}

export default App