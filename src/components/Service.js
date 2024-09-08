import React from 'react'
import "../style/services.css"

const Service = ({ service }) => {
  return (
    <section className="service-options">
      <h2>{service.title}
      <span>{service.price}</span></h2>
      {service.included.map((incServ) => (
       <ul>
        <li key={service.id}>{incServ}</li>
       </ul>
    ))}
    </section>
  )
}

export default Service
