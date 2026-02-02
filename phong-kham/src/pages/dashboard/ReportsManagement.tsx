import { FaChartLine, FaCalendarAlt, FaDollarSign } from 'react-icons/fa'

const ReportsManagement = () => {
  const stats = [
    { label: 'Lượt khám hôm nay', value: '12', icon: FaCalendarAlt, color: 'blue' },
    { label: 'Lượt khám tháng này', value: '245', icon: FaCalendarAlt, color: 'green' },
    { label: 'Doanh thu hôm nay', value: '6.5M', icon: FaDollarSign, color: 'purple' },
    { label: 'Doanh thu tháng này', value: '125.5M', icon: FaDollarSign, color: 'orange' },
  ]

  const topServices = [
    { name: 'Khám tổng quát', count: 120, revenue: 60000000 },
    { name: 'Nha khoa', count: 85, revenue: 68000000 },
    { name: 'Tim mạch', count: 40, revenue: 40000000 },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Thống kê - Báo cáo</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`text-2xl text-${stat.color}-600`} />
              </div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</p>
            </div>
          )
        })}
      </div>

      {/* Top Services */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Dịch vụ được dùng nhiều nhất</h2>
        <div className="space-y-4">
          {topServices.map((service, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">{service.name}</p>
                <p className="text-sm text-gray-500">{service.count} lượt khám</p>
              </div>
              <p className="text-lg font-bold text-green-600">
                {service.revenue.toLocaleString('vi-VN')}₫
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Chart Placeholder */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Biểu đồ doanh thu</h2>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-center text-gray-400">
            <FaChartLine className="text-4xl mx-auto mb-2" />
            <p>Biểu đồ sẽ được hiển thị ở đây</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportsManagement
