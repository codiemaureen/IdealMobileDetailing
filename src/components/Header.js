import logo from '../images/ideal-mobile-detailing.jpg'
import NavBar from './NavBar'

const Header = () => {
  return (
    <>
    <header className='header'>
      <img src={logo} alt="logo" className='logo'/>
      <h1 className='heading-title'>Ideal Mobile Detailing</h1>
    </header>
      <NavBar />
    </>
  )
}

export default Header