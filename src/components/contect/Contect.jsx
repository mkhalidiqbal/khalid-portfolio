import React from 'react'
import  { useRef } from 'react';
// import emailjs from 'emailjs-com'
import  './Contect.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'
// const  form =useRef();
// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
// };

const Contect = () => {
  return (
    <section id='contect'>
      <h5>Get in Touch</h5>
      <h2>contect me</h2>
      <container className="container contect__container">
        <div className="contect__options">
          <article className="contect__option">
      <MdOutlineMailOutline className='contect__option-icon'/>
            <h4>Email</h4>
            <h5>khalid.iqbal3810@gmail.com</h5>
            <a href="mailto:khalid.iqbal3810@gmail.com" target='_blank'>send a message</a>
          </article>
          <article className="contect__option">
      <RiMessengerLine className='contect__option-icon'/>
            <h4>Massenger</h4>
            <h5>Mian Khalid </h5>
            <a href="https://www.facebook.com/M.khalid.iqbal.381/ target='_blank'">send a message</a>
          </article>
          <article className="contect__option">
      <FaWhatsapp className='contect__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+923046729549 </h5>
            <a href="https://api.whatsapp.com/send?phone+923046729549" target='_blank'>send a message</a>
          </article>
        </div>
        <form>
        <input type="text" name='name' placeholder='Your full Name' required />
        <input type="text" name='Email' placeholder='Your Email' required />
        <textarea name="messege"  rows="7" placeholder='Your message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send message</button>

        </form>
      </container>
    </section>
  )
}

export default Contect
