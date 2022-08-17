import React from 'react'
import CTA from './CTA'
import Me from '../../assets/me.png.crdownload'
import Headersocials from './Headersocials'
import "./Header.css"
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Khalid Iqbal</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />
        <Headersocials/>

        {/* <div className="Me">
        <img src={Me} alt='me'></img>    
</div> */}
<a href='#contect' className='scroll__down'> Scroll Down </a> 
      </div>
    </header>
  )
}

export default Header
