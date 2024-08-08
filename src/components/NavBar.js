const NavBar = () => {
  let navItems = ["Home", "Contact Me", "Schedule Service", "Reviews"]


  let id = Math.floor(Math.random() * 10000) + 1;
  
  return (
    <div style={{display: "flex"}}>
      {navItems.map((item) => (
       <ul>
        <li key={id} style={{display: "flex", float: "left"}}>{item}</li>
       </ul>
      ))}
    </div>
  )
}

export default NavBar
