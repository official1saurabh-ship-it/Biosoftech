import React from 'react'
import HeroSlider from '../components/sections/HeroSlider'
import PerformanceSection from '../components/sections/PerfornanceSection'
import AboutUs from '../components/sections/AboutUs'
import ServicesSlider from '../components/sections/Swiper'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import AdNetwork from '../components/sections/AdNetwork'
import GrowthSection from '../components/sections/GrowthSection'
import ConsultationSection from '../components/sections/ConsultationSection'
import TestimonialSection from '../components/sections/TestimonialSection'

const Home = () => {
  return (
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
  )
}

export default Home
