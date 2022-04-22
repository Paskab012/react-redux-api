import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from '../details/DetailsPage';
import Nav from '../navBar/NavBar';
import Locations from '../locations/Location';

const WelcomePage = () => {
  const city = useSelector((state) => state.homeReducer);
  return (
    <div className="welcome-page">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Locations />} />
          <Route path="/details" element={<Details city={city} />} />
        </Routes>
      </Router>
    </div>

  );
};
export default WelcomePage;
