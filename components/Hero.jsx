import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import TitleImage from '../public/img/title-image.png'
import NavIcon from '../public/img/mobile-icon.png'
import Twitter from '../public/img/twitter.svg'
import Facebook from '../public/img/facebook.svg'
import Instagram from '../public/img/instagram.svg'
import Email from '../public/img/email.png'

const Hero = () => {
  return (
    <div className="header">
      <nav>
        <ul className='scrolled desk-nav'>
          <li>About Our Church</li>
          <li>About Our Pastor</li>
          <li>Online Giving</li>
          <li>Get Counselling</li>
          <li>Reach Out</li>
          <li>Our Programs</li>
        </ul>

        <div className='scrolled-menu-icon'>
          <Image
            src={NavIcon}
            alt="Mobile Menu Icon"
            width="40px"
            height="20px"
          />
        </div>
      </nav>

      <div className="top">
        <div className="social-icons">
          <a href="#">
            <Image 
              src={Facebook}
              alt='Facebook Logo'
              height='20px'
              width='20px'
              className="social-icon"
            />
          </a>

          <a href="#">
            <Image 
              src={Instagram}
              alt='Instagram Logo'
              height='20px'
              width='20px'
              className="social-icon"
            />
          </a>

          <a href="#">
            <Image 
              src={Twitter}
              alt='Twitter Logo'
              height='20px'
              width='20px'
              className="social-icon"
            />
          </a>

          <a href="#">
            <Image 
              src={Email}
              alt='Email Logo'
              height='20px'
              width='20px'
              className="social-icon"
            />
          </a>
        </div>

        <div className="brand">
          <div className="logo"></div>
          <div className="name">
            <a href="#">
              <Image
                src={TitleImage}
                alt="Dominion Center"
                width="450px"
                height="200px"
              />
            </a>
          </div>
        </div>

        <ul className='desk-nav'>
          <li>About Our Church</li>
          <li>About Our Pastor</li>
          <li>Online Giving</li>
          <li>Get Counselling</li>
          <li>Reach Out</li>
          <li>Our Programs</li>
        </ul>

        <div className="mobile-nav">
          <Image 
            src={NavIcon}
            alt="Mobile Menu Icon"
            width="40px"
            height="20px"
          />
        </div>

        <div className="mobile-menu">
          <ul>
            <li>About Our Church</li>
            <li>About Our Pastor</li>
            <li>Online Giving</li>
            <li>Get Counselling</li>
            <li>Reach Out</li>
          </ul>
        </div>
      </div>

      <div className="bottom">
        <h2>WELCOME TO DOMINION CENTER</h2>
        <p>
          IT&apos;S AN HONOR THAT YOU WOULD CHOOSE TO SPEND AN HOUR OF YOUR WEEKEND WITH US! <br />
          Our goal here is to know Jesus, stay curious about the world around us, and then go and live out what Jesus 
          taught us. 
        </p>
      </div>
    </div>
  )
}

export default Hero