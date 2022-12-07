import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Views/Home'
import About from '../Views/About'

import NotFound from '../Views/NotFound'
import Services from '../Components/Services/Services'
import ServiceInfo from '../Components/Services/ServiceInfo'

const AppRoutes = () => {


    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/servicios' element={<Services />} />
            <Route path='/servicios/:cardId' element={<ServiceInfo />} />


            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes