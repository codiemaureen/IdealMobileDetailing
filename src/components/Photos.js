import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import '../style/photos.css';
import { useState } from 'react';


const Photos = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage(){
    setImageIndex(index => {
      if(index === 0) return imageUrls.length -1;
      return index - 1;
    })
  }

  function showNextImage() {
    setImageIndex(index => {
      if(index === imageUrls.length - 1) return 0;
      return index + 1;
    })
  }
  return (
    <div id="photos" className='before-after-container'>
      <h1>Before and After Photos</h1>
      <div className='image-container'>
        <img src={imageUrls[imageIndex]} alt='before photos'/>
        <div className='overlay'></div>
        <button onClick={showPrevImage} className='img-slider-btn' style={{ left: 0}}>
          <ArrowBigLeft />
        </button>
        <button onClick={showNextImage} className='img-slider-btn' style={{ right: 0}}>
          <ArrowBigRight />
        </button>
      </div>
    </div>
  )
}

export default Photos
