import Contact from "./Contact"
import "../style/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
   <footer>
    <Contact />
    <section className="contact-icon">
      <span>Call Us To Schedule Today!</span>
      <a className='call-button' href='tel:+15869328782'><FontAwesomeIcon className='phone-icon' icon={ faPhone } shake/>586.932.8782</a>
    </section>
    <div className="codieCredit">
      <span>Website built by <a href="https://codiemaureen.netlify.app/">Codie Maureen</a></span>
    </div>
    <div className="iconCredit">
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/ddI5aoHK2pGh/automatic-car-wash">Automatic Car Wash</a> icon by
      <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
     </div>
   </footer>
   )
  }

export default Footer
