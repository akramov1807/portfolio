import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

export default function App() {
  return (
    <Container fluid>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </Container>
  )
}
