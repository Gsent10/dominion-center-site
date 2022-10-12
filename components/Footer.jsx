import React from 'react'
import Image from 'next/image'

import Twitter from '../public/img/twitter.svg'
import Facebook from '../public/img/facebook.svg'
import Instagram from '../public/img/instagram.svg'
import Email from '../public/img/email.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="service-times">
            <div className="footer-heading">
                <h2>Worship Encounter Times</h2>
                <div className='dash'></div>
            </div>

            <div className="services">
                <div className="left">
                    <h3>Sunday Mornings (Online and In-Person)</h3>
                    <p>10:30am</p>
                </div>

                <div className="right">
                    <h3>Every Wednesday Evenings</h3>
                    <p>5pm</p>
                </div>
            </div>
        </div>

        <div className="map">
            <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=primewash%20evo%20road%20&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no"></iframe>
        </div>

        <div className="social-media">
            <h3>Connect with us on Social Media!</h3>

            <div className="social-icons">
                <a href="#">
                    <Image 
                        src={Facebook}
                        alt='Facebook Logo'
                        height='20px'
                        width='20px'
                    />
                </a>

                <a href="#">
                    <Image 
                        src={Instagram}
                        alt='Instagram Logo'
                        height='20px'
                        width='20px'
                    />
                </a>

                <a href="#">
                    <Image 
                        src={Twitter}
                        alt='Twitter Logo'
                        height='20px'
                        width='20px'
                    />
                </a>

                <a href="#">
                    <Image 
                        src={Email}
                        alt='Email Logo'
                        height='20px'
                        width='20px'
                    />
                </a>
            </div>
        </div>
        <p>© 2022 RCCG Dominion Center, All Rights Reserved</p>
    </div>
  )
}

export default Footer