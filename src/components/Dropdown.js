import "../style/dropdown.css"
import { Link, Router } from "react-router-dom"


const Dropdown = () => {

    const redirectToURL = () => {
      var select = document.getElementById("urlSelect");
      var url = select.value;
      if (url) {
        window.location.href = url;
      }
    }
  return (
    <div className="dropdown">
      <select id="urlSelect" onChange={redirectToURL}>
      <option>Menu</option>
      <option value="/IdealMobileDetailing/index.html"><Link to="/home" >Home</Link></option>
      <option value="https://calendly.com/codiemaureen/mom-needs-help?back=1&month=2024-09">Schedule Service</option>
      <option><Link to="/photos" >Photos</Link></option>
      <option><a href="https://www.facebook.com/profile.php?id=100063524828430&sk=reviews" target="_blank">Reviews</a></option>      
      <option><a href="#contactForm" >Contact Us</a></option>         
    </select>
    </div>
  )
}

export default Dropdown
