import "../style/nav.css";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { PopupButton } from 'react-calendly';


const NavBar = () => {

    const [rootElement, setRootElement] = useState(null);
     const handleScrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    useEffect(() => {
      setRootElement(document.getElementById("root"));
    }, [])
  return (
   <nav className="nav">
    <ul className="navList">

        <a href="/IdealMobileDetailing/index.html" 
        className={`navLinks navItems`}>
        <li 
        className="navItems">
        Home</li></a>
        <li className="navItems">
        <PopupButton
          url="https://calendly.com/codiegroth/schedule-your-service" 
          className={`navLinks navItems`}
          rootElement={rootElement}
          text="Schedule Service"
        />
        </li>

        <Link to="/photos#photos" className={`navLinks navItems`}>
        <li className={`navLinks navItems`} onClick={handleScrollToTop}>Photos</li></Link>

        <a href="https://www.facebook.com/profile.php?id=100063524828430&sk=reviews" 
        target="_blank"
        rel="noreferrer"
        className={`navLinks navItems`}>
        <li className={`navLinks navItems`}>
        Reviews</li>  
        </a>
        
        <a href="#contactContainer" className={`navLinks navItems`}>
        <li className={`navLinks navItems`}> 
        Contact Us</li></a>     
    </ul>
  </nav>
  )
}

export default NavBar
