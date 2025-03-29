import "../style/contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import GoogleMap from "./Map";
import ContactForm from "./ContactForm";


const Contact = () => {
 
  return (
    <div id="contactContainer" >
    <h1 className="contactHeader">Let's Get In Touch!</h1>
    <div  className="contactContainer">
      <GoogleMap />
      <ContactForm />
    </div>
    <section className="contact-icon">
      <span>Call Us To Schedule Today!</span>
      <a className='call-button' href='tel:+15869328782'><FontAwesomeIcon className='phone-icon' icon={ faPhone } shake/>586.932.8782</a>
    </section>
    </div>
  )
}

export default Contact
