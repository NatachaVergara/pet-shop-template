
import team1 from '../assets/img/team-1.jpg';
import team2 from '../assets/img/team-2.jpg';
import team3 from '../assets/img/team-3.jpg';
import team4 from '../assets/img/team-4.jpg';
import team5 from '../assets/img/team-5.jpg';
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect, useState } from 'react'
import { preciosDB, productosDB } from '../utils/base_url';

// import axios from 'axios';
// import { useEffect } from 'react';

//Esta constante es la que crea el context y la comparto en la linea 225 como ShopContext.Provider
const ShopContext = createContext();

//Esta es la funcion que voy a llamar para utilizar mi props en toda la app. 
export const useContextShop = () => {
    return useContext(ShopContext)
}




const UsePetShopContextProvider = ({ children }) => {
    const [productsDataCard, setProductsDataCard] = useState([])
    const [preciosDataCard, setPreciosDataCard] = useState([])

    useEffect(() => {
        const getProducts = async () => {

            fetch(productosDB)
                .then(res => res.text())
                .then(rep => {
                    //console.log(rep)
                    const data = JSON.parse(rep.substr(47).slice(0, -2));
                    //  console.log(data.table)
                    setProductsDataCard(data.table.rows)
                })
        }
        getProducts()


        const getPrecios = async () => {
            fetch(preciosDB)
                .then(res => res.text())
                .then(rep => {
                    const data = JSON.parse(rep.substr(47).slice(0, -2));
                    //console.log(data.table.rows);
                    setPreciosDataCard(data.table.rows)
                })
        }
        getPrecios()


    }, [])
    //  console.log(productsDataCard)



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