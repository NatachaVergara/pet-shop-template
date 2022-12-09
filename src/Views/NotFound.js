import React from 'react'
import { Link } from 'react-router-dom'
import { gotoTop, title } from '../utils/function'

const NotFound = () => {
    title('404')
    gotoTop()
    return (
        <main>
            <div className="card text-bg-dark container" style={{ maxWidth: "90%" }}>
                <img src="https://http.cat/404" className="card-img" alt="Pagina no encontrada" />
                <div className="card-img-overlay">
                    <h5 className="card-title text-light">Página no encontrada</h5>
                    <p className="card-text">Lo sentimos pero lo que está buscando lo existe</p>
                    <Link to='/home' className="btn btn-danger">Inicio</Link>
                </div>
            </div>


        </main>
    )
}

export default NotFound