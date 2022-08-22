import React from 'react'
import './testemonials.css'
import data from './data'
import { useState } from 'react'





const Testemonials = () => {

  const [slide, setSlide] = useState(data[0])
  return (
    <section id='testemonials'>
      <h5>Review From Clients</h5>
      <h2>Testemonials</h2>
      <div className="container testemonials__container">

        {data.map(({ id, avatar, name, review }) => {
          return (
            <article key={id} className='testemonial'>
              <div className='client__avatar'>
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </article>
          )
        })}




      </div >
    </section>
  )
}

export default Testemonials