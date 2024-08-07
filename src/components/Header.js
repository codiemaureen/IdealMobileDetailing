import logo from '../images/ideal-mobile-detailing.jpg'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt="logo" className='logo'/>
      <h1 className='heading-title'>Ideal Mobile Detailing</h1>
    </header>
  )
}

export default Header