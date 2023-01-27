import { Route, Routes } from "react-router-dom";
import Homepage from '../pages/Homepage';
import Login from "../pages/Login";
import Collection from "../pages/Collection";
import Searchpage from "../pages/Searchpage";


import './App.css';
import { useState } from "react";

const App = () => {

  const [loginState, setLoginState] = useState(false)

  const enableLogin = (a) => {
    setLoginState(a)
  }

  let loginEnabled = null

  if (loginState === true) {
    loginEnabled = (
      <>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/searchpage" element={<Searchpage />}></Route>
      </>
    )
  }


  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login enableLogin={enableLogin} />}></Route>
        {loginEnabled}
        <Route path="*" element={<h1>Page not found: 404</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
