import axios from 'axios'

// API Base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

// Request interceptor - Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor - Handle errors
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Auth API
export const authAPI = {
  login: async (email: string, password: string, role: string) => {
    const response = await api.post('/auth/login', { email, password, role })
    return response.data
  },
  register: async (data: {
    name: string
    email: string
    password: string
    role: string
  }) => {
    const response = await api.post('/auth/register', data)
    return response.data
  },
  logout: async () => {
    const response = await api.post('/auth/logout')
    return response.data
  },
  getCurrentUser: async () => {
    const response = await api.get('/auth/me')
    return response.data
  },
}

// Appointments API
export const appointmentsAPI = {
  getAll: async (params?: { page?: number; size?: number; search?: string }) => {
    const response = await api.get('/appointments', { params })
    return response.data
  },
  getById: async (id: number) => {
    const response = await api.get(`/appointments/${id}`)
    return response.data
  },
  create: async (data: any) => {
    const response = await api.post('/appointments', data)
    return response.data
  },
  update: async (id: number, data: any) => {
    const response = await api.put(`/appointments/${id}`, data)
    return response.data
  },
  delete: async (id: number) => {
    const response = await api.delete(`/appointments/${id}`)
    return response.data
  },
}

// Doctors API
export const doctorsAPI = {
  getAll: async (params?: { page?: number; size?: number; search?: string }) => {
    const response = await api.get('/doctors', { params })
    return response.data
  },
  getById: async (id: number) => {
    const response = await api.get(`/doctors/${id}`)
    return response.data
  },
  create: async (data: any) => {
    const response = await api.post('/doctors', data)
    return response.data
  },
  update: async (id: number, data: any) => {
    const response = await api.put(`/doctors/${id}`, data)
    return response.data
  },
  delete: async (id: number) => {
    const response = await api.delete(`/doctors/${id}`)
    return response.data
  },
}

// Patients API
export const patientsAPI = {
  getAll: async (params?: { page?: number; size?: number; search?: string }) => {
    const response = await api.get('/patients', { params })
    return response.data
  },
  getById: async (id: number) => {
    const response = await api.get(`/patients/${id}`)
    return response.data
  },
  create: async (data: any) => {
    const response = await api.post('/patients', data)
    return response.data
  },
  update: async (id: number, data: any) => {
    const response = await api.put(`/patients/${id}`, data)
    return response.data
  },
  delete: async (id: number) => {
    const response = await api.delete(`/patients/${id}`)
    return response.data
  },
}

// Services API
export const servicesAPI = {
  getAll: async (params?: { page?: number; size?: number; search?: string }) => {
    const response = await api.get('/services', { params })
    return response.data
  },
  getById: async (id: number) => {
    const response = await api.get(`/services/${id}`)
    return response.data
  },
  create: async (data: any) => {
    const response = await api.post('/services', data)
    return response.data
  },
  update: async (id: number, data: any) => {
    const response = await api.put(`/services/${id}`, data)
    return response.data
  },
  delete: async (id: number) => {
    const response = await api.delete(`/services/${id}`)
    return response.data
  },
}

// Payments API
export const paymentsAPI = {
  getAll: async (params?: { page?: number; size?: number; search?: string }) => {
    const response = await api.get('/payments', { params })
    return response.data
  },
  getById: async (id: number) => {
    const response = await api.get(`/payments/${id}`)
    return response.data
  },
  create: async (data: any) => {
    const response = await api.post('/payments', data)
    return response.data
  },
  update: async (id: number, data: any) => {
    const response = await api.put(`/payments/${id}`, data)
    return response.data
  },
  delete: async (id: number) => {
    const response = await api.delete(`/payments/${id}`)
    return response.data
  },
}

export default api
