import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-light mt-5 py-5">
                <div className="container pt-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Mantente en contacto</h5>
                            <p className="mb-4 text-start">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                            <p className="mb-2 text-start"><i className="bi bi-geo-alt text-primary me-2"></i>Calle 123, Floresta. CABA</p>
                            <p className="mb-2 text-start"><i className="bi bi-envelope-open text-primary me-2"></i>info@veterinaria.com</p>
                            <p className="mb-0 text-start"><i className="bi bi-telephone text-primary me-2"></i>12 345 6789</p>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Links del sitio</h5>
                            <div className="d-flex flex-column justify-content-start">
                                <Link className="text-body mb-2 text-start" to='/home'><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                                <Link className="text-body mb-2 text-start" to='/home'><i className="bi bi-arrow-right text-primary me-2"></i>El equipo</Link>
                                <Link className="text-body mb-2 text-start" to='/home'><i className="bi bi-arrow-right text-primary me-2"></i>Servicios</Link>
                                <Link className="text-body mb-2 text-start" to='/home'><i className="bi bi-arrow-right text-primary me-2"></i>Productos</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Newsletter</h5>
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className="form-control p-3" placeholder="Your Email" />
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <h6 className="text-uppercase mt-4 mb-3">Follow Us</h6>
                            <div className="d-flex">
                                <Link className="btn btn-outline-primary btn-square me-2" to='/home'><i className="bi bi-twitter"></i></Link>
                                <Link className="btn btn-outline-primary btn-square me-2" to='/home'><i className="bi bi-facebook"></i></Link>
                                <Link className="btn btn-outline-primary btn-square me-2" to='/home'><i className="bi bi-linkedin"></i></Link>
                                <Link className="btn btn-outline-primary btn-square" to='/home'><i className="bi bi-instagram"></i></Link>
                            </div>
                        </div>
                        {/* <div className="col-12 text-center text-body">
                            <Link className="text-body" to='/home'>Terms & Conditions</Link>
                            <span className="mx-1">|</span>
                            <Link className="text-body" to='/home'>Poolitica</Link>
                            <span className="mx-1">|</span>
                            <Link className="text-body" to='/home'>Customer Support</Link>
                            <span className="mx-1">|</span>
                            <Link className="text-body" to='/home'>Payments</Link>
                            <span className="mx-1">|</span>
                            <Link className="text-body" to='/home'>Help</Link>
                            <span className="mx-1">|</span>
                            <Link className="text-body" to='/home'>FAQs</Link>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white-50 py-4">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-md-0">&copy; <Link className="text-white" to='/home'>Pet Shop</Link>. Todos los derechos reservados.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <p className="mb-0">Designed by <a className="text-white" href="https://htmlcodex.com" target='_blank' rel="noreferrer" >HTML Codex</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}

        </footer>
    )
}

export default Footer