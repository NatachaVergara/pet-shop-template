import React, { createContext, useContext, useEffect, useState } from 'react'
import { empleadosDB, preciosDB, productosDB } from '../utils/base_url';

//Esta constante es la que crea el context y la comparto en la linea 225 como ShopContext.Provider
const ShopContext = createContext();

//Esta es la funcion que voy a llamar para utilizar mi props en toda la app. 
export const useContextShop = () => {
    return useContext(ShopContext)
}




const UsePetShopContextProvider = ({ children }) => {
    const [productsDataCard, setProductsDataCard] = useState([])
    const [preciosDataCard, setPreciosDataCard] = useState([])
    const [teamDataCard, setTeamDataCard] = useState([])



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

        const getEmpleados = async () => {
            fetch(empleadosDB)
                .then(res => res.text())
                .then(rep => {
                    const data = JSON.parse(rep.substr(47).slice(0, -2));
                    //console.log(data.table.rows)
                    setTeamDataCard(data.table.rows)
                })
        }
        getEmpleados();


    }, [])
   


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





    return (
        <ShopContext.Provider value={{ serviceDataCard, productsDataCard, preciosDataCard, teamDataCard }}>
            {children}
        </ShopContext.Provider>
    )
}

export default UsePetShopContextProvider