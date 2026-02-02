import { useState, useEffect } from 'react'
import Button from '../../Button'
import Container from '../../Container'
import { heroBannerSlides, heroBannerConfig } from '../../../data/home/heroBanner'

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBannerSlides.length)
    }, heroBannerConfig.autoSlideInterval)

    return () => clearInterval(interval)
  }, [])

  const currentSlideData = heroBannerSlides[currentSlide]

  return (
    <section className="relative w-full bg-gradient-to-br from-cream-light via-white to-cream-pale overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Medical crosses */}
        <div className="absolute top-10 left-10 w-16 h-16 text-navy-dark opacity-20">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 w-20 h-20 text-navy-dark opacity-15">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z"/>
          </svg>
        </div>
        <div className="absolute top-20 right-32 w-24 h-24 text-blue-royal opacity-15">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z"/>
          </svg>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-navy-dark rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-royal rounded-full opacity-5 blur-3xl"></div>
      </div>

      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center py-8 sm:py-12 lg:py-20">
          {/* Left side - Content */}
          <div className="relative z-10 order-2 lg:order-1">
            {/* Emergency service badge */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6 transition-all duration-500">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-navy-dark rounded-full">
                {currentSlideData.badgeIcon && (
                  <currentSlideData.badgeIcon className="text-cream-pale text-sm sm:text-lg" />
                )}
              </div>
              <span className="text-navy-dark font-semibold text-xs sm:text-sm lg:text-base font-serif">
                {currentSlideData.badge}
              </span>
            </div>

            {/* Main heading with fade animation */}
            <div className="transition-opacity duration-500">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight font-serif">
                <span className="text-navy-dark">{currentSlideData.title1} </span>
                <span className="text-blue-royal">{currentSlideData.title2}</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-navy-dark font-serif">
                {heroBannerConfig.commonTitle}
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-lg transition-opacity duration-500">
              {currentSlideData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button color="primary" size="large" className="w-full sm:w-auto">
                {heroBannerConfig.buttons.primary}
              </Button>
              <Button color="secondary" size="large" className="w-full sm:w-auto">
                {heroBannerConfig.buttons.secondary}
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="flex gap-2 mt-6 sm:mt-8">
              {heroBannerSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 bg-navy-dark'
                      : 'w-2 bg-cream-pale hover:bg-blue-sky'
                  }`}
                  aria-label={`Chuyển đến slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right side - Image carousel */}
          <div className="relative z-10 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Slides container */}
              <div className="relative overflow-hidden rounded-2xl">
                {heroBannerSlides.map((slide, index) => {
                  const IconComponent = slide.icon
                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === currentSlide
                          ? 'opacity-100 translate-x-0'
                          : index < currentSlide
                          ? 'opacity-0 -translate-x-full'
                          : 'opacity-0 translate-x-full'
                      }`}
                    >
                      <div className={`relative bg-gradient-to-br ${slide.gradient} rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl`}>
                        <div className="aspect-square bg-white rounded-xl flex items-center justify-center relative">
                          <IconComponent className={`text-4xl sm:text-5xl lg:text-6xl ${slide.iconColor} opacity-30`} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-gray-400 text-xs sm:text-sm font-semibold">{slide.imageText}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Decorative elements around image */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-cream-pale rounded-full opacity-10 blur-xl"></div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 bg-blue-royal rounded-full opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroBanner
