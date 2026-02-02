import { useState, useEffect } from 'react'
import Container from '../../Container'
import { FaHeart, FaStar } from 'react-icons/fa'
import { reviewsSectionData } from '../../../data/home/reviewsSection'

const ReviewsSection = () => {
  const { badge, title, reviews, autoSlideInterval } = reviewsSectionData

  // Hiển thị 1 card mỗi slide
  const totalSlides = reviews.length
  const [activeSlide, setActiveSlide] = useState(0)

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides)
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [totalSlides, autoSlideInterval])

  const handleDotClick = (index: number) => {
    setActiveSlide(index)
  }

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decorative patterns */}
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
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <FaHeart className="text-blue-600 text-sm sm:text-base" />
            </div>
            <span className="text-green-500 font-semibold uppercase text-xs sm:text-sm tracking-wide">
              {badge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900">
            {title}
          </h2>
        </div>

        {/* Review Cards Carousel */}
        <div className="relative mb-6 sm:mb-8 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeSlide * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const review = reviews[slideIndex]
              return (
                <div
                  key={slideIndex}
                  className="min-w-full px-2"
                >
                  <div
                    className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-2xl mx-auto"
                  >
                    {/* Quote icon - bottom right */}
                    <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-green-200 text-4xl sm:text-6xl lg:text-7xl font-serif leading-none">
                      "
                    </div>

                    {/* Star rating */}
                    <div className="flex gap-1 mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm sm:text-lg ${
                            i < review.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote text */}
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 pr-6 sm:pr-8">
                      {review.quote}
                    </p>

                    {/* Customer info */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-400 text-xs">Avatar</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm sm:text-base">{review.name}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 relative z-10">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                index === activeSlide
                  ? 'bg-green-500 border-2 border-green-300 scale-110'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ReviewsSection
