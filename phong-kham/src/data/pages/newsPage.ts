export interface Article {
  id: number
  image: string
  author: string
  date: string
  comments: number
  title: string
  description: string
  slug: string
  category: string
}

export interface RecentComment {
  author: string
  article: string
}

export const newsPageData = {
  articles: [
    {
      id: 1,
      image: '/placeholder-news-1.jpg',
      author: 'Monamedia',
      date: '07/12/2023',
      comments: 3,
      title: 'How Business Is Taking Over and What to Do About It',
      description: 'We offer flexible appointment scheduling options to accommodate your busy lifestyle. Whether you prefer to book in advance or need a same-day appointment, we strive to make the process as seamless as possible. Especially in light of the ongoing COVID-19 pandemic, we maintain rigorous safety protocols',
      slug: 'how-business-is-taking-over',
      category: 'Cardiology'
    },
    {
      id: 2,
      image: '/placeholder-news-2.jpg',
      author: 'Monamedia',
      date: '07/12/2023',
      comments: 5,
      title: 'Health Vs. Wealth Navigate Business',
      description: 'Understanding the balance between health and wealth is crucial in today\'s fast-paced world. Our clinic provides comprehensive care strategies that help you navigate these priorities effectively.',
      slug: 'health-vs-wealth-navigate-business',
      category: 'Dental Care'
    },
    {
      id: 3,
      image: '/placeholder-news-3.jpg',
      author: 'Monamedia',
      date: '07/12/2023',
      comments: 2,
      title: 'Preserving Care Strategy Amidst Food',
      description: 'Maintaining a healthy diet while managing medical care can be challenging. Our nutritionists work closely with our medical team to develop personalized care strategies.',
      slug: 'preserving-care-strategy-amidst-food',
      category: 'Gastroenterologist'
    },
    {
      id: 4,
      image: '/placeholder-news-4.jpg',
      author: 'Monamedia',
      date: '06/12/2023',
      comments: 8,
      title: 'Modern Healthcare Solutions for Everyone',
      description: 'Our clinic is committed to providing accessible healthcare solutions for all patients. We combine cutting-edge technology with compassionate care.',
      slug: 'modern-healthcare-solutions',
      category: 'Neurology'
    },
    {
      id: 5,
      image: '/placeholder-news-5.jpg',
      author: 'Monamedia',
      date: '05/12/2023',
      comments: 4,
      title: 'Preventive Care: Your First Line of Defense',
      description: 'Prevention is better than cure. Learn about our comprehensive preventive care programs designed to keep you healthy and active.',
      slug: 'preventive-care-first-line-defense',
      category: 'Ophthalmology'
    }
  ] as Article[],
  sidebar: {
    searchPlaceholder: "Tìm kiếm...",
    latestArticlesTitle: "Bài viết mới nhất",
    specialtiesTitle: "Chuyên khoa",
    specialties: ['Neurology', 'Ophthalmology', 'Plastic Surgeons'],
    recentCommentsTitle: "Phản hồi gần đây",
    recentComments: [
      { author: 'mediax', article: 'Ciprofloxacin Antibiotics Drug' },
      { author: 'mediax', article: 'Surgery Hands Gloves' },
      { author: 'mediax', article: 'Auto Blood Presser Meter' },
      { author: 'mediax', article: 'Blood Pressure Machine' },
      { author: 'mediax', article: 'CAD Dentistry Prosthesis' }
    ] as RecentComment[],
    popularKeywordsTitle: "Từ khóa phổ biến",
    popularKeywords: [
      'Advice', 'Doctors', 'Health', 'Hospital', 'Medical', 
      'Medicine', 'Skin Care', 'Solution'
    ]
  },
  buttonText: "XEM THÊM",
  emptyStateText: "Không tìm thấy bài viết nào."
}
