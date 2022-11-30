import React from 'react'
import { useContextShop } from '../../Context/PetShopContext'

const ServiceCard = () => {
    const { serviceDataCard } = useContextShop();
    // console.log(serviceDataCard)

    return (
        <>
            {serviceDataCard && serviceDataCard.map((card, index) => (
                <div className="col-md-6" key={index}>
                    <div className="service-item bg-light d-flex p-4">
                        <i className={card.icon}></i>
                        <div>
                            <h5 className="text-uppercase mb-3">{card.title} </h5>
                            <p>{card.text} </p>
                            <a className="text-primary text-uppercase" href="">Read More<i className="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            ))}
        </>

    )
}

export default ServiceCard