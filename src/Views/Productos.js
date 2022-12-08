import React from 'react'
import ProductosContainer from '../Components/Productos/ProductosContainer'
import { gotoTop, title } from '../utils/function'

const Productos = () => {
    gotoTop()
    title('Productos')
    return (
        <main>
            <ProductosContainer />
        </main>
    )
}

export default Productos