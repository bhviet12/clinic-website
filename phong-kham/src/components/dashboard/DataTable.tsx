import { useState, useMemo, useCallback, ReactNode } from 'react'
import { FaPlus, FaEdit, FaTrash, FaSearch, FaTimes, FaEye, FaStickyNote } from 'react-icons/fa'

// ========== TYPES ==========
export interface Column<T> {
  key: string
  header: string
  render?: (item: T) => ReactNode
  sortable?: boolean
  filterable?: boolean
  filterType?: 'text' | 'select' | 'date'
  filterOptions?: { value: string; label: string }[]
}

export interface FilterField {
  key: string
  type: 'text' | 'select' | 'date'
  placeholder?: string
  options?: { value: string; label: string }[]
  label: string
}

export interface DataTableProps<T> {
  title: string
  data: T[]
  columns: Column<T>[]
  // Search
  searchable?: boolean
  searchPlaceholder?: string
  searchKeys?: (keyof T)[]
  // Advanced Filters
  filterFields?: FilterField[]
  onFilterChange?: (filters: Record<string, any>) => void
  // Actions
  onAdd?: () => void
  onEdit?: (item: T) => void
  onDelete?: (item: T) => void
  onView?: (item: T) => void
  onNote?: (item: T) => void
  addButtonText?: string
  emptyMessage?: string
  actionsColumn?: boolean
  // Pagination (optional)
  pagination?: {
    current: number
    pageSize: number
    total: number
    onChange: (page: number, pageSize: number) => void
  }
}

// ========== MAIN COMPONENT ==========
function DataTable<T extends { id: number | string }>({
  title,
  data,
  columns,
  searchable = true,
  searchPlaceholder = 'Tìm kiếm...',
  searchKeys,
  filterFields = [],
  onFilterChange,
  onAdd,
  onEdit,
  onDelete,
  onView,
  onNote,
  addButtonText = 'Thêm mới',
  emptyMessage = 'Không có dữ liệu',
  actionsColumn = true,
  pagination
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null)
  const [filters, setFilters] = useState<Record<string, any>>({})
  const [showFilters, setShowFilters] = useState(false)

  // Handle filter change
  const handleFilterChange = useCallback((key: string, value: any) => {
    const newFilters = { ...filters, [key]: value }
    if (!value || value === '') {
      delete newFilters[key]
    }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }, [filters, onFilterChange])

  const handleResetFilters = useCallback(() => {
    setFilters({})
    setSearchQuery('')
    onFilterChange?.({})
  }, [onFilterChange])

  // Filter data based on search query and filters
  const filteredData = useMemo(() => {
    let result = data

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const keysToSearch = searchKeys || (columns.map(col => col.key) as (keyof T)[])
      result = result.filter(item =>
        keysToSearch.some(key => {
          const value = item[key]
          return value && String(value).toLowerCase().includes(query)
        })
      )
    }

    // Apply filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        result = result.filter(item => {
          const itemValue = item[key as keyof T]
          if (typeof value === 'string') {
            return String(itemValue).toLowerCase().includes(value.toLowerCase())
          }
          return String(itemValue) === String(value)
        })
      }
    })

    return result
  }, [data, searchQuery, filters, searchKeys, columns])

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof T]
      const bValue = b[sortConfig.key as keyof T]

      if (aValue === null || aValue === undefined) return 1
      if (bValue === null || bValue === undefined) return -1

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
      return 0
    })
  }, [filteredData, sortConfig])

  const handleSort = useCallback((key: string) => {
    const column = columns.find(col => col.key === key)
    if (!column?.sortable) return

    setSortConfig(prev => {
      if (prev?.key === key) {
        return prev.direction === 'asc'
          ? { key, direction: 'desc' }
          : null
      }
      return { key, direction: 'asc' }
    })
  }, [columns])

  const handleDelete = useCallback((item: T) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa mục này?')) {
      onDelete?.(item)
    }
  }, [onDelete])

  // Pagination logic
  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData
    const start = (pagination.current - 1) * pagination.pageSize
    const end = start + pagination.pageSize
    return sortedData.slice(start, end)
  }, [sortedData, pagination])

  const displayData = pagination ? paginatedData : sortedData

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      </div>

      {/* Action Buttons & Search & Filters Section */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex flex-wrap items-center gap-3">
          {/* Action Buttons */}
          {onAdd && (
            <button
              onClick={onAdd}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap text-sm font-medium"
            >
              <FaPlus /> {addButtonText}
            </button>
          )}
          {onEdit && (
            <button
              onClick={() => {
                // This will be handled by individual row edit buttons
                // But we can add bulk edit here if needed
              }}
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap text-sm font-medium"
              disabled
              title="Chọn một mục để sửa"
            >
              <FaEdit /> Sửa
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => {
                // This will be handled by individual row delete buttons
                // But we can add bulk delete here if needed
              }}
              className="flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap text-sm font-medium"
              disabled
              title="Chọn một mục để xóa"
            >
              <FaTrash /> Xóa
            </button>
          )}
          {onNote && (
            <button
              onClick={() => {
                // This will be handled by individual row note buttons
              }}
              className="flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap text-sm font-medium"
              disabled
              title="Chọn một mục để thêm ghi chú"
            >
              <FaStickyNote /> Ghi chú
            </button>
          )}

          {/* Search Bar - Next to action buttons */}
          {searchable && (
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          )}

          {/* Filter Button - Next to search */}
          {filterFields.length > 0 && (
            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700 whitespace-nowrap"
              >
                <FaSearch className="text-gray-500" />
                {showFilters ? 'Ẩn bộ lọc' : 'Hiển thị bộ lọc'} 
                <span className="text-xs">{showFilters ? '▲' : '▼'}</span>
              </button>
              
              {/* Dropdown Filter */}
              {showFilters && (
                <div className="absolute left-0 top-full mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      {filterFields.map((field) => (
                        <div key={field.key}>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {field.label}
                          </label>
                          {field.type === 'text' && (
                            <input
                              type="text"
                              placeholder={field.placeholder}
                              value={filters[field.key] || ''}
                              onChange={(e) => handleFilterChange(field.key, e.target.value)}
                              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          )}
                          {field.type === 'select' && (
                            <select
                              value={filters[field.key] || ''}
                              onChange={(e) => handleFilterChange(field.key, e.target.value)}
                              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              <option value="">Tất cả</option>
                              {field.options?.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                  {opt.label}
                                </option>
                              ))}
                            </select>
                          )}
                          {field.type === 'date' && (
                            <input
                              type="date"
                              value={filters[field.key] || ''}
                              onChange={(e) => handleFilterChange(field.key, e.target.value)}
                              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2 border-t border-gray-200">
                      <button
                        onClick={() => {
                          // Trigger filter
                          onFilterChange?.(filters)
                        }}
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                      >
                        <FaSearch />
                        Tìm kiếm
                      </button>
                      <button
                        onClick={handleResetFilters}
                        className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
                      >
                        Làm mới
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Clear Filter Button */}
          {Object.keys(filters).length > 0 && (
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium whitespace-nowrap"
            >
              <FaTimes className="inline mr-1" />
              Xóa bộ lọc
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    onClick={() => column.sortable && handleSort(column.key)}
                    className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ${
                      column.sortable ? 'cursor-pointer hover:bg-gray-100 select-none' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {column.header}
                      {column.sortable && sortConfig?.key === column.key && (
                        <span className="text-blue-600">
                          {sortConfig.direction === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
                {actionsColumn && (onView || onEdit || onDelete || onNote) && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Thao tác
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {displayData.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length + (actionsColumn ? 1 : 0)}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    {searchQuery || Object.keys(filters).length > 0
                      ? 'Không tìm thấy kết quả'
                      : emptyMessage}
                  </td>
                </tr>
              ) : (
                displayData.map((item) => (
                  <tr key={String(item.id)} className="hover:bg-gray-50 transition-colors">
                    {columns.map((column) => (
                      <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {column.render ? column.render(item) : String(item[column.key as keyof T] || '')}
                      </td>
                    ))}
                    {actionsColumn && (onView || onEdit || onDelete || onNote) && (
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex gap-2">
                          {onView && (
                            <button
                              onClick={() => onView(item)}
                              className="px-3 py-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors flex items-center gap-1.5 text-xs font-medium"
                              title="Xem chi tiết"
                            >
                              <FaEye />
                              <span className="hidden sm:inline">Xem</span>
                            </button>
                          )}
                          {onEdit && (
                            <button
                              onClick={() => onEdit(item)}
                              className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-1.5 text-xs font-medium"
                              title="Sửa"
                            >
                              <FaEdit />
                              <span className="hidden sm:inline">Sửa</span>
                            </button>
                          )}
                          {onNote && (
                            <button
                              onClick={() => onNote(item)}
                              className="px-3 py-1.5 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors flex items-center gap-1.5 text-xs font-medium"
                              title="Ghi chú"
                            >
                              <FaStickyNote />
                              <span className="hidden sm:inline">Ghi chú</span>
                            </button>
                          )}
                          {onDelete && (
                            <button
                              onClick={() => handleDelete(item)}
                              className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors flex items-center gap-1.5 text-xs font-medium"
                              title="Xóa"
                            >
                              <FaTrash />
                              <span className="hidden sm:inline">Xóa</span>
                            </button>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer with results count and pagination */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {searchQuery || Object.keys(filters).length > 0 ? (
              <>Tìm thấy <strong>{sortedData.length}</strong> kết quả</>
            ) : (
              <>Tổng cộng <strong>{data.length}</strong> mục</>
            )}
          </div>
          {pagination && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => pagination.onChange(pagination.current - 1, pagination.pageSize)}
                disabled={pagination.current === 1}
                className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Trước
              </button>
              <span className="text-sm text-gray-600">
                Trang {pagination.current} / {Math.ceil(pagination.total / pagination.pageSize)}
              </span>
              <button
                onClick={() => pagination.onChange(pagination.current + 1, pagination.pageSize)}
                disabled={pagination.current >= Math.ceil(pagination.total / pagination.pageSize)}
                className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sau
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DataTable
