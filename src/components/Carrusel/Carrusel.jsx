import React from 'react'
import './carrusel.css'
import { Carousel, transition } from '@material-tailwind/react'
import Cards from '../Cards/Cards'


export default function Carrusel() {
    return (
        <div className='Carrusel-componente'>
            <Carousel transition={{ duration: 1 }} className="Carrusel">
                <Cards />
                <Cards />
                <Cards />
            </Carousel>
        </div>
    )
}
