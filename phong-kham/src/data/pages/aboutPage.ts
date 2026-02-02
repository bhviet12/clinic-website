export interface Stat {
  value: string
  label: string
}

export const aboutPageData = {
  introSection: {
    badge: "KHÁM PHÁ DỊCH VỤ",
    title: "Chăm Sóc Sức Khỏe Là Ưu Tiên Hàng Đầu",
    description: "Tại Bệnh viện/Phòng khám, chúng tôi tận tâm chăm sóc từng bệnh nhân, đặt sự an toàn và thoải mái lên hàng đầu. Chúng tôi cung cấp đa dạng dịch vụ y tế từ khám tổng quát, chẩn đoán, điều trị cho đến chăm sóc sau xuất viện.",
    features: [
      'Chuyên gia y tế',
      'Công nghệ tiên tiến',
      'Thiết bị hiện đại',
      'Tư vấn y tế',
    ],
    buttonText: "KHÁM PHÁ",
    testimonial: {
      name: "Dr. Esita Jabed",
      quote: "Tôi rất ấn tượng với đội ngũ y bác sĩ tại Bệnh viện",
      rating: 5,
      phone: "+(84) 0313-728-397"
    },
    stats: [
      { value: '69k+', label: 'Bệnh nhân hài lòng' },
      { value: '236+', label: 'Bác sĩ chuyên nghiệp' },
      { value: '19k+', label: 'Hoạt động thành công' },
      { value: '320+', label: 'Phần thưởng đánh giá' },
    ] as Stat[]
  }
}
