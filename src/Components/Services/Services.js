import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <div className='container'>
            <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: "90%" }}>
                <h6 className="text-primary text-uppercase">Servicios</h6>
                <h6 className="display-5 text-uppercase mb-0 ">Nuestros excelentes servicios para tu mascota</h6>
            </div>
            <div className='row g-5'>
                <ServiceCard />
            </div>
        </div>
    )
}

export default Services