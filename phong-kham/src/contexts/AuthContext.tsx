import { createContext, useContext, useState, ReactNode } from 'react'

type UserRole = 'admin' | 'receptionist' | 'doctor'

interface User {
  id: number
  name: string
  email: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, role: UserRole) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Check localStorage for saved user
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const login = (email: string, _password: string, role: UserRole) => {
    // Mock login - in real app, this would call an API
    const mockUser: User = {
      id: 1,
      name: role === 'admin' ? 'Admin User' : role === 'receptionist' ? 'Lễ tân' : 'Bác sĩ',
      email,
      role
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  )
}
