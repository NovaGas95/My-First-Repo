import React from 'react'
import './testemonials.css'
import data from './data'


const Testemonials = () => {
  return (
    <section id='testemonials'>
      <h5>Review From Clients</h5>
      <h2>Testemonials</h2>
      <div className="container testemonials__container">
        {
          data.map(
            ({ avatar, name, review }, index) => {
              return (
                <article key={index} className="testemonial">
                  <div className="client__avatar">
                    <img src={avatar} alt="Avatar One" />
                  </div>
                  <h5> {name} </h5>
                  <small className='client__review'>{review}
                  </small>
                </article>
              )
            }
          )
        }
      </div>
    </section>
  )
}

export default Testemonials