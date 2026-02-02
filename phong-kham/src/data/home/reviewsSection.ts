export interface Review {
  rating: number
  quote: string
  name: string
  role: string
  avatar: string
}

export const reviewsSectionData = {
  badge: "ĐÁNH GIÁ TÍCH CỰC",
  title: "Đánh Giá Từ Khách Hàng",
  autoSlideInterval: 5000, // Thời gian chuyển slide (ms)
  reviews: [
    {
      rating: 4,
      quote:
        'Dịch vụ khám bệnh tại đây rất thuận tiện và nhanh chóng. Tôi không phải chờ đợi lâu và quy trình khám bệnh được thực hiện một cách suôn sẻ.',
      name: 'Alexa Milton',
      role: 'Khách hàng',
      avatar: '/placeholder-avatar-1.jpg',
    },
    {
      rating: 5,
      quote:
        'Bệnh viện/Phòng khám có trang thiết bị y tế hiện đại và tiên tiến, giúp chẩn đoán và điều trị các bệnh một cách chính xác và hiệu quả.',
      name: 'Pelican Steve',
      role: 'Khách hàng',
      avatar: '/placeholder-avatar-2.jpg',
    },
    {
      rating: 5,
      quote:
        'Đội ngũ bác sĩ rất chuyên nghiệp và tận tâm. Họ lắng nghe và giải thích rõ ràng về tình trạng sức khỏe của tôi.',
      name: 'Sarah Johnson',
      role: 'Khách hàng',
      avatar: '/placeholder-avatar-3.jpg',
    },
    {
      rating: 4,
      quote:
        'Không gian phòng khám sạch sẽ, thoáng mát. Nhân viên phục vụ rất nhiệt tình và chu đáo.',
      name: 'Michael Chen',
      role: 'Khách hàng',
      avatar: '/placeholder-avatar-4.jpg',
    },
    {
      rating: 5,
      quote:
        'Tôi rất hài lòng với dịch vụ tại đây. Thời gian chờ đợi ngắn và quy trình đơn giản, thuận tiện.',
      name: 'Emily Davis',
      role: 'Khách hàng',
      avatar: '/placeholder-avatar-5.jpg',
    },
    {
      rating: 4,
      quote:
        'Giá cả hợp lý và chất lượng dịch vụ tốt. Tôi sẽ quay lại và giới thiệu cho bạn bè.',
      name: 'David Wilson',
      role: 'Khách hàng',
      avatar: '/placeholder-avatar-6.jpg',
    },
  ] as Review[]
}
