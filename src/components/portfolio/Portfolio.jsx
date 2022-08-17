import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pic1.webp'

const data = [
  {
  id:1,
  image:IMG1,
  title:'Maintaining tasks andand tracking prograss',
  github:'https://github.com',
  demo:'http://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
},
{
  id:2,
  image:IMG1,
  title:'Maintaining tasks andand tracking prograss',
  github:'https://github.com',
  demo:'http://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
},
{
  id:3,
  image:IMG1,
  title:'Maintaining tasks andand tracking prograss',
  github:'https://github.com',
  demo:'http://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
},

{
  id:4,
  image:IMG1,
  title:'Maintaining tasks andand tracking prograss',
  github:'https://github.com',
  demo:'http://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
},
{
  id:5,
  image:IMG1,
  title:'Maintaining tasks andand tracking prograss',
  github:'https://github.com',
  demo:'http://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
},
{
  id:6,
  image:IMG1,
  title:'Maintaining tasks andand tracking prograss',
  github:'https://github.com',
  demo:'http://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
},

]

const Portfolio = () => {
  return (
   <section id='portfolio'>
   <h5>My Recent work </h5>
   <h2>Portfolio</h2>
   <div className='container container__portfolio'>
   {
  data.map(({id ,  image , title ,github ,demo}) => {
    return(
      <article key={id} className='portfolio__item'>
     <div className='portfolio__item-image'>
       <img src={image} alt={title}></img>
     </div>
<h3>{title}</h3>
<div className='portfolio__item-cta'>
<a href={github}className='btn' target='_blank'>github</a>
<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
     </article>
    )
  })
   }
   
     
   </div>

   </section>
  )
}

export default Portfolio
