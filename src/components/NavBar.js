const NavBar = () => {
  let navItems = ["Home", "Contact Me", "Schedule Service", "Photos", "Reviews"]


  let id = Math.floor(Math.random() * 10000) + 1;
  
  return (
    <div style={{display: "flex"}}>
      {navItems.map((item) => (
       <ul>
        <a href="" target="_blank"><li key={id} style={{display: "flex", float: "left", color: "orange"}}>{item}</li></a>
       </ul>
      ))}
    </div>
  )
}

export default NavBar
