import { useState, useCallback } from 'react'
import DataTable, { Column } from '../../components/dashboard/DataTable'
import { Modal, DeleteDialog } from '../../components/dashboard/Modal'

interface Service {
  id: number
  name: string
  price: number
  duration: number
  status: 'active' | 'inactive'
}

const ServicesManagement = () => {
  const [services, setServices] = useState<Service[]>([
    { id: 1, name: 'Khám tổng quát', price: 500000, duration: 30, status: 'active' },
    { id: 2, name: 'Nha khoa', price: 800000, duration: 45, status: 'active' },
    { id: 3, name: 'Tim mạch', price: 1000000, duration: 60, status: 'inactive' },
    { id: 4, name: 'Da liễu', price: 600000, duration: 30, status: 'active' },
    { id: 5, name: 'Mắt', price: 700000, duration: 45, status: 'active' },
  ])
  const [showModal, setShowModal] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showNoteModal, setShowNoteModal] = useState(false)
  const [editingService, setEditingService] = useState<Service | null>(null)
  const [deletingService, setDeletingService] = useState<Service | null>(null)
  const [noteService, setNoteService] = useState<Service | null>(null)
  const [noteText, setNoteText] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    duration: '',
    status: 'active' as 'active' | 'inactive'
  })

  const handleAdd = useCallback(() => {
    setEditingService(null)
    setFormData({ name: '', price: '', duration: '', status: 'active' })
    setShowModal(true)
  }, [])

  const handleEdit = useCallback((service: Service) => {
    setEditingService(service)
    setFormData({
      name: service.name,
      price: service.price.toString(),
      duration: service.duration.toString(),
      status: service.status
    })
    setShowModal(true)
  }, [])

  const handleDeleteClick = useCallback((service: Service) => {
    setDeletingService(service)
    setShowDeleteDialog(true)
  }, [])

  const handleNote = useCallback((service: Service) => {
    setNoteService(service)
    setNoteText('') // Có thể load note hiện tại nếu có
    setShowNoteModal(true)
  }, [])

  const handleNoteSubmit = useCallback(() => {
    if (noteService) {
      // Lưu ghi chú vào service
      console.log('Ghi chú cho', noteService.name, ':', noteText)
      // Có thể cập nhật state hoặc gọi API ở đây
      setShowNoteModal(false)
      setNoteService(null)
      setNoteText('')
    }
  }, [noteService, noteText])

  const handleDeleteConfirm = useCallback(() => {
    if (deletingService) {
      setServices(services.filter(s => s.id !== deletingService.id))
      setDeletingService(null)
    }
  }, [deletingService, services])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingService) {
      setServices(services.map(s =>
        s.id === editingService.id
          ? {
              ...s,
              name: formData.name,
              price: parseInt(formData.price),
              duration: parseInt(formData.duration),
              status: formData.status
            }
          : s
      ))
    } else {
      setServices([
        ...services,
        {
          id: Date.now(),
          name: formData.name,
          price: parseInt(formData.price),
          duration: parseInt(formData.duration),
          status: formData.status
        }
      ])
    }
    setShowModal(false)
    setEditingService(null)
    setFormData({ name: '', price: '', duration: '', status: 'active' })
  }

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
    setEditingService(null)
    setFormData({ name: '', price: '', duration: '', status: 'active' })
  }, [])

  const columns: Column<Service>[] = [
    {
      key: 'name',
      header: 'Tên dịch vụ',
      sortable: true,
    },
    {
      key: 'price',
      header: 'Giá',
      sortable: true,
      render: (service: Service) => (
        <span className="font-medium">{service.price.toLocaleString('vi-VN')}₫</span>
      )
    },
    {
      key: 'duration',
      header: 'Thời gian (phút)',
      sortable: true,
      render: (service: Service) => `${service.duration} phút`
    },
    {
      key: 'status',
      header: 'Trạng thái',
      sortable: true,
      render: (service: Service) => (
        <span className={`px-2 py-1 text-xs rounded-full ${
          service.status === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {service.status === 'active' ? 'Đang hoạt động' : 'Tạm ngưng'}
        </span>
      )
    },
  ]

  const filterFields = [
    {
      key: 'status',
      type: 'select' as const,
      label: 'Trạng thái',
      options: [
        { value: 'active', label: 'Đang hoạt động' },
        { value: 'inactive', label: 'Tạm ngưng' }
      ]
    }
  ]

  return (
    <div>
      <DataTable
        title="Quản lý dịch vụ"
        data={services}
        columns={columns}
        searchable={true}
        searchPlaceholder="Tìm kiếm dịch vụ..."
        searchKeys={['name']}
        filterFields={filterFields}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
        onNote={handleNote}
        addButtonText="Thêm dịch vụ"
      />

      {/* Edit/Create Modal */}
      <Modal
        title={editingService ? 'Sửa dịch vụ' : 'Thêm dịch vụ'}
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
              {editingService ? 'Cập nhật' : 'Thêm mới'}
            </button>
          </div>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên dịch vụ *
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
              Giá (VNĐ) *
            </label>
            <input
              type="number"
              required
              min="0"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thời gian khám (phút) *
            </label>
            <input
              type="number"
              required
              min="1"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
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
              <option value="active">Đang hoạt động</option>
              <option value="inactive">Tạm ngưng</option>
            </select>
          </div>
        </form>
      </Modal>

      {/* Delete Dialog */}
      <DeleteDialog
        isOpen={showDeleteDialog}
        onClose={() => {
          setShowDeleteDialog(false)
          setDeletingService(null)
        }}
        onConfirm={handleDeleteConfirm}
        itemName={deletingService?.name}
      />

      {/* Note Modal */}
      <Modal
        title={`Ghi chú - ${noteService?.name || ''}`}
        isOpen={showNoteModal}
        onClose={() => {
          setShowNoteModal(false)
          setNoteService(null)
          setNoteText('')
        }}
        footer={
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => {
                setShowNoteModal(false)
                setNoteService(null)
                setNoteText('')
              }}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={handleNoteSubmit}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Lưu ghi chú
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ghi chú
            </label>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              rows={6}
              placeholder="Nhập ghi chú cho dịch vụ này..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ServicesManagement
