import React from 'react'
import './Footer.css'
import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube} alt=''/>
        <img src={twitter} alt=''/>
        <img src={instagram} alt=''/>
        <img src={facebook} alt=''/>
      </div>
    </div>
  )
}

export default Footer
