import '../style/photos.css';
import AfterPhotos from './AfterPhotos';


const Photos = () => {
  return (
    <div 
      id="photos" 
      className='before-after-container'>
        <h1>Gallery</h1>
        <p>
          Take a Look at Some of Our Work!
        </p>
        <p>
          Double Click the Images to Check Out the <em>Before Photo!</em>
        </p>
        <div className='gallery'>
          <AfterPhotos/>
        </div>
    </div>
  )
}

export default Photos
