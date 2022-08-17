import React from 'react'
import  CV from '../../assets/KHALID IQBAL.pdf'
const CTA = () => {
  return (
    <div className='CTA'>
    <a href= {CV} download className='btn' > Download CV</a>
        <a href="#contect"className='btn btn-primary'> Let's Talk </a>

      
    </div>
  )
}

export default CTA
