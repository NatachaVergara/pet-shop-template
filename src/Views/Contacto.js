import React from 'react'
import FomularioContacto from '../Components/Contacto/FomularioContacto'
import { gotoTop, title } from '../utils/function'

const Contacto = () => {
    title('Contacto');
    gotoTop();


    return (
        <main>
            <FomularioContacto />
        </main>
    )
}

export default Contacto