# Phong Kham Clinic Website

Dự án website phòng khám bao gồm:
- **Frontend**: React + TypeScript + Vite (`phong-kham/`)
- **Backend**: Spring Boot + Java (`phong-kham-backend/`)

## 📁 Cấu trúc dự án

```
clinic-website/
├── phong-kham/              # Frontend (React + TypeScript)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
└── phong-kham-backend/      # Backend (Spring Boot)
    ├── src/
    ├── pom.xml
    └── application.properties
```

## 🚀 Cài đặt và chạy

### Frontend

```bash
cd phong-kham
npm install
npm run dev
```

Frontend chạy tại: `http://localhost:3000`

### Backend

```bash
cd phong-kham-backend
mvn spring-boot:run
```

Backend chạy tại: `http://localhost:8080/api`

## 📚 Tài liệu

- **Frontend**: Xem `phong-kham/README.md` và `phong-kham/DOCUMENTATION.md`
- **Backend**: Xem `phong-kham-backend/README.md` và `phong-kham-backend/CONNECTION_GUIDE.md`
- **Git Setup**: Xem `phong-kham-backend/GIT_SETUP.md`

## 🔄 Quản lý code với GitHub và GitLab

Repository này được cấu hình để quản lý trên cả **GitHub** và **GitLab**.

### Push code lên cả hai nền tảng

```bash
# Push lên GitHub
git push origin main

# Push lên GitLab
git push gitlab main

# Hoặc push cùng lúc
git push origin main && git push gitlab main
```

Xem `phong-kham-backend/GIT_SETUP.md` để biết chi tiết.

## 🛠️ Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Ant Design
- React Router DOM
- Axios

### Backend
- Spring Boot 4.0.2
- Java 21
- Spring Security
- Spring Data JPA
- PostgreSQL/MySQL
- JWT

## 📝 License

Private project

---

**Chúc bạn thành công!** 🎉
