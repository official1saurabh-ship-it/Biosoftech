import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './Pages/Home'
import AppDevelopment from './Pages/AppDevelopment'
import WebDevelopment from './Pages/WebDevelopment'
import WebsiteDevelopment from './Pages/WebsiteDevelopment'
import CloudServices from './Pages/CloudServices'
import AIAutomation from './Pages/AIAutomation'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Blog from './Pages/Blog'
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
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/cloud-services" element={<CloudServices />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
