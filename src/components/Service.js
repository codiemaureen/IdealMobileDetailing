import React from 'react';
import { useState, useEffect } from 'react';
import "../style/services.css"
import { PopupButton } from 'react-calendly';

const Service = ({ service }) => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(document.getElementById("root"));
  }, [])

  return (
    <section className="service-options">
      <div>    
      <div className='detail-header'>
        <h2>
          <PopupButton
            url="https://calendly.com/mason-idealmobiledetailing/30min" 
            className='header-service'
            rootElement={rootElement}
            text={service.title}
          />
        </h2>

        
          <PopupButton
          url="https://calendly.com/mason-idealmobiledetailing/30min" 
          className='header-service'
          rootElement={rootElement}
          text={service.price}
        />
      </div>
      <img src={service.imgUrl} alt={service.title} className='service-image'/>
      <div className='service-wrapper'>
      {service.included.map((incServ) => (
        <ul className='service-list'>
          <li className="services-offered" key={service.id}>{incServ.id}{incServ}</li>
        </ul>
      ))}
    </div>
    </div>
    <div className='button-container'>
    <PopupButton
      url="https://calendly.com/mason-idealmobiledetailing/30min" 
      className='schedule-service'
      rootElement={rootElement}
      text="Schedule Now!"
    />
    </div>
    </section>
  )
}

export default Service
