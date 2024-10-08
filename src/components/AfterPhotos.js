import React, { useEffect, useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import '../style/afterPhotos.css';


function importAllImages(r) {
 return r.keys().map(r);
}

const images = importAllImages(require.context('../images/After', false, /\.(png|jpe?g|svg)$/));

const AfterPhotos = () => {

  const [photos, setPhotos] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

    function showPrevImage(){
    setImageIndex(index => {
      if(index === 0) return images.length -1;
      return index - 1;
    })
  }

  function showNextImage() {
    setImageIndex(index => {
      if(index === images.length - 1) return 0;
      return index + 1;
    })
  }

  useEffect(() => {
    setPhotos(images);
  }, []);

  return (
    <div className="gallery">
        <img src={photos[imageIndex]} alt={`after-${imageIndex}`}/>
        <button onClick={showPrevImage} className='img-slider-btn' style={{ left: 0}}>
         <ArrowBigLeft />
        </button>
        <button onClick={showNextImage} className='img-slider-btn' style={{ right: 0}}>
          <ArrowBigRight />
        </button>
    </div>
  );
};



export default AfterPhotos
