import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'
import ProductCard from './ProductCard'


const Productos = () => {

    return (
        // <!-- Products Start -->
        <div className="container-fluid py-5">
            <div className="container">
                <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: "600px" }}>
                    <h6 className="text-primary text-uppercase">Productos</h6>
                    <h6 className="display-5 text-uppercase mb-0">Products For Your Best Friends</h6>
                </div>

                <ReactOwlCarousel className='owl-theme product-carousel' loop autoWidth={true} center={true} >
                    <ProductCard />
                </ReactOwlCarousel>
            </div>
        </div>
        // {/* <!-- Products End --> */}

    )
}

export default Productos