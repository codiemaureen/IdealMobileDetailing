import logo from '../images/pexels-radu-daniel-mrd-1938968-7391656.jpg'
import NavBar from './NavBar'
import '../style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown'


const Header = () => {

  return (
    <>
    <header className='header'>
      <h1 className='heading-title'>Ideal Mobile Detailing</h1>
      <img src={logo} alt="logo" className='logo'/>
      <section className='media-icons'>
        <div className='social-icons'>
          <a href='https://www.facebook.com/profile.php?id=100063524828430' target='_blank'><FontAwesomeIcon className='fb-icon' icon= {faFacebook}/></a>
          <a href='mailto:idealmobile19@gmail.com'><FontAwesomeIcon className='envelope' icon= {faEnvelope}/></a>
        </div>
        <div className='contact-anchor'>
          <a className='call-button' href='tel:+15869328782'><FontAwesomeIcon className='phone-icon' icon={ faPhone } shake/>586.932.8782</a>
        </div>
      </section>
    </header>
    <NavBar />
    <Dropdown />
    </>

  )
}

export default Header