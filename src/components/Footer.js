import Contact from "./Contact"
import "../style/footer.css"


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
   <footer className="footer-container">
    <div className="codieCredit">
      <span >Website built by <a href="https://codiegroth.com" className="codieCredit">Codie Groth</a></span>
    </div>
    <div className="iconCredit">
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/ddI5aoHK2pGh/automatic-car-wash">Automatic Car Wash</a> icon by
      <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
    </div>
    <p className="copyright">
      &copy; { currentYear } Ideal Mobile Detailing. All rights reserved.
    </p>
   </footer>
   )
  }

export default Footer
