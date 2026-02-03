# 🚀 Hướng dẫn thiết lập Backend Spring Boot

## 📋 Yêu cầu hệ thống

- ✅ Java 17 (Đã cài đặt)
- ⚠️ Maven hoặc Gradle (Cần cài đặt)

---

## 🔧 Cài đặt Maven

### Ubuntu/Debian:
```bash
sudo apt update
sudo apt install maven
```

### Kiểm tra cài đặt:
```bash
mvn -version
```

---

## 🎯 Tạo dự án Spring Boot

### Cách 1: Sử dụng Spring Initializr (Khuyến nghị - Dễ nhất)

#### Bước 1: Tạo project từ website
1. Truy cập: https://start.spring.io/
2. Chọn cấu hình:
   - **Project**: Maven
   - **Language**: Java
   - **Spring Boot**: 3.2.x (hoặc mới nhất)
   - **Group**: `com.clinic`
   - **Artifact**: `phong-kham-backend`
   - **Name**: `phong-kham-backend`
   - **Package name**: `com.clinic.phongkham`
   - **Packaging**: Jar
   - **Java**: 17

3. **Dependencies** (chọn các dependencies cần thiết):
   - ✅ **Spring Web** - RESTful APIs
   - ✅ **Spring Data JPA** - Database access
   - ✅ **Spring Security** - Authentication & Authorization
   - ✅ **PostgreSQL Driver** hoặc **MySQL Driver** - Database
   - ✅ **Lombok** - Giảm boilerplate code
   - ✅ **Spring Boot DevTools** - Hot reload
   - ✅ **Validation** - Input validation

4. Click **"Generate"** để tải file ZIP

5. Giải nén và di chuyển vào thư mục:
```bash
cd "/home/bhviet/Màn hình nền/clinic-website"
unzip phong-kham-backend.zip
mv phong-kham-backend phong-kham-backend
cd phong-kham-backend
```

#### Bước 2: Kiểm tra cấu trúc
```bash
ls -la
```

Cấu trúc sẽ như sau:
```
phong-kham-backend/
├── src/
│   ├── main/
│   │   ├── java/com/clinic/phongkham/
│   │   │   └── PhongKhamBackendApplication.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── static/
│   └── test/
├── pom.xml
└── README.md
```

---

### Cách 2: Sử dụng Spring Boot CLI

```bash
# Cài đặt Spring Boot CLI
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk install springboot

# Tạo project
spring init --dependencies=web,data-jpa,security,postgresql,lombok,devtools \
  --build=maven \
  --java-version=17 \
  --group-id=com.clinic \
  --artifact-id=phong-kham-backend \
  --name=phong-kham-backend \
  --package-name=com.clinic.phongkham \
  phong-kham-backend
```

---

### Cách 3: Tạo thủ công với Maven

```bash
# Tạo cấu trúc thư mục
mkdir -p phong-kham-backend/src/main/java/com/clinic/phongkham
mkdir -p phong-kham-backend/src/main/resources
mkdir -p phong-kham-backend/src/test/java/com/clinic/phongkham

cd phong-kham-backend
```

Sau đó tạo file `pom.xml` (xem phần dưới)

---

## 📦 Cấu hình pom.xml (Maven)

Tạo file `pom.xml` với nội dung:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
        <relativePath/>
    </parent>
    
    <groupId>com.clinic</groupId>
    <artifactId>phong-kham-backend</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>phong-kham-backend</name>
    <description>Backend API for Phong Kham Clinic Website</description>
    
    <properties>
        <java.version>17</java.version>
    </properties>
    
    <dependencies>
        <!-- Spring Web -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        
        <!-- Spring Data JPA -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        
        <!-- Spring Security -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        
        <!-- PostgreSQL Driver -->
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>
        
        <!-- MySQL Driver (nếu dùng MySQL) -->
        <!--
        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-j</artifactId>
            <scope>runtime</scope>
        </dependency>
        -->
        
        <!-- Lombok -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        
        <!-- Validation -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        
        <!-- JWT (nếu cần) -->
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-api</artifactId>
            <version>0.12.3</version>
        </dependency>
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-impl</artifactId>
            <version>0.12.3</version>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-jackson</artifactId>
            <version>0.12.3</version>
            <scope>runtime</scope>
        </dependency>
        
        <!-- Spring Boot DevTools -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        
        <!-- Test -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

---

## 📝 Tạo Main Application Class

Tạo file `src/main/java/com/clinic/phongkham/PhongKhamBackendApplication.java`:

```java
package com.clinic.phongkham;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PhongKhamBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(PhongKhamBackendApplication.class, args);
    }
}
```

---

## ⚙️ Cấu hình application.properties

Tạo file `src/main/resources/application.properties`:

```properties
# Server
server.port=8080
server.servlet.context-path=/api

# Database (PostgreSQL)
spring.datasource.url=jdbc:postgresql://localhost:5432/phong_kham_db
spring.datasource.username=postgres
spring.datasource.password=your_password
spring.datasource.driver-class-name=org.postgresql.Driver

# JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.properties.hibernate.format_sql=true

# CORS (cho phép frontend kết nối)
spring.web.cors.allowed-origins=http://localhost:5173,http://localhost:3000
spring.web.cors.allowed-methods=GET,POST,PUT,DELETE,OPTIONS
spring.web.cors.allowed-headers=*

# JWT (nếu sử dụng)
jwt.secret=your-secret-key-change-in-production
jwt.expiration=86400000

# Logging
logging.level.com.clinic.phongkham=DEBUG
logging.level.org.springframework.web=INFO
```

---

## 🏃 Chạy ứng dụng

### Cách 1: Sử dụng Maven
```bash
cd phong-kham-backend
mvn spring-boot:run
```

### Cách 2: Build và chạy JAR
```bash
# Build
mvn clean package

# Chạy
java -jar target/phong-kham-backend-0.0.1-SNAPSHOT.jar
```

### Cách 3: Sử dụng IDE
- Mở project trong IntelliJ IDEA hoặc Eclipse
- Run `PhongKhamBackendApplication.java`

---

## 📁 Cấu trúc thư mục đề xuất

```
phong-kham-backend/
├── src/
│   ├── main/
│   │   ├── java/com/clinic/phongkham/
│   │   │   ├── PhongKhamBackendApplication.java
│   │   │   ├── config/
│   │   │   │   ├── SecurityConfig.java
│   │   │   │   ├── CorsConfig.java
│   │   │   │   └── JwtConfig.java
│   │   │   ├── controller/
│   │   │   │   ├── AuthController.java
│   │   │   │   ├── AppointmentController.java
│   │   │   │   ├── DoctorController.java
│   │   │   │   ├── PatientController.java
│   │   │   │   ├── ServiceController.java
│   │   │   │   └── PaymentController.java
│   │   │   ├── service/
│   │   │   │   ├── AuthService.java
│   │   │   │   ├── AppointmentService.java
│   │   │   │   └── ...
│   │   │   ├── repository/
│   │   │   │   ├── UserRepository.java
│   │   │   │   ├── AppointmentRepository.java
│   │   │   │   └── ...
│   │   │   ├── model/
│   │   │   │   ├── entity/
│   │   │   │   │   ├── User.java
│   │   │   │   │   ├── Appointment.java
│   │   │   │   │   └── ...
│   │   │   │   └── dto/
│   │   │   │       ├── LoginRequest.java
│   │   │   │       ├── AppointmentDTO.java
│   │   │   │       └── ...
│   │   │   ├── exception/
│   │   │   │   ├── GlobalExceptionHandler.java
│   │   │   │   └── ...
│   │   │   └── util/
│   │   │       ├── JwtUtil.java
│   │   │       └── ...
│   │   └── resources/
│   │       ├── application.properties
│   │       └── application-dev.properties
│   └── test/
│       └── java/com/clinic/phongkham/
├── pom.xml
└── README.md
```

---

## 🔐 Các tính năng cần implement

### 1. Authentication & Authorization
- JWT-based authentication
- Role-based access control (Admin, Doctor, Receptionist, Patient)

### 2. API Endpoints
- `/api/auth/login` - Đăng nhập
- `/api/auth/register` - Đăng ký
- `/api/appointments` - Quản lý lịch hẹn
- `/api/doctors` - Quản lý bác sĩ
- `/api/patients` - Quản lý bệnh nhân
- `/api/services` - Quản lý dịch vụ
- `/api/payments` - Quản lý thanh toán

### 3. Database Entities
- User (Admin, Doctor, Receptionist, Patient)
- Appointment
- Doctor
- Patient
- Service
- Payment
- News/Article

---

## 🧪 Test API

Sau khi chạy ứng dụng, test với:

```bash
# Health check
curl http://localhost:8080/api/actuator/health

# Hoặc mở browser:
http://localhost:8080/api
```

---

## 📚 Tài liệu tham khảo

- [Spring Boot Official Docs](https://spring.io/projects/spring-boot)
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
- [Spring Security](https://spring.io/projects/spring-security)
- [PostgreSQL](https://www.postgresql.org/docs/)

---

## ✅ Checklist

- [ ] Cài đặt Maven
- [ ] Tạo Spring Boot project
- [ ] Cấu hình database
- [ ] Tạo entities
- [ ] Tạo repositories
- [ ] Tạo services
- [ ] Tạo controllers
- [ ] Cấu hình Security
- [ ] Cấu hình CORS
- [ ] Test API endpoints

---

**Chúc bạn thành công!** 🎉
