import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextShop } from '../../Context/PetShopContext';
import { gotoTop } from '../../utils/function';

const ServiceInfo = () => {
    const [servicio, setServicio] = useState('');
    const [loading, setLoading] = useState(true)
    const { serviceDataCard } = useContextShop();
    const { cardId } = useParams();
    //console.log(cardId)


    let service = serviceDataCard.find(({ id }) => id == cardId)

    // console.log(service)


    useEffect(() => {
        setServicio(service);
        setLoading(false);
    }, [])


    gotoTop()


    return (
        <>
            {loading ?
                <div className='container m-5 p-5 d-flex justify-content-center align-items-center'>
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> :
                <div className='container'>
                    <div className="card mb-3" style={{ maxWidth: "90%", margin: "50px auto" }}>
                        <div className="row g-0">
                            <div className="col-md-4 my-3 my-md-5">
                                <i className={servicio.icon}></i>
                            </div>
                            <div className="col-md-8  my-3 my-5">
                                <div className="card-body text-start">
                                    <h5 className="card-title">{servicio.title} </h5>
                                    <p className="card-text">{servicio.text} </p>
                                </div>
                            </div>
                            <div className='col-12 text-start p-3'>
                                <div className='card-boy text-start '>

                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id interdum mi. Aliquam non bibendum lacus. Mauris libero justo, pharetra vitae justo id, gravida tempus quam. Nunc porttitor interdum volutpat. Ut tempor, tellus nec egestas aliquam, eros massa iaculis tellus, luctus auctor sem ipsum id leo. Donec rhoncus convallis consequat. Mauris sit amet nisl ipsum. Morbi nec eros diam. Suspendisse eget tellus at tortor vehicula tincidunt vel quis erat. Suspendisse vitae sagittis urna.
                                    </p>
                                    <p>Sed vitae libero dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc placerat diam sit amet ligula gravida ultricies. Vestibulum euismod neque hendrerit, pellentesque turpis sit amet, vulputate turpis. Integer ac nunc eu ante sollicitudin interdum. Mauris et pulvinar arcu. Sed nunc velit, pharetra quis imperdiet at, finibus ac felis. Aenean eros libero, dictum sed eros ac, eleifend rhoncus est. Cras ipsum lectus, tempor eu metus ut, facilisis volutpat nunc. Phasellus felis lorem, vulputate vitae augue et, ultrices egestas enim. Nam quis tempus orci. Nunc varius diam sit amet ligula iaculis elementum. Donec eleifend in sem ut congue. Aliquam facilisis ligula sed felis viverra, ac commodo mauris varius. Aenean fermentum ipsum ut maximus volutpat. Aliquam auctor arcu quis venenatis maximus.
                                    </p>
                                    <p>Fusce semper nec dolor quis vehicula. Curabitur bibendum vehicula libero vel lacinia. Phasellus ornare condimentum turpis id tempus. Donec lobortis, purus et interdum euismod, dui erat bibendum nunc, ac semper libero justo eget lacus. Phasellus quis euismod ex. Cras eleifend eget neque ut malesuada. Nunc ultrices elit a urna posuere, quis rutrum ipsum sagittis. Nullam ipsum neque, dapibus dapibus congue quis, interdum sed sem. Aenean ullamcorper accumsan pretium. Cras sed sapien ut mauris volutpat suscipit fermentum eget mi. Donec pellentesque, leo quis lobortis tincidunt, sem metus elementum lectus, et auctor elit quam tincidunt nisi. Nulla consequat tincidunt metus, eu pharetra arcu feugiat quis. Cras tristique velit non lectus maximus, sed ultrices dui euismod. Phasellus tempus finibus iaculis.
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            }






        </>

    )
}

export default ServiceInfo