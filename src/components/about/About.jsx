import React from 'react'
import ME from '../../assets/nhatbinh1.jpg'
import './about.css'

import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>           
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article className='about__card'>
              <FiUser className='about__icon'/>
              <h5>Client</h5>
              <small>30+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>
          My name is Nhat Binh. I am in the early twenty-two. 
          I have been studying computer programming for the past two years at Ton Duc Thang University. 
          To describe myself, I would say I’m a hard-working person that has gained a lot of skills over the years. 
          I am now looking for an opportunity to devote my skills, enthusiasm, and creativity.
          After being in the field for a while, I am impressed by your company’s creative and innovative products.
          I hope I will have a chance to sharpen my skills at the company.
          </p>
    
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>  
  )
}

export default About