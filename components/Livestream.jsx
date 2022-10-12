import React from 'react'
import Image from 'next/image'

import NoLiveStreams from '../public/img/no-streams.png'

const Livestream = () => {
  return (
    <div className='livestream'>
        <h3>Join us for Virtual Encounters RIGHT HERE, Sundays at 10:30am CAT!</h3>
        <Image 
            src={NoLiveStreams}
            alt="No Video streaming currently"
            className='no-live-image'
            width='1200%'
        />
    </div>
  )
}

export default Livestream