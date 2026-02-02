import { Link } from 'react-router-dom'
import Container from '../../Container'
import Button from '../../Button'
import { FaStethoscope } from 'react-icons/fa'
import { servicesSectionData } from '../../../data/home/servicesSection'

const ServicesSection = () => {
  const { badge, title, description, services, footerText, viewAllText, buttonText } = servicesSectionData

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <Container>
        {/* Section header */}
        <div className="text-center mb-12 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <FaStethoscope className="text-blue-600" />
            </div>
            <span className="text-blue-600 font-semibold uppercase text-sm tracking-wide">
              {badge}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
            <div
              key={index}
              className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-3 sm:mb-4 shadow-inner">
                <IconComponent className="text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-xl font-bold text-blue-900 mb-1">
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="text-xs text-gray-500 mb-2 sm:mb-3">{service.subtitle}</p>
              )}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4 flex-1">
                {service.description}
              </p>
              <div className="mt-auto pt-2">
                <Button color="secondary" size="small" className="text-xs sm:text-sm">
                  {buttonText}
                </Button>
              </div>
            </div>
            )
          })}
        </div>

        {/* View all services - pill with borders */}
        <div className="mt-12 relative z-10">
          <div className="flex items-center justify-center gap-4">
            <div className="hidden sm:block flex-1 h-px bg-gray-200" />
            <div className="inline-flex items-center px-6 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-xs sm:text-sm text-gray-600">
              <span className="mr-2">{footerText}</span>
              <Link
                to="/services"
                className="text-green-600 font-semibold hover:text-green-700 hover:underline transition-colors"
              >
                {viewAllText}
              </Link>
            </div>
            <div className="hidden sm:block flex-1 h-px bg-gray-200" />
          </div>
        </div>

        {/* Doctors banner below services */}
        {/* <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 text-white overflow-hidden relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-8 lg:px-16 py-10 lg:py-14">
            <div className="space-y-4 lg:space-y-6 max-w-xl order-2 lg:order-1">
              <p className="text-sm font-semibold text-teal-200 uppercase tracking-[0.25em]">
                ĐỘI NGŨ BÁC SĨ
              </p>
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                Đội Ngũ Bác Sĩ Tài Năng Và Giàu Kinh Nghiệm
              </h3>
              <p className="text-sm lg:text-base text-blue-50/90">
                Với sự tận tụy và chuyên môn cao, các bác sĩ của chúng tôi cam kết đem đến cho bạn sự
                chăm sóc tốt nhất và đáng tin cậy. Chúng tôi luôn tạo ra một môi trường chuyên nghiệp,
                an toàn và tôn trọng, đồng thời lắng nghe và đáp ứng mọi nhu cầu sức khỏe của bạn.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button color="primary" size="large">
                  ĐẶT LỊCH NGAY
                </Button>
                <Button color="third" size="large">
                  TƯ VẤN MIỄN PHÍ
                </Button>
              </div>
            </div>
            <div className="relative h-64 lg:h-80 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-56 lg:w-72 h-full bg-gradient-to-t from-blue-400 to-blue-300 rounded-[40px] shadow-2xl flex items-end justify-center overflow-hidden">
                <span className="mb-6 text-sm text-blue-50/80">Doctor Image</span>
              </div>
            </div>
          </div>
        </div> */}
      </Container>
    </section>
  )
}

export default ServicesSection
