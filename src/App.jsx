import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'

const Home = lazy(() => import('./Pages/Home'))
const AppDevelopment = lazy(() => import('./Pages/AppDevelopment'))
const WebDevelopment = lazy(() => import('./Pages/WebDevelopment'))
const WebsiteDevelopment = lazy(() => import('./Pages/WebsiteDevelopment'))
const CloudServices = lazy(() => import('./Pages/CloudServices'))
const AIAutomation = lazy(() => import('./Pages/AIAutomation'))
const Contact = lazy(() => import('./Pages/Contact'))
const About = lazy(() => import('./Pages/About'))
const Blog = lazy(() => import('./Pages/Blog'))

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App
