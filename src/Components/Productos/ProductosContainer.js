import React, { useState } from 'react'
import { useContextShop } from '../../Context/PetShopContext';
import Spinner from '../Spinner';
import ProductoCard from './ProductoCard';

const ProductosContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState(true);
  const { productsDataCard } = useContextShop();
  //console.log(productsDataCard)

  // productsDataCard.map(e => { console.log(e.c) })

  return (
    <>
      {
        !active ? <Spinner /> :
          <div className='container-fluid py-5'>
            <div className="border-start border-5 border-primary ps-5 ms-5 mb-5" style={{ maxWidth: "90%" }}>
              <h6 className="text-primary text-uppercase">Productos</h6>
              <h6 className="display-5 text-uppercase mb-0">Productos para tu mascota</h6>
            </div>
            <div className='container d-flex flex-wrap justify-content-around align-items-center my-3 my-md-5'>

              {
                productsDataCard && productsDataCard.map((e, i) => (
                  <ProductoCard key={i} producto={e.c} />
                ))
              }
            </div>

          </div>
      }
    </>
  )
}

export default ProductosContainer