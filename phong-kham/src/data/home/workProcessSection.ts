export interface WorkStep {
  number: string
  title: string
  description: string
  color: 'green' | 'blue'
}

export const workProcessSectionData = {
  badge: "AN TÂM MỌI LÚC",
  title: "Quy Trình Làm Việc Hiệu Quả",
  steps: [
    {
      number: '01',
      title: 'Đăng ký bệnh nhân',
      description: 'Người bệnh cung cấp thông tin cá nhân để bệnh viện tạo hồ sơ và xếp lịch khám cho người bệnh',
      color: 'green',
    },
    {
      number: '02',
      title: 'Kiểm khám',
      description: 'Bác sĩ hoặc nhân viên y tế sẽ tiến hành khám và chẩn đoán tình trạng sức khỏe của người bệnh.',
      color: 'blue',
    },
    {
      number: '03',
      title: 'Điều trị và chăm sóc',
      description: 'Điều trị có thể bao gồm sử dụng thuốc, phẫu thuật, điều trị tại chỗ, hay các biện pháp kiểu mẫu khác.',
      color: 'green',
    },
    {
      number: '04',
      title: 'Theo dõi sức khỏe',
      description: 'Quá trình xuất viện bao gồm nhận lại các báo cáo xét nghiệm, tư vấn và theo dõi sức khỏe',
      color: 'blue',
    },
  ] as WorkStep[]
}
