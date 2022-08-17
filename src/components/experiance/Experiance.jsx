import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import  './experiance.css'

const Experiance = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experiance__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Good</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
              <h4>React</h4>
              <small className="text-light">Experianced</small>
              </div>
            </article>

          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div><h4>C++</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
              <h4>My SQL</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
           

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
