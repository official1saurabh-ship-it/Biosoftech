import React from 'react'
import Header from './components/layout/Header'
import HeroSlider from './components/sections/HeroSlider'

import BrandLogos from './components/sections/BrandLogos'
import AboutUs from './components/sections/AboutUs'
import PerformanceSection from './components/sections/PerfornanceSection'

import WhyChooseUs from './components/sections/WhyChooseUs'
import AdNetwork from './components/sections/AdNetwork'
import Pricing from './components/sections/Pricing'
import PaymentMethods from './components/sections/PaymentMethods'

import Footer from './components/layout/Footer'
import ServicesSlider from './components/sections/Swiper'


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSlider />

        <BrandLogos />
        <AboutUs />
        <PerformanceSection />
        <ServicesSlider />

        <WhyChooseUs />
        <AdNetwork />
        <Pricing />
        <PaymentMethods />

      </main>
      <Footer />
    </div>
  )
}

export default App
