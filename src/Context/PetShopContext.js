import img1 from '../assets/img/product-1.png'
import img2 from '../assets/img/product-2.png'
import img3 from '../assets/img/product-3.png'
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
            id: 5,
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
            title: "Quality Pet Foods",

        },
        {
            id: 2,
            img: img2,
            alt: img2,
            title: "Quality Pet Foods",

        },
        {
            id: 3,
            img: img3,
            alt: img3,
            title: "Quality Pet Foods",

        },
        {
            id: 4,
            img: img1,
            alt: img1,
            title: "Quality Pet Foods",

        },
        {
            id: 5,
            img: img2,
            alt: img2,
            title: "Quality Pet Foods",

        },
        {
            id: 6,
            img: img3,
            alt: img3,
            title: "Quality Pet Foods",

        },


    ]








    return (
        <ShopContext.Provider value={{ serviceDataCard, productsDataCard }}>
            {children}
        </ShopContext.Provider>
    )
}

export default UsePetShopContextProvider