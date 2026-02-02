import { useState } from 'react'
import { useSEO, generateOrganizationSchema, generateBreadcrumbSchema } from '../utils/seo'
import MainLayout from '../Layouts/MainLayout'
import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
import { 
  FaEnvelope, 
  FaPhoneAlt,
  FaUser,
  FaChevronDown,
  FaPencilAlt,
  FaClock
} from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { contactPageData } from '../data/pages/contactPage'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    notes: ''
  })

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const contactUrl = `${baseUrl}/contact`

  const breadcrumbs = [
    { name: 'Trang chủ', url: baseUrl },
    { name: 'Liên hệ', url: contactUrl }
  ]

  const { regions, operatingHours, operatingHoursTitle, supportForm, contactSchema: schemaData } = contactPageData

  // ContactPage structured data
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'MedicalBusiness',
      name: schemaData.businessName,
      address: {
        '@type': 'PostalAddress',
        addressCountry: schemaData.country,
        addressLocality: schemaData.locality
      },
      telephone: schemaData.telephone,
      email: schemaData.email
    }
  }

  useSEO({
    title: 'Liên Hệ - Medical | Phòng Khám Chất Lượng',
    description: 'Liên hệ với chúng tôi để được tư vấn và đặt lịch hẹn. Chúng tôi luôn sẵn sàng phục vụ bạn.',
    keywords: 'liên hệ, đặt lịch, tư vấn, phòng khám, bệnh viện',
    canonical: contactUrl,
    ogUrl: contactUrl,
    structuredData: [
      generateOrganizationSchema(baseUrl),
      generateBreadcrumbSchema(breadcrumbs),
      contactSchema
    ]
  })


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <MainLayout>
      <PageHeader pageKey="contact" />

      {/* Contact Cards Section */}
      <section className="py-12 lg:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {regions.map((region, index) => (
              <div key={index} className="space-y-4">
                {/* Contact Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{region.name}</h3>
                  
                  <div className="space-y-3">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <FaLocationDot className="text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{region.address}</p>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-green-500 flex-shrink-0" />
                      <a href={`mailto:${region.email}`} className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                        {region.email}
                      </a>
                    </div>
                    
                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <FaPhoneAlt className="text-green-500 flex-shrink-0" />
                      <a href={`tel:${region.phone}`} className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                        {region.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Operating Hours Card */}
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-md p-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <FaClock className="text-blue-600" />
                    <h4 className="text-sm font-bold text-blue-900">{operatingHoursTitle}</h4>
                  </div>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>{operatingHours.weekdays}</p>
                    <p>{operatingHours.weekends}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Support Form Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z' fill='%23000000'/%3E%3C/svg%3E\")",
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>

        <Container>
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-8 lg:mb-12">
              {supportForm.title}
            </h2>

            <div className="flex justify-center">
              {/* Form */}
              <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 w-full max-w-2xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={supportForm.fields.name.placeholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      required
                    />
                    <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      placeholder={supportForm.fields.email.placeholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      required
                    />
                    <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder={supportForm.fields.phone.placeholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      required
                    />
                    <FaPhoneAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>

                  {/* Subject Dropdown */}
                  <div className="relative">
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent appearance-none bg-white text-gray-700"
                      required
                    >
                      <option value="" disabled>{supportForm.fields.subject.placeholder}</option>
                      {supportForm.fields.subject.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>

                  {/* Notes */}
                  <div className="relative">
                    <textarea
                      placeholder={supportForm.fields.notes.placeholder}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={4}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none"
                    />
                    <FaPencilAlt className="absolute right-3 top-3 text-gray-400" />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {supportForm.buttonText}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-12 lg:py-16 bg-white">
        <Container>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <div className="w-full h-[400px] lg:h-[500px] bg-gray-200 relative">
              {/* Google Maps Embed - Replace with actual Google Maps embed code */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231239026!2d106.629658!3d10.823099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be27d8b4f4d%3A0x92a4fdf7a6e02ae7!2zQ8O0bmcgdmnDqm4gQ2jhu6luZyB0aOG7iyB0aOG7qyBk4bqldSBk4bqldSBjaG8!5e0!3m2!1svi!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ địa chỉ"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  )
}

export default Contact
