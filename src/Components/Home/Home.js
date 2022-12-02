import React from 'react'
import AboutHero from '../About/AboutHero'

import Hero from './Hero'
import Precios from './Precios'
import Productos from './Productos'
import Servicioshome from './Servicioshome'
import VideoModal from './VideoModal'

const HomeContainer = () => {
  return (
    <>
      <section id='homeHero'>
        <Hero />
      </section>
      <section id='homeHeroModalVideo'>
        <VideoModal />
        <AboutHero />
      </section>
      <section id='homeServicio' >
        <Servicioshome />
      </section>
      <section id='homeProductos'>
        <Productos />
      </section>
      <section id='homePrecios'>
        <Precios />
      </section>

    </>
  )
}

export default HomeContainer