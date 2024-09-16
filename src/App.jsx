import React, { useEffect } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
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
    <main className='bg-primary h-screen w-full'>
      <Header/>
      <Home/>
    </main>
  )
}

export default App
