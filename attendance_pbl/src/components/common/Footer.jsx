import React from 'react';

const Footer = () => {
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

export default Footer;
