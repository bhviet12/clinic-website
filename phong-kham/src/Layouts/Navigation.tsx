import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../contexts/AuthContext'
import Button from '../components/Button/index.tsx'
import Container from '../components/Container'
import logo from '../assets/static/TD logo_Artboard 4 copy.png'
import { FaSearch, FaTimes, FaBars, FaUser } from 'react-icons/fa'

const Navigation = () => {
  const { t, i18n } = useTranslation()
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const currentLang = i18n.language === 'en' ? 'en' : 'vi'

  const toggleLanguage = () => {
    const nextLang = currentLang === 'vi' ? 'en' : 'vi'
    void i18n.changeLanguage(nextLang)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (isSearchOpen) {
      setSearchQuery('')
    }
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/news?search=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <nav className="w-full bg-white sticky top-0 z-50 border-b border-gray-200 transition-shadow duration-300 hover:shadow-md">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Logo" className='w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 h-auto' />
            </Link>
                    </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex gap-6 items-center">
              <li>
                <Link to="/" className="text-sm text-gray-700 hover:text-blue-600 font-medium">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-700 hover:text-blue-600 font-medium">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-700 hover:text-blue-600 font-medium">
                  {t('navigation.services')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm text-gray-700 hover:text-blue-600 font-medium">
                  {t('navigation.news')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-700 hover:text-blue-600 font-medium">
                  {t('navigation.contact')}
                </Link>
              </li>
                    </ul>
                </div>

          {/* Icons & Button - Desktop */}
          <div className="hidden lg:flex flex-shrink-0 items-center gap-4">
            {/* Search */}
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Tìm kiếm..."
                  autoFocus
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm w-64 transition-all"
                />
                <button
                  type="button"
                  onClick={toggleSearch}
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Đóng tìm kiếm"
                >
                  <FaTimes className="text-lg" />
                </button>
              </form>
            ) : (
              <button
                onClick={toggleSearch}
                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Mở tìm kiếm"
              >
                <FaSearch className="text-xl" />
              </button>
            )}

            {/* Language toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs font-semibold border border-gray-300 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              {currentLang === 'vi' ? 'VI' : 'EN'}
            </button>

            {/* Dashboard Link - Only show if authenticated */}
            {isAuthenticated && (
              <Link 
                to="/dashboard" 
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FaUser className="text-base" />
                <span>Dashboard</span>
              </Link>
            )}

            {/* Contact Button */}
            <Link to="/contact">
              <Button color="primary" size="large">
                {t('navigation.contactNow')}
              </Button>
            </Link>
            </div>

          {/* Mobile Icons */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Search - Mobile */}
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Tìm kiếm..."
                  autoFocus
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={toggleSearch}
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Đóng tìm kiếm"
                >
                  <FaTimes className="text-lg" />
                </button>
              </form>
            ) : (
              <button
                onClick={toggleSearch}
                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Mở tìm kiếm"
              >
                <FaSearch className="text-lg" />
              </button>
            )}

            {/* Language toggle - Mobile */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs font-semibold border border-gray-300 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              {currentLang === 'vi' ? 'VI' : 'EN'}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link 
                  to="/" 
                  className="block text-base text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={closeMenu}
                >
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block text-base text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={closeMenu}
                >
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="block text-base text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={closeMenu}
                >
                  {t('navigation.services')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/news" 
                  className="block text-base text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={closeMenu}
                >
                  {t('navigation.news')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block text-base text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={closeMenu}
                >
                  {t('navigation.contact')}
                </Link>
              </li>
              {/* Dashboard Link - Mobile - Only show if authenticated */}
              {isAuthenticated && (
                <li>
                  <Link 
                    to="/dashboard" 
                    className="flex items-center gap-2 text-base text-gray-700 hover:text-blue-600 font-medium py-2"
                    onClick={closeMenu}
                  >
                    <FaUser className="text-base" />
                    <span>Dashboard</span>
                  </Link>
                </li>
              )}
              <li className="pt-2">
                <Link to="/contact" onClick={closeMenu}>
                  <Button color="primary" size="medium" className="w-full">
                    {t('navigation.contactNow')}
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navigation; 