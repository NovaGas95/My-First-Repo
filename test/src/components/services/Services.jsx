import React from 'react'
import './services.css'
import{AiOutlineCheck} from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        {/*Start of UI/Ux*/}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
          </ul>
        </article>
        {/*End Of UI/UX*/}

        {/*Start of Web Dev*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Developpment</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
          </ul>
        </article>
        {/*End Of Web Dev*/}

        {/*Start of Content Creation*/}
        <article className="service">
          <div className="service__head">
            <h3>Content Creaction</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
          </ul>
        </article>
        {/*End Of Content Creaction*/}




      </div>
    </section>
  )
}

export default Services