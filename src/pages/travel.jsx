
import React from 'react';
import '../styles/travel.css';
import Paris from '../assets/paris.jpg';
import Tokyo from '../assets/tokyo.jpg';
import Greece from '../assets/greece.jpg';

const Travel = () => {
  return (
    <div>
      <div className="w-full topbar ">

      </div>
    <div className="travel-container">
      <h1>Explore Amazing Destinations</h1>

      <section className="destination">
        <div className="destination-card">
          <img src={Paris} alt="Paris" />
          <h2>Paris, France</h2>
          <p>Experience the city of love with its iconic Eiffel Tower, world-class cuisine, and charming streets.</p>
        </div>

        <div className="destination-card">
          <img src={Tokyo} alt="Tokyo" />
          <h2>Tokyo, Japan</h2>
          <p>Discover the perfect blend of tradition and modernity in Japan's vibrant capital.</p>
        </div>

        <div className="destination-card">
          <img src={Greece} alt="Santorini" />
          <h2>Santorini, Greece</h2>
          <p>Relax in the stunning white-washed villages overlooking the crystal-clear Aegean Sea.</p>
        </div>
      </section>

      <section className="travel-info">
        <h2>Why Travel With Us?</h2>
        <div className="features">
          <div className="feature">
            <h3>Expert Guides</h3>
            <p>Our experienced guides ensure you get the most out of your journey.</p>
          </div>
          <div className="feature">
            <h3>Best Prices</h3>
            <p>We offer competitive rates and exclusive deals for unforgettable experiences.</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>Our dedicated team is always here to assist you during your travels.</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Travel;
