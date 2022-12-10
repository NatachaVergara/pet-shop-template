import React from 'react'

import Services from '../Components/Services/Services'
import { gotoTop, title } from '../utils/function'

const Servicios = () => {
    gotoTop();
    title('Servicios');



    return (
        <main className='container-fluid py-5'>
            <Services/>
        </main>
    )
}

export default Servicios