import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

  if (!token) {
    return <Navigate to="/signup" />;
  }

  return children;
};

export default PrivateRoute;
