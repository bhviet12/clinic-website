import { IconType } from 'react-icons'
import { FaStethoscope, FaHospital, FaXRay } from "react-icons/fa"

export interface HeroSlide {
  id: number
  badge: string
  badgeIcon: IconType
  title1: string
  title2: string
  description: string
  icon: IconType
  gradient: string
  iconColor: string
  imageText: string
}

export const heroBannerSlides: HeroSlide[] = [
  {
    id: 1,
    badge: "ĐỘI NGŨ BÁC SĨ",
    badgeIcon: FaStethoscope,
    title1: "Bác sĩ",
    title2: "chuyên nghiệp",
    description: "Đội ngũ bác sĩ giàu kinh nghiệm, tận tâm và chuyên nghiệp, luôn sẵn sàng chăm sóc sức khỏe của bạn với dịch vụ chất lượng cao nhất.",
    icon: FaStethoscope,
    gradient: "from-cream-light to-cream-pale",
    iconColor: "text-navy-dark",
    imageText: "Bác Sĩ"
  },
  {
    id: 2,
    badge: "BỆNH VIỆN HIỆN ĐẠI",
    badgeIcon: FaHospital,
    title1: "Bệnh viện",
    title2: "hiện đại",
    description: "Cơ sở vật chất hiện đại, không gian sạch sẽ và tiện nghi, mang đến trải nghiệm chăm sóc sức khỏe tốt nhất cho bệnh nhân.",
    icon: FaHospital,
    gradient: "from-blue-sky to-cream-pale",
    iconColor: "text-navy-dark",
    imageText: "Bệnh Viện"
  },
  {
    id: 3,
    badge: "THIẾT BỊ TIÊN TIẾN",
    badgeIcon: FaXRay,
    title1: "Máy móc",
    title2: "tiên tiến",
    description: "Hệ thống máy móc và thiết bị y tế hiện đại, được nhập khẩu từ các nước phát triển, đảm bảo chẩn đoán chính xác và điều trị hiệu quả.",
    icon: FaXRay,
    gradient: "from-cream-pale to-blue-sky",
    iconColor: "text-navy-dark",
    imageText: "Máy Móc"
  }
]

export const heroBannerConfig = {
  autoSlideInterval: 5000, // Thời gian chuyển slide (ms)
  commonTitle: "Sức khỏe hàng đầu",
  buttons: {
    primary: "KHÁM PHÁ",
    secondary: "TẤT CẢ DỊCH VỤ"
  }
}
