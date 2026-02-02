# 🔗 Hướng dẫn kết nối Backend và Frontend

## ✅ Đã hoàn thành

### Backend (Spring Boot)
- ✅ Thêm JWT dependencies vào `pom.xml`
- ✅ Cấu hình CORS trong `CorsConfig.java`
- ✅ Cấu hình Security trong `SecurityConfig.java`
- ✅ JWT Utility class (`JwtUtil.java`)
- ✅ AuthController với endpoint `/api/auth/login`
- ✅ HealthController với endpoint `/api/public/health`
- ✅ Cập nhật `application.properties` với CORS và JWT config

### Frontend (React + Vite)
- ✅ API service (`src/services/api.ts`) với axios
- ✅ AuthContext đã được cập nhật để sử dụng API thật
- ✅ Vite proxy config để forward requests đến backend

---

## 🚀 Cách chạy

### 1. Chạy Backend

```bash
cd phong-kham-backend

# Cài đặt dependencies (nếu chưa có Maven)
# Ubuntu/Debian:
sudo apt install maven

# Kiểm tra Maven
mvn -version

# Chạy backend
mvn spring-boot:run
```

Backend sẽ chạy tại: `http://localhost:8080/api`

### 2. Chạy Frontend

```bash
cd phong-kham  # (thư mục frontend)

# Cài đặt dependencies (nếu chưa có)
npm install

# Chạy frontend
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:3000`

---

## 🔧 Cấu hình

### Backend (`application.properties`)

Cập nhật database credentials:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/phong_kham_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

**Lưu ý:** Nếu chưa có database, bạn có thể comment các dòng database để chạy backend trước (chỉ test API).

### Frontend

Frontend đã được cấu hình sẵn:
- API Base URL: `http://localhost:8080/api` (default)
- Vite proxy: Tự động forward `/api/*` requests đến backend

---

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/login` - Đăng nhập
  ```json
  {
    "email": "user@example.com",
    "password": "password",
    "role": "admin"
  }
  ```
  
  Response:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "id": 1,
      "name": "Admin User",
      "email": "user@example.com",
      "role": "admin"
    },
    "message": "Login successful"
  }
  ```

- `POST /api/auth/register` - Đăng ký (TODO)
- `POST /api/auth/logout` - Đăng xuất
- `GET /api/auth/me` - Lấy thông tin user hiện tại (TODO)

### Public
- `GET /api/public/health` - Health check

---

## 🔐 Authentication Flow

1. User nhập email, password, chọn role và click "Đăng nhập"
2. Frontend gọi `POST /api/auth/login` với credentials
3. Backend xác thực và trả về JWT token + user info
4. Frontend lưu token vào `localStorage` và user vào state
5. Các request sau sẽ tự động thêm `Authorization: Bearer <token>` header
6. Backend validate token và cho phép truy cập

---

## 🧪 Test kết nối

### 1. Test Backend Health

```bash
curl http://localhost:8080/api/public/health
```

Hoặc mở browser: `http://localhost:8080/api/public/health`

### 2. Test Login API

```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password",
    "role": "admin"
  }'
```

### 3. Test từ Frontend

1. Mở `http://localhost:3000/login`
2. Nhập email, password, chọn role
3. Click "Đăng nhập"
4. Kiểm tra Network tab trong DevTools để xem request/response

---

## ⚠️ Lưu ý

### Backend chưa có database
Hiện tại `AuthController` chỉ là placeholder, chấp nhận mọi credentials. Cần implement:
- User entity và repository
- Authentication service với password validation
- JWT filter để validate token trong mỗi request

### Fallback mechanism
Nếu backend không available, frontend sẽ tự động fallback về mock login để không bị lỗi.

### CORS
Backend đã được cấu hình CORS để cho phép:
- `http://localhost:3000` (Vite default)
- `http://localhost:5173` (Vite alternative port)

---

## 📝 Next Steps

### Backend
- [ ] Tạo User entity
- [ ] Implement UserRepository
- [ ] Implement AuthenticationService với password hashing
- [ ] Implement JWT Authentication Filter
- [ ] Tạo các entities khác (Appointment, Doctor, Patient, Service, Payment)
- [ ] Implement CRUD operations
- [ ] Add validation
- [ ] Add exception handling
- [ ] Add unit tests

### Frontend
- [ ] Error handling UI (toast notifications)
- [ ] Loading states
- [ ] Refresh token mechanism
- [ ] Auto retry failed requests

---

## 🐛 Troubleshooting

### Backend không chạy được
- Kiểm tra Java version: `java -version` (cần Java 21)
- Kiểm tra Maven: `mvn -version`
- Kiểm tra port 8080 có bị chiếm không: `lsof -i :8080` hoặc `netstat -an | grep 8080`

### Frontend không kết nối được backend
- Kiểm tra backend đã chạy chưa
- Kiểm tra CORS config trong `CorsConfig.java`
- Kiểm tra proxy config trong `vite.config.ts`
- Mở DevTools > Network tab để xem lỗi cụ thể

### Token không được gửi
- Kiểm tra `localStorage.getItem('token')` có giá trị không
- Kiểm tra axios interceptor trong `src/services/api.ts`

### Lỗi compile Java
- Đảm bảo đã thêm JWT dependencies vào `pom.xml`
- Chạy `mvn clean install` để rebuild project

---

**Chúc bạn thành công!** 🎉
