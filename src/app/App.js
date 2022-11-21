import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Test from "../pages/Test";
import Homepage from '../pages/Homepage';
import Login from "../pages/Login";


import './App.css';

const App =() => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
