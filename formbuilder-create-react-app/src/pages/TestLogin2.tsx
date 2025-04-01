import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues2 = {
  username: string;
  email: string;
  password: string;
};

const LOGIN_SERVER_1 = "http://localhost:5000/login";
const LOGIN_SERVER_2 = "https://formbuilder-server-6soo.onrender.com/login";

const LOGIN_SERVER = LOGIN_SERVER_1;

export default function MyLogin() {
  const { register, handleSubmit, reset } = useForm<FormValues2>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [jwtToken, setJwtToken] = useState<string | null>(null); // CHQ: added by Gemimi: State for JWT token

  const onSubmit: SubmitHandler<FormValues2> = async (data: FormValues2) => {
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    setModalMessage(null);
    setJwtToken(null); // CHQ: added by Gemimi: Clear previous token
    let username = data.username;
    let password = data.password;

    try {
      const response = await fetch(LOGIN_SERVER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json(); // Parse response JSON
        if (responseData.token) {
          setJwtToken(responseData.token); // CHQ: added by Gemimi: Store the JWT token
          setSuccessMessage("Login successful!");
          reset();
          // CHQ: added by Gemimi:
          console.log("Login successful! JWT Token:", responseData.token);
        } else {
          setErrorMessage("Login successful, but token not received.");
          console.error("Login successful, but no token in response:", responseData);
        }
      } else {
        const errorData = await response.json();
        if (errorData.message === "User not found") {
          setModalMessage("User does not exist");
        } else if (errorData.message === "Wrong password") {
          setModalMessage("Wrong password");
        } else {
          setErrorMessage(errorData.message || "Login failed.");
        }
        console.error("Login failed.", errorData);
      }
    } catch (error) {
      setErrorMessage("Network error during login.");
      console.error("Network error during login:", error);
    } finally {
      setIsLoading(false);
      if (modalMessage) {
        setTimeout(() => {
          setModalMessage(null);
        }, 3000);
      }
    }
  };

  return (
    <div>
      {modalMessage && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            border: "1px solid black",
            padding: "20px",
            zIndex: 1000,
          }}
        >
          {modalMessage}
        </div>
      )}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {jwtToken && <p style={{ color: "blue" }}>JWT Token: {jwtToken}</p>} {/* CHQ: added by Gemimi: Display the JWT token */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username:</label>
        <input type="text" {...register("username")} />
        <input type="email" {...register("email")} style={{ display: "none" }} />
        <input type="password" {...register("password")} />
        <input type="submit" disabled={isLoading} />
      </form>
    </div>
  );
}