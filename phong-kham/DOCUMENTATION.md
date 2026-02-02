# 📚 TÀI LIỆU DỰ ÁN PHÒNG KHÁM

---

## 📋 MỤC LỤC

1. [Hướng dẫn khởi tạo dự án](#hướng-dẫn-khởi-tạo-dự-án)
2. [Cấu trúc thư mục](#cấu-trúc-thư-mục)
3. [Cấu trúc website](#cấu-trúc-website)
4. [Báo cáo SEO](#báo-cáo-seo)
5. [Tùy chọn Font chữ](#tùy-chọn-font-chữ)
6. [Quản lý code với GitHub và GitLab](#quản-lý-code-với-github-và-gitlab)

---

## 🚀 HƯỚNG DẪN KHỞI TẠO DỰ ÁN

### Lệnh khởi tạo dự án

```bash
# 1. Tạo dự án Vite + React + TypeScript
npm create vite@latest clinic-website -- --template react-ts

# 2. Vào thư mục dự án
cd clinic-website

# 3. Cài đặt dependencies
npm install

# 4. Cài đặt TailwindCSS + PostCSS
npm install -D tailwindcss postcss autoprefixer

# 5. Khởi tạo Tailwind config
npx tailwindcss init -p

# 6. Cài đặt Ant Design
npm install antd

# 7. Cài đặt React Router
npm install react-router-dom

# 8. Cài đặt Axios
npm install axios

# 9. Cài đặt Lucide React icons (optional)
npm install lucide-react

# 10. Chạy dev server
npm run dev
```

### Sơ đồ thư mục

```
clinic-website/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       ├── logo.png
│       └── doctors/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── styles/
│   │       ├── globals.css
│   │       ├── variables.css
│   │       └── responsive.css
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── home/
│   │   │   ├── HeroBanner.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── CTA.tsx
│   │   ├── clinic/
│   │   │   ├── DoctorCard.tsx
│   │   │   ├── DoctorList.tsx
│   │   │   └── Departments.tsx
│   │   ├── appointment/
│   │   │   ├── AppointmentForm.tsx
│   │   │   ├── TimeSlot.tsx
│   │   │   └── AppointmentConfirm.tsx
│   │   └── blog/
│   │       ├── BlogCard.tsx
│   │       └── BlogList.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Clinic.tsx
│   │   ├── Doctors.tsx
│   │   ├── Services.tsx
│   │   ├── Appointment.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogDetail.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── layouts/
│   │   ├── MainLayout.tsx
│   │   ├── AuthLayout.tsx
│   │   └── AdminLayout.tsx
│   ├── hooks/
│   │   ├── useApi.ts
│   │   └── useWindowSize.ts
│   ├── services/
│   │   ├── api.ts
│   │   ├── doctorService.ts
│   │   ├── appointmentService.ts
│   │   └── clinicService.ts
│   ├── types/
│   │   ├── doctor.ts
│   │   ├── appointment.ts
│   │   ├── clinic.ts
│   │   └── common.ts
│   ├── constants/
│   │   ├── routes.ts
│   │   ├── api.ts
│   │   └── messages.ts
│   ├── utils/
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   ├── seo.ts
│   │   └── helpers.ts
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── .env.local
├── .gitignore
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

### Tóm tắt cấu trúc

- **assets/** - Hình ảnh, icon, CSS toàn cục
- **components/** - Components tái sử dụng, chia theo tính năng
- **pages/** - Các trang chính của ứng dụng
- **layouts/** - Layout wrapper cho các trang
- **hooks/** - Custom React hooks
- **services/** - API calls, business logic
- **types/** - TypeScript types/interfaces
- **constants/** - Hằng số, routes, messages
- **utils/** - Utility functions, helpers, SEO tools

---

## 🏗️ CẤU TRÚC WEBSITE

### Tổng quan

Dựa trên mẫu website bệnh viện/phòng khám chuyên nghiệp, đây là cấu trúc đề xuất:

### Cấu trúc thư mục đề xuất

```
src/
├── components/
│   ├── common/
│   │   ├── Header/          ✅ (Đã có)
│   │   ├── Navigation/      ✅ (Đã có)
│   │   ├── Footer/
│   │   └── Breadcrumb/
│   │
│   ├── home/
│   │   ├── HeroBanner/      - Banner chính với CTA
│   │   ├── AboutSection/    - Giới thiệu ngắn
│   │   ├── ServicesSection/ - Dịch vụ nổi bật
│   │   ├── DoctorsSection/  - Đội ngũ bác sĩ
│   │   ├── StatsSection/    - Thống kê (số liệu)
│   │   ├── Testimonials/    - Đánh giá khách hàng
│   │   └── CTASection/      - Call to action
│   │
│   ├── clinic/
│   │   ├── DoctorCard/      - Card bác sĩ
│   │   ├── ServiceCard/     - Card dịch vụ
│   │   ├── DepartmentCard/  - Card khoa/phòng ban
│   │   └── StatsCard/       - Card thống kê
│   │
│   ├── appointment/
│   │   ├── AppointmentForm/ - Form đặt lịch
│   │   ├── TimeSlotPicker/  - Chọn giờ
│   │   └── DoctorSelector/  - Chọn bác sĩ
│   │
│   └── blog/
│       ├── BlogCard/        - Card bài viết
│       ├── BlogList/        - Danh sách bài viết
│       └── RelatedPosts/   - Bài viết liên quan
│
├── pages/
│   ├── Home.tsx             - Trang chủ
│   ├── About.tsx             - Giới thiệu
│   ├── Services.tsx          - Dịch vụ
│   ├── ServiceDetail.tsx     - Chi tiết dịch vụ
│   ├── Doctors.tsx           - Bác sĩ
│   ├── DoctorDetail.tsx      - Chi tiết bác sĩ
│   ├── Appointment.tsx       - Đặt lịch
│   ├── Blog.tsx              - Tin tức/Blog
│   ├── BlogDetail.tsx        - Chi tiết bài viết
│   └── Contact.tsx           - Liên hệ
│
├── layouts/
│   ├── MainLayout.tsx        - Layout chính
│   └── AuthLayout.tsx        - Layout cho auth (nếu cần)
│
└── types/
    ├── doctor.ts
    ├── service.ts
    ├── appointment.ts
    └── blog.ts
```

### Các thành phần chính

#### 1. **Trang Chủ (Homepage)**
- Hero Banner với hình ảnh bệnh viện
- Section giới thiệu ngắn gọn
- Dịch vụ nổi bật (6-8 dịch vụ chính)
- Đội ngũ bác sĩ (4-6 bác sĩ)
- Thống kê (số bệnh nhân, năm kinh nghiệm, ...)
- Testimonials/Đánh giá
- CTA đặt lịch hẹn

#### 2. **Trang Giới Thiệu**
- Lịch sử phát triển
- Tầm nhìn & Sứ mệnh
- Giá trị cốt lõi
- Hình ảnh cơ sở vật chất
- Đội ngũ nhân viên

#### 3. **Trang Dịch Vụ**
- Grid layout các dịch vụ
- Filter theo khoa/phòng ban
- Chi tiết từng dịch vụ

#### 4. **Trang Bác Sĩ**
- Grid layout các bác sĩ
- Filter theo chuyên khoa
- Chi tiết bác sĩ (lịch làm việc, chuyên môn)

#### 5. **Trang Đặt Lịch**
- Form đặt lịch hẹn
- Chọn bác sĩ
- Chọn ngày/giờ
- Thông tin bệnh nhân

#### 6. **Trang Blog/Tin Tức**
- Danh sách bài viết
- Categories/Tags
- Chi tiết bài viết
- Related posts

#### 7. **Trang Liên Hệ**
- Thông tin liên hệ
- Form liên hệ
- Bản đồ Google Maps

### Tính năng cần thiết

1. **Responsive Design** - Mobile, Tablet, Desktop
2. **SEO Friendly** - Meta tags, structured data
3. **Fast Loading** - Optimize images, lazy loading
4. **Accessibility** - WCAG compliance
5. **Multi-language** (nếu cần) - Tiếng Việt/English

### Công nghệ đề xuất

- **Frontend**: React + TypeScript + Tailwind CSS ✅
- **UI Library**: Ant Design ✅
- **Routing**: React Router DOM ✅
- **Icons**: React Icons ✅
- **Forms**: React Hook Form + Yup
- **State Management**: Context API hoặc Zustand
- **API**: Axios ✅

### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Color Scheme

- Primary: Green (#22c55e) - Sức khỏe, tin cậy
- Secondary: Blue (#3b82f6) - Chuyên nghiệp
- Accent: White - Sạch sẽ, y tế
- Text: Dark gray/Black

### Next Steps

1. ✅ Header & Navigation (Đã có)
2. ⏳ Tạo Footer component
3. ⏳ Tạo Homepage với các sections
4. ⏳ Tạo các pages (About, Services, Doctors, etc.)
5. ⏳ Setup React Router
6. ⏳ Tạo các components cần thiết
7. ⏳ Add responsive design
8. ⏳ Optimize performance

---

## 📊 BÁO CÁO SEO WEBSITE PHÒNG KHÁM

### ✅ ĐÃ CÓ

#### 1. Meta Tags Cơ Bản
- ✅ Title tags (động theo từng trang)
- ✅ Meta description (động theo từng trang)
- ✅ Meta keywords
- ✅ Meta robots (index, follow)
- ✅ Language tag (Vietnamese)
- ✅ Viewport meta tag

#### 2. Open Graph Tags
- ✅ og:title
- ✅ og:description
- ✅ og:image
- ✅ og:type
- ✅ og:url (một số trang)

#### 3. Twitter Card
- ✅ twitter:card
- ✅ twitter:title
- ✅ twitter:description
- ✅ twitter:image

#### 4. Canonical URLs
- ✅ Đã implement cho tất cả các trang chính

#### 5. SEO Hook (useSEO)
- ✅ Đã được sử dụng ở tất cả các trang:
  - Home
  - About
  - Services
  - ServiceDetail
  - Contact

#### 6. Performance
- ✅ Lazy loading components
- ✅ Preconnect cho fonts

### ❌ CÒN THIẾU

#### 1. Structured Data (JSON-LD)
- ❌ Chưa có schema.org markup
- ❌ Thiếu LocalBusiness schema
- ❌ Thiếu MedicalBusiness schema
- ❌ Thiếu Organization schema
- ❌ Thiếu BreadcrumbList schema
- ❌ Thiếu FAQPage schema (cho FAQ section)

#### 2. Robots.txt
- ❌ Chưa có file robots.txt

#### 3. Sitemap.xml
- ❌ Chưa có sitemap.xml

#### 4. Image Optimization
- ⚠️ Một số images thiếu alt text
- ⚠️ Chưa có lazy loading cho images
- ⚠️ Chưa có responsive images (srcset)

#### 5. Technical SEO
- ⚠️ Chưa có hreflang tags (nếu có đa ngôn ngữ)
- ⚠️ Chưa có favicon đầy đủ (chỉ có vite.svg)
- ⚠️ Chưa có apple-touch-icon
- ⚠️ Chưa có manifest.json (PWA)

#### 6. Content SEO
- ⚠️ Heading structure cần kiểm tra (H1, H2, H3)
- ⚠️ Internal linking có thể cải thiện
- ⚠️ URL structure (đã tốt với slug)

#### 7. Mobile SEO
- ✅ Responsive design đã có
- ⚠️ Cần kiểm tra mobile-first indexing

### 📈 ĐIỂM SEO HIỆN TẠI: 65/100

#### Breakdown:
- Meta Tags: 9/10 ✅
- Open Graph: 8/10 ✅
- Structured Data: 0/10 ❌
- Technical SEO: 5/10 ⚠️
- Content SEO: 7/10 ⚠️
- Performance: 8/10 ✅
- Mobile: 8/10 ✅
- Accessibility: 6/10 ⚠️

### 🎯 KHUYẾN NGHỊ CẢI THIỆN

#### Ưu tiên CAO:
1. **Thêm Structured Data (JSON-LD)** - Tăng khả năng hiển thị trên Google
2. **Tạo robots.txt** - Hướng dẫn crawler
3. **Tạo sitemap.xml** - Giúp Google index nhanh hơn
4. **Thêm alt text cho tất cả images** - Cải thiện accessibility và SEO

#### Ưu tiên TRUNG BÌNH:
5. **Tối ưu favicon và icons** - Branding và UX
6. **Kiểm tra heading structure** - Content hierarchy
7. **Cải thiện internal linking** - Giúp Google crawl tốt hơn

#### Ưu tiên THẤP:
8. **PWA manifest** - Nếu muốn làm Progressive Web App
9. **Hreflang tags** - Nếu có nhiều ngôn ngữ

### 📝 NEXT STEPS

Tôi sẽ giúp bạn:
1. Thêm Structured Data (JSON-LD) cho tất cả các trang
2. Tạo robots.txt
3. Tạo sitemap.xml (dynamic)
4. Cải thiện alt text cho images
5. Thêm favicon và icons đầy đủ
6. Kiểm tra và cải thiện heading structure

---

## 🔤 TÙY CHỌN FONT CHỮ

### Font hiện tại
Dự án đang sử dụng: **Inter** (từ Google Fonts)

### Các font phổ biến hỗ trợ tiếng Việt

#### 1. **Google Fonts (Miễn phí, dễ tích hợp)**

##### Font Sans-serif (Không chân):
- **Inter** (hiện tại) - Modern, clean, professional
- **Roboto** - Rất phổ biến, dễ đọc
- **Open Sans** - Friendly, approachable
- **Lato** - Warm, friendly
- **Poppins** - Modern, geometric
- **Nunito** - Rounded, friendly
- **Montserrat** - Elegant, geometric
- **Source Sans Pro** - Clean, professional
- **Work Sans** - Modern, versatile
- **DM Sans** - Clean, contemporary

##### Font Serif (Có chân):
- **Playfair Display** - Elegant, classic (thường dùng cho heading)
- **Merriweather** - Readable, traditional
- **Lora** - Elegant, readable
- **Crimson Text** - Classic, readable

##### Font Display (Cho heading):
- **Bebas Neue** - Bold, impactful
- **Oswald** - Condensed, strong
- **Raleway** - Elegant, versatile
- **Barlow** - Modern, clean

#### 2. **Font hệ thống (Không cần tải)**

##### Windows:
- Segoe UI
- Arial
- Calibri

##### macOS:
- SF Pro Display
- Helvetica Neue
- Arial

##### Linux:
- Ubuntu
- Cantarell
- DejaVu Sans

#### 3. **Font tiếng Việt chuyên dụng**

##### Google Fonts hỗ trợ tiếng Việt tốt:
- **Noto Sans** - Hỗ trợ đầy đủ Unicode, nhiều ngôn ngữ
- **Noto Serif** - Phiên bản có chân
- **Roboto** - Hỗ trợ tốt tiếng Việt
- **Open Sans** - Hỗ trợ tốt tiếng Việt
- **Lato** - Hỗ trợ tốt tiếng Việt

#### 4. **Font premium (Trả phí)**
- **Avenir** - Premium, elegant
- **Proxima Nova** - Modern, versatile
- **Gotham** - Clean, professional
- **Futura** - Geometric, modern

### Cách thay đổi font

#### Bước 1: Cập nhật Google Fonts link trong `src/index.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
```

#### Bước 2: Cập nhật `tailwind.config.js`
```js
fontFamily: {
  sans: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
},
```

#### Bước 3: Cập nhật `src/index.css`
```css
body {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Gợi ý font cho website y tế/phòng khám

#### Phong cách hiện đại, chuyên nghiệp:
1. **Inter** (hiện tại) ✅
2. **Roboto**
3. **Open Sans**
4. **Work Sans**

#### Phong cách thân thiện, dễ tiếp cận:
1. **Nunito**
2. **Lato**
3. **Poppins**

#### Phong cách sang trọng, cao cấp:
1. **Playfair Display** (cho heading) + **Source Sans Pro** (cho body)
2. **Merriweather** (cho heading) + **Lato** (cho body)

### Lưu ý
- Chọn font có trọng lượng (weights) đầy đủ: 300, 400, 500, 600, 700, 800
- Đảm bảo font hỗ trợ tiếng Việt (có dấu)
- Kiểm tra hiệu suất: font càng nhiều weights càng nặng
- Test trên nhiều thiết bị và trình duyệt

---

## 🔄 QUẢN LÝ CODE VỚI GITHUB VÀ GITLAB

### 📋 Tổng quan

Repository hiện tại đã được cấu hình để quản lý code trên cả **GitHub** và **GitLab**:
- **GitHub** (`origin`): `https://github.com/bhviet12/phong-kham.git`
- **GitLab** (`gitlab`): `git@gitlab.com:bhviet1510/phong-kham-da-lieu.git`

### 🚀 Cách sử dụng nhanh

#### Push code lên cả hai nền tảng

```bash
# Cách 1: Push riêng lẻ
git push origin main    # GitHub
git push gitlab main    # GitLab

# Cách 2: Push cùng lúc (khuyến nghị)
git push origin main && git push gitlab main
```

#### Workflow hàng ngày

```bash
# 1. Commit code
git add .
git commit -m "Mô tả thay đổi"

# 2. Push lên cả hai nền tảng
git push origin main && git push gitlab main
```

#### Pull và đồng bộ

```bash
# Pull từ nền tảng chính (ví dụ: GitHub)
git pull origin main

# Sau đó push lại lên cả hai để đồng bộ
git push origin main && git push gitlab main
```

### ⚙️ Thiết lập ban đầu (Đã hoàn thành)

#### 1. Thêm GitLab remote

```bash
# Thêm GitLab remote với tên "gitlab"
git remote add gitlab git@gitlab.com:bhviet1510/phong-kham-da-lieu.git

# Hoặc dùng HTTPS:
git remote add gitlab https://gitlab.com/bhviet1510/phong-kham-da-lieu.git
```

#### 2. Kiểm tra remote

```bash
git remote -v
```

Kết quả:
```
gitlab  git@gitlab.com:bhviet1510/phong-kham-da-lieu.git (fetch)
gitlab  git@gitlab.com:bhviet1510/phong-kham-da-lieu.git (push)
origin  https://github.com/bhviet12/phong-kham.git (fetch)
origin  https://github.com/bhviet12/phong-kham.git (push)
```

### 🔧 Tùy chọn nâng cao

#### Tạo alias để push nhanh

```bash
# Thêm alias
git config alias.pushall '!git push origin main && git push gitlab main'

# Sau đó chỉ cần chạy:
git pushall
```

#### Push tất cả branches

```bash
git push origin --all
git push gitlab --all
```

### ⚠️ Xử lý lỗi khi import GitLab

#### Lỗi: Token không có quyền `read:org`

**Giải pháp 1: Tạo GitHub Personal Access Token (Classic) mới**

1. GitHub → Settings → Developer settings → Personal access tokens → **Tokens (classic)**
2. Generate new token (classic)
3. Chọn quyền:
   - ✅ `repo` - Full control
   - ✅ `read:org` - **QUAN TRỌNG!**
   - ✅ `read:user`
4. Copy token và cập nhật trong GitLab

**Giải pháp 2: Bỏ chọn "Nhập khẩu cộng tác viên"**

Nếu không cần import collaborators, bỏ chọn checkbox này khi import.

**Giải pháp 3: Import thủ công (Đã thực hiện)**

Tạo repository trống trên GitLab, sau đó push code lên:
```bash
git remote add gitlab git@gitlab.com:bhviet1510/phong-kham-da-lieu.git
git push -u gitlab main
```

### 📝 Lưu ý quan trọng

1. **Đồng bộ code**: Luôn đảm bảo code trên cả hai nền tảng giống nhau
2. **Nền tảng chính**: GitHub là nền tảng chính, GitLab là bản sao
3. **Merge conflicts**: Giải quyết trên GitHub trước, sau đó push lên GitLab
4. **Protected branches**: GitLab có thể bảo vệ branch `main`, không cho force push

### 🛠️ Các lệnh hữu ích

#### Kiểm tra remote

```bash
# Xem tất cả remote
git remote -v

# Xem chi tiết một remote
git remote show origin
git remote show gitlab
```

#### Xóa remote (nếu cần)

```bash
# Xóa GitLab remote
git remote remove gitlab
```

#### Đổi URL remote

```bash
# Đổi từ HTTPS sang SSH
git remote set-url gitlab git@gitlab.com:bhviet1510/phong-kham-da-lieu.git

# Đổi từ SSH sang HTTPS
git remote set-url gitlab https://gitlab.com/bhviet1510/phong-kham-da-lieu.git
```

### ✅ Trạng thái hiện tại

- ✅ GitHub remote đã được cấu hình
- ✅ GitLab remote đã được cấu hình
- ✅ Code đã được push lên cả hai nền tảng
- ✅ Branch `main` đã được set up tracking

**Sẵn sàng sử dụng!** 🎉

---


