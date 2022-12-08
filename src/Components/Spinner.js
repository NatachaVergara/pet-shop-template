import React from 'react'

const Spinner = () => {
    return (
        <div className='container my-5 mx-auto'>
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className='m-5 p-5'>cargando producto</div>

        </div>
    )
}

export default Spinner