import React from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import '../style/map.css';
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const GoogleMap = () => (
  <div className='mapWrapper'>
 <h4 className='mapHeader'>Now Servicing the New Port Richey Area!</h4> 
  <div className='mapContainer'>
    <APIProvider apiKey={apiKey}>
      <Map
        style={{width: '100%', height: '100%'}}
        defaultCenter={{lat:28.2717 , lng: -82.7195}}
        defaultZoom={12}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      />
    </APIProvider>
    </div>
  </div>
);


export default GoogleMap;