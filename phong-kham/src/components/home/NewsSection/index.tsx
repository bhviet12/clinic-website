import Container from '../../Container'
import Button from '../../Button'
import { FaHeart, FaUser, FaCalendarAlt } from 'react-icons/fa'

const NewsSection = () => {
  const newsItems = [
    {
      image: '/placeholder-news-1.jpg',
      author: 'Monamedia',
      date: '07 Tháng Mười Hai 2023',
      title: 'Healthcare Tips Navigating Your Wellness Journey',
    },
    {
      image: '/placeholder-news-2.jpg',
      author: 'Monamedia',
      date: '07 Tháng Mười Hai 2023',
      title: 'Preserving Care Strategy Amidst Modern Challenges',
    },
    {
      image: '/placeholder-news-3.jpg',
      author: 'Monamedia',
      date: '07 Tháng Mười Hai 2023',
      title: 'Health vs. Wealth Navigate Your Priorities',
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
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 sm:mb-12 relative z-10">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FaHeart className="text-blue-600 text-sm sm:text-base" />
              </div>
              <span className="text-green-500 font-semibold uppercase text-xs sm:text-sm tracking-wide">
                TIN TỨC & BLOG
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900">
              Tin Tức Mới Nhất Mỗi Ngày
            </h2>
          </div>
          <div className="flex-shrink-0">
            <Button color="primary" size="medium" className="w-full sm:w-auto">
              XEM TẤT CẢ
            </Button>
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative z-10">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] rounded-t-xl sm:rounded-t-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-xs">News Image {index + 1}</span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-green-500 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5">
                    <FaUser className="text-xs" />
                    <span>Bởi {item.author}</span>
                  </div>
                  <span>-</span>
                  <div className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-xs" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 line-clamp-2">
                  {item.title}
                </h3>

                {/* Read More Button */}
                <Button color="secondary" size="small" className="w-full sm:w-auto">
                  XEM THÊM
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default NewsSection
