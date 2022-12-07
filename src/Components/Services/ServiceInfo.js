import React from 'react'
import { useParams } from 'react-router-dom'

const ServiceInfo = () => {
    const { cardId } = useParams();
    console.log(cardId)

    return (


        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            {/* <div className="row g-0">
                <div className="col-md-4">
                    <i className={card.icon}></i>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{card.title} </h5>
                        <p className="card-text">{card.text} </p>
                    </div>
                </div>
            </div> */}
        </div>



    )
}

export default ServiceInfo