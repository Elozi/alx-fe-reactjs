// src/routes/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const isAuthenticated = false; // 🔒 Change to true to simulate login

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
