import Container from '../../Container'

const ExperienceServicesSection = () => {
  const items = [
    {
      title: 'Bác sĩ chuyên gia',
      description: 'Đội ngũ bác sĩ chuyên gia được tuyển chọn kỹ càng.',
      icon: '👨‍⚕️',
    },
    {
      title: 'Phương pháp tiên tiến',
      description: 'Phương pháp điều trị hiện đại, hiệu quả và an toàn.',
      icon: '🧪',
    },
    {
      title: 'Thiết bị hàng đầu',
      description: 'Thiết bị đảm bảo chất lượng chẩn đoán chính xác.',
      icon: '🩻',
    },
    {
      title: 'Hỗ trợ 24/7',
      description: 'Luôn sẵn sàng hỗ trợ nhanh chóng, kịp thời.',
      icon: '⏰',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-500 mb-3">
            DỊCH VỤ CAO CẤP
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-blue-900 leading-tight">
            Nhiều Năm Kinh Nghiệm
            <br />
            Trong Dịch Vụ Y Tế
          </h2>
        </div>

        {/* Top cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-12">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-3xl bg-white shadow-md hover:shadow-xl border border-slate-100 hover:border-emerald-200 transition-all duration-300 px-6 py-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-3xl">
                <span>{item.icon}</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-blue-900 group-hover:text-emerald-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom video/image block */}
        <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
          <div className="relative aspect-[16/9] w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-emerald-500/20 blur-xl" />
                <button
                  type="button"
                  className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 hover:scale-105 transition-transform"
                >
                  <span className="ml-1 text-3xl">▶</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ExperienceServicesSection

