import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { AuthProvider } from "@descope/react-sdk";
import Login from "./Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
// import LoginPage from "./pages/LoginPage";
// import FormPage from "./pages/FormPage";
import FormPage from "./pages/FormPage.tsx";

// import LoginForm from "./pages/TestLogin.js";
// import MyLogin from "./pages/TestLogin2.tsx";

// export default App;
import MongoLogin from "./MongoLogin";

import "./App.css";

function DefaultApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

function DescopeLogin() {
  const projectId = import.meta.env.VITE_DESCOPE_PROJECT_ID;

  return (
    <div>
      {/* <DefaultApp/> */}
      <AuthProvider projectId={projectId}>
        <Login />
      </AuthProvider>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-descope" element={<DescopeLogin />} />
        <Route path="/login-mongo" element={<MongoLogin />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/new-form" element={<FormPage />} />
        {/* <Route path="/path_name/:dynamic" element={<Component_Name />} /> //dynamic route */}
        {/* <Route path="/*" element={<Component_Name />} />  */}
      </Routes>
    </Router>
  );
};

export default App;
