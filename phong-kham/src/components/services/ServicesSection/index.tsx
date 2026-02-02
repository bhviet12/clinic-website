import { useState } from 'react'
import Container from '../../Container'
import Button from '../../Button'
import { Link } from 'react-router-dom'
import { FaStethoscope } from 'react-icons/fa'
import { servicesPageData } from '../../../data/pages/servicesPage'

// Generate random positions for decorative icons outside component
const generateDecorativeIcons = () => {
  return Array.from({ length: 20 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    fontSize: Math.random() * 20 + 10,
  }))
}

const ServicesSection = () => {
  // Generate random positions for decorative icons once on mount
  const [decorativeIcons] = useState(() => generateDecorativeIcons())

  const { badge, title, services, banner, buttonText } = servicesPageData

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
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
        <div className="text-center mb-12 lg:mb-16 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <FaStethoscope className="text-blue-500 text-sm" />
            </div>
            <span className="text-blue-500 font-semibold uppercase text-sm tracking-wide">
              {badge}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 mb-4 leading-tight">
            {title}
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 relative z-10">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
            <Link
              key={index}
              to={`/service/${service.slug}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-100 cursor-pointer group"
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center mb-4 text-green-600 group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="text-2xl" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              {/* Doctor count */}
              <p className="text-sm text-gray-500 mb-4">
                {service.doctorCount}
              </p>

              {/* Button */}
              <div className="w-full bg-gradient-to-r from-blue-400 to-blue-500 group-hover:from-blue-500 group-hover:to-blue-600 text-white font-semibold py-2.5 px-4 rounded-full transition-all duration-300 shadow-md group-hover:shadow-lg text-center">
                {buttonText}
              </div>
            </Link>
            )
          })}
        </div>
      </Container>

      {/* Call to Action Banner */}
      <div className="mt-16 lg:mt-24 relative">
        <Container>
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              // TODO: Thêm background image vào đây
              // backgroundImage: 'url("/banner-background.jpg")',
              // backgroundSize: 'cover',
              // backgroundPosition: 'center',
              // backgroundRepeat: 'no-repeat',
              backgroundColor: '#1e3a8a', // Màu tạm thời - sẽ thay bằng ảnh
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-blue-900/70"></div>

            {/* Background pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                }}
              ></div>
            </div>

            {/* Decorative snowflake icons */}
            <div className="absolute inset-0 opacity-5">
              {decorativeIcons.map((icon, i) => (
                <div
                  key={i}
                  className="absolute text-white"
                  style={{
                    left: `${icon.left}%`,
                    top: `${icon.top}%`,
                    fontSize: `${icon.fontSize}px`,
                  }}
                >
                  ✱
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 lg:p-12">
              <div className="text-white max-w-2xl">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8 leading-tight">
                  {banner.title}
                </h2>
                <Link to="/contact">
                  <Button color="secondary" size="large">
                    {banner.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default ServicesSection
