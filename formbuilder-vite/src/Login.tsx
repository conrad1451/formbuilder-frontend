import { useCallback } from 'react'
import { Descope, useDescope, useSession, useUser } from '@descope/react-sdk'

// Sources:
// [1]: https://dev.to/jps27cse/react-router-dom-v6-boilerplate-2ce1

// hosting the platform is considered a bonus - nice
// next week is last week, so have front end and backend working

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage.tsx';
// import LoginPage from "./pages/LoginPage";
// import FormPage from "./pages/FormPage";
import FormPage from "./pages/FormPage.tsx";

// import LoginForm from "./pages/TestLogin.js";
// import MyLogin from "./pages/TestLogin2.tsx";

const AllRoutes = () => {
  return (
        <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/login" element={<MyLogin />} /> */}
                {/* <Route path="/login" element={<LoginForm />} /> */}
                {/* <Route path="/login" element={<LoginPage />} /> */}
                <Route path="/new-form" element={<FormPage />} />
                {/* <Route path="/path_name/:dynamic" element={<Component_Name />} /> //dynamic route */}
                {/* <Route path="/*" element={<Component_Name />} />  */}
              </Routes>
        </Router>
  );
};

// export default App;

const Option1 = (props:{theUser, theHandleLogout}) => {
  return (
    <>
        <p>Hello {props.theUser.name}</p>
        <div>My Private Component</div>
        <button onClick={props.theHandleLogout}>Logout</button>
    </>
  )
}

const Login = () => {
  const { isAuthenticated, isSessionLoading } = useSession()
  const { user, isUserLoading } = useUser()
  const { logout } = useDescope()

  const handleLogout = useCallback(() => {
    logout()
  }, [logout])

  if (isSessionLoading || isUserLoading) {
    return <p>Loading...</p>
  }

  if (isAuthenticated) {
    return (
      <>
      <Option1 theUser={user} theHandleLogout={handleLogout}/>
      </>
    )
  }

  return (
    <div>
      <h1>Sign In</h1>
      <Descope
        flowId="sign-up-or-in"
        onSuccess={(e) => console.log(e.detail.user)}
        onError={(e) => console.log('Could not log in!')}
      />
    </div>
  )
}

export default Login