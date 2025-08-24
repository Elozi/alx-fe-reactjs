// src/hooks/useAuth.js
export const useAuth = () => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return { isAuthenticated };
};
