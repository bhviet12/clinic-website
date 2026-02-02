import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { FaUserShield, FaUserTie, FaUserMd } from 'react-icons/fa'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedRole, setSelectedRole] = useState<'admin' | 'receptionist' | 'doctor'>('admin')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password, selectedRole)
      navigate('/dashboard')
    } catch (error) {
      console.error('Login error:', error)
      // Error handling is done in AuthContext
    }
  }

  const roles = [
    { value: 'admin' as const, label: 'Admin', icon: FaUserShield, color: 'blue', bgColor: 'bg-blue-50', borderColor: 'border-blue-500', textColor: 'text-blue-600' },
    { value: 'receptionist' as const, label: 'Lễ tân', icon: FaUserTie, color: 'green', bgColor: 'bg-green-50', borderColor: 'border-green-500', textColor: 'text-green-600' },
    { value: 'doctor' as const, label: 'Bác sĩ', icon: FaUserMd, color: 'purple', bgColor: 'bg-purple-50', borderColor: 'border-purple-500', textColor: 'text-purple-600' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Đăng nhập</h1>
          <p className="text-gray-600">Chọn vai trò và đăng nhập vào hệ thống</p>
        </div>

        {/* Role Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Chọn vai trò:
          </label>
          <div className="grid grid-cols-3 gap-3">
            {roles.map((role) => {
              const Icon = role.icon
              const isSelected = selectedRole === role.value
              return (
                <button
                  key={role.value}
                  type="button"
                  onClick={() => setSelectedRole(role.value)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    isSelected
                      ? `${role.borderColor} ${role.bgColor}`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`text-2xl mx-auto mb-2 ${
                    isSelected ? role.textColor : 'text-gray-400'
                  }`} />
                  <p className={`text-xs font-medium ${
                    isSelected ? role.textColor : 'text-gray-600'
                  }`}>
                    {role.label}
                  </p>
                </button>
              )
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Đăng nhập
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Demo: Nhập bất kỳ email/password để đăng nhập</p>
        </div>
      </div>
    </div>
  )
}

export default Login
