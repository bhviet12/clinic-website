import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogUrl?: string
  canonical?: string
  type?: 'website' | 'article' | 'product' | 'localBusiness'
  structuredData?: object | object[]
}

export const useSEO = ({
  title = 'Medical - Phòng Khám Chất Lượng',
  description = 'Khám phá sức khỏe và trải nghiệm dịch vụ chất lượng cao tại Bệnh viện/Phòng khám của chúng tôi - nơi mang đến sự chăm sóc tận tâm và sự an tâm cho bạn và gia đình.',
  keywords = 'phòng khám, bệnh viện, y tế, chăm sóc sức khỏe, khám bệnh, điều trị',
  ogImage = '/og-image.jpg',
  ogUrl = '',
  canonical = '',
  type = 'website',
  structuredData
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)

    // Open Graph tags
    updateMetaTag('og:title', title, 'property')
    updateMetaTag('og:description', description, 'property')
    updateMetaTag('og:image', ogImage, 'property')
    updateMetaTag('og:type', type, 'property')
    if (ogUrl) {
      updateMetaTag('og:url', ogUrl, 'property')
    } else if (typeof window !== 'undefined') {
      updateMetaTag('og:url', window.location.href, 'property')
    }

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', ogImage)

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonical
    } else if (typeof window !== 'undefined') {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = window.location.href
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      // Remove existing structured data scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
      existingScripts.forEach(script => script.remove())

      // Handle both single object and array of objects
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData]
      
      // Add structured data scripts
      dataArray.forEach((data, index) => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = `structured-data-${index}`
        script.text = JSON.stringify(data)
        document.head.appendChild(script)
      })
    }

    // Cleanup function
    return () => {
      // Cleanup structured data on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]')
      scripts.forEach(script => script.remove())
    }
  }, [title, description, keywords, ogImage, ogUrl, canonical, type, structuredData])
}

// Helper function to generate Organization schema
export const generateOrganizationSchema = (url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Medical - Phòng Khám Chất Lượng',
  description: 'Phòng khám chất lượng cao với đội ngũ bác sĩ chuyên nghiệp',
  url: url,
  logo: `${url}/logo.png`,
  image: `${url}/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'VN',
    addressLocality: 'Việt Nam'
  },
  telephone: '+84-xxx-xxx-xxx',
  priceRange: '$$',
  medicalSpecialty: [
    'General Practice',
    'Dentistry',
    'Cardiology',
    'Dermatology'
  ]
})

// Helper function to generate BreadcrumbList schema
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})

// Helper function to generate FAQPage schema
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
})
