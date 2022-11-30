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
                        <h6 className="text-uppercase mb-1">Nuestras Oficinas</h6>
                        <span>Calle 123, Floresta. CABA</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center border-start border-end py-2">
                <div className="d-inline-flex align-items-center">
                    <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                    <div className="text-start">
                        <h6 className="text-uppercase mb-1">Contacto</h6>
                        <span>info@example.com</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center py-2">
                <div className="d-inline-flex align-items-center">
                    <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                    <div className="text-start">
                        <h6 className="text-uppercase mb-1">Llamanos</h6>
                        <span>+012 345 6789</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // <!-- Topbar End -->
  )
}

export default TopBar