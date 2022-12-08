import React, { useState } from 'react'
import { useContextShop } from '../../Context/PetShopContext';
import Spinner from '../Spinner';
import ProductoCard from './ProductoCard';

const ProductosContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState(true);
  const { productsDataCard } = useContextShop();
  return (
    <>
      {
        !active ? <Spinner /> : <div className='container d-flex flex-wrap justify-content-around align-items-center my-3 my-md-5'>
          {
            productsDataCard && productsDataCard.map((e, i) => (
              <ProductoCard key={i} props={e} />
            ))
          }


        </div>
      }
    </>
  )
}

export default ProductosContainer