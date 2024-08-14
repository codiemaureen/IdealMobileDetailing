const Contact = () => {
  return (
    <div>
      <section className="contactForm" id="contactForm">
       <form>
        <h2>Contact Form</h2>
        <div className="input-box">
         <label>Name</label>
         <input type="email" placeholder="Enter Your Name"></input>
        </div>
        <div className="input-box">
         <label>Email Address</label>
         <input type="email" required placeholder="Enter Your Email"></input>
        </div>        
        <div className="input-box">
         <label>Message</label>
         <textarea name="" id="" placeholder="Enter your message"></textarea>
        </div>        
        <button type="submit">Contact Me!</button>
       </form>
      </section>
    </div>
  )
}

export default Contact
