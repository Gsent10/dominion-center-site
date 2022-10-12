import React from 'react'
import Image from 'next/image'

import Event1 from '../public/img/eve1.jpg'
import Event2 from '../public/img/eve2.jpg'
import Event3 from '../public/img/eve3.jpg'
import Event4 from '../public/img/eve4.jpg'

const Programs = () => {
  return (
    <div className='programs'>
        <h2>Our Upcoming Events</h2>

        <p>
            Here&apos;s what&apos;s going on Here at Dominion Center! follow us on all of our Social media platforms and <br />
            suscribe to our Youtube channel to stay updated.
        </p>

        <div className="events">
            <div className="top">
                <a href="#">
                    <Image
                        src={Event1}
                        alt="Shine forth thanksgiving"
                        width='500px'
                        height='500px'
                    />
                </a>

                <a href="#">
                    <Image
                        src={Event2}
                        alt="Prayer fest"
                        width='500px'
                        height='500px'
                    />
                </a>
            </div>

            <div className="bottom">
                <a href="#">
                    <Image
                        src={Event3}
                        alt="Thanksgiving"
                        width='500px'
                        height='500px'
                    />
                </a>
                
                <a href="#">
                    <Image
                        src={Event4}
                        alt="Church in the Village"
                        width='500px'
                        height='500px'
                    />
                </a>
            </div>

            <a href="#" className='butn dark'>View More</a>
        </div>
    </div>
  )
}

export default Programs