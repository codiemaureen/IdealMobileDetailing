import React from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import '../style/map.css';
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const GoogleMap = () => (
 <div className='mapContainer'>
  <h4>Now Servicing the New Port Richey Area!</h4>
   <APIProvider apiKey={apiKey}>
     <Map
       style={{width: '40vw', height: '40vh'}}
       defaultCenter={{lat:28.2717 , lng: -82.7195}}
       defaultZoom={12}
       gestureHandling={'greedy'}
       disableDefaultUI={true}
     />
   </APIProvider>
  </div>
);


export default GoogleMap;