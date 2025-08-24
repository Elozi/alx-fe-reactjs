// src/components/RegistrationForm.jsx
import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const { username, email, password } = formData; // ✅ Destructured values

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Simulate API call
      console.log('Form submitted', formData);
      alert('User registered successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <div>
        <label>Username</label>
        <input
          name="username"
          value={username} // ✅ Now using destructured value
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          name="email"
          value={email} // ✅ Now using destructured value
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={password} // ✅ Now using destructured value
          onChange={handleChange}
        />
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password}</p>
        )}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
