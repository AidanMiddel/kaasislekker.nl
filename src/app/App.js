import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Homepage from '../pages/Homepage';
import Test from "../pages/Test";

import './App.css';

const App =() => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </>
  );
}

export default App;
