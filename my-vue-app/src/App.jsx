import { useState } from 'react'
import Home from './Pages/Home/home'
import About from './Pages/About/about'
import './App.css'
import { Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<h1> Aqui no hay nada </h1>}/>
      </Routes>
    </>
  )
}

export default App
