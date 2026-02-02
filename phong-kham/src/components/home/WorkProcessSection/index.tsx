import Container from '../../Container'
import { FaHeart } from 'react-icons/fa'
import { workProcessSectionData } from '../../../data/home/workProcessSection'

const WorkProcessSection = () => {
  const { badge, title, steps } = workProcessSectionData

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
        <div className="text-center mb-8 sm:mb-12 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <FaHeart className="text-blue-600 text-sm sm:text-base" />
            </div>
            <span className="text-blue-600 font-semibold uppercase text-xs sm:text-sm tracking-wide">
              {badge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900">
            {title}
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-20 w-full h-0.5 bg-gray-200 transform translate-x-1/2" style={{ left: `${(index + 1) * 25}%`, width: '25%' }} />
              )}

              {/* Step image with circle */}
              <div className="relative w-32 sm:w-40 mx-auto mb-3 sm:mb-4">
                {/* Step image */}
                <div
                  className={`w-32 sm:w-40 aspect-square rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-2 ${
                    step.color === 'green' ? 'border-green-500' : 'border-blue-500'
                  }`}
                >
                  <span className="text-gray-400 text-xs">Step {step.number} Image</span>
                </div>
                {/* Step circle - absolute top-right */}
                <div
                  className={`absolute top-4 sm:top-6 right-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white font-bold text-xs ${
                    step.color === 'green' ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                >
                  {step.number}
                </div>
              </div>

              {/* Step content */}
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WorkProcessSection
