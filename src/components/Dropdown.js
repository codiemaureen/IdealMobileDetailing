import "../style/dropdown.css"
import { Link, Router } from "react-router-dom"


const Dropdown = () => {

    const redirectToURL = () => {
      let options = document.getElementsByTagName('option')
      // let external = document.getElementsByClassName('external');
      // let interal = document.getElementsByClassName('internal');
      let select = document.getElementById("urlSelect");
      let url = select.value;

      if(select.value.includes('https')){
        window.open(url, '_blank');
      } else {
        window.location.href = url;
      }
    }
  return (
    <div className="dropdown">
      <select id="urlSelect" onChange={redirectToURL}>
        <option className="internal" value="/IdealMobileDetailing/index.html">Menu</option>
        <option className="internal" value="/IdealMobileDetailing/index.html"><Link to="/home">Home</Link></option>
        <option className="external" value="https://calendly.com/codiemaureen/mom-needs-help?back=1&month=2024-09">Schedule Service</option>
        <option className="internal"><Link to="/photos" >Photos</Link></option>
        <option className="external" value="https://www.facebook.com/profile.php?id=100063524828430&sk=reviews" >Reviews</option>      
        <option className="internal" value="#contactForm">Contact Us</option>         
    </select>
    </div>
  )
}



export default Dropdown
