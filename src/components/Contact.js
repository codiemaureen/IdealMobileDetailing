import "../style/contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "91e86f49-6417-468b-8223-ee6dd776924b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div id="contactForm">
      <section className="contactForm">
       <form onSubmit={onSubmit}>
          <h1>Contact Us!</h1>
          <div className="input-box">
            <label>Name</label>
            <input type="text" className="field" placeholder="Enter Your Name" name="name"></input>
          </div>

        <div className="input-box">
          <label>Email Address</label>
          <input 
          type="email" 
          required 
          className="field" placeholder="Enter Your Email" name="email">
          </input>
        </div>        
        <div className="input-box">
         <label>Message</label>
         <textarea 
         name="message" className="field mess" placeholder="Enter your message"></textarea>
        </div>        
        <button type="submit">Send</button>
       </form>
      </section>
          <section className="contact-icon">
      <span>Call Us To Schedule Today!</span>
      <a className='call-button' href='tel:+15869328782'><FontAwesomeIcon className='phone-icon' icon={ faPhone } shake/>586.932.8782</a>
    </section>
    </div>
  )
}

export default Contact
