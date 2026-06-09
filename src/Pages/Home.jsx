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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Biosoftech",
  "url": "https://www.biosoftech.com/",
  "description": "Full-Service Software Development Company For Digital Growth",
  "foundingDate": "23/07/2025",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-6209688930",
    "contactType": "customer service"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What services does Biosoftech Solutions offer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Biosoftech Solutions offers a wide range of end-to-end software development services, including custom software, mobile applications, AI solutions, and more."
    }
  }]
}

const Home = () => {
  return (
    <main>
      <SEO
        title="Biosoftech | Where IDEAS BECOME SMART SOLUTIONS - Full-Service Software Development Company for Digital Growth"
        description="Biosoftech is a full-service software development company for digital growth with 2+ years of excellence. We provide custom software, mobile applications, AI solutions, and digital tools for real estate and hospitality. Get 24x7 technical support and achieve your business goals. Join our flagship digital solutions network today."
        keywords="Biosoftech, Software Development Company, Digital Growth, Custom Software, Mobile Applications, AI Solutions, Real Estate Tools, Hospitality Management, Best Website Monetization Platform, Affiliate Program, 24x7 Technical Support, Technical Partner, Smart Solutions"
        ogTitle="Biosoftech | Where IDEAS BECOME SMART SOLUTIONS"
        ogDescription="Partner with Biosoftech, a full-service software development company for digital growth. We offer custom software, mobile apps, AI solutions, and a global affiliate program for revenue opportunities. Fast results, smart solutions."
        canonical="https://www.biosoftech.com/"
        ogUrl="https://www.biosoftech.com"
      />
      <StructuredData type="custom" data={organizationSchema} />
      <StructuredData type="custom" data={faqSchema} />
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
