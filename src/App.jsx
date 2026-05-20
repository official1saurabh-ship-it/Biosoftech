import React from 'react'
import Header from './components/layout/Header'
import HeroSlider from './components/sections/HeroSlider'


import AboutUs from './components/sections/AboutUs'
import PerformanceSection from './components/sections/PerfornanceSection'

import WhyChooseUs from './components/sections/WhyChooseUs'
import AdNetwork from './components/sections/AdNetwork'


import Footer from './components/layout/Footer'
import ServicesSlider from './components/sections/Swiper'
import GrowthSection from './components/sections/GrowthSection'
import ConsultationSection from './components/sections/ConsultationSection'
import TestimonialSection from './components/sections/TestimonialSection'


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSlider />


        <PerformanceSection />
        <AboutUs />
        <ServicesSlider />

        <WhyChooseUs />
        <AdNetwork />
        <GrowthSection />
        <ConsultationSection />
        <TestimonialSection />


      </main>
      <Footer />
    </div>
  )
}

export default App
