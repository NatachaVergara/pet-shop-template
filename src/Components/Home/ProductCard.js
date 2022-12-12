import React from 'react'
import { Link } from 'react-router-dom'

import { useContextShop } from '../../Context/PetShopContext'

const ProductCard = () => {
    const { productsDataCard } = useContextShop()



    return (
        <>
            {productsDataCard && productsDataCard.map((e, i) => (
                <div className="pb-5 " key={e.id} >
                    <div className="product-item position-relative bg-light d-flex flex-column text-center">
                        <img className="img-fluid mb-4" src={e.img} alt={e.img} />
                        <h6 className="text-uppercase">{e.title} </h6>
                        <div className="btn-action d-flex flex-wrap justify-content-center mt-2">
                            <Link to={`/producto/${e.id}`} className="btn btn-primary py-2 px-3"> Ver más</Link>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default ProductCard