import { useState, useCallback } from 'react'
import DataTable, { Column } from '../../components/dashboard/DataTable'
import { Modal } from '../../components/dashboard/Modal'
import { FaCheck, FaTimes, FaEnvelope, FaSms } from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'

interface Appointment {
  id: number
  patientName: string
  phone: string
  email: string
  service: string
  date: string
  time: string
  doctor?: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  notes?: string
}

const AppointmentsManagement = () => {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      patientName: 'Nguyễn Văn A',
      phone: '0901234567',
      email: 'patient@email.com',
      service: 'Khám tổng quát',
      date: '2024-01-15',
      time: '09:00',
      status: 'pending'
    },
    {
      id: 2,
      patientName: 'Trần Thị B',
      phone: '0901234568',
      email: 'patient2@email.com',
      service: 'Nha khoa',
      date: '2024-01-15',
      time: '10:30',
      doctor: 'Dr. Nguyễn Văn A',
      status: 'confirmed'
    },
    {
      id: 3,
      patientName: 'Lê Văn C',
      phone: '0901234569',
      email: 'patient3@email.com',
      service: 'Da liễu',
      date: '2024-01-16',
      time: '14:00',
      status: 'pending'
    }
  ])
  const [showModal, setShowModal] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)

  const canManageAppointments = user?.role === 'admin' || user?.role === 'receptionist'
  const canAssignDoctor = user?.role === 'admin' || user?.role === 'receptionist'

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  }

  const statusLabels = {
    pending: 'Chờ xác nhận',
    confirmed: 'Đã xác nhận',
    completed: 'Đã khám',
    cancelled: 'Hủy'
  }

  const handleAdd = useCallback(() => {
    // Add new appointment logic
    alert('Thêm lịch hẹn mới')
  }, [])

  const handleEdit = useCallback((appointment: Appointment) => {
    setSelectedAppointment(appointment)
    setShowModal(true)
  }, [])

  const handleStatusChange = (id: number, newStatus: Appointment['status']) => {
    setAppointments(appointments.map(apt =>
      apt.id === id ? { ...apt, status: newStatus } : apt
    ))
  }

  const handleAssignDoctor = (id: number, doctor: string) => {
    setAppointments(appointments.map(apt =>
      apt.id === id ? { ...apt, doctor, status: 'confirmed' } : apt
    ))
  }

  // Filter appointments based on role
  const getFilteredAppointments = () => {
    if (user?.role === 'doctor') {
      return appointments.filter(apt => apt.doctor === user.name)
    }
    return appointments
  }

  const filteredAppointments = getFilteredAppointments()

  const columns: Column<Appointment>[] = [
    {
      key: 'patientName',
      header: 'Bệnh nhân',
      sortable: true,
      render: (appointment: Appointment) => (
        <div>
          <div className="text-sm font-medium text-gray-900">{appointment.patientName}</div>
          <div className="text-sm text-gray-500">{appointment.phone}</div>
        </div>
      )
    },
    {
      key: 'service',
      header: 'Dịch vụ',
      sortable: true,
    },
    {
      key: 'date',
      header: 'Ngày/giờ',
      sortable: true,
      render: (appointment: Appointment) => (
        <div>
          <div className="text-sm">{appointment.date}</div>
          <div className="text-xs text-gray-500">{appointment.time}</div>
        </div>
      )
    },
    {
      key: 'doctor',
      header: 'Bác sĩ',
      render: (appointment: Appointment) => (
        appointment.doctor || (
          canAssignDoctor ? (
            <button
              onClick={() => {
                setSelectedAppointment(appointment)
                setShowModal(true)
              }}
              className="text-blue-600 hover:text-blue-800 text-xs"
            >
              Gán bác sĩ
            </button>
          ) : (
            <span className="text-gray-400">Chưa gán</span>
          )
        )
      )
    },
    {
      key: 'status',
      header: 'Trạng thái',
      sortable: true,
      render: (appointment: Appointment) => (
        <span className={`px-2 py-1 text-xs rounded-full ${statusColors[appointment.status]}`}>
          {statusLabels[appointment.status]}
        </span>
      )
    },
    {
      key: 'actions',
      header: 'Thao tác',
      render: (appointment: Appointment) => (
        <div className="flex gap-2 flex-wrap">
          {canManageAppointments && (
            <>
              {appointment.status === 'pending' && (
                <>
                  <button
                    onClick={() => handleStatusChange(appointment.id, 'confirmed')}
                    className="px-3 py-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors flex items-center gap-1.5 text-xs font-medium whitespace-nowrap"
                    title="Xác nhận"
                  >
                    <FaCheck /> Xác nhận
                  </button>
                  <button
                    onClick={() => handleStatusChange(appointment.id, 'cancelled')}
                    className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors flex items-center gap-1.5 text-xs font-medium whitespace-nowrap"
                    title="Hủy"
                  >
                    <FaTimes /> Hủy
                  </button>
                </>
              )}
              {appointment.status === 'confirmed' && (
                <>
                  <button
                    onClick={() => handleStatusChange(appointment.id, 'completed')}
                    className="px-3 py-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors flex items-center gap-1.5 text-xs font-medium whitespace-nowrap"
                    title="Hoàn thành"
                  >
                    <FaCheck /> Hoàn thành
                  </button>
                  <button
                    className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-1.5 text-xs font-medium whitespace-nowrap"
                    title="Gửi email"
                  >
                    <FaEnvelope /> Email
                  </button>
                  <button
                    className="px-3 py-1.5 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors flex items-center gap-1.5 text-xs font-medium whitespace-nowrap"
                    title="Gửi SMS"
                  >
                    <FaSms /> SMS
                  </button>
                </>
              )}
            </>
          )}
          {user?.role === 'doctor' && appointment.status === 'confirmed' && (
            <button
              onClick={() => handleStatusChange(appointment.id, 'completed')}
              className="px-3 py-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors flex items-center gap-1.5 text-xs font-medium whitespace-nowrap"
              title="Hoàn thành khám"
            >
              <FaCheck /> Hoàn thành
            </button>
          )}
        </div>
      )
    },
  ]

  const filterFields = [
    {
      key: 'status',
      type: 'select' as const,
      label: 'Trạng thái',
      options: [
        { value: 'pending', label: 'Chờ xác nhận' },
        { value: 'confirmed', label: 'Đã xác nhận' },
        { value: 'completed', label: 'Đã khám' },
        { value: 'cancelled', label: 'Hủy' }
      ]
    }
  ]

  return (
    <div>
      <DataTable
        title={user?.role === 'doctor' ? 'Lịch khám của tôi' : 'Quản lý lịch hẹn'}
        data={filteredAppointments}
        columns={columns}
        searchable={true}
        searchPlaceholder="Tìm kiếm lịch hẹn..."
        searchKeys={['patientName', 'service', 'phone']}
        filterFields={filterFields}
        onAdd={canManageAppointments ? handleAdd : undefined}
        onEdit={canManageAppointments ? handleEdit : undefined}
        addButtonText="Thêm lịch hẹn"
        actionsColumn={false}
      />

      {/* Assign Doctor Modal */}
      {showModal && selectedAppointment && (
        <Modal
          title="Gán bác sĩ"
          isOpen={showModal}
          onClose={() => {
            setShowModal(false)
            setSelectedAppointment(null)
          }}
          footer={
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  if (selectedAppointment) {
                    handleAssignDoctor(selectedAppointment.id, 'Dr. Nguyễn Văn A')
                  }
                  setShowModal(false)
                  setSelectedAppointment(null)
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Gán
              </button>
              <button
                onClick={() => {
                  setShowModal(false)
                  setSelectedAppointment(null)
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Hủy
              </button>
            </div>
          }
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Chọn bác sĩ
              </label>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500">
                <option value="">-- Chọn bác sĩ --</option>
                <option value="dr1">Dr. Nguyễn Văn A</option>
                <option value="dr2">Dr. Trần Thị B</option>
              </select>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default AppointmentsManagement