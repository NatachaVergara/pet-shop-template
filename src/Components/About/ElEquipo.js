import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel';
import { useContextShop } from '../../Context/PetShopContext'
import EquipoCard from './EquipoCard';

const ElEquipo = () => {
    const { teamDataCard } = useContextShop();


    return (
        // <!-- Team Start -->
        <div className="container-fluid py-5">
            <div className="container">
                <div className="border-start border-5 border-primary ps-5 mb-5 ">
                    <h6 className="text-primary text-uppercase">Nuestro equipo</h6>
                    <h6 className="text-uppercase mb-0 fs-1 text-start text-md-center">Profesionales calificados en el cuidado de nuestras mascotas</h6>
                </div>
                <ReactOwlCarousel className="owl-carousel team-carousel" loop autoWidth={true} center={true} autoplay={true} margin={2} >
                    {teamDataCard.map((e, i) => (
                        <EquipoCard props={e} key={i} />
                    ))}
                </ReactOwlCarousel>
            </div>
        </div>
        // {/* <!-- Team End --> */}
    )
}

export default ElEquipo