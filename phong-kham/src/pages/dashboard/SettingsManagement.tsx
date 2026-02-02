import { useState } from 'react'
import { FaUserShield, FaUserTie, FaUserMd } from 'react-icons/fa'

interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'receptionist' | 'doctor'
  status: 'active' | 'inactive'
}

const SettingsManagement = () => {
  const [users] = useState<User[]>([
    { id: 1, name: 'Admin', email: 'admin@clinic.com', role: 'admin', status: 'active' },
    { id: 2, name: 'Lễ tân A', email: 'receptionist@clinic.com', role: 'receptionist', status: 'active' },
    { id: 3, name: 'Dr. Nguyễn Văn A', email: 'doctor@clinic.com', role: 'doctor', status: 'active' },
  ])

  const roleIcons = {
    admin: FaUserShield,
    receptionist: FaUserTie,
    doctor: FaUserMd
  }

  const roleLabels = {
    admin: 'Admin',
    receptionist: 'Lễ tân',
    doctor: 'Bác sĩ'
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Cài đặt & Phân quyền</h1>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden mb-6">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Quản lý người dùng</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Người dùng</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vai trò</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => {
                const Icon = roleIcons[user.role]
                return (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <Icon className="text-gray-400" />
                        <span className="text-sm font-medium text-gray-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                        {roleLabels[user.role]}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status === 'active' ? 'Hoạt động' : 'Không hoạt động'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">Sửa</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Permissions Info */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quyền hạn</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Admin</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Toàn quyền quản lý</li>
              <li>• Xem tất cả báo cáo</li>
              <li>• Quản lý người dùng</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Lễ tân</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Quản lý lịch hẹn</li>
              <li>• Quản lý bệnh nhân</li>
              <li>• Thu phí</li>
            </ul>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">Bác sĩ</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Xem lịch hẹn</li>
              <li>• Xem hồ sơ bệnh nhân</li>
              <li>• Ghi chú khám</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsManagement
