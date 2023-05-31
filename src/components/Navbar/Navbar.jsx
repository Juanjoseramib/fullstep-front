import React from 'react'
import logo from '../../images/Logo-claim-principal.png'
import './navbar.css'
import flecha from '../../images/Flecha.png'
import { Anchor } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav-container'>
      <img src='https://www.fullstep.com/wp-content/uploads/2023/05/Logo_Fullstep_web.svg' alt="Logo" class='logo' />
        <div className='navbar-options'>
          <a to='#'>Nosotros</a>
          <a to='#'>Testimonios</a>
          <a to='#'>Servicios</a>
          <a to='#'>Contacto</a>
          <span className='language-options'>
          <a style={{marginLeft: "4rem"}}>Idioma</a>
          <img src={flecha} alt="" className='img-arrow'/>
          </span>
          <img src="https://www.fullstep.com/wp-content/uploads/2021/11/sobre-verde50.png" alt="" className='img-message' />
          <img src="https://www.fullstep.com/wp-content/uploads/2021/11/lupa-verde50.png" alt="" className='img-search' />
        </div>
      </div>
  )
}
