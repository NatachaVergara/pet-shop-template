import React from 'react'
import about from '../../assets/img/about.jpg'

const AboutHero = () => {
    return (
        // <!-- About Start -->
        <div className="container-fluid py-5" id='sobreNosotros'>
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "auto" }}>
                        <div className=" h-100">
                            <img className=" w-100 h-100 rounded" src={about} alt={about} style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="border-start border-5 border-primary ps-5 mb-5">
                            <h6 className="text-primary text-uppercase">Sobre nosotros</h6>
                            <h6 className="display-5 text-uppercase mb-0 text-start">Manten feliz a tu mascota en todo momento</h6>
                        </div>
                        <h4 className="text-body mb-4">Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</h4>
                        <div className="bg-light p-4">
                            <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item w-50" role="presentation">
                                    <button className="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1"
                                        aria-selected="true">Nuestra misión</button>
                                </li>
                                <li className="nav-item w-50" role="presentation">
                                    <button className="nav-link text-uppercase w-100" id="pills-2-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2"
                                        aria-selected="false">Nuestra Visión</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                                    <p className="mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                                </div>
                                <div className="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                                    <p className="mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // {/* <!-- About End --> */ }
    )
}

export default AboutHero