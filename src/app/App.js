import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Test from "../pages/Test";
import Homepage from '../pages/Homepage';
import Over from "../pages/Over";
import Features from "../pages/Features";
import Prijs from "../pages/Prijs";
import Contact from "../pages/Contact";
import Login from "../pages/Login";


import './App.css';

const App =() => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/over" element={<Over />}></Route>
        <Route path="/feature" element={<Features />}></Route>
        <Route path="/prijs" element={<Prijs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
