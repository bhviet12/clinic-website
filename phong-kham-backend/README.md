# Phong Kham Backend API

Backend API cho website phòng khám sử dụng Spring Boot 4.0.2 và Java 21.

## 🚀 Cài đặt và chạy

### Yêu cầu
- Java 21+
- Maven 3.6+
- PostgreSQL hoặc MySQL

### Cấu hình Database

1. Tạo database:
```sql
CREATE DATABASE phong_kham_db;
```

2. Cập nhật `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/phong_kham_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### Chạy ứng dụng

```bash
# Sử dụng Maven
mvn spring-boot:run

# Hoặc build và chạy JAR
mvn clean package
java -jar target/phong-kham-backend-0.0.1-SNAPSHOT.jar
```

Ứng dụng sẽ chạy tại: `http://localhost:8080/api`

## 📁 Cấu trúc dự án

```
phong-kham-backend/
├── src/
│   ├── main/
│   │   ├── java/com/clinic/phong_kham_backend/
│   │   │   ├── PhongKhamBackendApplication.java
│   │   │   ├── config/          # Cấu hình (Security, CORS)
│   │   │   ├── controller/      # REST Controllers
│   │   │   ├── service/         # Business logic
│   │   │   ├── repository/      # Data access layer
│   │   │   ├── model/           # Entities và DTOs
│   │   │   ├── exception/       # Exception handlers
│   │   │   ├── util/            # Utilities (JWT, etc.)
│   │   │   └── security/        # Security components
│   │   └── resources/
│   │       └── application.properties
│   └── test/
├── pom.xml
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/login` - Đăng nhập
- `POST /api/auth/register` - Đăng ký
- `POST /api/auth/logout` - Đăng xuất
- `GET /api/auth/me` - Lấy thông tin user hiện tại

### Public
- `GET /api/public/health` - Health check

## 🔐 Security

- JWT-based authentication
- Role-based access control (ADMIN, DOCTOR, RECEPTIONIST)
- CORS configured for frontend

## 🔄 Quản lý code với GitHub và GitLab

Repository được cấu hình để quản lý trên cả GitHub và GitLab.

Xem file `GIT_SETUP.md` để biết chi tiết về cách setup và sử dụng.

### Push code lên cả hai nền tảng

```bash
# Cách 1: Push riêng lẻ
git push origin main    # GitHub
git push gitlab main    # GitLab

# Cách 2: Push cùng lúc
git push origin main && git push gitlab main

# Cách 3: Sử dụng script
./push-all.sh
```

## 📚 Tài liệu

- `GIT_SETUP.md` - Hướng dẫn quản lý code với GitHub và GitLab
- `CONNECTION_GUIDE.md` - Hướng dẫn kết nối frontend và backend

## 🛠️ Development

### Hot Reload
Spring Boot DevTools đã được cấu hình, tự động restart khi code thay đổi.

### Logging
Logs được cấu hình trong `application.properties`. 
Xem logs tại console hoặc file log.

## 📝 TODO

- [ ] Implement User entity và repository
- [ ] Implement authentication service với password hashing
- [ ] Implement JWT Authentication Filter
- [ ] Tạo các entities khác (Appointment, Doctor, Patient, Service, Payment)
- [ ] Implement CRUD operations
- [ ] Add validation
- [ ] Add exception handling
- [ ] Add unit tests
- [ ] Add API documentation (Swagger)

## 📄 License

Private project

---

**Chúc bạn thành công!** 🎉
