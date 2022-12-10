import React from 'react'

const TopBar = () => {
    return (
        // <!-- Topbar Start -->
        <div className="container-fluid border-bottom d-none d-lg-block">
            <div className="row gx-0">
                <div className="col-lg-4 text-center py-2">
                    <div className="d-inline-flex align-items-center">
                        <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                        <div className="text-start">
                            <h6 className="text-uppercase mb-1">Nuestra Veterinaria</h6>
                            <span>Calle 123, Floresta. CABA</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 text-center border-start border-end py-2">
                    <div className="d-inline-flex align-items-center">
                        <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                        <div className="text-start">
                            <h6 className="text-uppercase mb-1">Contacto</h6>
                            <span>info@veterinaria.com</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 text-center py-2">
                    <div className="d-inline-flex align-items-center">
                        <i className="bi bi-whatsapp fs-1 text-primary me-3"></i>
                        <div className="text-start">
                            <h6 className="text-uppercase mb-1">Llamanos</h6>
                            <a href={`https://api.whatsapp.com/send?phone=0123456789&text=Hola, Necesito información`} target='_blank' rel="noreferrer" className='text-dark'> <span>12 345 6789</span> </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <!-- Topbar End -->
    )
}

export default TopBar