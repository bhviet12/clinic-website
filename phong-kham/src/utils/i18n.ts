import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    supportedLngs: ['vi', 'en'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    // Force reload translations by clearing cache on version change
    // Change this version number to force reload translations
    load: 'languageOnly',
    resources: {
      vi: {
        translation: {
          common: {
            home: 'Trang chủ',
          },
          navigation: {
            home: 'TRANG CHỦ',
            about: 'GIỚI THIỆU',
            products: 'SẢN PHẨM +',
            services: 'DỊCH VỤ',
            news: 'TIN TỨC',
            contact: 'LIÊN HỆ',
            contactNow: 'LIÊN HỆ NGAY',
          },
          pages: {
            about: {
              title: 'Giới thiệu',
              breadcrumb: 'Giới thiệu',
            },
            services: {
              title: 'Dịch vụ',
              breadcrumb: 'Dịch vụ',
            },
            contact: {
              title: 'Liên hệ',
              breadcrumb: 'Liên hệ',
            },
          },
        },
      },
      en: {
        translation: {
          common: {
            home: 'Home',
          },
          navigation: {
            home: 'HOME',
            about: 'ABOUT',
            products: 'PRODUCTS +',
            services: 'SERVICES',
            news: 'NEWS',
            contact: 'CONTACT',
            contactNow: 'CONTACT NOW',
          },
          pages: {
            about: {
              title: 'About Us',
              breadcrumb: 'About',
            },
            services: {
              title: 'Services',
              breadcrumb: 'Services',
            },
            contact: {
              title: 'Contact',
              breadcrumb: 'Contact',
            },
          },
        },
      },
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  })

// Clear i18n cache if needed (uncomment to force reload translations)
// localStorage.removeItem('i18nextLng')
// localStorage.removeItem('i18nextLng-vi')
// localStorage.removeItem('i18nextLng-en')

export default i18n

