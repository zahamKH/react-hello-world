import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Sub } from "./pages/Home";
import rootPic from "./assets/60fps_parrot.gif";
import homePic from "./assets/cop_parrot.gif";
import subPicA from "./assets/birthday_party_parrot.gif";
import subPicB from "./assets/laptop_parrot.gif";

const homeInfo = {
  pic: homePic,
  title: "Home",
  link: "/",
};
const subAInfo = {
  pic: subPicA,
  title: "SubA",
  link: "/subA",
};
const subBInfo = {
  pic: subPicB,
  title: "SubB",
  link: "/subB",
};


const App: React.FC = () => {
  const [homeRef,] = useState({
    pic: homeInfo.pic,
    title: homeInfo.title,
    link: homeInfo.link,
  });
  const [subARef,] = useState({
    pic: subAInfo.pic,
    title: subAInfo.title,
    link: subAInfo.link,
  });
  const [subBRef,] = useState({
    pic: subBInfo.pic,
    title: subBInfo.title,
    link: subBInfo.link,
  });
  const [refLinks,] = useState(
    [
      { link: homeInfo.link, title: homeInfo.title },
      { link: subAInfo.link, title: subAInfo.title },
      { link: subBInfo.link, title: subBInfo.title }
    ]
  );

  return (
    <div className="App">
      <img src={rootPic} alt="" />
      <hr />
      <Routes>
        <Route path={`${homeRef.link}`} element={<Sub currentLink={`${homeRef.link}`} pic={homeRef.pic} title={homeRef.title} links={refLinks} />} />
        <Route path={`${subARef.link}`} element={<Sub currentLink={`${subARef.link}`} pic={subARef.pic} title={subARef.title} links={refLinks} />} />
        <Route path={`${subBRef.link}`} element={<Sub currentLink={`${subBRef.link}`} pic={subBRef.pic} title={subBRef.title} links={refLinks} />} />
      </Routes>
    </div>
  );
};

export default App;
