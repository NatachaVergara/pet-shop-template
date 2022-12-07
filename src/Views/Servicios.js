import React from 'react'
import Services from '../Components/Services/Services'
import { gotoTop, title } from '../utils/function'

const Servicios = () => {
    gotoTop();
    title('Servicios');



    return (
        <main>
            <Services />
        </main>
    )
}

export default Servicios