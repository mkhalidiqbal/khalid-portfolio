import React from 'react'
import './About.css'
import Me from '../../assets/mypic.jpg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolder} from "react-icons/vsc"
const About = () => {
  return (
  <section id='about'>

  <h5>Get To Know</h5>
  <h2>About Me</h2>
<div className='container about__container'>
<div className='about__me'>
<div className='about__me-image'>
  <img src={Me} alt='mypic'/>
</div>
</div>
<div className='about__content'>
<div className='about__cards'>

  <article className='about__card'>
<FaAward className='about__icon'/>
<h5>Experinace</h5>
<small>1+ Year Working</small>
  </article>

  <article className='about__card'>
<FiUsers className='about__icon'/>
<h5>Clients</h5>
<small>10 worldwide</small>
  </article>

  <article className='about__card'>
<VscFolder className='about__icon'/>
<h5>Projects</h5>
<small>5 Completed projects</small>
  </article> 


</div>
  <p>
    Make Your  own world ...
     The Secret of getting ahead is getting started....
     Never give up ...
  </p> 
  <a href='#contect' className='btn btn-primary'>Let's Talk</a>
</div>
</div>

    </section>
  )
}

export default About