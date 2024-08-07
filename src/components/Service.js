import React from 'react'

const Service = ({ service }) => {
  return (
    <div>
      <h2>{service.title}</h2>
      <h3>{service.price}</h3>
      {service.included.map((incServ) => (
       <ul>
        <li key={service.id}>{incServ}</li>
       </ul>
    ))}
    </div>
  )
}

export default Service
