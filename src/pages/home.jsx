import React from 'react'
import About from '../components/about'
import Contact from '../components/contact'
import Experiance from '../components/experiance'
import Projects from '../components/projects'
import Skills from '../components/skills'

function Home(props) {
    return (
        <div>
             <About />
      <Experiance />
      <Skills />
      <Projects />
      <Contact />
        </div>
    )
}

export default Home
