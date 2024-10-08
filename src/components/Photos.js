import '../style/photos.css';
import AfterPhotos from './AfterPhotos';


const Photos = () => {

  return (
    <div id="photos" className='before-after-container'>
      <h1>Gallery</h1>
      <div className='image-container'>
        <AfterPhotos/>
      </div>
    </div>
  )
}

export default Photos
