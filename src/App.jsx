import { useState } from "react";
import classNames from "classnames";
import { Route, Routes } from 'react-router-dom';
import HavaDurum from "./HavaDurum.jsx";



function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<HavaDurum />} />
      </Routes>
    </div>
  );
}

export default App;
