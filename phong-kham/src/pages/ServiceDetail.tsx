import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ReactElement } from 'react'
import { useSEO, generateBreadcrumbSchema } from '../utils/seo'
import MainLayout from '../Layouts/MainLayout'
import Container from '../components/Container'
import Button from '../components/Button'
import { 
  FaPills, 
  FaTooth, 
  FaSearch,
  FaChevronRight,
  FaChevronDown,
  FaCheck
} from 'react-icons/fa'

// Service list for sidebar
const serviceList = [
  { slug: 'chuan-doan', title: 'Chuẩn đoán' },
  { slug: 'nha-khoa', title: 'Nha khoa' },
  { slug: 'noi-soi', title: 'Nội soi' },
  { slug: 'than-kinh', title: 'Thần kinh' },
  { slug: 'phu-khoa', title: 'Phụ khoa' },
  { slug: 'thi-giac', title: 'Thị giác' },
  { slug: 'xuong-khop', title: 'Xương khớp' },
  { slug: 'tim-mach', title: 'Tim mạch' },
  { slug: 'phau-thuat', title: 'Phẫu thuật' },
  { slug: 'truyen-mau', title: 'Truyền máu' },
  { slug: 'khoa-phoi', title: 'Khoa phổi' },
  { slug: 'thinh-giac', title: 'Thính giác' },
]

// Service data with full details
const servicesData: Record<string, {
  icon: ReactElement
  title: string
  doctorCount: string
  shortDescription: string
  fullDescription: string
  steps: { title: string; description: string }[]
  pricing: {
    basic: { price: string; services: string[] }
    standard: { price: string; services: string[] }
    advanced: { price: string; services: string[] }
  }
}> = {
  'nha-khoa': {
    icon: <FaTooth className="text-4xl" />,
    title: 'Nha khoa',
    doctorCount: '20+ Bác sĩ',
    shortDescription: 'Dịch vụ chăm sóc nha khoa đầy đủ – Chăm sóc nụ cười hoàn hảo của bạn.',
    fullDescription: 'Tại Trung tâm Nha khoa của chúng tôi, chúng tôi cam kết cung cấp dịch vụ chăm sóc nha khoa đầy đủ để đảm bảo sức khỏe răng miệng tối ưu cho bạn và gia đình. Với đội ngũ bác sĩ giàu kinh nghiệm và công nghệ hiện đại, chúng tôi mang đến các giải pháp điều trị từ cơ bản đến nâng cao.',
    steps: [
      { title: 'Khám và tư vấn', description: 'Bác sĩ sẽ khám tổng quát và tư vấn về tình trạng răng miệng của bạn.' },
      { title: 'Chẩn đoán', description: 'Sử dụng thiết bị hiện đại để chẩn đoán chính xác các vấn đề về răng.' },
      { title: 'Điều trị', description: 'Áp dụng các phương pháp điều trị phù hợp với từng trường hợp cụ thể.' },
      { title: 'Theo dõi', description: 'Theo dõi và chăm sóc sau điều trị để đảm bảo kết quả tốt nhất.' },
    ],
    pricing: {
      basic: {
        price: '3,350,000₫',
        services: ['Dịch vụ tim mạch', 'Nội soi', 'Nha khoa']
      },
      standard: {
        price: '5,350,000₫',
        services: ['Dịch vụ tim mạch', 'Nội soi', 'Nha khoa', 'Thị giác']
      },
      advanced: {
        price: '7,350,000₫',
        services: ['Dịch vụ tim mạch', 'Nội soi', 'Nha khoa', 'Thị giác', 'Xương khớp', 'Siêu âm']
      }
    }
  },
  'chuan-doan': {
    icon: <FaPills className="text-4xl" />,
    title: 'Chuẩn đoán',
    doctorCount: '30+ Bác sĩ',
    shortDescription: 'Dịch vụ chuẩn đoán chuyên sâu với đội ngũ bác sĩ giàu kinh nghiệm và thiết bị hiện đại.',
    fullDescription: 'Chúng tôi cung cấp dịch vụ chuẩn đoán toàn diện với các thiết bị y tế hiện đại nhất, giúp phát hiện và đánh giá chính xác các vấn đề sức khỏe từ cơ bản đến phức tạp.',
    steps: [
      { title: 'Khám tổng quát', description: 'Khám sức khỏe tổng quát và đánh giá tình trạng sức khỏe hiện tại.' },
      { title: 'Xét nghiệm', description: 'Thực hiện các xét nghiệm cần thiết để chẩn đoán chính xác.' },
      { title: 'Chẩn đoán hình ảnh', description: 'Sử dụng X-quang, CT, MRI để có cái nhìn chi tiết về tình trạng sức khỏe.' },
      { title: 'Tư vấn kết quả', description: 'Bác sĩ sẽ giải thích kết quả và đưa ra phương án điều trị phù hợp.' },
    ],
    pricing: {
      basic: {
        price: '3,350,000₫',
        services: ['Dịch vụ tim mạch', 'Nội soi', 'Nha khoa']
      },
      standard: {
        price: '5,350,000₫',
        services: ['Dịch vụ tim mạch', 'Nội soi', 'Nha khoa', 'Thị giác']
      },
      advanced: {
        price: '7,350,000₫',
        services: ['Dịch vụ tim mạch', 'Nội soi', 'Nha khoa', 'Thị giác', 'Xương khớp', 'Siêu âm']
      }
    }
  },
  // Add more services with similar structure...
}

// Default service data for services not in detailed list
const defaultServiceData = {
  icon: <FaPills className="text-4xl" />,
  title: 'Dịch vụ',
  doctorCount: '20+ Bác sĩ',
  shortDescription: 'Dịch vụ chăm sóc sức khỏe chuyên nghiệp.',
  fullDescription: 'Chúng tôi cung cấp dịch vụ chăm sóc sức khỏe chất lượng cao với đội ngũ bác sĩ giàu kinh nghiệm và thiết bị hiện đại.',
  steps: [
    { title: 'Bước 1', description: 'Khám và đánh giá tình trạng sức khỏe.' },
    { title: 'Bước 2', description: 'Chẩn đoán và xác định phương án điều trị.' },
    { title: 'Bước 3', description: 'Thực hiện điều trị theo phác đồ đã đề ra.' },
    { title: 'Bước 4', description: 'Theo dõi và chăm sóc sau điều trị.' },
  ],
  pricing: {
    basic: {
      price: '3,350,000₫',
      services: ['Dịch vụ tim mạch', 'Nội soi', 'Nha khoa']
    },
    standard: {
      price: '5,350,000₫',
      services: ['Dịch vụ tim mạch', 'Nội soi', 'Nha khoa', 'Thị giác']
    },
    advanced: {
      price: '7,350,000₫',
      services: ['Dịch vụ tim mạch', 'Nội soi', 'Nha khoa', 'Thị giác', 'Xương khớp', 'Siêu âm']
    }
  }
}

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  // Use slug from URL as the source of truth
  const currentSlug = slug || 'nha-khoa'
  
  const service = currentSlug ? (servicesData[currentSlug] || defaultServiceData) : defaultServiceData

  const filteredServices = serviceList.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const currentService = filteredServices.find(s => s.slug === currentSlug) || filteredServices[0]

  const handleServiceClick = (serviceSlug: string) => {
    navigate(`/service/${serviceSlug}`, { replace: true })
    setIsDropdownOpen(false) // Close dropdown after selection
  }

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const currentUrl = currentSlug ? `${baseUrl}/service/${currentSlug}` : baseUrl

  // Breadcrumb for structured data
  const breadcrumbs = [
    { name: 'Trang chủ', url: baseUrl },
    { name: 'Dịch vụ', url: `${baseUrl}/services` },
    { name: service.title, url: currentUrl }
  ]

  // Service structured data
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalService',
    name: service.title,
    description: service.fullDescription,
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Medical - Phòng Khám Chất Lượng'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Vietnam'
    },
    serviceType: service.title
  }

  useSEO({
    title: `${service.title} - Chi tiết dịch vụ | Phòng Khám Chất Lượng`,
    description: service.shortDescription,
    keywords: `${service.title}, dịch vụ y tế, phòng khám`,
    canonical: currentUrl,
    ogUrl: currentUrl,
    type: 'product',
    structuredData: [
      generateBreadcrumbSchema(breadcrumbs),
      serviceSchema
    ]
  })

  return (
    <MainLayout>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-50 via-white to-sky-50 py-16 lg:py-20 border-b-2 border-gray-200">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute left-0 top-0 h-40 w-40 -translate-x-1/3 -translate-y-1/3 rounded-full bg-sky-100" />
          <div className="absolute right-10 top-6 h-16 w-16 rounded-3xl border-4 border-emerald-400" />
          <div className="absolute bottom-4 left-10 h-10 w-10 rounded-2xl border-4 border-sky-300" />
        </div>
        <Container>
          <div className="relative z-10 flex flex-col items-center text-center">
            <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl lg:text-5xl">
              Chi tiết dịch vụ
            </h1>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <Link to="/" className="hover:text-emerald-500 transition-colors">
                Trang chủ
              </Link>
              <span className="text-emerald-500">/</span>
              <span className="text-emerald-500">Chi tiết dịch vụ</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content - 2 Column Layout */}
      <section className="py-8 sm:py-12 lg:py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
                {/* Search Bar */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Nhập từ khóa"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-colors">
                    <FaSearch />
                  </button>
                </div>

                {/* Services List */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-3 sm:mb-4 pb-2 border-b-2 border-green-500 inline-block">
                    Các dịch vụ
                  </h3>
                  
                  {/* Mobile Dropdown */}
                  <div className="lg:hidden">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-300 bg-white text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-700">
                        {currentService?.title || 'Chọn dịch vụ'}
                      </span>
                      <FaChevronDown 
                        className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="mt-2 border border-gray-200 rounded-lg bg-white shadow-lg max-h-[300px] overflow-y-auto">
                        {filteredServices.map((item) => (
                          <button
                            key={item.slug}
                            onClick={() => handleServiceClick(item.slug)}
                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all text-sm ${
                              currentSlug === item.slug
                                ? 'bg-blue-50 text-blue-900 font-semibold'
                                : 'hover:bg-gray-50 text-gray-700'
                            }`}
                          >
                            <span>{item.title}</span>
                            {currentSlug === item.slug && (
                              <FaChevronRight className="text-xs text-blue-600" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Desktop List */}
                  <div className="hidden lg:block space-y-2 max-h-[400px] overflow-y-auto">
                    {filteredServices.map((item) => (
                      <button
                        key={item.slug}
                        onClick={() => handleServiceClick(item.slug)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all text-sm ${
                          currentSlug === item.slug
                            ? 'bg-blue-50 text-blue-900 font-semibold'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <span>{item.title}</span>
                        <FaChevronRight className="text-xs text-gray-400" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              {/* Service Image */}
              <div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-3xl sm:text-4xl mb-2">🦷</div>
                    <p className="text-xs sm:text-sm">Service Image</p>
                  </div>
                </div>
              </div>

              {/* Service Title & Description */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
                  {service.title === 'Nha khoa' ? 'Chăm sóc nha khoa là gì?' : `${service.title} là gì?`}
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                  {service.shortDescription}
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Process Steps */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">Các bước khám</h3>
                <div className="space-y-4 sm:space-y-6">
                  {service.steps.map((step, index) => (
                    <div key={index} className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-semibold text-blue-900 mb-1 sm:mb-2">{step.title}</h4>
                        <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Table */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg sm:text-xl">+</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-900">Giá Dịch Vụ Phổ Biến</h3>
                    <p className="text-xs sm:text-sm text-gray-500">GÓI DỊCH VỤ</p>
                  </div>
                </div>

                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <div className="inline-block min-w-full align-middle">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left p-2 sm:p-4 font-semibold text-blue-900 text-xs sm:text-sm">Danh sách dịch vụ</th>
                          <th className="text-center p-2 sm:p-4 font-semibold text-blue-900 text-xs sm:text-sm">Cơ bản</th>
                          <th className="text-center p-2 sm:p-4 font-semibold text-blue-900 text-xs sm:text-sm">Tiêu chuẩn</th>
                          <th className="text-center p-2 sm:p-4 font-semibold text-blue-900 text-xs sm:text-sm">Nâng cao</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Dịch vụ tim mạch', 'Nội soi', 'Nha khoa', 'Thị giác', 'Xương khớp', 'Siêu âm'].map((serviceName) => (
                          <tr key={serviceName} className="border-b border-gray-200">
                            <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">{serviceName}</td>
                            <td className="p-2 sm:p-4 text-center">
                              {service.pricing.basic.services.includes(serviceName) && (
                                <FaCheck className="text-green-500 mx-auto" />
                              )}
                            </td>
                            <td className="p-2 sm:p-4 text-center">
                              {service.pricing.standard.services.includes(serviceName) && (
                                <FaCheck className="text-green-500 mx-auto" />
                              )}
                            </td>
                            <td className="p-2 sm:p-4 text-center">
                              {service.pricing.advanced.services.includes(serviceName) && (
                                <FaCheck className="text-green-500 mx-auto" />
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td className="p-2 sm:p-4 font-semibold text-blue-900 text-xs sm:text-sm">Giá / tháng</td>
                          <td className="p-2 sm:p-4 text-center">
                            <div className="bg-green-500 text-white font-bold py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg inline-block text-xs sm:text-sm">
                              {service.pricing.basic.price}
                            </div>
                          </td>
                          <td className="p-2 sm:p-4 text-center">
                            <div className="bg-blue-500 text-white font-bold py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg inline-block text-xs sm:text-sm">
                              {service.pricing.standard.price}
                            </div>
                          </td>
                          <td className="p-2 sm:p-4 text-center">
                            <div className="bg-green-500 text-white font-bold py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg inline-block text-xs sm:text-sm">
                              {service.pricing.advanced.price}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className="p-2 sm:p-4 text-center">
                            <Button color="primary" size="medium" className="w-full text-xs sm:text-sm">
                              CHỌN DỊCH VỤ
                            </Button>
                          </td>
                          <td className="p-2 sm:p-4 text-center">
                            <Button color="secondary" size="medium" className="w-full text-xs sm:text-sm">
                              CHỌN DỊCH VỤ
                            </Button>
                          </td>
                          <td className="p-2 sm:p-4 text-center">
                            <Button color="primary" size="medium" className="w-full text-xs sm:text-sm">
                              CHỌN DỊCH VỤ
                            </Button>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">Đặt lịch tư vấn</h3>
                <form className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <input
                      type="text"
                      placeholder="Họ tên *"
                      className="w-full rounded-full bg-white border border-gray-300 px-4 sm:px-5 py-2.5 sm:py-3 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Số điện thoại *"
                      className="w-full rounded-full bg-white border border-gray-300 px-4 sm:px-5 py-2.5 sm:py-3 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      required
                    />
                  </div>
                  <select
                    className="w-full rounded-full bg-white border border-gray-300 px-4 sm:px-5 py-2.5 sm:py-3 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-700"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Chọn dịch vụ</option>
                    {serviceList.map((item) => (
                      <option key={item.slug} value={item.slug}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <input
                      type="date"
                      className="w-full rounded-full bg-white border border-gray-300 px-4 sm:px-5 py-2.5 sm:py-3 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-700"
                      required
                    />
                    <input
                      type="time"
                      className="w-full rounded-full bg-white border border-gray-300 px-4 sm:px-5 py-2.5 sm:py-3 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-700"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Ghi chú (tùy chọn)"
                    rows={4}
                    className="w-full rounded-2xl bg-white border border-gray-300 px-4 sm:px-5 py-2.5 sm:py-3 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none"
                  />
                  <div>
                    <Button color="primary" size="large" className="w-full">
                      ĐẶT LỊCH NGAY
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  )
}

export default ServiceDetail
