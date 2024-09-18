import F350DriverInterior from '../images/Before/Supreme F350/driver_interior.jpg';
import '../style/photos.css';

const Photos = () => {
  return (
    <div className='before-after-container'>
      <h1>Before and After Photos</h1>
      <div className='image-container'>
        <img className="car-photos" src={F350DriverInterior} alt='F350-driver-interior'/>
        <div className='overlay'></div>
      </div>
    </div>
  )
}

export default Photos
