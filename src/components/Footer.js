import Contact from "./Contact"
import "../style/footer.css"

const Footer = () => {
  return (
   <footer>
    <Contact />
    <div className="codieCredit">
      <span>Website built by <a href="https://codiemaureen.netlify.app/">Codie Maureen</a></span>
    </div>
    <div className="iconCredit">
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/ddI5aoHK2pGh/automatic-car-wash">Automatic Car Wash</a> icon by
      <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
     </div>
   </footer>
   )
  }

export default Footer
