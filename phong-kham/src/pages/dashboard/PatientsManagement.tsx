import { useState, useCallback } from 'react'
import DataTable, { Column } from '../../components/dashboard/DataTable'
import { Modal, DeleteDialog } from '../../components/dashboard/Modal'

interface Patient {
  id: number
  name: string
  phone: string
  email: string
  dob: string
  address: string
  medicalHistory: string[]
  internalNotes: string
}

const PatientsManagement = () => {
  const [patients, setPatients] = useState<Patient[]>([
    {
      id: 1,
      name: 'Nguyễn Văn A',
      phone: '0901234567',
      email: 'patient@email.com',
      dob: '1990-01-01',
      address: '123 Đường ABC, Quận 1, TP.HCM',
      medicalHistory: ['Khám tổng quát 2023', 'Nha khoa 2023'],
      internalNotes: 'Bệnh nhân cần theo dõi định kỳ'
    },
    {
      id: 2,
      name: 'Trần Thị B',
      phone: '0901234568',
      email: 'patient2@email.com',
      dob: '1985-05-15',
      address: '456 Đường XYZ, Quận 2, TP.HCM',
      medicalHistory: ['Tim mạch 2024'],
      internalNotes: ''
    },
    {
      id: 3,
      name: 'Lê Văn C',
      phone: '0901234569',
      email: 'patient3@email.com',
      dob: '1992-08-20',
      address: '789 Đường DEF, Quận 3, TP.HCM',
      medicalHistory: ['Da liễu 2023', 'Khám tổng quát 2024'],
      internalNotes: 'Dị ứng thuốc'
    }
  ])
  const [showModal, setShowModal] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [editingPatient, setEditingPatient] = useState<Patient | null>(null)
  const [deletingPatient, setDeletingPatient] = useState<Patient | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    address: ''
  })

  const handleAdd = useCallback(() => {
    setEditingPatient(null)
    setFormData({ name: '', phone: '', email: '', dob: '', address: '' })
    setShowModal(true)
  }, [])

  const handleEdit = useCallback((patient: Patient) => {
    setEditingPatient(patient)
    setFormData({
      name: patient.name,
      phone: patient.phone,
      email: patient.email,
      dob: patient.dob,
      address: patient.address
    })
    setShowModal(true)
  }, [])

  const handleDeleteClick = useCallback((patient: Patient) => {
    setDeletingPatient(patient)
    setShowDeleteDialog(true)
  }, [])

  const handleDeleteConfirm = useCallback(() => {
    if (deletingPatient) {
      setPatients(patients.filter(p => p.id !== deletingPatient.id))
      setDeletingPatient(null)
    }
  }, [deletingPatient, patients])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingPatient) {
      setPatients(patients.map(p =>
        p.id === editingPatient.id
          ? { ...p, ...formData }
          : p
      ))
    } else {
      setPatients([
        ...patients,
        {
          id: Date.now(),
          ...formData,
          medicalHistory: [],
          internalNotes: ''
        }
      ])
    }
    setShowModal(false)
    setEditingPatient(null)
    setFormData({ name: '', phone: '', email: '', dob: '', address: '' })
  }

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
    setEditingPatient(null)
    setFormData({ name: '', phone: '', email: '', dob: '', address: '' })
  }, [])

  const columns: Column<Patient>[] = [
    {
      key: 'name',
      header: 'Tên bệnh nhân',
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
      key: 'dob',
      header: 'Ngày sinh',
      sortable: true,
      render: (patient: Patient) => {
        const date = new Date(patient.dob)
        return date.toLocaleDateString('vi-VN')
      }
    },
    {
      key: 'medicalHistory',
      header: 'Lịch sử khám',
      render: (patient: Patient) => (
        <div className="space-y-1">
          {patient.medicalHistory.length > 0 ? (
            patient.medicalHistory.map((history, idx) => (
              <div key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                {history}
              </div>
            ))
          ) : (
            <span className="text-xs text-gray-400">Chưa có</span>
          )}
        </div>
      )
    },
  ]

  const filterFields = [
    {
      key: 'phone',
      type: 'text' as const,
      label: 'Số điện thoại',
      placeholder: 'Tìm theo số điện thoại'
    }
  ]

  return (
    <div>
      <DataTable
        title="Quản lý bệnh nhân"
        data={patients}
        columns={columns}
        searchable={true}
        searchPlaceholder="Tìm kiếm bệnh nhân..."
        searchKeys={['name', 'phone', 'email']}
        filterFields={filterFields}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
        addButtonText="Thêm bệnh nhân"
        emptyMessage="Chưa có bệnh nhân nào"
      />

      {/* Edit/Create Modal */}
      <Modal
        title={editingPatient ? 'Sửa bệnh nhân' : 'Thêm bệnh nhân'}
        isOpen={showModal}
        onClose={handleCloseModal}
        width="max-w-2xl"
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
              {editingPatient ? 'Cập nhật' : 'Thêm mới'}
            </button>
          </div>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tên bệnh nhân *
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
                Ngày sinh *
              </label>
              <input
                type="date"
                required
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Địa chỉ
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </form>
      </Modal>

      {/* Delete Dialog */}
      <DeleteDialog
        isOpen={showDeleteDialog}
        onClose={() => {
          setShowDeleteDialog(false)
          setDeletingPatient(null)
        }}
        onConfirm={handleDeleteConfirm}
        itemName={deletingPatient?.name}
      />
    </div>
  )
}

export default PatientsManagement
