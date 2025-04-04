import "../style/dropdown.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const Dropdown = () => {

  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".dropdown")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="dropdown" >
      <button className="menu-button" onClick={toggleDropdown}>
        Menu
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="/IdealMobileDetailing/index.html">Home</a>
          <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">Schedule Service</a>
          <a href="https://www.facebook.com/profile.php?id=100063524828430&sk=reviews" target="_blank" rel="noopener noreferrer" className="navLinks">Reviews</a>
          <Link to="/photos#photos" >Photos</Link>
          <a href="#contactForm">Contact Us</a>
        </div>
      )}
    </div>
  );
};



export default Dropdown