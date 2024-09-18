import F350DriverInterior from '../images/Before/Supreme F350/driver_interior.jpg';
import '../style/photos.css';

const Photos = () => {
  return (
    <div className='image-container'>
      <h1>Before and After Photos</h1>
      <img className="car-photos" src={F350DriverInterior} alt='F350-driver-interior'/>
      <div className='overlay'></div>
    </div>
  )
}

export default Photos
