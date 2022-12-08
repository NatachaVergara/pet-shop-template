import React from 'react'

const LinkWhatsup = (texto) => {
    return (
        <a href={`https://api.whatsapp.com/send?phone=0123456789&text=Hola, Necesito información`} target='_blank' rel="noreferrer" className='text-dark'> <span>12 345 6789</span> </a>
    )
}

export default LinkWhatsup