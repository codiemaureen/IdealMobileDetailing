import '../style/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import aboutImg from '../images/pexels-esmihel-14542677.jpg';

const About = () => {
  return (
    <div className='aboutContainer' id='aboutContainer'>
     <img src={aboutImg} alt='aboutImg'className='aboutImg'/>
     <div className='aboutBlurbContainer'>
      <h2 className='aboutHeader'>About Ideal Mobile Detailing</h2>
      <p className='aboutBlurb'>At Ideal Mobile Detailing, we bring professional-grade car care directly to your driveway. With a passion for perfection and a commitment to convenience, we specialize in restoring that like-new shine—inside and out. Whether you're prepping for a show, maintaining a luxury ride, or just love a spotless car, we deliver personalized detailing services that fit your schedule. Locally owned and operated, we take pride in serving our community with honesty, reliability, and results that speak for themselves.</p>
      <p>
      <a href='tel:+15869328782' className='phoneLink'><FontAwesomeIcon icon={ faPhone } className='phoneIcon' shake/> Get a Free Quote!</a>
      <a href='tel:+15869328782' className='phoneLink'> (586) 932-8782</a></p>
    </div>
   </div>
  )
}

export default About
