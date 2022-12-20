import React from 'react'
import { Link } from 'react-router-dom'


const PreciosCard = ({ preciosDataCard }) => {
   
    return (
        <>


            <div className="col-lg-4 cardEfect" key={preciosDataCard[0].v} >
                <div className='bg-light text-center pt-5 mt-lg-5' >
                    <h2 className="text-uppercase">{preciosDataCard[1].v}  </h2>
                    <h6 className="text-body mb-5">{preciosDataCard[2].v} </h6>
                    <div className={preciosDataCard[2].v === "Plata" ? "5ext-center bg-dark p-4 mb-2" : 'text-center bg-primary p-4 mb-2'}   >
                        <h1 className="display-4 text-white mb-0">
                            <small className="align-top"
                                style={{ fontSize: "22px", lineHeight: "45px" }} >$</small>{preciosDataCard[3].v} <small
                                    className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }} >/
                                Mes</small>
                        </h1>
                    </div>
                    <div className="text-center p-4">
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <span>1 consulta sin costo </span>
                            {preciosDataCard[4].v === "Si" ? <i className="bi bi-check2 fs-4 text-primary"></i> : <i className="bi bi-x fs-4 text-danger"></i>}

                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <span>Corte y baño canino</span>
                            {preciosDataCard[5].v === "Si" ? <i className="bi bi-check2 fs-4 text-primary"></i> : <i className="bi bi-x fs-4 text-danger"></i>}
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <span>1 Análisis de sangre y orina</span>
                            {preciosDataCard[6].v === "Si" ? <i className="bi bi-check2 fs-4 text-primary"></i> : <i className="bi bi-x fs-4 text-danger"></i>}
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <span>1 Radiografía</span>
                            {preciosDataCard[7].v === "Si" ? <i className="bi bi-check2 fs-4 text-primary"></i> : <i className="bi bi-x fs-4 text-danger"></i>}
                        </div>
                        <div className="btn-group d-none d-md-inline" role="group">
                            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Lo quiero
                            </button>
                            <ul className="dropdown-menu">
                                <li className=''><a href={`https://api.whatsapp.com/send?phone=+541124971986&text=Hola, quiero contratar el servicio ${preciosDataCard[1].v}`} target='_blank' rel="noreferrer" className='dropdown-item text-center d-flex justify-content-center'>Whatsapp web <box-icon type='logo' name='whatsapp'></box-icon></a></li>
                                <li><Link className="dropdown-item text-center d-flex justify-content-center" to={`/contacto/Quiero contratar el servicio ${preciosDataCard[1].v}?`} >Email <box-icon name='envelope'></box-icon></Link></li>
                            </ul>
                        </div>
                        <a className='ms-3  d-md-none btn btn-success text-center' href={`https://api.whatsapp.com/send?phone=0123456789&text=Hola, quiero contratar el servicio ${preciosDataCard[1].v} para mi mascota`} target='_blank' rel="noreferrer">Lo quiero </a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PreciosCard