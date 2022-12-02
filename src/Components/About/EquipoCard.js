import React from 'react'

const EquipoCard = ({ props }) => {
    return (
        <div className="team-item">
            <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src={props.img} alt={props.img} />
                <div className="team-overlay">
                    <div className="d-flex align-items-center justify-content-start">
                        <a className="btn btn-light btn-square mx-1" href={props.twitter}><i className="bi bi-twitter"></i></a>
                        <a className="btn btn-light btn-square mx-1" href={props.facebook}><i className="bi bi-facebook"></i></a>
                        <a className="btn btn-light btn-square mx-1" href={props.linkedin}><i className="bi bi-linkedin"></i></a>
                        <a className="btn btn-light btn-square mx-1" href={props.instagram}><i className="bi bi-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="bg-light text-center p-4">
                <h5 className="text-uppercase">{props.nombre} </h5>
                <p className="m-0">{props.puesto} </p>
            </div>
        </div>
    )
}

export default EquipoCard