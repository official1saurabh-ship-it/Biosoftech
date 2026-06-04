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
        title="Software Development Company – Web, Mobile, Cloud & AI Solutions"
        description="Biosoftech Solutions is a leading software development company delivering web development, mobile apps, cloud services, and AI automation since 2015. Based in Lucknow, serving 500+ clients globally."
        keywords="software development company, web development, mobile app development, cloud services, AI automation, custom software, Lucknow"
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
