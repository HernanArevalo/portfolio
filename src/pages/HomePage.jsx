import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MeSection, ProjectsSection, SkillsSection, ContactSection } from '../sections'
import { Navbar, Likes, Language } from '../components'
import { en, es } from '../data/info.json'

import '../App.css'
import '../styles/MeSection.css'
import '../styles/ProjectsSection.css'
import '../styles/SkillsSection.css'
import '../styles/ContactSection.css'

export const HomePage = () => {

  const navigate = useNavigate()
  
  const pathname = window.location.pathname

  useEffect(() => {

    if (!pathname.includes('es') && !pathname.includes('en')) {
      
      navigate('/en')

    }

  }, [])


  const [info, setInfo] = useState( pathname.includes('es')? es:en )

  useEffect(() => {
    
    setInfo( pathname.includes('es')? es:en )

  }, [pathname])

  return (
    <>
        <Navbar />
        <Likes />
        <Language />


        <div className="content">

        <MeSection info={info}/>
        <ProjectsSection info={info}/>
        <SkillsSection info={info}/>
        <ContactSection info={info}/>

        </div>
    </>
)
}
