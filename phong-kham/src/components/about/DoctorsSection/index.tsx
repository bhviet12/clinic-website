import Container from '../../Container'
import Button from '../../Button'
import { FaHeart } from 'react-icons/fa'

const DoctorsSection = () => {
  const doctors = [
    {
      name: 'Dr. Douglas Lyphe',
      role: 'Vật lý trị liệu',
    },
    {
      name: 'Dr. Wisteria Ravenc',
      role: 'Khoa tim mạch',
    },
    {
      name: 'Dr. Benjamin Evalent',
      role: 'Nha sĩ',
    },
    {
      name: 'Dr. Rishita Rosei',
      role: 'Khoa thần kinh',
    },
  ]

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
        <div className="text-center mb-12 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <FaHeart className="text-blue-600" />
            </div>
            <span className="text-blue-600 font-semibold uppercase text-sm tracking-wide">
              GIỚI THIỆU ĐỘI NGŨ
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900">
            Bác Sĩ Chuyên Gia
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center border border-gray-100"
            >
              <div className="w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden mb-3 sm:mb-5 bg-gradient-to-br from-teal-100 via-blue-50 to-green-100 flex items-end justify-center">
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

      {/* Hero Banner Section */}
      <div className="relative mt-16 lg:mt-20 overflow-hidden">
        {/* Background with blurred building image */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          {/* Blurred building pattern */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0zM40 0h20v20H40zM80 0h20v20H80zM20 20h20v20H20zM60 20h20v20H60zM0 40h20v20H0zM40 40h20v20H40zM80 40h20v20H80zM20 60h20v20H20zM60 60h20v20H60zM0 80h20v20H0zM40 80h20v20H40zM80 80h20v20H80z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E\")",
                filter: 'blur(2px)',
              }}
            ></div>
          </div>
        </div>

        {/* Decorative snowflake elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-3 h-3 bg-white rounded-full blur-sm"></div>
          <div className="absolute bottom-32 right-20 w-2 h-2 bg-white rounded-full blur-sm"></div>
          <div className="absolute bottom-20 left-1/2 w-2.5 h-2.5 bg-white rounded-full blur-sm"></div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 py-16 lg:py-24 text-center">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="text-green-500">Mona Media</span>
              <br />
              <span className="text-white">Là Bệnh Viện Hàng Đầu</span>
              <br />
              <span className="text-white">Và Có Công Nghệ Hiện Đại</span>
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 lg:mt-10">
              <Button color="secondary" size="large">
                ĐẶT LỊCH HẸN
              </Button>
              <Button color="primary" size="large">
                LIÊN HỆ NGAY
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default DoctorsSection
