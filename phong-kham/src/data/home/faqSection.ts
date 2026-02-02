export interface FAQ {
  question: string
  answer: string
}

export const faqSectionData = {
  badge: "FAQS",
  title: "Giải Đáp Các Thắc Mắc",
  faqs: [
    {
      question: 'Bệnh viện có chấp nhận các loại bảo hiểm y tế nào?',
      answer:
        'Bệnh viện của chúng tôi chấp nhận đa số các loại bảo hiểm y tế, bao gồm bảo hiểm y tế tư nhân và các chương trình bảo hiểm y tế công cộng. Tuy nhiên, để đảm bảo rằng bệnh viện chấp nhận bảo hiểm của bạn, hãy liên hệ với chúng tôi hoặc kiểm tra trên trang web của chúng tôi để biết thông tin chi tiết về các loại bảo hiểm được chấp nhận.',
    },
    {
      question: 'Làm thế nào để đặt lịch hẹn tại bệnh viện?',
      answer:
        'Bạn có thể đặt lịch hẹn bằng nhiều cách: gọi điện trực tiếp, đặt lịch trực tuyến qua website, hoặc đến trực tiếp bệnh viện. Chúng tôi khuyến khích đặt lịch trước để đảm bảo thời gian phù hợp với bạn.',
    },
    {
      question: 'Bệnh nhân cần chuẩn bị những gì trước khi đến khám bệnh?',
      answer:
        'Bệnh nhân nên mang theo giấy tờ tùy thân, thẻ bảo hiểm y tế (nếu có), các kết quả xét nghiệm hoặc hồ sơ y tế trước đó, danh sách thuốc đang sử dụng, và các câu hỏi muốn hỏi bác sĩ.',
    },
  ] as FAQ[]
}
