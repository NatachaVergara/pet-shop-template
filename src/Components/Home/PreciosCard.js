import React from 'react'


const PreciosCard = ({ preciosDataCard }) => {

    return (
        <>


            <div className="col-lg-4" key={preciosDataCard.id}>
                <div className={preciosDataCard.class1} >
                    <h2 className="text-uppercase">{preciosDataCard.titulo}  </h2>
                    <h6 className="text-body mb-5">{preciosDataCard.subTitulo} </h6>
                    <div className={preciosDataCard.class2} >
                        <h1 className="display-4 text-white mb-0">
                            <small className="align-top"
                                style={{ fontSize: "22px", lineHeight: "45px" }} >$</small>{preciosDataCard.precio} <small
                                    className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }} >/
                                Mes</small>
                        </h1>
                    </div>
                    <div className="text-center p-4">
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <span>1 consulta sin costo </span>
                            {preciosDataCard.beneficio1 === "Si" ? <i className="bi bi-check2 fs-4 text-primary"></i> : <i className="bi bi-x fs-4 text-danger"></i>}

                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <span>Corte y baño canino</span>
                            {preciosDataCard.beneficio2 === "Si" ? <i className="bi bi-check2 fs-4 text-primary"></i> : <i className="bi bi-x fs-4 text-danger"></i>}
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <span>1 Análisis de sangre y orina</span>
                            {preciosDataCard.beneficio3 === "Si" ? <i className="bi bi-check2 fs-4 text-primary"></i> : <i className="bi bi-x fs-4 text-danger"></i>}
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <span>1 Radiografía</span>
                            {preciosDataCard.beneficio4 === "Si" ? <i className="bi bi-check2 fs-4 text-primary"></i> : <i className="bi bi-x fs-4 text-danger"></i>}
                        </div>
                        <a className='btn btn-primary text-uppercase py-2 px-4 my-3' href={`https://api.whatsapp.com/send?phone=0123456789&text=Hola, quiero contratar el servicio ${preciosDataCard.titulo} para mi mascota`} target='_blank' rel="noreferrer">Lo quiero </a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PreciosCard