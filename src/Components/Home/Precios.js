import React from 'react'
import PreciosCard from './PreciosCard'
import { useContextShop } from '../../Context/PetShopContext'
const Precios = () => {
    const { preciosDataCard } = useContextShop()
    
    return (
        // <!-- Pricing Plan Start -->
        <div className="container-fluid py-5">
            <div className="container">
                <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: "600px" }}>
                    <h6 className="text-primary text-uppercase">Planes</h6>
                    <h6 className="display-5 text-uppercase mb-0">Planes competitivos para el cuidado de tu mascota</h6>
                </div>
                <div className="row g-5">
                    {preciosDataCard && preciosDataCard.map((e, i) => (
                        <PreciosCard preciosDataCard={e.c} key={i} />

                    ))}

                </div>
            </div>
        </div>
        // <!-- Pricing Plan End -->



    )
}

export default Precios