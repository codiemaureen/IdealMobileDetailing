import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import '../style/photos.css';
import { useState } from 'react';


const Photos = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className='before-after-container'>
      <h1>Before and After Photos</h1>
      <div className='image-container'>
        <img src={imageUrls[imageIndex]} alt='before photos'/>
        <div className='overlay'></div>
        <button>
          <ArrowBigLeft />
        </button>
        <button>
          <ArrowBigRight />
        </button>
      </div>
    </div>
  )
}

export default Photos
