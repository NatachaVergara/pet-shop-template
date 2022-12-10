import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Views/Home'
import About from '../Views/About'

import NotFound from '../Views/NotFound'
import ServiceInfo from '../Components/Services/ServiceInfo'
import Servicios from '../Views/Servicios'
import Productos from '../Views/Productos'
import ProductoById from '../Components/Productos/ProductoById'
import Contacto from '../Views/Contacto'

const AppRoutes = () => {


    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/servicios' element={<Servicios />} />
            <Route path='/servicios/:cardId' element={<ServiceInfo />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/producto/:productoId' element={<ProductoById />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/contacto/:producto' element={<Contacto />} />

            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes