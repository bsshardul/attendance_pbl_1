import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const redirectToDashboard = () => {
    history.push('/dashboard'); // Redirect to the dashboard page
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={redirectToDashboard}>Go to Dashboard</button>
    </div>
  );
};

export default Home;
