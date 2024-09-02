import Signup from "./components/Signup";
import Email from "./components/Email";
import Login from "./components/Login";
import Home from "./components/Home";
import "./css/Style.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/email" element={<Email />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
