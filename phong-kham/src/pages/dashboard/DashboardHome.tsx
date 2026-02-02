import { useAuth } from '../../contexts/AuthContext'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { FaChartLine, FaCalendarAlt, FaDollarSign, FaUsers } from 'react-icons/fa'

const DashboardHome = () => {
  const { user } = useAuth()

  // Stats based on role
  const getStats = () => {
    if (user?.role === 'admin') {
      return [
        { label: 'Lịch hẹn hôm nay', value: '12', color: 'blue', icon: FaCalendarAlt },
        { label: 'Bệnh nhân mới', value: '5', color: 'green', icon: FaUsers },
        { label: 'Doanh thu tháng', value: '25.5M', color: 'purple', icon: FaDollarSign },
        { label: 'Dịch vụ đang hoạt động', value: '8', color: 'orange', icon: FaChartLine },
      ]
    } else if (user?.role === 'receptionist') {
      return [
        { label: 'Lịch hẹn hôm nay', value: '12', color: 'blue', icon: FaCalendarAlt },
        { label: 'Chờ xác nhận', value: '3', color: 'yellow', icon: FaCalendarAlt },
        { label: 'Bệnh nhân mới', value: '5', color: 'green', icon: FaUsers },
        { label: 'Đã thanh toán hôm nay', value: '8', color: 'purple', icon: FaDollarSign },
      ]
    } else {
      // Doctor
      return [
        { label: 'Lịch hẹn hôm nay', value: '8', color: 'blue', icon: FaCalendarAlt },
        { label: 'Đã khám', value: '5', color: 'green', icon: FaUsers },
        { label: 'Chờ khám', value: '3', color: 'yellow', icon: FaCalendarAlt },
        { label: 'Bệnh nhân mới', value: '2', color: 'purple', icon: FaUsers },
      ]
    }
  }

  const stats = getStats()

  // Chart data
  const revenueData = [
    { name: 'T2', revenue: 4000, patients: 24 },
    { name: 'T3', revenue: 3000, patients: 18 },
    { name: 'T4', revenue: 5000, patients: 30 },
    { name: 'T5', revenue: 4500, patients: 28 },
    { name: 'T6', revenue: 6000, patients: 35 },
    { name: 'T7', revenue: 5500, patients: 32 },
    { name: 'CN', revenue: 4800, patients: 29 },
  ]

  const serviceData = [
    { name: 'Khám tổng quát', value: 120, color: '#3b82f6' },
    { name: 'Nha khoa', value: 85, color: '#10b981' },
    { name: 'Tim mạch', value: 40, color: '#f59e0b' },
    { name: 'Da liễu', value: 35, color: '#8b5cf6' },
    { name: 'Khác', value: 25, color: '#ef4444' },
  ]

  const monthlyRevenue = [
    { month: 'Tháng 1', revenue: 45000000 },
    { month: 'Tháng 2', revenue: 52000000 },
    { month: 'Tháng 3', revenue: 48000000 },
    { month: 'Tháng 4', revenue: 61000000 },
    { month: 'Tháng 5', revenue: 55000000 },
    { month: 'Tháng 6', revenue: 68000000 },
  ]

  const topServices = [
    { name: 'Khám tổng quát', count: 120, revenue: 60000000 },
    { name: 'Nha khoa', count: 85, revenue: 68000000 },
    { name: 'Tim mạch', count: 40, revenue: 40000000 },
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Chào mừng, {user?.name}!
        </h1>
        <p className="text-gray-600 mt-2">
          {user?.role === 'admin' && 'Tổng quan và thống kê hệ thống phòng khám'}
          {user?.role === 'receptionist' && 'Quản lý lịch hẹn và bệnh nhân'}
          {user?.role === 'doctor' && 'Xem lịch hẹn và hồ sơ bệnh nhân'}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`text-2xl text-${stat.color}-600`} />
              </div>
              <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
              <p className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</p>
            </div>
          )
        })}
      </div>

      {/* Charts Section - Only for Admin */}
      {user?.role === 'admin' && (
        <>
          {/* Revenue and Patients Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Doanh thu & Bệnh nhân (7 ngày qua)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    name="Doanh thu (VNĐ)"
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="patients" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    name="Bệnh nhân"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Service Distribution Pie Chart */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Phân bố dịch vụ</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={serviceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {serviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly Revenue Chart */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Doanh thu theo tháng</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number | undefined) => value ? `${(value / 1000000).toFixed(1)}M VNĐ` : '0 VNĐ'}
                />
                <Legend />
                <Bar dataKey="revenue" fill="#8b5cf6" name="Doanh thu (VNĐ)" />
              </BarChart>
            </ResponsiveContainer>
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
                    {(service.revenue / 1000000).toFixed(1)}M₫
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Role-specific content */}
      {user?.role === 'receptionist' && (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lịch hẹn cần xử lý</h2>
          <div className="text-gray-500 text-sm">
            Danh sách lịch hẹn chờ xác nhận sẽ được hiển thị ở đây...
          </div>
        </div>
      )}

      {user?.role === 'doctor' && (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lịch khám của tôi</h2>
          <div className="text-gray-500 text-sm">
            Danh sách lịch khám được gán cho bạn sẽ được hiển thị ở đây...
          </div>
        </div>
      )}
    </div>
  )
}

export default DashboardHome
