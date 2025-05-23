import Details from "./components/Details";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import Photos from "./components/Photos"; 
import Contact from "./components/Contact";
import Home from "./components/Home";
import MobileService from "./components/MobileService";


const App = () => {
  const [services, setServices] = useState([
  {
   "id": 1,
   "title": "Complete Detail",
   "price": "$120.00",
   "imgUrl": "/pexels-karolina-grabowska-4870692.jpg",
   "included": [
    "EXTERIOR HAND WASH/CHAMOIS", "INTERIOR VACCUM CARPETS/FLOOR MATS", "INTERIOR/EXTERIOR WINDOW CLEANING", "FULL DASH RESTORATION/DOORJAM DETAIL"
   ]
  },
  {
   "id": 2,
   "title": "Supreme Detail",
   "price": "$180.00",
   "imgUrl": "/pexels-khunkorn-laowisit-1359149-5233264.jpg",
   "included": [
    "EXTERIOR HAND WASH/CHAMOIS", "INTERIOR VACCUM CARPETS/FLOOR MATS", "INTERIOR/EXTERIOR WINDOW CLEANING", "FULL DASH RESTORATION/DOORJAM DETAIL", "VINYL DRESSED INTERIOR/TIRES",
    "INTERIOR SHAMPOO CARPETS/FLOOR MATS & SEATS"
   ]
  },
  {
   "id": 3,
   "title": "Ultimate Detail",
   "price": "$240.00",
   "imgUrl": "/pexels-bylukemiller-14231684.jpg",
   "included": [
    "EXTERIOR HAND WASH/CHAMOIS", "INTERIOR VACCUM CARPETS/FLOOR MATS", "INTERIOR/EXTERIOR WINDOW CLEANING", "FULL DASH RESTORATION/DOORJAM DETAIL", "VINYL DRESSED INTERIOR/TIRES",
    "INTERIOR SHAMPOO CARPETS/FLOOR MATS & SEATS",
    "EXTERIOR WAX/HAND BUFF",
    "CHROME POLISH"
   ]
  }
 ])
  return (
    <>
      <div className="fixed-background"/>
      <div className="app">
        <Router>
        <Header/>
          <Routes>           
            <Route path="/" element={<Home services={services} />} />
            <Route path="/photos" element={<Photos/>} />
          </Routes>
        </Router>   
        <Contact />   
        <Footer />
      </div>
    </>
  );
}

export default App;
