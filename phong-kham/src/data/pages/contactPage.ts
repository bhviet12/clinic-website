export interface ContactRegion {
  name: string
  address: string
  email: string
  phone: string
}

export interface OperatingHours {
  weekdays: string
  weekends: string
}

export const contactPageData = {
  regions: [
    {
      name: 'Miền Nam',
      address: '1073/23 Cách Mạng Tháng 8, P.7, Q. Tân Bình, TP.HCM',
      email: 'info@themona.global',
      phone: '(+84) 0313-728-397'
    },
    {
      name: 'Miền Trung',
      address: '1073/23 Cách Mạng Tháng 8, P.7, Q. Tân Bình, TP.HCM',
      email: 'info@themona.global',
      phone: '(+84) 0313-728-397'
    },
    {
      name: 'Miền Bắc',
      address: '1073/23 Cách Mạng Tháng 8, P.7, Q. Tân Bình, TP.HCM',
      email: 'info@themona.global',
      phone: '(+84) 0313-728-397'
    }
  ] as ContactRegion[],
  operatingHours: {
    weekdays: 'Thứ hai - thứ sáu: 09:00 - 18:00',
    weekends: 'Thứ bảy - chủ nhật: Đóng cửa'
  } as OperatingHours,
  operatingHoursTitle: "Giờ hoạt động",
  supportForm: {
    title: "Bạn Cần Hỗ Trợ ?",
    fields: {
      name: {
        placeholder: "Họ tên *"
      },
      email: {
        placeholder: "Email *"
      },
      phone: {
        placeholder: "Số điện thoại *"
      },
      subject: {
        placeholder: "Chọn chủ đề",
        options: [
          { value: "general", label: "Tư vấn tổng quát" },
          { value: "appointment", label: "Đặt lịch hẹn" },
          { value: "service", label: "Thông tin dịch vụ" },
          { value: "other", label: "Khác" }
        ]
      },
      notes: {
        placeholder: "Ghi chú thêm..."
      }
    },
    buttonText: "LIÊN HỆ NGAY"
  },
  contactSchema: {
    businessName: 'Medical - Phòng Khám Chất Lượng',
    country: 'VN',
    locality: 'Việt Nam',
    telephone: '+84-xxx-xxx-xxx',
    email: 'contact@medical.com'
  }
}
