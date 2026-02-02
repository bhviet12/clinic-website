import { useState, useCallback } from 'react'
import DataTable, { Column } from '../../components/dashboard/DataTable'
import { Modal, DeleteDialog } from '../../components/dashboard/Modal'

interface Payment {
  id: number
  patientName: string
  service: string
  amount: number
  paymentMethod: 'cash' | 'transfer'
  date: string
  status: 'paid' | 'pending'
}

const PaymentsManagement = () => {
  const [payments, setPayments] = useState<Payment[]>([
    {
      id: 1,
      patientName: 'Nguyễn Văn A',
      service: 'Khám tổng quát',
      amount: 500000,
      paymentMethod: 'cash',
      date: '2024-01-15',
      status: 'paid'
    },
    {
      id: 2,
      patientName: 'Trần Thị B',
      service: 'Nha khoa',
      amount: 800000,
      paymentMethod: 'transfer',
      date: '2024-01-15',
      status: 'paid'
    },
    {
      id: 3,
      patientName: 'Lê Văn C',
      service: 'Da liễu',
      amount: 600000,
      paymentMethod: 'cash',
      date: '2024-01-16',
      status: 'pending'
    }
  ])
  const [showModal, setShowModal] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [editingPayment, setEditingPayment] = useState<Payment | null>(null)
  const [deletingPayment, setDeletingPayment] = useState<Payment | null>(null)
  const [formData, setFormData] = useState({
    patientName: '',
    service: '',
    amount: '',
    paymentMethod: 'cash' as 'cash' | 'transfer',
    date: '',
    status: 'paid' as 'paid' | 'pending'
  })

  const handleAdd = useCallback(() => {
    setEditingPayment(null)
    setFormData({
      patientName: '',
      service: '',
      amount: '',
      paymentMethod: 'cash',
      date: new Date().toISOString().split('T')[0],
      status: 'paid'
    })
    setShowModal(true)
  }, [])

  const handleEdit = useCallback((payment: Payment) => {
    setEditingPayment(payment)
    setFormData({
      patientName: payment.patientName,
      service: payment.service,
      amount: payment.amount.toString(),
      paymentMethod: payment.paymentMethod,
      date: payment.date,
      status: payment.status
    })
    setShowModal(true)
  }, [])

  const handleDeleteClick = useCallback((payment: Payment) => {
    setDeletingPayment(payment)
    setShowDeleteDialog(true)
  }, [])

  const handleDeleteConfirm = useCallback(() => {
    if (deletingPayment) {
      setPayments(payments.filter(p => p.id !== deletingPayment.id))
      setDeletingPayment(null)
    }
  }, [deletingPayment, payments])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingPayment) {
      setPayments(payments.map(p =>
        p.id === editingPayment.id
          ? {
              ...p,
              patientName: formData.patientName,
              service: formData.service,
              amount: parseInt(formData.amount),
              paymentMethod: formData.paymentMethod,
              date: formData.date,
              status: formData.status
            }
          : p
      ))
    } else {
      setPayments([
        ...payments,
        {
          id: Date.now(),
          patientName: formData.patientName,
          service: formData.service,
          amount: parseInt(formData.amount),
          paymentMethod: formData.paymentMethod,
          date: formData.date,
          status: formData.status
        }
      ])
    }
    setShowModal(false)
    setEditingPayment(null)
    setFormData({
      patientName: '',
      service: '',
      amount: '',
      paymentMethod: 'cash',
      date: new Date().toISOString().split('T')[0],
      status: 'paid'
    })
  }

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
    setEditingPayment(null)
    setFormData({
      patientName: '',
      service: '',
      amount: '',
      paymentMethod: 'cash',
      date: new Date().toISOString().split('T')[0],
      status: 'paid'
    })
  }, [])

  const columns: Column<Payment>[] = [
    {
      key: 'patientName',
      header: 'Bệnh nhân',
      sortable: true,
    },
    {
      key: 'service',
      header: 'Dịch vụ',
      sortable: true,
    },
    {
      key: 'amount',
      header: 'Số tiền',
      sortable: true,
      render: (payment: Payment) => (
        <span className="font-semibold">{payment.amount.toLocaleString('vi-VN')}₫</span>
      )
    },
    {
      key: 'paymentMethod',
      header: 'Phương thức',
      sortable: true,
      render: (payment: Payment) => (
        payment.paymentMethod === 'cash' ? 'Tiền mặt' : 'Chuyển khoản'
      )
    },
    {
      key: 'date',
      header: 'Ngày',
      sortable: true,
    },
    {
      key: 'status',
      header: 'Trạng thái',
      sortable: true,
      render: (payment: Payment) => (
        <span className={`px-2 py-1 text-xs rounded-full ${
          payment.status === 'paid'
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {payment.status === 'paid' ? 'Đã thanh toán' : 'Chờ thanh toán'}
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
        { value: 'paid', label: 'Đã thanh toán' },
        { value: 'pending', label: 'Chờ thanh toán' }
      ]
    },
    {
      key: 'paymentMethod',
      type: 'select' as const,
      label: 'Phương thức',
      options: [
        { value: 'cash', label: 'Tiền mặt' },
        { value: 'transfer', label: 'Chuyển khoản' }
      ]
    }
  ]

  return (
    <div>
      <DataTable
        title="Quản lý thu phí"
        data={payments}
        columns={columns}
        searchable={true}
        searchPlaceholder="Tìm kiếm thanh toán..."
        searchKeys={['patientName', 'service']}
        filterFields={filterFields}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
        addButtonText="Thêm thanh toán"
      />

      {/* Edit/Create Modal */}
      <Modal
        title={editingPayment ? 'Sửa thanh toán' : 'Thêm thanh toán'}
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
              {editingPayment ? 'Cập nhật' : 'Thêm mới'}
            </button>
          </div>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên bệnh nhân *
            </label>
            <input
              type="text"
              required
              value={formData.patientName}
              onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dịch vụ *
            </label>
            <input
              type="text"
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số tiền (VNĐ) *
            </label>
            <input
              type="number"
              required
              min="0"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phương thức thanh toán *
            </label>
            <select
              value={formData.paymentMethod}
              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as 'cash' | 'transfer' })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="cash">Tiền mặt</option>
              <option value="transfer">Chuyển khoản</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ngày *
            </label>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Trạng thái *
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'paid' | 'pending' })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="paid">Đã thanh toán</option>
              <option value="pending">Chờ thanh toán</option>
            </select>
          </div>
        </form>
      </Modal>

      {/* Delete Dialog */}
      <DeleteDialog
        isOpen={showDeleteDialog}
        onClose={() => {
          setShowDeleteDialog(false)
          setDeletingPayment(null)
        }}
        onConfirm={handleDeleteConfirm}
        itemName={`Thanh toán của ${deletingPayment?.patientName}`}
      />
    </div>
  )
}

export default PaymentsManagement