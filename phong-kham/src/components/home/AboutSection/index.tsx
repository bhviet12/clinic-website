import Button from '../../Button'
import { Heart } from 'lucide-react'
import { aboutSectionData } from '../../../data/home/aboutSection'

const AboutSection = () => {
  const { tag, title, description, features, buttonText, testimonial } = aboutSectionData

  return (
    <section className="w-full py-20 lg:py-32 bg-gradient-to-b from-white via-cream-light to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-end">
          
          {/* Left Column - Stacked Images */}
          <div className="space-y-4 lg:space-y-5">
            {/* Top image */}
            <div className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <p className="text-sm mb-2">👨‍⚕️ 👩‍⚕️</p>
                  <p className="text-xs">Image: Doctors reviewing tablet</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Bottom image with testimonial */}
            <div className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-cream-pale to-blue-sky flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <p className="text-sm mb-2">👩‍⚕️ 👵</p>
                  <p className="text-xs">Image: Nurse taking blood pressure</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Testimonial overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-navy-dark rounded-lg p-4 shadow-2xl text-white">
                <h4 className="font-bold text-white mb-2 text-base font-serif">{testimonial.name}</h4>
                <p className="text-sm text-cream-pale mb-3 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-cream-pale text-sm">★</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-cream-pale">
                  <span className="text-sm">📞</span>
                  <span className="text-sm font-medium">{testimonial.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Main Image */}
          <div className="relative w-full h-96 lg:h-[560px] rounded-3xl overflow-hidden shadow-3xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-cream-pale to-blue-sky flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-lg mb-2">🏥</p>
                <p className="text-sm">Main Image: Medical facility</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-dark/20" />
          </div>

          {/* Right Column - Content positioned at bottom */}
          <div className="space-y-6 lg:space-y-5">
            {/* Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-cream-pale border border-navy-dark rounded-full">
              <div className="w-2 h-2 bg-navy-dark rounded-full" />
              <span className="text-xs font-bold text-navy-dark uppercase tracking-widest font-serif">
                {tag}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-dark leading-tight font-serif">
              {title}
            </h2>

            {/* Description */}
            <p className="text-base text-gray-700 leading-relaxed">
              {description}
            </p>

            {/* Features Grid - 2 Columns */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2.5 group">
                  <Heart size={16} className="text-navy-dark fill-navy-dark flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-navy-dark transition-colors">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-4">
              <Button color="primary" size="large">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
