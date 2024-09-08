import Details from "./components/Details";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import Contact from "./components/Contact";


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
      <Header/>
      <Details services={services} />
      <Router>
        <Routes>
          <Route exact path="/" component={Contact} />
        </Routes>
      </Router>      
      <Footer />
    </div>
  );
}

export default App;
