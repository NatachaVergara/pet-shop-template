import React from 'react'
import { Link } from 'react-router-dom';
import { useContextShop } from '../../Context/PetShopContext'

const ServiceCard = () => {
    const { serviceDataCard } = useContextShop();
    // console.log(serviceDataCard)

    return (
        <>
            {serviceDataCard && serviceDataCard.map((card, index) => (
                <div className="col-md-6 mb-2" key={index}>
                    <div className="service-item bg-light d-flex p-4" >
                        <i className={card.icon}></i>
                        <div>
                            <h5 className="text-uppercase text-start mb-3">{card.title} </h5>
                            <p className='text-start'>{card.text} </p>
                            <Link className="text-primary text-uppercase" to={`/servicios/${card.id}`} >Mas información<i className="bi bi-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            ))}
        </>

    )
}

export default ServiceCard