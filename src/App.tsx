import Login from "./components/Login";
import Email from "./components/Email";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/email" element={<Email />} />
      </Routes>
    </Router>
  );
}

export default App;
