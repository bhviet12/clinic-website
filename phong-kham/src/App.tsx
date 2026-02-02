import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import RoleProtectedRoute from './components/RoleProtectedRoute'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const News = lazy(() => import('./pages/News'))
const Login = lazy(() => import('./pages/Login'))

// Dashboard
const DashboardLayout = lazy(() => import('./Layouts/DashboardLayout'))
const DashboardHome = lazy(() => import('./pages/dashboard/DashboardHome'))
const ServicesManagement = lazy(() => import('./pages/dashboard/ServicesManagement'))
const DoctorsManagement = lazy(() => import('./pages/dashboard/DoctorsManagement'))
const AppointmentsManagement = lazy(() => import('./pages/dashboard/AppointmentsManagement'))
const PatientsManagement = lazy(() => import('./pages/dashboard/PatientsManagement'))
const PaymentsManagement = lazy(() => import('./pages/dashboard/PaymentsManagement'))
const SettingsManagement = lazy(() => import('./pages/dashboard/SettingsManagement'))

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Đang tải...</p>
    </div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard Routes - Protected */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              {/* All roles can access */}
              <Route path="appointments" element={<AppointmentsManagement />} />
              <Route path="patients" element={<PatientsManagement />} />
              {/* Admin only - will be protected by component-level check */}
              <Route path="services" element={<RoleProtectedRoute allowedRoles={['admin']}><ServicesManagement /></RoleProtectedRoute>} />
              <Route path="doctors" element={<RoleProtectedRoute allowedRoles={['admin']}><DoctorsManagement /></RoleProtectedRoute>} />
              <Route path="settings" element={<RoleProtectedRoute allowedRoles={['admin']}><SettingsManagement /></RoleProtectedRoute>} />
              {/* Admin & Receptionist */}
              <Route path="payments" element={<RoleProtectedRoute allowedRoles={['admin', 'receptionist']}><PaymentsManagement /></RoleProtectedRoute>} />
            </Route>
          </Route>

          {/* Redirect to login if not authenticated */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
