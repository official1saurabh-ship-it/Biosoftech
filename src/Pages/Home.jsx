import React, { lazy, Suspense } from 'react'
import SEO from '../components/seo/SEO'
import StructuredData from '../components/seo/StructuredData'
import HeroSlider from '../components/sections/HeroSlider'
import PerformanceSection from '../components/sections/PerformanceSection'
import AboutUs from '../components/sections/AboutUs'
import ServicesSlider from '../components/sections/Swiper'
import MitraSuite from '../components/sections/MitraSuite'
const WhyChooseUs = lazy(() => import('../components/sections/WhyChooseUs'))
const AdNetwork = lazy(() => import('../components/sections/AdNetwork'))
const GrowthSection = lazy(() => import('../components/sections/GrowthSection'))
const ConsultationSection = lazy(() => import('../components/sections/ConsultationSection'))
const FaqSection = lazy(() => import('../components/sections/FaqSection'))
const TestimonialSection = lazy(() => import('../components/sections/TestimonialSection'))

const fallback = <div className="min-h-[200px]" />

const Home = () => {
  return (
    <main>
      <SEO
        title="Biosoftech | Where IDEAS BECOME SMART SOLUTIONS - Full-Service Software Development Company for Digital Growth"
        description="Biosoftech is a full-service software development company for digital growth with 2+ years of excellence. We provide custom software, mobile applications, AI solutions, and digital tools for real estate and hospitality. Get 24x7 technical support and achieve your business goals. Join our flagship digital solutions network today."
        keywords="Biosoftech, Software Development Company, Digital Growth, Custom Software, Mobile Applications, AI Solutions, Real Estate Tools, Hospitality Management, Best Website Monetization Platform, Affiliate Program, 24x7 Technical Support, Technical Partner, Smart Solutions"
        ogUrl="https://www.biosoftech.com"
      />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="Service" />
      <HeroSlider />
      <AboutUs />
      <ServicesSlider />
      <PerformanceSection />
      <Suspense fallback={fallback}><WhyChooseUs /></Suspense>
      <Suspense fallback={fallback}><AdNetwork /></Suspense>
      <Suspense fallback={fallback}><GrowthSection /></Suspense>
      <Suspense fallback={fallback}><ConsultationSection /></Suspense>
      <Suspense fallback={fallback}><FaqSection /></Suspense>
      <Suspense fallback={fallback}><TestimonialSection /></Suspense>
    </main>
  )
}

export default Home
