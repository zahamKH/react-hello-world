import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, SubA, SubB } from "./pages/Home";
import rootPic from "./assets/60fps_parrot.gif";
import homePic from "./assets/cop_parrot.gif";
import subPicA from "./assets/birthday_party_parrot.gif";
import subPicB from "./assets/laptop_parrot.gif";

const App: React.FC = () => {
  return (
    <div className="App">
      <img src={rootPic} alt="" />
      <hr />
      <Routes>
        <Route path="/" element={<Home pic={homePic} />} />
        <Route path="/subA" element={<SubA pic={subPicA} />} />
        <Route path="/subB" element={<SubB pic={subPicB} />} />
      </Routes>
    </div>
  );
};

export default App;
