import React from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import '../style/map.css';

const GoogleMap = () => (
 <div className='mapContainer'>
   <APIProvider apiKey={'AIzaSyBejAN7985L6m9yq_aYCZl0zGxZawvUpaU'}>
     <Map
       style={{width: '30vw', height: '40vh'}}
       defaultCenter={{lat: 28.2442, lng: 82.7193}}
       defaultZoom={3}
       gestureHandling={'greedy'}
       disableDefaultUI={true}
     />
   </APIProvider>
  </div>
);


export default GoogleMap;