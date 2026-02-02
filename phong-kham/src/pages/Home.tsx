import { lazy, Suspense } from 'react'
import { useSEO, generateOrganizationSchema, generateFAQSchema } from '../utils/seo'
import MainLayout from '../Layouts/MainLayout'

// Lazy load components for better performance
const ContactSection = lazy(() => import('../components/home/ContactSection'))
const HeroBanner = lazy(() => import('../components/home/HeroBanner'))
const AboutSection = lazy(() => import('../components/home/AboutSection'))
const ServicesSection = lazy(() => import('../components/home/ServicesSection'))
const HealthcareSection = lazy(() => import('../components/home/HealthcareSection'))
const DoctorsSection = lazy(() => import('../components/home/DoctorsSection'))
const WorkProcessSection = lazy(() => import('../components/home/WorkProcessSection'))
const FAQSection = lazy(() => import('../components/home/FAQSection'))
const ReviewsSection = lazy(() => import('../components/home/ReviewsSection'))
const NewsSection = lazy(() => import('../components/home/NewsSection'))

const LoadingFallback = () => (
  <div className="h-64 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
)

const Home = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  
  // FAQ data for structured data (matching FAQSection)
  const faqs = [
    {
      question: 'Bệnh viện có chấp nhận các loại bảo hiểm y tế nào?',
      answer: 'Bệnh viện của chúng tôi chấp nhận đa số các loại bảo hiểm y tế, bao gồm bảo hiểm y tế tư nhân và các chương trình bảo hiểm y tế công cộng. Tuy nhiên, để đảm bảo rằng bệnh viện chấp nhận bảo hiểm của bạn, hãy liên hệ với chúng tôi hoặc kiểm tra trên trang web của chúng tôi để biết thông tin chi tiết về các loại bảo hiểm được chấp nhận.'
    },
    {
      question: 'Làm thế nào để đặt lịch hẹn tại bệnh viện?',
      answer: 'Bạn có thể đặt lịch hẹn bằng nhiều cách: gọi điện trực tiếp, đặt lịch trực tuyến qua website, hoặc đến trực tiếp bệnh viện. Chúng tôi khuyến khích đặt lịch trước để đảm bảo thời gian phù hợp với bạn.'
    },
    {
      question: 'Bệnh nhân cần chuẩn bị những gì trước khi đến khám bệnh?',
      answer: 'Bệnh nhân nên mang theo giấy tờ tùy thân, thẻ bảo hiểm y tế (nếu có), các kết quả xét nghiệm hoặc hồ sơ y tế trước đó, danh sách thuốc đang sử dụng, và các câu hỏi muốn hỏi bác sĩ.'
    }
  ]

  useSEO({
    title: 'Trang Chủ - Medical | Phòng Khám Chất Lượng',
    description: 'Khám phá sức khỏe và trải nghiệm dịch vụ chất lượng cao tại Bệnh viện/Phòng khám của chúng tôi - nơi mang đến sự chăm sóc tận tâm và sự an tâm cho bạn và gia đình.',
    keywords: 'phòng khám, bệnh viện, y tế, chăm sóc sức khỏe, khám bệnh, điều trị, medical',
    canonical: baseUrl,
    ogUrl: baseUrl,
    structuredData: [
      generateOrganizationSchema(baseUrl),
      generateFAQSchema(faqs)
    ]
  })

  return (
    <MainLayout>
      <Suspense fallback={<LoadingFallback />}>
        <HeroBanner />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <HealthcareSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <DoctorsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <WorkProcessSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ReviewsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <NewsSection />
      </Suspense>
    </MainLayout>
  )
}

export default Home
