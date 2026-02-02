import { useState } from 'react'
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import {
  FaHome,
  FaUserMd,
  FaCalendarAlt,
  FaUsers,
  FaDollarSign,
  FaCog,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaUserShield,
  FaUserTie
} from 'react-icons/fa'

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  // Menu items based on role
  const getMenuItems = () => {
    const baseItems = [
      { path: '/dashboard', icon: FaHome, label: 'Tổng quan', roles: ['admin', 'receptionist', 'doctor'] },
      { path: '/dashboard/appointments', icon: FaCalendarAlt, label: 'Lịch hẹn', roles: ['admin', 'receptionist', 'doctor'] },
      { path: '/dashboard/patients', icon: FaUsers, label: 'Bệnh nhân', roles: ['admin', 'receptionist', 'doctor'] },
    ]

    const adminItems = [
      { path: '/dashboard/services', icon: FaUserMd, label: 'Dịch vụ', roles: ['admin'] },
      { path: '/dashboard/doctors', icon: FaUserMd, label: 'Bác sĩ', roles: ['admin'] },
      { path: '/dashboard/payments', icon: FaDollarSign, label: 'Thu phí', roles: ['admin', 'receptionist'] },
      { path: '/dashboard/settings', icon: FaCog, label: 'Cài đặt', roles: ['admin'] },
    ]

    const allItems = [...baseItems, ...adminItems]
    
    // Remove duplicates based on path
    const uniqueItems = allItems.filter((item, index, self) =>
      index === self.findIndex((t) => t.path === item.path)
    )
    
    return uniqueItems.filter(item => item.roles.includes(user?.role || 'admin'))
  }

  const menuItems = getMenuItems()

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard'
    }
    return location.pathname.startsWith(path)
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const getRoleLabel = () => {
    switch (user?.role) {
      case 'admin':
        return 'Admin'
      case 'receptionist':
        return 'Lễ tân'
      case 'doctor':
        return 'Bác sĩ'
      default:
        return 'User'
    }
  }

  const getRoleIcon = () => {
    switch (user?.role) {
      case 'admin':
        return FaUserShield
      case 'receptionist':
        return FaUserTie
      case 'doctor':
        return FaUserMd
      default:
        return FaUserMd
    }
  }

  const RoleIcon = getRoleIcon()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-900">Dashboard</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-gray-600 hover:text-blue-600"
        >
          {sidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 z-40 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo & User Info */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-blue-900 mb-2">Medical Dashboard</h1>
            <div className="flex items-center gap-2 mt-3 p-2 bg-gray-50 rounded-lg">
              <RoleIcon className="text-blue-600" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{user?.name}</p>
                <p className="text-xs text-gray-500">{getRoleLabel()}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? 'bg-blue-50 text-blue-600 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="text-lg" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <FaSignOutAlt className="text-lg" />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <div className="p-4 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout
