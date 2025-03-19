import React from 'react'
import "../style/services.css"


const Service = ({ service }) => {

  const handleClick = () => {
    window.open("https://calendly.com/codiemaureen/mom-needs-help?back=1&month=2024-09", '_blank')
  }
  return (
    <section className="service-options">
      <div className='detail-header'>

      <a href="https://calendly.com/codiemaureen/mom-needs-help?back=1&month=2024-09" target='_blank'><h2> {service.title}</h2></a>
      <a href="https://calendly.com/codiemaureen/mom-needs-help?back=1&month=2024-09" target='_blank'><span>{service.price}</span></a>
      </div>

      {service.included.map((incServ) => (
       <ul>
        <li className="services-offered" key={service.id}>{incServ}</li>
       </ul>
    ))}
    <button onClick={handleClick} className='schedule-service'>Schedule Your Service Now!</button>
    </section>
  )
}

export default Service
