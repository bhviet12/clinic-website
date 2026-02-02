import { useSEO, generateOrganizationSchema, generateBreadcrumbSchema } from '../utils/seo'
import MainLayout from '../Layouts/MainLayout'
import PageHeader from '../components/PageHeader'
import AboutIntroSection from '../components/about/AboutIntroSection'
import ExperienceServicesSection from '../components/about/ExperienceServicesSection'
import DoctorsSection from '../components/about/DoctorsSection'
import AchievementsSection from '../components/about/AchievementsSection'
import ReviewsSection from '../components/home/ReviewsSection'

const About = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const aboutUrl = `${baseUrl}/about`

  const breadcrumbs = [
    { name: 'Trang chủ', url: baseUrl },
    { name: 'Giới thiệu', url: aboutUrl }
  ]

  useSEO({
    title: 'Giới Thiệu - Medical | Phòng Khám Chất Lượng',
    description: 'Tìm hiểu về lịch sử, tầm nhìn và sứ mệnh của chúng tôi trong việc chăm sóc sức khỏe cộng đồng.',
    keywords: 'giới thiệu, về chúng tôi, lịch sử, tầm nhìn, sứ mệnh, phòng khám',
    canonical: aboutUrl,
    ogUrl: aboutUrl,
    structuredData: [
      generateOrganizationSchema(baseUrl),
      generateBreadcrumbSchema(breadcrumbs)
    ]
  })

  return (
    <MainLayout>
      <PageHeader pageKey="about" />

      <AboutIntroSection />
      <ExperienceServicesSection />
      <DoctorsSection />
      <AchievementsSection />
      <ReviewsSection />

    </MainLayout>
  )
}

export default About
