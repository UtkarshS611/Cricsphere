import React, { useEffect, useState } from 'react';
import Lenis from 'lenis'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Origins from './Components/Origins';
import HallOfFame from './Components/HallOfFame';
import Header from './Components/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    })

  return (
    <Router>
      {/* {isLoggedIn && <Header setIsLoggedIn={setIsLoggedIn} />} */}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
        <Route path="/origins" element={isLoggedIn ? <Origins /> : <Navigate to="/" />} />
        <Route path="/hall-of-fame" element={isLoggedIn ? <HallOfFame /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
