import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
            <div className="footer-content-left">
             <img src={assets.logo} alt=''/>
             <p>Experience the Art of Culinary Excellence 
              at Tomato, where our expertly crafted dishes are delivered straight to your door, 
              bringing gourmet flavors and exceptional quality to your table without the need to step out.</p>
              <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt=''/>
              <img src={assets.twitter_icon} alt=''/>
              <img src={assets.linkedin_icon} alt=''/>
              
              </div>
            </div>
            <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH!</h2>
                <ul>
                    <li>+91-23-456780-2</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <div className="footer-copyright">Copyright 2024 @ Tomato.com - All Rights Reserved</div>
      </div>
    </div>
  )
}

export default Footer
