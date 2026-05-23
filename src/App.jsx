import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './Pages/Home'
import AppDevelopment from './Pages/AppDevelopment'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app-development" element={<AppDevelopment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
