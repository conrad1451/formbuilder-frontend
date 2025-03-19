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

  const onSubmit: SubmitHandler<FormValues2> = async (data: FormValues2) => {
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    setModalMessage(null); // Clear any previous modal messages
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
        setSuccessMessage("Login successful!");
        reset();
        console.log("Login successful!");
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
          setModalMessage(null); // Clear modal message after a delay
        }, 3000); // Modal disappears after 3 seconds
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