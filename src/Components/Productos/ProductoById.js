import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContextShop } from '../../Context/PetShopContext';
import { title } from '../../utils/function';

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

    title(`Producto ${producto.title}`)
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
                                    <p className="card-text">Descripción general sobre el producto seleccionado por el cliente</p>
                                    <ul className="list-group list-group-flush my-5">
                                        <li className="list-group-item">Beneficios</li>
                                        <li className="list-group-item">Propiedades</li>
                                        <li className="list-group-item">Otro contenido</li>
                                        <li className="list-group-item">Otro contenido</li>
                                        <li className="list-group-item">Otro contenido</li>
                                    </ul>
                                    <div className="btn-group d-none d-md-inline" role="group">
                                        <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Consultar precio
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li className=''><a href={`https://api.whatsapp.com/send?phone=0123456789&text=Hola, ¿cuál es el precio de ${producto.title}?`} target='_blank' rel="noreferrer" className='dropdown-item text-center d-flex justify-content-center'>Whatsapp web <box-icon type='logo' name='whatsapp'></box-icon></a></li>
                                            <li><Link className="dropdown-item text-center d-flex justify-content-center" to={`/contacto/¿cuál es el precio de ${producto.title}?`} >Email <box-icon name='envelope'></box-icon></Link></li>
                                        </ul>
                                    </div>
                                    <a href={`https://api.whatsapp.com/send?phone=0123456789&text=Hola, ¿cuál es el precio de ${producto.title}?`} target='_blank' rel="noreferrer" className='ms-3  d-md-none btn btn-success text-center'>Consultar precio <br></br> <box-icon type='logo' name='whatsapp'></box-icon></a>


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