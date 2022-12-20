import React from 'react'

const EquipoCard = ({ props }) => {
   //console.log(props[1].v)
    return (
        <div className="team-item">
            <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src={`http://drive.google.com/uc?export=view&id=${props[3].v}`} alt={props[1].v} />
                <div className="team-overlay">
                    <div className="d-flex align-items-center justify-content-start">
                        <a className="btn btn-light btn-square mx-1" href={props[4].v}><i className="bi bi-twitter"></i></a>
                        <a className="btn btn-light btn-square mx-1" href={props[5].v}><i className="bi bi-facebook"></i></a>
                        {/* <a className="btn btn-light btn-square mx-1" href={props.linkedin}><i className="bi bi-linkedin"></i></a> */}
                        <a className="btn btn-light btn-square mx-1" href={props[6].v}><i className="bi bi-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="bg-light text-center p-4">
                <h5 className="text-uppercase">{props[1].v} </h5>
                <p className="m-0">{props[2].v} </p>
            </div>
        </div>
    )
}

export default EquipoCard