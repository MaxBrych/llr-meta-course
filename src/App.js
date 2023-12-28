import "./App.css";
import Booking from "./pages/Booking";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Success from "./pages/Success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
