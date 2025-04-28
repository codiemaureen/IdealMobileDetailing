import Contact from "./Contact"
import "../style/footer.css"


const Footer = () => {
  return (
   <footer className="footer-container">
    <div className="codieCredit">
      <span>Website built by <a href="https://codiegroth.com">Codie Groth</a></span>
    </div>
    <div className="iconCredit">
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/ddI5aoHK2pGh/automatic-car-wash">Automatic Car Wash</a> icon by
      <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
     </div>
   </footer>
   )
  }

export default Footer
