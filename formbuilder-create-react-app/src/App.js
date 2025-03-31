// Sources:
// [1]: https://dev.to/jps27cse/react-router-dom-v6-boilerplate-2ce1

// hosting the platform is considered a bonus - nice
// next week is last week, so have front end and backend working

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
// import FormPage from "./pages/FormPage";
import FormPage from "./pages/FormPage.tsx";

import LoginForm from "./pages/TestLogin.js";
import MyLogin from "./pages/TestLogin2.tsx";

const App = () => {
  return (
        <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<MyLogin />} />
                {/* <Route path="/login" element={<LoginForm />} /> */}
                {/* <Route path="/login" element={<LoginPage />} /> */}
                <Route path="/new-form" element={<FormPage />} />
                {/* <Route path="/path_name/:dynamic" element={<Component_Name />} /> //dynamic route */}
                {/* <Route path="/*" element={<Component_Name />} />  */}
              </Routes>
        </Router>
  );
};

export default App;
