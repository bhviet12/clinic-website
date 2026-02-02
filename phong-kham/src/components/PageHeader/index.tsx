import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import Container from '../Container'

type PageKey = 'about' | 'services' | 'contact'

interface PageHeaderProps {
  pageKey: PageKey
}

const PageHeader: FC<PageHeaderProps> = ({ pageKey }) => {
  const { t } = useTranslation()

  const title = t(`pages.${pageKey}.title`)
  const current = t(`pages.${pageKey}.breadcrumb`)
  const homeLabel = t('common.home')

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-sky-50 via-white to-sky-50 py-16 lg:py-20 border-b-2 border-gray-200">
      {/* Background shapes (simple, nhẹ) */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-0 top-0 h-40 w-40 -translate-x-1/3 -translate-y-1/3 rounded-full bg-sky-100" />
        <div className="absolute right-10 top-6 h-16 w-16 rounded-3xl border-4 border-emerald-400" />
        <div className="absolute bottom-4 left-10 h-10 w-10 rounded-2xl border-4 border-sky-300" />
      </div>

      <Container>
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-emerald-500 transition-colors">
              {homeLabel}
            </Link>
            <FaChevronRight className="text-xs text-emerald-500" />
            <span className="text-emerald-500">{current}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PageHeader

