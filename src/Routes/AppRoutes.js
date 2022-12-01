import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Views/Home'
import NotFound from '../Views/NotFound'

const AppRoutes = () => {
   

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            {/* <Route path='/about' element={<About />} /> */}


            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes