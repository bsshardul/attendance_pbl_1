//import React from 'react';
import Navigation from './common/Navigation';
import Header from './common/Header';
import React, { useState, useEffect } from 'react';
import Footer from './common/Footer';

const WelcomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Use useState hook to define state

  const images = [
    "/Images/homeimage1.jpeg",
    "/Images/homeimage2.jpeg",
    "/Images/homeimage3.jpeg",
    "/Images/homeimage4.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Welcome to Pune Institute of Computer Technology (PICT)</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <p className="lead text-center">
            Pune Institute of Computer Technology popularly known as PICT, is an elite academic Institute located in Pune,
            “The Oxford of the East.” Since our establishment in 1983, PICT has been revolutionizing the
            education sector by nurturing skilled and industry-ready engineers.
          </p>
          <h3>Vision:</h3>
          <p>
            To be a distinguished center for nurturing the holistic development of globally
            competent young engineers and researchers in the field of Electronics and Telecommunication Engineering.
          </p>
          <h3>Mission:</h3>
          <p>
            To inculcate and stimulate Electronics and Telecommunication expertise by adopting to global innovative
            educational and research practices to create dynamic engineering professionals with enhanced technical skill set and
            hence global acceptability.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 text-center mb-4">
          <img
            src={images[currentIndex]}
            alt={`Floating Image ${currentIndex + 1}`}
            className="img-fluid img-thumbnail"
            style={{ maxWidth: 'auto', height: 'auto', objectFit: 'cover', border: '2px solid #ccc', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease' }}
          />
        </div>
      </div>
    </div>
  );
};



const DashboardPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <WelcomePage />
      <Footer />
    </>
  );
};

export default DashboardPage;
