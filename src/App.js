import Details from "./components/Details";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import Photos from "./components/Photos";
import F350DriverExterior from '../src/images/Before/Supreme F350/driver_exterior.jpg';
import F350DriverInterior from '../src/images/Before/Supreme F350/driver_interior.jpg';
import F350Dashboard from '../src/images/Before/Supreme F350/dashboard.jpg';
import F350BackDriverInterior from '../src/images/Before/Supreme F350/back_driver_interior.jpg';

const BEFORE = [F350DriverExterior, F350DriverInterior, F350Dashboard, F350BackDriverInterior];


const App = () => {
  const [services, setServices] = useState([
  {
   "id": 1,
   "title": "Complete Detail",
   "price": "$120.00",
   "included": [
    "EXTERIOR HAND WASH/CHAMOIS", "INTERIOR VACCUM CARPETS/FLOOR MATS", "INTERIOR/EXTERIOR WINDOW CLEANING", "FULL DASH RESTORATION/DOORJAM DETAIL"
   ]
  },
  {
   "id": 2,
   "title": "Supreme Detail",
   "price": "$180.00",
   "included": [
    "EXTERIOR HAND WASH/CHAMOIS", "INTERIOR VACCUM CARPETS/FLOOR MATS", "INTERIOR/EXTERIOR WINDOW CLEANING", "FULL DASH RESTORATION/DOORJAM DETAIL", "VINYL DRESSED INTERIOR/TIRES",
    "INTERIOR SHAMPOO CARPETS/FLOOR MATS & SEATS"
   ]
  },
  {
   "id": 3,
   "title": "Ultimate Detail",
   "price": "$240.00",
   "included": [
    "EXTERIOR HAND WASH/CHAMOIS", "INTERIOR VACCUM CARPETS/FLOOR MATS", "INTERIOR/EXTERIOR WINDOW CLEANING", "FULL DASH RESTORATION/DOORJAM DETAIL", "VINYL DRESSED INTERIOR/TIRES",
    "INTERIOR SHAMPOO CARPETS/FLOOR MATS & SEATS",
    "EXTERIOR WAX/HAND BUFF",
    "CHROME POLISH"
   ]
  }
 ])
  return (
    <div className="app">
      <Router basename="/IdealMobileDetailing">
      <Header/>
      <Details services={services} />
        <Routes>
          <Route path="/idealMobileDetailing" element={<Details />} />
          <Route path="/photos" element={<Photos imageUrls={BEFORE}/>} />
        </Routes>
      </Router>      
      <Footer />
    </div>
  );
}

export default App;
