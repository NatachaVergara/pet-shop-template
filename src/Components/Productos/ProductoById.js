import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextShop } from '../../Context/PetShopContext';

import Spinner from '../Spinner';

const ProductoById = () => {
    // eslint-disable-next-line no-unused-vars
    const [active, setActive] = useState(false);
    const [producto, setProducto] = useState('');
    const { productoId } = useParams()
    //console.log(typeof (productoId))

    const { productsDataCard } = useContextShop();

    let findProducto = productsDataCard.find(({ id }) => id === Number(productoId))

    useEffect(() => {
        setProducto(findProducto);
        setActive(true);
    }, [findProducto])

    // console.log(producto)
    return (
        <>
            {
                !active ? <Spinner /> : <div className='container justify-content-center align-items-center my-5'>
                    <div className="container card mb-3" style={{ maxWidth: "700px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={producto.img} className="img-fluid rounded-start my-3" alt={producto.title} />
                            </div>
                            <div className="col-md-8 text-start">
                                <div className="card-header text-bg-success text-center mt-1"> {producto.title}</div>

                                <div className="card-body">
                                    <h5 className="card-title"> </h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <ul className="list-group list-group-flush my-5">
                                        <li className="list-group-item">Beneficios</li>
                                        <li className="list-group-item">Propiedades</li>
                                        <li className="list-group-item">otro contenido</li>
                                    </ul>
                                    <a href={`https://api.whatsapp.com/send?phone=0123456789&text=Hola, ¿cuál es el precio de ${producto.title}?`} target='_blank' rel="noreferrer" className='btn btn-outline-success'> <span>Consultar precio</span> </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            }
        </>
    )
}

export default ProductoById