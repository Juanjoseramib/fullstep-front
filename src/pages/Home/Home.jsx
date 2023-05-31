import React from 'react'
import './home.css'



export default function Home() {
  return (
    <div className='home-container'>
        <div className='cont-photocomp'>
          <img src="https://www.fullstep.com/wp-content/uploads/2021/09/Fondo-caja-cabecera-home.png" alt="" />
          <section className='text-photocomp'>
          <h1>Crecimiento </h1>
          <h2>con impacto positivo</h2>
          <p>Nuestra prioridad es el crecimiento de las empresas, asegurando que éste tenga un impacto positivo para clientes, profesionales, proveedores y partners</p>
          <a>Ver Video </a>
          </section>
        </div>
        <video className="video-home" loop muted autoPlay>
        <source src="../../video/intro.mp4" type="video/mp4" />
        </video>
    </div>
  )
}
