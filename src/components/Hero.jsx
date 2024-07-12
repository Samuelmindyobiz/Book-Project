import React from 'react'
import Logo from '../assets/Times-logo.png'

const Hero = () => {
    return (
        <div className='h-screen'>
            {/* Logo */}
            <div>
                <img src={Logo} alt="logo" />
                <p>Best-Sellers</p>
            </div>
            {/* covers */}
            <div></div>
        </div>
    )
}

export default Hero;