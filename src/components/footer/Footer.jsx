import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MIAN</a>
      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contect">Contect</a></li>
       </ul>
       <div className='footer__socials'>
         <a href="https://facebook.com"><FaFacebookF/></a>
         <a href="https://instagram.com"><BsInstagram/></a>
         <a href="https://twitter.com"><AiFillTwitterSquare/></a>
       </div>
       <div className="footer__copyright">
         <small>&copy; MIAN KHALID. all right reserved.   </small>
       </div>
    </footer>
  )
}

export default Footer
