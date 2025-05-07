import logo from '../images/pexels-radu-daniel-mrd-1938968-7391656.jpg'
import NavBar from './NavBar'
import '../style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown'


const Header = () => {
  const handleScrollToTop = () => {
      window.scrollTo(0, 0); 
  };

  return (
    <div className='headerContainer'>
    <header className='header'>
      <NavBar />
      <section className='header-content'>
        <div className='social-icons'>
          <a href='https://www.facebook.com/profile.php?id=100063524828430' target='_blank'
          className='social-icon'>
            <FontAwesomeIcon className='fb-icon' icon= {faFacebook}/></a>
          <a href='mailto:mason@idealmobiledetailing.com'
          className='social-icon'>
            <FontAwesomeIcon className='envelope' icon= {faEnvelope}/>
          </a>
          <a href='tel:+15869328782' className={`${'social-icon'}`}><FontAwesomeIcon className={`${'phone-icon'} ${'social-icon'}`}icon={ faPhone } shake/>586.932.8782</a>
        </div>
        <h1 className='heading-title' id='heading-title' onClick={handleScrollToTop}>
          <a href='#heading-title' className='heading-title'>Ideal Mobile Detailing</a>
        </h1>
      </section>
    </header>
    <Dropdown /> 
    </div>

  )
}

export default Header