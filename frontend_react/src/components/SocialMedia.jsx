import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsTwitter onClick={() => window.open('https://twitter.com/Kanu_bht', '_blank')}/>
        </div>
        <div>
            <BsInstagram onClick={() => window.open('https://www.instagram.com/kanishkbhatia/', '_blank')}/>
        </div>
        <div>
            <FaFacebookF onClick={() => window.open('https://www.facebook.com/Kanishkbht/', '_blank')}/>
        </div>
    </div>
  )
}

export default SocialMedia