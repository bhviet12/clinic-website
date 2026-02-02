import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useSEO, generateOrganizationSchema, generateBreadcrumbSchema } from '../utils/seo'
import MainLayout from '../Layouts/MainLayout'
import Container from '../components/Container'
import { FaUser, FaCalendarAlt, FaComment, FaSearch, FaChevronRight } from 'react-icons/fa'
import { newsPageData } from '../data/pages/newsPage'

const News = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const [searchParams] = useSearchParams()
  const urlSearchQuery = searchParams.get('search') || ''
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery)

  // Update search query when URL changes
  useEffect(() => {
    setSearchQuery(urlSearchQuery)
  }, [urlSearchQuery])

  const { articles, sidebar, buttonText, emptyStateText } = newsPageData
  const latestArticles = articles.slice(0, 3)

  const filteredArticles = searchQuery
    ? articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : articles

  useSEO({
    title: 'Tin Tức & Blog - Medical | Phòng Khám Chất Lượng',
    description: 'Cập nhật tin tức y tế mới nhất, các bài viết về sức khỏe, và thông tin hữu ích từ phòng khám của chúng tôi.',
    keywords: 'tin tức y tế, blog sức khỏe, thông tin y khoa, phòng khám, medical news',
    canonical: `${baseUrl}/news`,
    ogUrl: `${baseUrl}/news`,
    structuredData: [
      generateOrganizationSchema(baseUrl),
      generateBreadcrumbSchema([
        { name: 'Trang chủ', url: baseUrl },
        { name: 'Tin tức', url: `${baseUrl}/news` }
      ])
    ]
  })

  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen py-8 lg:py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {filteredArticles.map((article, index) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Article Image */}
                  <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    {index === 0 && (
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                          <FaChevronRight className="text-gray-700 rotate-180" />
                        </button>
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                          <FaChevronRight className="text-gray-700" />
                        </button>
                      </div>
                    )}
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Article Image {article.id}</span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1.5">
                        <FaUser className="text-xs" />
                        <span>Bởi {article.author}</span>
                      </div>
                      <span>-</span>
                      <div className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-xs" />
                        <span>{article.date}</span>
                      </div>
                      <span>-</span>
                      <div className="flex items-center gap-1.5">
                        <FaComment className="text-xs" />
                        <span>Bình luận ({article.comments})</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.description}
                    </p>

                    {/* Read More Button */}
                    <Link
                      to={`/news/${article.slug}`}
                      className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {buttonText}
                    </Link>
                  </div>
                </article>
              ))}

              {filteredArticles.length === 0 && (
                <div className="bg-white rounded-xl p-12 text-center">
                  <p className="text-gray-500 text-lg">{emptyStateText}</p>
                </div>
              )}
            </div>

            {/* Sidebar - Right Column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Search Bar */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder={sidebar.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                  />
                  <button className="px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors flex items-center justify-center">
                    <FaSearch />
                  </button>
                </div>
              </div>

              {/* Latest Articles */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-green-500 inline-block">
                  {sidebar.latestArticlesTitle}
                </h3>
                <div className="space-y-4 mt-6">
                  {latestArticles.map((article) => (
                    <Link
                      key={article.id}
                      to={`/news/${article.slug}`}
                      className="flex gap-3 group hover:opacity-80 transition-opacity"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <span className="text-gray-400 text-xs">IMG</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2 mb-1">
                          {article.title}
                        </h4>
                        <p className="text-xs text-gray-500">{article.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-green-500 inline-block">
                  {sidebar.specialtiesTitle}
                </h3>
                <div className="space-y-2 mt-6">
                  {sidebar.specialties.map((specialty, index) => (
                    <button
                      key={index}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-300 transition-all duration-200 flex items-center justify-between group text-left"
                    >
                      <span className="text-sm font-medium text-gray-700 group-hover:text-green-600">
                        {specialty}
                      </span>
                      <FaChevronRight className="text-gray-400 group-hover:text-green-600 text-xs" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Comments */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-green-500 inline-block">
                  {sidebar.recentCommentsTitle}
                </h3>
                <div className="space-y-3 mt-6">
                  {sidebar.recentComments.map((comment, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
                    >
                      <FaComment className="text-xs mt-1 flex-shrink-0 text-gray-400" />
                      <div className="flex-1">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-gray-500"> trong </span>
                        <span className="text-gray-700 hover:text-green-600">{comment.article}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Keywords */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-green-500 inline-block">
                  {sidebar.popularKeywordsTitle}
                </h3>
                <div className="flex flex-wrap gap-2 mt-6">
                  {sidebar.popularKeywords.map((keyword, index) => (
                    <button
                      key={index}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-600 rounded-full text-xs font-medium transition-colors duration-200"
                    >
                      {keyword}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  )
}

export default News
