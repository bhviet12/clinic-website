import Container from '../../Container'
import { FaHeart } from 'react-icons/fa'

const HealthcareSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Thu thập thông tin và yêu cầu',
      description: 'Thu thập thông tin chi tiết từ khách hàng hoặc người dùng về yêu cầu và mong muốn của họ liên quan đến dịch vụ.',
    },
    {
      number: 2,
      title: 'Thực hiện và cung cấp dịch vụ',
      description: 'Chúng tôi áp dụng kiến thức, kỹ năng và công cụ phù hợp để cung cấp dịch vụ theo yêu cầu của khách hàng.',
    },
    {
      number: 3,
      title: 'Đánh giá và cải tiến',
      description: 'Chúng tôi áp dụng các biện pháp cải tiến để nâng cao chất lượng dịch vụ và tăng sự hài lòng của khách hàng.',
    },
  ]

  const stats = [
    { value: '69k+', label: 'Bệnh nhân hài lòng' },
    { value: '236+', label: 'Bác sĩ chuyên nghiệp' },
    { value: '19k+', label: 'Hoạt động thành công' },
    { value: '320+', label: 'Phần thưởng danh giá' },
  ]


  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <Container>
        {/* Process Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          {/* Left - Steps */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <FaHeart className="text-green-600" />
              </div>
              <span className="text-green-600 font-semibold uppercase text-sm tracking-wide">
                CHĂM SÓC SỨC KHỎE
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 mb-8 leading-tight">
              Sẵn Sàng Phục Vụ Các Dịch Vụ Sức Khỏe
            </h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-start gap-5">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center bg-white text-green-600 font-bold text-lg">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-20 bg-green-500 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Surgery Room Image */}
          <div className="relative h-80 lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-lg mb-2">🏥</p>
                <p className="text-sm">Surgery Room Image</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="bg-slate-900 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center ${
                  index < stats.length - 1
                    ? 'border-r border-gray-700 pr-6 lg:pr-8'
                    : ''
                }`}
              >
                <div className="text-4xl lg:text-5xl font-bold text-green-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HealthcareSection
