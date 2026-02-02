import { IconType } from 'react-icons'
import { 
  FaPills, 
  FaTooth, 
  FaProcedures, 
  FaBrain, 
  FaBaby, 
  FaEye, 
  FaBone, 
  FaHeartbeat, 
  FaSyringe, 
  FaTint, 
  FaLungs, 
  FaDeaf 
} from 'react-icons/fa'

export interface ServicePageItem {
  slug: string
  icon: IconType
  title: string
  doctorCount: string
}

export const servicesPageData = {
  badge: "DỊCH VỤ ĐA DẠNG",
  title: "Cung Cấp Dịch Vụ Chuyên Sâu, Chất Lượng",
  services: [
    {
      slug: 'chuan-doan',
      icon: FaPills,
      title: 'Chuẩn đoán',
      doctorCount: '30+ Bác sĩ',
    },
    {
      slug: 'nha-khoa',
      icon: FaTooth,
      title: 'Nha khoa',
      doctorCount: '20+ Bác sĩ',
    },
    {
      slug: 'noi-soi',
      icon: FaProcedures,
      title: 'Nội soi',
      doctorCount: '20+ Bác sĩ',
    },
    {
      slug: 'than-kinh',
      icon: FaBrain,
      title: 'Thần kinh',
      doctorCount: '10+ Bác sĩ',
    },
    {
      slug: 'phu-khoa',
      icon: FaBaby,
      title: 'Phụ khoa',
      doctorCount: '30+ Bác sĩ',
    },
    {
      slug: 'thi-giac',
      icon: FaEye,
      title: 'Thị giác',
      doctorCount: '24+ Bác sĩ',
    },
    {
      slug: 'xuong-khop',
      icon: FaBone,
      title: 'Xương khớp',
      doctorCount: '26+ Bác sĩ',
    },
    {
      slug: 'tim-mach',
      icon: FaHeartbeat,
      title: 'Tim mạch',
      doctorCount: '20+ Bác sĩ',
    },
    {
      slug: 'phau-thuat',
      icon: FaSyringe,
      title: 'Phẫu thuật',
      doctorCount: '20+ Bác sĩ',
    },
    {
      slug: 'truyen-mau',
      icon: FaTint,
      title: 'Truyền máu',
      doctorCount: '24+ Bác sĩ',
    },
    {
      slug: 'khoa-phoi',
      icon: FaLungs,
      title: 'Khoa phổi',
      doctorCount: '26+ Bác sĩ',
    },
    {
      slug: 'thinh-giac',
      icon: FaDeaf,
      title: 'Thính giác',
      doctorCount: '20+ Bác sĩ',
    },
  ] as ServicePageItem[],
  banner: {
    title: "Chúng Tôi Rất Vui Được Cung Cấp Cho Bạn Sức Khỏe.",
    buttonText: "LIÊN HỆ NGAY"
  },
  buttonText: "XEM THÊM"
}
