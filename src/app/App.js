import { Route, Routes } from "react-router-dom";
import Homepage from '../pages/Homepage';
import Login from "../pages/Login";
import Collection from "../pages/Collection";
import Searchpage from "../pages/Searchpage";


import './App.css';

const App =() => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/searchpage" element={<Searchpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
