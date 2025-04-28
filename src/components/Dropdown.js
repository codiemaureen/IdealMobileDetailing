import "../style/dropdown.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { PopupButton } from 'react-calendly';



const Dropdown = () => {
    const [rootElement, setRootElement] = useState(null);

    useEffect(() => {
      setRootElement(document.getElementById("root"));
    }, [])
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const handleScrollToTop = () => {
      window.scrollTo(0, 0); 
  };
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
          <a href="/" onClick={toggleDropdown}>Home</a>
          <a><PopupButton
          url="https://calendly.com/mason-idealmobiledetailing/30min" 
          className={`dropdownCal`}
          rootElement={rootElement}
          text="Schedule Service"
          /></a>
          <a href="https://www.facebook.com/profile.php?id=100063524828430&sk=reviews" target="_blank" rel="noopener noreferrer" className="navLinks" onClick={toggleDropdown}>Reviews</a>
          <Link to="/photos#photos" onClick={() => {
            toggleDropdown(); 
            handleScrollToTop();
          }}>Photos</Link>
          <a href="#contactForm" onClick={toggleDropdown}>Contact Us</a>
        </div>
      )}
    </div>
  );
};



export default Dropdown