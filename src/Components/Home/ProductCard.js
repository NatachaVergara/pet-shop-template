import React from 'react'
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
                        {/* <h5 className="text-primary mb-0"> Más información </h5> */}
                        <div className="btn-action d-flex flex-wrap justify-content-center mt-2">
                            <a href={`https://api.whatsapp.com/send?phone=0123456789&text=Hola, Necesito mas información del producto ${e.title}`} target='_blank' rel="noreferrer" >Quiero información </a>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default ProductCard