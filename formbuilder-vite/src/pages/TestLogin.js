// source: https://gemini.google.com/app/5bede81cc8a65dac

import React, { useState } from 'react';

// require('dotenv').config();

// const BACKEND_ENDPOINT = process.env.REACT_APP_LOGIN_SERVER;

const BACKEND_ENDPOINT = "http://localhost:5000/login";
function LoginForm() {

// function LoginForm({ BACKEND_ENDPOINT }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to the specified endpoint
    const response = await fetch(BACKEND_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      // Handle successful submission (e.g., redirect, show success message)
      console.log('Login successful!');
    } else {
      // Handle errors (e.g., display error message)
      console.error('Login failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    {/* // <form onSubmit={handleSubmit(e)}> */}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;