import { IconType } from 'react-icons'
import { FaStethoscope, FaHeartbeat, FaXRay, FaPills, FaUserMd, FaHospital } from 'react-icons/fa'

export interface Service {
  icon: IconType
  title: string
  subtitle: string
  description: string
}

export const servicesSectionData = {
  badge: "DỊCH VỤ ĐA DẠNG",
  title: "Cung Cấp Dịch Vụ",
  description: "Chúng tôi cung cấp đa dạng các dịch vụ y tế chất lượng cao để đáp ứng mọi nhu cầu chăm sóc sức khỏe của bạn",
  services: [
    {
      icon: FaStethoscope,
      title: 'Chuẩn đoán',
      subtitle: '30+ Bác sĩ',
      description: 'Dịch vụ khám sức khỏe tổng quát toàn diện',
    },
    {
      icon: FaHeartbeat,
      title: 'Tim mạch',
      subtitle: '20+ Bác sĩ',
      description: 'Chuyên khoa tim mạch với thiết bị hiện đại',
    },
    {
      icon: FaXRay,
      title: 'Nội soi',
      subtitle: '18+ Bác sĩ',
      description: 'Chẩn đoán nội soi an toàn và chính xác',
    },
    {
      icon: FaPills,
      title: 'Dược phẩm',
      subtitle: '15+ Dược sĩ',
      description: 'Cung cấp thuốc chất lượng, đảm bảo an toàn',
    },
    {
      icon: FaUserMd,
      title: 'Tư vấn y tế',
      subtitle: '25+ Bác sĩ',
      description: 'Tư vấn chuyên sâu từ đội ngũ bác sĩ giàu kinh nghiệm',
    },
    {
      icon: FaHospital,
      title: 'Cấp cứu 24/7',
      subtitle: '10+ Bác sĩ',
      description: 'Dịch vụ cấp cứu khẩn cấp 24 giờ',
    },
    {
      icon: FaUserMd,
      title: 'Tư vấn y tế',
      subtitle: '25+ Bác sĩ',
      description: 'Tư vấn chuyên sâu từ đội ngũ bác sĩ giàu kinh nghiệm',
    },
    {
      icon: FaHospital,
      title: 'Cấp cứu 24/7',
      subtitle: '10+ Bác sĩ',
      description: 'Dịch vụ cấp cứu khẩn cấp 24 giờ',
    },
  ] as Service[],
  footerText: "Hơn 20 dịch vụ ưu đãi khác...",
  viewAllText: "XEM TẤT CẢ DỊCH VỤ",
  buttonText: "XEM THÊM"
}
