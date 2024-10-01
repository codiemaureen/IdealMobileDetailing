import logo from '../images/ideal-mobile-detailing.jpg'
import NavBar from './NavBar'
import '../style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  return (
    <>
    <header className='header'>
      <img src={logo} alt="logo" className='logo'/>
      <h1 className='heading-title'>Ideal Mobile Detailing</h1>
      <a className='call-button' href='tel:+15869328782'><FontAwesomeIcon className='phone-icon' icon={ faPhone } shake/><span>586.932.8782</span></a>
    </header>
    <NavBar />
    </>
  )
}

export default Header