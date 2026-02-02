import Container from '../../Container'
import { FaHeart } from 'react-icons/fa'

const AchievementsSection = () => {
  const achievements = [
    {
      year: '2019',
      yearColor: 'green',
      title: 'Đột phá công nghệ chuẩn đoán',
      description:
        'Các phương pháp chẩn đoán tiên tiến như hình ảnh y khoa, xét nghiệm gen, và phân tích dữ liệu y tế đã được nâng cấp và cải tiến, giúp chúng tôi đưa ra những chẩn đoán chính xác hơn và nhanh chóng.',
    },
    {
      year: '2022',
      yearColor: 'green',
      title: 'Tiến bộ điều trị ung thư',
      description:
        'Các phương pháp mới như liệu pháp di truyền, phân tử học đích, và liệu pháp miễn dịch đã mang lại hy vọng cho hàng triệu bệnh nhân ung thư trên toàn thế giới.',
    },
    {
      year: '2024',
      yearColor: 'blue',
      title: 'Đột phá truyền thông y tế',
      description:
        'Các ứng dụng di động, hệ thống truy cập từ xa và nền tảng giao tiếp trực tuyến đã giúp chúng tôi tiếp cận và tư vấn bệnh nhân một cách thuận tiện và hiệu quả.',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-visible">
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

      <Container className="overflow-visible">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <FaHeart className="text-blue-600" />
            </div>
            <span className="text-blue-600 font-semibold uppercase text-sm tracking-wide">
              THÀNH QUẢ CAO QUÝ
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900">
            Thành Tựu Nổi Bật
          </h2>
        </div>

        {/* Timeline and Medal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start relative z-10 overflow-visible">
          {/* Left - Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-500"></div>

            {/* Achievement items */}
            <div className="space-y-12 lg:space-y-16">
              {achievements.map((achievement) => (
                <div key={achievement.year} className="relative flex items-start gap-6">
                  {/* Year circle */}
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                      achievement.yearColor === 'green'
                        ? 'bg-green-500'
                        : 'bg-blue-500'
                    }`}
                  >
                    {achievement.year}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-blue-900 mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Medal Image */}
          <div className="relative h-full min-h-[400px] lg:min-h-[450px] overflow-visible">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-3xl overflow-visible shadow-2xl max-w-3xl">
              <div className="aspect-square w-full h-full">
                <img
                  src="/medal-image.jpg"
                  alt="Huy chương thành tích"
                  className="min-w-64 h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AchievementsSection
