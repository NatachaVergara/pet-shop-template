import React from 'react'
import SobreElEquipo from '../Components/About/SobreElEquipo'
import { gotoTop, title } from '../utils/function'


const About = () => {
  title('El equipo')
  gotoTop();


  return (
    <main>
      <SobreElEquipo />
    </main>
  )
}

export default About