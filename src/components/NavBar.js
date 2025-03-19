import "../style/nav.css"
import { Link, Router } from "react-router-dom"

const NavBar = () => {
  let navItems = ["Home", "Contact Me", "Schedule Service", "Photos", "Reviews"]

  
  return (
   <nav className="nav">
    <ul className="navList">

        <a href="/IdealMobileDetailing/index.html" 
        className={`navLinks navItems`}>
        <li 
        className="navItems">
        Home</li></a>
      
        <a 
        href="https://calendly.com/codiemaureen/mom-needs-help?back=1&month=2024-09" 
        className={`navLinks navItems`} arget="_blank"
        rel="noreferrer"><li className="navItems">Schedule Service</li></a>

        <Link to="/photos" className={`navLinks navItems`}>
        <li className={`navLinks navItems`} >Photos</li></Link>

        <a href="https://www.facebook.com/profile.php?id=100063524828430&sk=reviews" 
        target="_blank"
        rel="noreferrer"
        className={`navLinks navItems`}>
        <li className={`navLinks navItems`}>
        Reviews</li>  
        </a>
        
        <a href="#contactForm" className={`navLinks navItems`}>
        <li className={`navLinks navItems`}> 
        Contact Us</li></a>     
    </ul>
  </nav>
  )
}

export default NavBar
