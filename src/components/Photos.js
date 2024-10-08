import '../style/photos.css';
import AfterPhotos from './AfterPhotos';
import { useState } from 'react';
import BeforePhotos from './BeforePhotos';


const Photos = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  }
  const handleMouseLeave = () => {
    setIsHovering(false);
  }
  return (
    <div 
    id="photos" 
    className='before-after-container'
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <h1>Gallery</h1>
      <div>
        <AfterPhotos/>
      </div>
    </div>
  )
}

export default Photos
