import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'
import { FiAward } from 'react-icons/fi'
import { FiUsers } from 'react-icons/fi'
import { TbFolders } from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            <article className="about__card">
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>+40</small>
            </article>
            <article className="about__card">
              <TbFolders className='about__icon' />
              <h5>Projects</h5>
              <small>70+ Completed</small>
            </article>
          </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus in.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>


  )
}

export default About