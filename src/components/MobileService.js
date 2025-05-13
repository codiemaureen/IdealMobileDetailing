import '../style/mobileService.css';
import mobileService from '../images/pexels-tima-miroshnichenko-6196235.jpg';
import { PopupButton } from 'react-calendly';
import { useEffect, useState } from 'react';

const MobileService = () => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(document.getElementById("root"));
  }, [])
 
 return ( 
  <div className="mobileService">
  
    <img src={mobileService} alt="" className='mobileServiceImage'/>
   <div className="mobileServiceWrapper">
     <h3>Where Convenience Meets Craftsmanship</h3>
     <p className='mobileServiceBlurb'>At Ideal Mobile Detailing, we combine luxury care with personalized service — delivering showroom-quality results right to your doorstep. From booking to final polish, every detail is handled with precision and professionalism.</p>
     <PopupButton
      url="https://calendly.com/mason-idealmobiledetailing/30min" 
      className='schedule-service'
      rootElement={rootElement}
      text="Book Now!"
     />
   </div>
  </div>
  );
}
 
export default MobileService;