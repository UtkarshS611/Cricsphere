import React, { useEffect } from 'react'
import Home from './Components/Home'
import LoginForm from './Components/Form/LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis'

const App = () => {

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
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
