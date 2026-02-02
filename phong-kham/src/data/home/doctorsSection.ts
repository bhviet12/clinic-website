export interface Doctor {
  name: string
  role: string
}

export const doctorsSectionData = {
  badge: "GIỚI THIỆU ĐỘI NGŨ",
  title: "Bác Sĩ Chuyên Gia",
  doctors: [
    {
      name: 'Dr. Emanuel Mac',
      role: 'Vật lý trị liệu',
    },
    {
      name: 'Dr. Willium Lily',
      role: 'Khoa tim mạch',
    },
    {
      name: 'Dr. Esabel Macran',
      role: 'Nha sĩ',
    },
    {
      name: 'Dr. Malcolm Function',
      role: 'Khoa thần kinh',
    },
  ] as Doctor[]
}
