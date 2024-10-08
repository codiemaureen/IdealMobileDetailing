import React, { useEffect, useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import '../style/afterPhotos.css';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';


function importAllImages(r) {
 return r.keys().map(r);
}

const afterImages = importAllImages(require.context('../images/After', false, /\.(png|jpe?g|svg)$/));
const beforeImages = importAllImages(require.context('../images/Before', false, /\.(png|jpe?g|svg)$/));

const AfterPhotos = () => {

  const [beforePhotos, setBeforePhotos] = useState([]);
  const [afterPhotos, setAfterPhotos] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [lastTap, setLastTap] = useState(0);


  const handleMouseEnter = () => {
    setIsHovering(true)
  }
  const handleMouseLeave = () => {
    setIsHovering(false)
  }
  const handleDoubleTap = () => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;

    if (tapLength < 300 && tapLength > 0) {
      setIsHovering(!isHovering); // Toggle on double-tap
    }

    setLastTap(currentTime);
  }

  function showPrevImage(){
  setImageIndex(index => {
    if(index === 0) return afterImages.length -1;
    return index - 1;
    })
  }

  function showNextImage() {
    setImageIndex(index => {
      if(index === afterImages.length - 1) return 0;
      return index + 1;
    })
  }

  useEffect(() => {
    setAfterPhotos(afterImages);
    setBeforePhotos(beforeImages)
  }, []);

  return (
    <div 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave} 
    onTouchStart={handleDoubleTap}
    className="gallery">
        {isHovering ? 
          <img src={beforePhotos[imageIndex]} alt={`before-${imageIndex}`}/> :
          <img src={afterPhotos[imageIndex]} alt={`after-${imageIndex}`}/>}
        <button onClick={showPrevImage} 
          className='img-slider-btn' 
          style={{ left: 0}}>
          <ArrowBigLeft />
        </button>
        <button onClick={showNextImage} 
          className='img-slider-btn' 
          style={{ right: 0}}>
          <ArrowBigRight />
        </button>
    </div>
  );
};



export default AfterPhotos
