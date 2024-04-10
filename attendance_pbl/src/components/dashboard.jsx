//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiHome, BiUser, BiCalendar, BiLogOut } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
const Navigation = () => {
  const navigate = useNavigate(); // Use the useNavigate hook to navigate

  const handleLogout = () => {
    axios.post('http://localhost:3001/auth/logout')
      .then(res => {
        if (res.data && res.data.success) {
          // Clear authentication state (if any)
          // Redirect to login page
          navigate('/login');
        } else {
          // Handle logout failure
          console.error('Logout failed');
        }
      })
      .catch(err => {
        console.error('Error:', err);
        // Handle error
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Dashboard</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link to="/" className="nav-link"><BiHome className="me-1" /> Home</Link></li>
            <li className="nav-item"><Link to="/manage-students" className="nav-link"><BiUser className="me-1" /> Manage Students</Link></li>
            <li className="nav-item"><Link to="/attendance" className="nav-link"><BiCalendar className="me-1" /> Attendance</Link></li>
            {/* Use a single logout button */}
            <li className="nav-item">
              <button className="nav-link" onClick={handleLogout}>
                <BiLogOut className="me-1" /> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="bg-light py-4">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-auto">
            <img src="/Images/pictlogo.jpg" alt="Logo" height="100" />
          </div>
          <div className="col">
            <h1 className="text-center">Attendance Tracking by RFID</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

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


const Footer = () => {
  // Your existing Footer component code
return (
    <footer className="bg-dark py-4 text-white text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h5>Contact Us</h5>
            <p>
              Address:
              Survey No. 27, Near Trimurti Chowk
              Dhankwadi, Pune - 411043
            </p>
            <p>
              Email: registrar@pict.edu
            </p>
            <p>
              Phone: +91 20 24371101
              Fax: +91 20 24364741
            </p>
          </div>
          <div className="col-lg-4">
            {/* Empty column for spacing */}
          </div>
          <div className="col-lg-4">
            <h5>Website developed by</h5>
            <p>
              Shardul Bramhanathkar
            </p>
            <p>Ashutosh Bhate</p>
            <h5>Project Members</h5>
            <p>
              Krupa Gaikwad
            </p>
            <p> Shruti Bhosale</p>
          </div>
        </div>
      </div>
    </footer>
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
