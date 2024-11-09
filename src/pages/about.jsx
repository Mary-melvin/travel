
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const About = () => {
  return (
     <div >
      <div className="w-full topbar ">

      </div>
      <div className='relative min-h-screen p-8'>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-700">
                Welcome to our travel community! We started this journey with a simple mission:
                to help travelers explore the world with confidence and ease. Since our founding,
                we've been dedicated to creating meaningful travel experiences for adventurers
                from all walks of life.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700">
                We believe that travel has the power to transform lives, broaden perspectives,
                and create lasting memories. Our goal is to make travel planning seamless and
                enjoyable, allowing you to focus on what matters most - the journey itself.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Personalized travel recommendations</li>
                <li>Expert guidance and support</li>
                <li>Authentic local experiences</li>
                <li>Carefully curated destinations</li>
                <li>24/7 travel assistance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Authenticity</h3>
                  <p className="text-gray-700">We believe in genuine experiences and honest recommendations.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Sustainability</h3>
                  <p className="text-gray-700">We promote responsible travel and environmental consciousness.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Community</h3>
                  <p className="text-gray-700">We foster connections between travelers and local communities.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-700">
                Have questions or suggestions? We'd love to hear from you!<br />
                Email: contact@travelcompany.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>

  );
};

export default About;
