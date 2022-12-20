import React from 'react'
import { Link } from 'react-router-dom'

import { useContextShop } from '../../Context/PetShopContext'

const ProductCard = () => {
    const { productsDataCard } = useContextShop()



    return (
        <>
            {productsDataCard && productsDataCard.map((producto) => (
                <div className="pb-5 " key={producto.c[0].f} >
                    <div className="product-item position-relative bg-light d-flex flex-column text-center">
                        <img className="img-fluid mb-4" src={`http://drive.google.com/uc?export=view&id=${producto.c[1].v}`} alt={producto.c[2].v} />
                        <h6 className="text-uppercase">{producto.c[2].v} </h6>
                        <div className="btn-action d-flex flex-wrap justify-content-center mt-2">
                            <Link to={`/producto/${producto.c[0].f}`} className="btn btn-primary py-2 px-3"> Ver más</Link>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default ProductCard