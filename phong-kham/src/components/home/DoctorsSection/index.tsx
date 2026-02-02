import Container from '../../Container'
import { FaHeart } from 'react-icons/fa'
import { doctorsSectionData } from '../../../data/home/doctorsSection'

const DoctorsSection = () => {
  const { badge, title, doctors } = doctorsSectionData

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <FaHeart className="text-green-600" />
            </div>
            <span className="text-green-600 font-semibold uppercase text-sm tracking-wide">
              {badge}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center"
            >
              <div className="w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden mb-3 sm:mb-5 bg-gradient-to-br from-teal-100 via-blue-50 to-blue-100 flex items-end justify-center">
                {/* TODO: replace with real doctor image */}
                <span className="mb-4 sm:mb-6 text-xs sm:text-sm text-blue-900/70">Doctor Image</span>
              </div>
              <h3 className="text-sm sm:text-base lg:text-xl font-bold text-blue-900 mb-1">
                {doctor.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">{doctor.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default DoctorsSection
