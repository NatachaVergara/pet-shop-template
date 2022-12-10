import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {






    return (
        // <!-- Navbar Start -->
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
            <Link to='/home' className="navbar-brand ms-lg-5">
                <h1 className="m-0 text-uppercase text-dark"><i className="bi bi-shop fs-1 text-primary me-3"></i>Pet Shop</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <NavLink to='/home' className="nav-item nav-link  ">Inicio</NavLink>
                    <NavLink to='/about' className="nav-item nav-link  ">El equipo</NavLink>
                    <NavLink to='/servicios' className="nav-item nav-link ">Servicios</NavLink>
                    <NavLink to='/productos' className="nav-item nav-link  ">Productos</NavLink>
                    <NavLink to='/contacto' className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5  ">Contacto  <i className="bi bi-arrow-right"></i></NavLink>


                </div>
            </div>
        </nav>
        // <!-- Navbar End -->
    )
}

export default Navbar