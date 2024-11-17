import { useState } from "react";
import classNames from "classnames";
import { Route, Routes } from 'react-router-dom';
import HavaDurum from "./HavaDurum.jsx";
import Footer from "./footer/Footer.jsx";




function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<HavaDurum />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
