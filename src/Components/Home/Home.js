import React from 'react'
import AboutHero from '../About/AboutHero'
import ServiceCard from '../Services/ServiceCard'
import Hero from './Hero'
import VideoModal from './VideoModal'

const HomeContainer = () => {
  return (
    <>
      <section> <Hero /></section>
      <section>
        <VideoModal />
        <AboutHero />
      </section>
      <section className='container-fluid py-5'>
        <div className='container'>
          <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: "600px" }}>
            <h6 className="text-primary text-uppercase">Servicios</h6>
            <h6 className="display-5 text-uppercase mb-0">Our Excellent Pet Care Services</h6>
          </div>
          <div className='row g-5'>
            <ServiceCard />
          </div>
        </div>
      </section>

    </>
  )
}

export default HomeContainer