import Container from '../../Container'
import Button from '../../Button'
import { contactSectionData } from '../../../data/home/contactSection'

const ContactSection = () => {
  const { workingHoursTitle, workingHoursDescription, workingHours, contactTitle, form, buttonText } = contactSectionData

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white via-slate-50 to-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Working hours with image background */}
          <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {/* Background image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="text-white text-lg">Background Image</span>
              </div>
            </div>
            
            {/* Overlay content */}
            <div className="absolute inset-0 bg-blue-600/90 flex flex-col justify-center p-6 lg:p-8 text-white">
              <div className="absolute -left-10 -top-10 w-40 h-40 border-2 border-blue-400 rounded-3xl opacity-30" />
              <div className="absolute left-6 top-8 grid grid-rows-6 gap-1 opacity-30">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="w-1 h-1 rounded-full bg-blue-200" />
                ))}
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-2 relative z-10">{workingHoursTitle}</h3>
              <p className="text-sm text-blue-100 mb-6 max-w-xs relative z-10">
                {workingHoursDescription}
              </p>

              <div className="space-y-4 text-sm lg:text-base relative z-10">
                {workingHours.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center border-b border-blue-400/40 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="text-blue-100">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images + Contact form in one box */}
          <div className="bg-white rounded-3xl shadow-2xl p-4 lg:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* Images section - Left */}
              <div className="space-y-3 lg:space-y-4">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Doctor & Child</span>
                </div>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Doctors Group</span>
                </div>
              </div>

              {/* Contact form - Right */}
              <div className="flex flex-col">
                <h3 className="text-xl lg:text-2xl font-bold text-blue-900 mb-4">{contactTitle}</h3>
                <div className="space-y-3 flex-1">
                  <input
                    type="text"
                    placeholder={form.namePlaceholder}
                    className="w-full rounded-full bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder={form.phonePlaceholder}
                    className="w-full rounded-full bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                  <select
                    className="w-full rounded-full bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {form.servicePlaceholder}
                    </option>
                    {form.serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="date"
                      className="w-full rounded-full bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-500"
                    />
                    <input
                      type="time"
                      className="w-full rounded-full bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-500"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <Button color="primary" size="medium" className="w-full justify-center">
                    {buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
