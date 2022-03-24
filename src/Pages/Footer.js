import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='login-page-footer'>
        <div className='text-section'>
            <p>Tournament and league management software</p>
            <div className='contact'>
                <p>Contact Us</p>
                <p>Our happy clients</p>
                <p>Supports</p>
            </div>
        </div>
        <div className='icon-trophy'>
        </div>
        <i class="fa-solid fa-trophy"></i>
        <div className='social-media-section'>
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-google-plus-g"></i>
        </div>
    </div>
  )
}

export default Footer