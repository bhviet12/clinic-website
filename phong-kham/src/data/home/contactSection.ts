export interface WorkingHour {
  label: string
  value: string
}

export const contactSectionData = {
  workingHoursTitle: "Giờ làm việc",
  workingHoursDescription: "Cung cấp dịch vụ chất lượng vào thời gian làm việc hiệu quả.",
  workingHours: [
    { label: 'Thứ hai - Thứ ba', value: '9 sáng - 8 chiều' },
    { label: 'Thứ tư - Thứ năm', value: '8 sáng - 5 chiều' },
    { label: 'Thứ sáu', value: '7 sáng - 10 tối' },
    { label: 'Thứ bảy', value: '10 sáng - 7 tối' },
    { label: 'Chủ nhật', value: 'Đóng cửa' },
  ] as WorkingHour[],
  contactTitle: "Liên hệ",
  form: {
    namePlaceholder: "Họ tên *",
    phonePlaceholder: "Số điện thoại *",
    servicePlaceholder: "Chọn dịch vụ",
    serviceOptions: [
      { value: "general", label: "Khám tổng quát" },
      { value: "cardio", label: "Tim mạch" },
      { value: "dental", label: "Nha khoa" },
      { value: "other", label: "Khác" }
    ]
  },
  buttonText: "ĐẶT LỊCH NGAY"
}
