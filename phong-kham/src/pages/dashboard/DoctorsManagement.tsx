import { useState, useCallback } from 'react'
import DataTable, { Column } from '../../components/dashboard/DataTable'
import { Modal, DeleteDialog } from '../../components/dashboard/Modal'

interface Doctor {
  id: number
  name: string
  specialty: string
  phone: string
  email: string
  status: 'active' | 'inactive'
}

const DoctorsManagement = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([
    {
      id: 1,
      name: 'Dr. Nguyễn Văn A',
      specialty: 'Tim mạch',
      phone: '0901234567',
      email: 'dr.a@clinic.com',
      status: 'active'
    },
    {
      id: 2,
      name: 'Dr. Trần Thị B',
      specialty: 'Nha khoa',
      phone: '0901234568',
      email: 'dr.b@clinic.com',
      status: 'active'
    },
    {
      id: 3,
      name: 'Dr. Lê Văn C',
      specialty: 'Da liễu',
      phone: '0901234569',
      email: 'dr.c@clinic.com',
      status: 'inactive'
    }
  ])
  const [showModal, setShowModal] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null)
  const [deletingDoctor, setDeletingDoctor] = useState<Doctor | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    phone: '',
    email: '',
    status: 'active' as 'active' | 'inactive'
  })

  const handleAdd = useCallback(() => {
    setEditingDoctor(null)
    setFormData({ name: '', specialty: '', phone: '', email: '', status: 'active' })
    setShowModal(true)
  }, [])

  const handleEdit = useCallback((doctor: Doctor) => {
    setEditingDoctor(doctor)
    setFormData({
      name: doctor.name,
      specialty: doctor.specialty,
      phone: doctor.phone,
      email: doctor.email,
      status: doctor.status
    })
    setShowModal(true)
  }, [])

  const handleDeleteClick = useCallback((doctor: Doctor) => {
    setDeletingDoctor(doctor)
    setShowDeleteDialog(true)
  }, [])

  const handleDeleteConfirm = useCallback(() => {
    if (deletingDoctor) {
      setDoctors(doctors.filter(d => d.id !== deletingDoctor.id))
      setDeletingDoctor(null)
    }
  }, [deletingDoctor, doctors])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingDoctor) {
      setDoctors(doctors.map(d =>
        d.id === editingDoctor.id
          ? { ...d, ...formData }
          : d
      ))
    } else {
      setDoctors([
        ...doctors,
        {
          id: Date.now(),
          ...formData
        }
      ])
    }
    setShowModal(false)
    setEditingDoctor(null)
    setFormData({ name: '', specialty: '', phone: '', email: '', status: 'active' })
  }

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
    setEditingDoctor(null)
    setFormData({ name: '', specialty: '', phone: '', email: '', status: 'active' })
  }, [])

  const columns: Column<Doctor>[] = [
    {
      key: 'name',
      header: 'Tên bác sĩ',
      sortable: true,
    },
    {
      key: 'specialty',
      header: 'Chuyên khoa',
      sortable: true,
    },
    {
      key: 'phone',
      header: 'Số điện thoại',
      sortable: true,
    },
    {
      key: 'email',
      header: 'Email',
      sortable: true,
    },
    {
      key: 'status',
      header: 'Trạng thái',
      sortable: true,
      render: (doctor: Doctor) => (
        <span className={`px-2 py-1 text-xs rounded-full ${
          doctor.status === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {doctor.status === 'active' ? 'Đang làm' : 'Nghỉ'}
        </span>
      )
    },
  ]

  const filterFields = [
    {
      key: 'specialty',
      type: 'text' as const,
      label: 'Chuyên khoa',
      placeholder: 'Tìm theo chuyên khoa'
    },
    {
      key: 'status',
      type: 'select' as const,
      label: 'Trạng thái',
      options: [
        { value: 'active', label: 'Đang làm' },
        { value: 'inactive', label: 'Nghỉ' }
      ]
    }
  ]

  return (
    <div>
      <DataTable
        title="Quản lý bác sĩ"
        data={doctors}
        columns={columns}
        searchable={true}
        searchPlaceholder="Tìm kiếm bác sĩ..."
        searchKeys={['name', 'specialty', 'phone', 'email']}
        filterFields={filterFields}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
        addButtonText="Thêm bác sĩ"
      />

      {/* Edit/Create Modal */}
      <Modal
        title={editingDoctor ? 'Sửa bác sĩ' : 'Thêm bác sĩ'}
        isOpen={showModal}
        onClose={handleCloseModal}
        footer={
          <div className="flex gap-3 justify-end">
            <button
              onClick={handleCloseModal}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {editingDoctor ? 'Cập nhật' : 'Thêm mới'}
            </button>
          </div>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên bác sĩ *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Chuyên khoa *
            </label>
            <input
              type="text"
              required
              value={formData.specialty}
              onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số điện thoại *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Trạng thái *
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="active">Đang làm</option>
              <option value="inactive">Nghỉ</option>
            </select>
          </div>
        </form>
      </Modal>

      {/* Delete Dialog */}
      <DeleteDialog
        isOpen={showDeleteDialog}
        onClose={() => {
          setShowDeleteDialog(false)
          setDeletingDoctor(null)
        }}
        onConfirm={handleDeleteConfirm}
        itemName={deletingDoctor?.name}
      />
    </div>
  )
}

export default DoctorsManagement
