import React from 'react'
import { Link } from 'react-router-dom'

const ProductoCard = ({ producto }) => {
   // console.log(producto)   
    
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`http://drive.google.com/uc?export=view&id=${producto[1].v}`} className="img-fluid rounded-start m-2" alt={producto[2].v} />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-start">
                        <h5 className="card-title">{producto[3].v} </h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <Link to={`/producto/${producto[0].f}`} className='btn btn-outline-success'>Más información </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductoCard