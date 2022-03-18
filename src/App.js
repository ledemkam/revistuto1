import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Artistto from "./Pages/Artistto/Artistto";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/artistto" element={<Artistto />} />
      </Routes>
    </div>
  );
};

export default App;
