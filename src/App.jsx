import { useState } from "react";
import classNames from "classnames";
import { Route, Routes } from 'react-router-dom';
import HavaDurum from "./HavaDurum";



function App() {
  

  return (
    <Routes>
      <Route path="/" element={<HavaDurum/>} />
    </Routes>
  );
}

export default App;
