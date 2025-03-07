// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";

import Nav from "./components/navbar";
import Home from "./components/home";
import GetStarted from "./components/get_started";

function App() {
  return (
    <Router>
      <div>
        <h1>Fatty Buddha</h1>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </div>
    </Router>
  );
}
  export default App;

// =======
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   return (
//     <>
//       <h1 className='text-xl font-bold text-center'>hello world</h1>
//     </>
//   )
// >>>>>>> refs/remotes/origin/Lakshya-Setup
// }