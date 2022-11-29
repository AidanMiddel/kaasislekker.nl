import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Test from "../pages/Test";
import Homepage from '../pages/Homepage';
import Login from "../pages/Login";
import Collection from "../pages/Collection";


import './App.css';

const App =() => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
      </Routes>
    </>
  );
}

export default App;
