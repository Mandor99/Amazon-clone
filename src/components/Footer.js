import React from 'react'
import '../styles/Footer.css'
import logo from '../images/amazon-logo-white.png'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <Link to='/'>
                <figure className="footer__logo">
                    <img src={logo} alt="amazon logo" className="footer__logo--pic"/>
                </figure>
            </Link>
            
            <small className="footer__rights">
                all &copy; copyrights saved by<span> mando</span>
            </small>
        </footer>
    )
}

export default Footer
