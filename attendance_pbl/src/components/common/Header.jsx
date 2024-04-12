import React from 'react';

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

export default Header;
