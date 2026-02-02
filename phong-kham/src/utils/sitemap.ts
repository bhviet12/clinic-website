import { useEffect } from 'react'

// Sitemap generator - This will be used to generate sitemap.xml dynamically
export const generateSitemap = (baseUrl: string) => {
  const routes = [
    { url: '/', changefreq: 'daily', priority: '1.0' },
    { url: '/about', changefreq: 'monthly', priority: '0.8' },
    { url: '/services', changefreq: 'weekly', priority: '0.9' },
    { url: '/contact', changefreq: 'monthly', priority: '0.7' },
    // Service detail pages
    { url: '/service/nha-khoa', changefreq: 'weekly', priority: '0.8' },
    { url: '/service/kham-tong-quat', changefreq: 'weekly', priority: '0.8' },
    { url: '/service/tim-mach', changefreq: 'weekly', priority: '0.8' },
    { url: '/service/da-lieu', changefreq: 'weekly', priority: '0.8' },
    { url: '/service/mat', changefreq: 'weekly', priority: '0.8' },
    { url: '/service/thi-giac', changefreq: 'weekly', priority: '0.8' },
    { url: '/service/xuong-khop', changefreq: 'weekly', priority: '0.8' },
    { url: '/service/sieu-am', changefreq: 'weekly', priority: '0.8' },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return sitemap
}

// Hook to generate and serve sitemap (for server-side rendering)
export const useSitemap = () => {
  useEffect(() => {
    // This would typically be handled server-side
    // For client-side, you can create a /sitemap.xml route
  }, [])
}
