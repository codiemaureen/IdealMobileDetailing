import "../style/dropdown.css"
import { Link } from "react-router-dom";


const Dropdown = () => {

  return (
    <div class="dropdown">
      <button className="menu-button">Menu</button>
      <div class="dropdown-content">
        <a href="/IdealMobileDetailing/index.html">Home</a>
        <a href="https://calendly.com/codiemaureen/mom-needs-help?back=1&month=2024-09"  target="_blank">Schedule Service</a>
        <a href="https://www.facebook.com/profile.php?id=100063524828430&sk=reviews" target="_blank"className="navLinks">Reviews</a>
        <Link to="/photos" >Photos</Link>
        <a href="#contactForm" >Contact Us</a>
      </div>
    </div>
  )
}



export default Dropdown