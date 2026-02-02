import Button from '../../Button'
import Container from '../../Container'
import { Heart } from 'lucide-react'
import { aboutPageData } from '../../../data/pages/aboutPage'

const AboutIntroSection = () => {
  const { introSection } = aboutPageData
  const { badge, title, description, features, buttonText, testimonial, stats } = introSection

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <Container>
        {/* Top content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16">
          {/* Left - image collage + testimonial */}
          <div className="space-y-4 lg:space-y-5">
            {/* Top - Two small images */}
            <div className="flex gap-4">
              {/* Small doctors image */}
              <div className="w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-400 text-xs">
                      <div className="mb-1">👨‍⚕️ 👩‍⚕️</div>
                      <p>Bác sĩ trao đổi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Another small image */}
              <div className="w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                    <div className="text-center text-gray-400 text-xs">
                      <div className="mb-1">🏥</div>
                      <p>Phòng khám</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom - Main image with testimonial overlay */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <div className="text-center text-gray-400 text-sm">
                  <div className="mb-2 text-lg">👩‍⚕️ 👵</div>
                  <p>Chăm sóc bệnh nhân</p>
                </div>
              </div>
              
              {/* Testimonial card overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-2xl p-4 border border-slate-100">
                <h3 className="text-base font-bold text-blue-900 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-green-500 text-xs">
                      ★
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-green-600 font-semibold">
                  <span>📞</span>
                  <span>{testimonial.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - text & feature list */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">
                {badge}
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-blue-900 leading-tight">
              {title}
            </h2>

            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Heart size={16} className="text-emerald-500 fill-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button color="primary" size="large">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>

        {/* Stats bar (tái sử dụng từ HealthcareSection, style xanh dương) */}
        <div className="rounded-3xl bg-blue-600 text-white px-6 py-8 lg:px-10 lg:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center ${
                  index < stats.length - 1 ? 'border-r border-blue-400/60 pr-4 lg:pr-8' : ''
                }`}
              >
                <div className="text-3xl lg:text-4xl font-extrabold mb-1 lg:mb-2">{stat.value}</div>
                <div className="text-xs lg:text-sm text-blue-50/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutIntroSection

