import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Pages/Shares/Navbar/Navbar";

import About from "./Pages/About/About";
import Login from "./Pages/Login/Login/Login";

import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/HomePage/Home/Home";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="appointment" element={<Appointment></Appointment>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
