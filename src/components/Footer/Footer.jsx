import React from 'react'
import './footer.css'
import logo from '../../images/logo-nombre.png'
import logoLikedin from '../../images/linkedin-logo.webp'

export default function Footer() {
    return (
    <div className='Footer'>
        <section className='sec1'>
            <h2>Empresa</h2>
            <p>Trabaja con Nosotros</p>
            <p>Contacto</p>
            <p>Certificaciones</p>
        </section>

        <section className='seccion-logo'>
            <img className='logo-fullstep' src={logo} alt='logo' />
            <div>
                <p>Oficinas centrales</p>
                <p>Calle Eucalipto, 33, 3°</p>
                <p>28016 Madrid</p>
                <p>Tel +34 91 296 2000</p>
            </div>
            <img className='logo-linkedin' src={logoLikedin} alt='linkedin'/>
            
        </section>

        <section className='sec1'>
            <h2>Legal</h2>
            <p>Aviso Legal</p>
            <p>Politica de Privacidad</p>
            <p>Politica de Cookies</p>
            <p></p>
        </section>
    </div>
    )
}
