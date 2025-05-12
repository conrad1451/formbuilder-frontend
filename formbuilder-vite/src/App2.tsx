import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login2 from "./components/Login2";
import Secure from "./components/Secure";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/secure" element={<Secure />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;