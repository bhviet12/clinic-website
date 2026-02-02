export interface AboutFeature {
  label: string
}

export const aboutSectionData = {
  tag: "GIỚI THIỆU",
  title: "Giải Pháp Chăm Sóc Sức Khỏe Hợp Lý",
  description: "Tại Bệnh viện/Phòng khám, chúng tôi tận tâm chăm sóc từng bệnh nhân, đặt sự an toàn và sự thoải mái lên hàng đầu. Chúng tôi cung cấp các dịch vụ y tế đa dạng và chuyên sâu, từ khám bệnh, chẩn đoán, điều trị cho đến phục hồi và chăm sóc sau khi xuất viện.",
  features: [
    { label: "Chuyên gia y tế" },
    { label: "Công nghệ tiên tiến" },
    { label: "Chất lượng dịch vụ" },
    { label: "Thiết bị hiện đại" },
    { label: "Tư vấn y tế" },
    { label: "Quy trình rõ ràng" }
  ] as AboutFeature[],
  buttonText: "TÌM HIỂU THÊM",
  testimonial: {
    name: "Dr. Esita Jabed",
    quote: "Tôi rất ấn tượng với đội ngũ y bác sĩ tại Bệnh viện",
    rating: 5,
    phone: "+(84) 0313-728-397"
  }
}
