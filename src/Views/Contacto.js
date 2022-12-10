import React from 'react'
import FomularioContacto from '../Components/Contacto/FomularioContacto'
import { title } from '../utils/function'

const Contacto = () => {
    title('Contacto');



    return (
        <main>
            <FomularioContacto />
        </main>
    )
}

export default Contacto