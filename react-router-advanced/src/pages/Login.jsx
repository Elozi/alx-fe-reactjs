import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    navigate('/profile');
  };

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
