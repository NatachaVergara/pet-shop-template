import React from 'react'
import ServiceCard from '../Services/ServiceCard'

const Servicioshome = () => {
    return (
        <div className='container-fluid py-5'>
            <div className='container'>
                <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: "600px" }}>
                    <h6 className="text-primary text-uppercase">Servicios</h6>
                    <h6 className="display-5 text-uppercase mb-0 text-start">Nuestros excelentes servicios para tu mascota</h6>
                </div>
                <div className='row g-5'>
                    <ServiceCard />
                </div>
            </div>
        </div>
    )
}

export default Servicioshome