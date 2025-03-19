import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"

/**
 * AI suggestion from google
 * // .env file
REACT_APP_API_KEY=mysecretkey

// App.js
import React from 'react';
import { Env } from 'react-dotenv';

function App() {
  return (
    <div>
      <h1>{process.env.REACT_APP_API_KEY}</h1>
    </div>
  );
}

export default App;
 * 
 */
// Module '"react-dotenv"' has no exported member 'Env'. Did you mean to use 'import Env from "react-dotenv"' instead?ts(2614)
// Module '"react-dotenv"' has no exported member 'env'. Did you mean to use 'import env from "react-dotenv"' instead?ts(2614)

// import env from "react-dotenv";
// import env from 'dotenv';

// env.config();
type FormValues = {
  firstName: string
  lastName: string
  email: string
}

type FormValues2 = {
    username: string
    email: string
    password: string
  }


  // const LOGIN_SERVER = String(process.env.REACT_APP_LOGIN_SERVER_1);

  // const LOGIN_SERVER = String(process.env.REACT_APP_LOGIN_SERVER_1);

const LOGIN_SERVER_1="http://localhost:5000/login"
const LOGIN_SERVER_2="https://formbuilder-server-6soo.onrender.com/login"

const LOGIN_SERVER = LOGIN_SERVER_1

export default function MyLogin() {
  const { register, handleSubmit } = useForm<FormValues2>()
//   const onSubmit: SubmitHandler<FormValues2> = (data) => console.log(data)
// const onSubmit: SubmitHandler<FormValues2> = (data) => {
const onSubmit: SubmitHandler<FormValues2> = async (data: FormValues2) => {

    let username = data.username;
    let password = data.password;
        // e.preventDefault();
    
        // Send a POST request to the specified endpoint
        // env.REACT_APP_LOGIN_SERVER
                // env.REACT_APP_LOGIN_SERVER
                const response = await fetch(LOGIN_SERVER, {
        // const response = await fetch(env.REACT_APP_LOGIN_SERVER_1, {
        // const response = await fetch(env.REACT_APP_LOGIN_SERVER_2, {
        // const response = await fetch( "https://localhost:5000/login", {
        // const response = await fetch( "http://localhost:5000/login", {
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
      } 


//   const { register, handleSubmit } = useForm<FormValues>()
//   const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username:</label>
      <input type="text" {...register("username")} />
      <input type="email" {...register("email")} />
      <input type="password" {...register("password")} />
      <input type="submit"/>

      {/* <input type="submit" title="Log in"/> */}
    </form>
  )
}