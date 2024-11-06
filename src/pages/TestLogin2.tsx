import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"


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


export default function MyLogin() {
  const { register, handleSubmit } = useForm<FormValues2>()
//   const onSubmit: SubmitHandler<FormValues2> = (data) => console.log(data)
// const onSubmit: SubmitHandler<FormValues2> = (data) => {
const onSubmit: SubmitHandler<FormValues2> = async (data: FormValues2) => {

    let username = data.username;
    let password = data.password;
        // e.preventDefault();
    
        // Send a POST request to the specified endpoint
        const response = await fetch( "http://localhost:5000/login", {
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

      <input type="submit" />
    </form>
  )
}