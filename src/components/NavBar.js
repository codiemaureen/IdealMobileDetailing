import "../style/nav.css"
import { Link, Router } from "react-router-dom"

const NavBar = () => {
  let navItems = ["Home", "Contact Me", "Schedule Service", "Photos", "Reviews"]

  
  return (
   <nav className="nav">
    <ul>
      <li className="navItems"><a href="/IdealMobileDetailing" className="navLinks">Home</a></li>
      <li className="navItems"><a href="https://calendly.com/codiemaureen/mom-needs-help?back=1&month=2024-09" className="navLinks" target="_blank">Schedule Service</a></li>
      <li className="navItems"><Link to="/photos" className="navLinks">Photos</Link></li>
      <li className="navItems"><a href="https://www.facebook.com/profile.php?id=100063524828430&sk=reviews" target="_blank"className="navLinks">Reviews</a></li>      
      <li className="navItems"><a href="#contactForm" className="navLinks">Contact Us</a></li>      
    </ul>
   </nav>
  )
}

export default NavBar
