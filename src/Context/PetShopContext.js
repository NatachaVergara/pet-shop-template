import img1 from '../assets/img/product-1.png';
import img2 from '../assets/img/product-2.png';
import img3 from '../assets/img/product-3.png';
import team1 from '../assets/img/team-1.jpg';
import team2 from '../assets/img/team-2.jpg';
import team3 from '../assets/img/team-3.jpg';
import team4 from '../assets/img/team-4.jpg';
import team5 from '../assets/img/team-5.jpg';



import React, { createContext, useContext } from 'react'
const ShopContext = createContext();



export const useContextShop = () => {
    return useContext(ShopContext)
}




const UsePetShopContextProvider = ({ children }) => {

    const serviceDataCard = [
        {
            id: 1,
            title: "Guardería",
            text: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
            link: '#',
            icon: "flaticon-house display-1 text-primary me-4"

        },
        {
            id: 2,
            title: "Alimentación",
            text: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
            link: '#',
            icon: "flaticon-food display-1 text-primary me-4"

        },
        {
            id: 3,
            title: "Aseo de mascotas",
            text: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
            link: '#',
            icon: "flaticon-grooming display-1 text-primary me-4"

        },
        {
            id: 4,
            title: "Entrenamiento de mascotas",
            text: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
            link: '#',
            icon: "flaticon-cat display-1 text-primary me-4"

        },
        {
            id: 5,
            title: "Ejercicios de mascotas",
            text: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
            link: '#',
            icon: "flaticon-dog display-1 text-primary me-4"
        },
        {
            id: 6,
            title: "Tratamiento veterinario de mascotas",
            text: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
            link: '#',
            icon: "flaticon-vaccine display-1 text-primary me-4"
        },

    ]

    const productsDataCard = [
        {
            id: 1,
            img: img1,
            alt: img1,
            title: "Quality Pet Foods 1",

        },
        {
            id: 2,
            img: img2,
            alt: img2,
            title: "Quality Pet Foods 2",

        },
        {
            id: 3,
            img: img3,
            alt: img3,
            title: "Quality Pet Foods 3",

        },
        {
            id: 4,
            img: img1,
            alt: img1,
            title: "Quality Pet Foods 4",

        },
        {
            id: 5,
            img: img2,
            alt: img2,
            title: "Quality Pet Foods 5",

        },
        {
            id: 6,
            img: img3,
            alt: img3,
            title: "Quality Pet Foods 6",

        },


    ]

    const preciosDataCard = [
        {
            id: 1,
            titulo: "Plan Básico",
            subTitulo: "Bronce",
            precio: 2000,
            beneficio1: "Si",
            beneficio2: "No",
            beneficio3: "No",
            beneficio4: "No",
            beneficio5: "No",
            class1: 'bg-light text-center pt-5 mt-lg-5',
            class2: 'text-center bg-primary p-4 mb-2',

        },
        {
            id: 2,
            titulo: "Plan medio",
            subTitulo: "Plata",
            precio: 2500,
            beneficio1: "Si",
            beneficio2: "Si",
            beneficio3: "Si",
            beneficio4: "No",
            beneficio5: "No",
            class1: '5g-light text-center pt-5',
            class2: '5ext-center bg-dark p-4 mb-2',
        },
        {
            id: 3,
            titulo: "Plan Alto",
            subTitulo: "Oro",
            precio: 3500,
            beneficio1: "Si",
            beneficio2: "Si",
            beneficio3: "Si",
            beneficio4: "Si",
            beneficio5: "Si",
            class1: 'bg-light text-center pt-5 mt-lg-5',
            class2: 'text-center bg-primary p-4 mb-2',
        },



    ]

    const teamDataCard = [
        {
            id: 1,
            nombre: 'Nombre Completo',
            puesto: "Puesto",
            img: team1,
            twitter: '#',
            instagram: '#',
            facebook: '#',
            linkedin: '#'
        },
        {
            id: 2,
            nombre: 'Nombre Completo',
            puesto: "Puesto",
            img: team2,
            twitter: '#',
            facebook: '#',
            linkedin: '#',
            instagram: '#',
        },
        {
            id: 3,
            nombre: 'Nombre Completo',
            puesto: "Puesto",
            img: team3,
            twitter: '#',
            facebook: '#',
            linkedin: '#',
            instagram: '#',
        },
        {
            id: 4,
            nombre: 'Nombre Completo',
            puesto: "Puesto",
            img: team4,
            twitter: '#',
            facebook: '#',
            linkedin: '#',
            instagram: '#',
        },
        {
            id: 5,
            nombre: 'Nombre Completo',
            puesto: "Puesto",
            img: team5,
            twitter: '#',
            facebook: '#',
            linkedin: '#',
            instagram: '#',
        },
    ]





    return (
        <ShopContext.Provider value={{ serviceDataCard, productsDataCard, preciosDataCard, teamDataCard }}>
            {children}
        </ShopContext.Provider>
    )
}

export default UsePetShopContextProvider