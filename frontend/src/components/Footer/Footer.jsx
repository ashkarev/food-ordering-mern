import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
          <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>The Food Ordering Website project aims to create an online platform where customers can browse menus, place food orders, and make payments for home delivery  </p>
                <div className="footer-social-icons">
                <a href="https://www.facebook.com/share/1BSxw6R8AJ/" target="_blank">
                        <img src={assets.facebook_icon} alt="Facebook" />
                     </a>

                     <a href="https://www.instagram.com/ashkarr?igsh=a2RmbjI4eXlyNjJ1" target="_blank">
                       <img src={assets.twitter_icon} alt="Instagram" />
                    </a>

                    <a href="https://www.linkedin.com/in/nandana-sajeevan-339a82339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app " target="_blank">
                         <img src={assets.linkedin_icon} alt="linkedin" />
                      </a>
                </div>
                </div>
             <div className="footer-content-center">  
                <h2> COMPANY</h2>
                <ul>
                    <li> Home</li>
                    <li>About Us</li>
                    <li> Delivery</li>
                    <li> Privacy Policy</li>
                    
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>
                    GET IN TOUCH
                </h2>
                <ul>
                    <li> PHONE  NO: 368298</li>
                    <li> cravemoreemail@gmail.com</li>
                </ul>

            </div>
           </div>
           <hr />
           <p className="footer-copyright"> Copyright 2025 @ cravemore.com -All Right Reserved.</p>
          </div>
     
    
  )
}

export default Footer
