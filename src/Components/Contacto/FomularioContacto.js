import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const FomularioContacto = () => {
    const form = useRef();
    const { producto } = useParams();
    // eslint-disable-next-line no-unused-vars
    // const [nombre, setNombre] = useState();
    // const [email, setEmail] = useState();
    const [razon, setRazon] = useState(producto ? producto : "");
    // const [mensaje, setMensaje] = useState();
    // eslint-disable-next-line no-unused-vars
    //const [nombreProducto, setProducto] = useState(producto ? producto : razon)

    // let nombreProducto = producto ? producto : ""

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ys3cnzr', 'template_iwplcl5', form.current, 'PJjuRWjdUrxwdXv8u')
            .then((result) => {
                console.log(result);
                if (result.status === 200) {
                    Swal.fire({
                        title: `Su mensaje ha sido entregado.
                                En la brevedad nos estaremos contactando.
                                Gracias`,
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                    form.current.reset();
                    setRazon('');
                }

            }, (error) => {
                console.log(error.text);
                Swal.fire('Hubo un error, por favor intente más tarde. Gracias')
            });


    }




    return (
        // <!-- Contact Start -->
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: "600px" }}>
                    {/* <h6 className="text-primary text-uppercase">Contactese con nosotros</h6> */}
                    <h1 className="display-5 text-uppercase mb-0 text-start">Contáctese con nosotros</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-7">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row g-3">
                                <div className="col-12">
                                    <input type="text" className="form-control bg-light border-0 px-4" placeholder="Nombre" name="from_name" style={{ height: "55px" }} required />
                                </div>
                                <div className="col-12">
                                    <input type="email" className="form-control bg-light border-0 px-4" placeholder="Email" name="user_email" style={{ height: "55px" }} required />
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control bg-light border-0 px-4" placeholder="Razón del mensaje" name="razon" style={{ height: "55px" }} value={razon} onChange={(e) => setRazon(e.target.value)} required />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-light border-0 px-4 py-3" rows="8" placeholder="Mensaje" name="message" required></textarea>
                                </div>
                                <div className="col-12">
                                    <input className="btn btn-primary w-100 py-3" type="submit" value="Enviar mensaje" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-5">
                        <div className="bg-light mb-5 p-5">
                            <div className="d-flex align-items-center mb-2">
                                <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                                <div className="text-start">
                                    <h6 className="text-uppercase mb-1">NUESTRA VETERINARIA</h6>
                                    <span>Calle 123, Floresta. CABA</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                                <div className="text-start">
                                    <h6 className="text-uppercase mb-1">CONTACTO</h6>
                                    <span>info@veterinaria.com</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <i className="bi bi-whatsapp fs-1 text-primary me-3"></i>
                                <div className="text-start">
                                    <h6 className="text-uppercase mb-1">LLAMANOS</h6>
                                    <span>12 345 6789</span>
                                </div>
                            </div>
                            <div>
                                <iframe className="position-relative w-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                    title="Mapa"
                                    frameborder="0"
                                    style={{ height: "205px", border: "0" }}
                                    ariaHidden="false"
                                    tabIndex="0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // {/* <!-- Contact End --> */}
    )
}

export default FomularioContacto