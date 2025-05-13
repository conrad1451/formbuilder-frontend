import { useState, ChangeEvent, FormEvent } from "react";

const MongoLogin = () => {
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const [signupFormData, setSignupFormData] = useState({
    username: "",
    email: "", // New email field
    password: "",
  });
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");

  // CHQ: types handled by Gemini AI
  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };

  // CHQ: types handled by Gemini AI
  const handleSignupChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupFormData({
      ...signupFormData,
      [e.target.name]: e.target.value,
    });
  };

  // CHQ: types handled by Gemini AI

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginSuccess("");

    try {
      const response = await fetch("http://localhost:5000/mongo-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setLoginSuccess("Login successful!");
      // CHQ: refactored by Gemini AI
      // Handle successful login (e.g., store token, redirect)
    } catch (err: unknown) {
      let errorMessage = "Login failed";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      setSignupError(errorMessage);
    }
  };

  // CHQ: types handled by Gemini AI
  const handleSignupSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSignupError("");
    setSignupSuccess("");

    try {
      const response = await fetch("http://localhost:5000/mongo-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupFormData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      setSignupSuccess("Account created successfully!");
      // CHQ: refactored by Gemini AI
      // Optionally handle post-signup actions (e.g., redirect to login)
    } catch (err: unknown) {
      let errorMessage = "Signup failed";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      setSignupError(errorMessage);
    }
  };

  return (
    <div>
      <h2>MongoDB Login</h2>
      {loginError && <p style={{ color: "red" }}>{loginError}</p>}
      {loginSuccess && <p style={{ color: "green" }}>{loginSuccess}</p>}

      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="login-username">Username:</label>
          <input
            type="text"
            id="login-username"
            name="username"
            value={loginFormData.username}
            onChange={handleLoginChange}
            required
          />
        </div>

        <div>
          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            name="password"
            value={loginFormData.password}
            onChange={handleLoginChange}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <hr style={{ margin: "20px 0" }} />

      <h2>Create New Account</h2>
      {signupError && <p style={{ color: "red" }}>{signupError}</p>}
      {signupSuccess && <p style={{ color: "green" }}>{signupSuccess}</p>}

      <form onSubmit={handleSignupSubmit}>
        <div>
          <label htmlFor="signup-username">Username:</label>
          <input
            type="text"
            id="signup-username"
            name="username"
            value={signupFormData.username}
            onChange={handleSignupChange}
            required
          />
        </div>

        {/* New Email Field */}
        <div>
          <label htmlFor="signup-email">Email:</label>
          <input
            type="email"
            id="signup-email"
            name="email"
            value={signupFormData.email}
            onChange={handleSignupChange}
            required
          />
        </div>

        <div>
          <label htmlFor="signup-password">Password:</label>
          <input
            type="password"
            id="signup-password"
            name="password"
            value={signupFormData.password}
            onChange={handleSignupChange}
            required
          />
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default MongoLogin;
