import { useState } from 'react';

const MongoLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
        const mongoLoginPort = String(import.meta.env.VITE_LOGIN_SERVER_1) + "/mongo-login";

        const response = await fetch("http://localhost:5000/mongo-login", {
            // const response = await fetch("http://localhost:5000/login/mongo-login", {

        // const response = await fetch(mongoLoginPort, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }

        setSuccess('Login successful!');
        // Handle successful login (e.g., store token, redirect)
        
        } catch (err) {
        setError(err.message || 'Login failed');
        }
    };

  return (
    <div>
      <h2>MongoDB Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default MongoLogin;