# 🔄 Hướng dẫn kết nối Backend với GitHub và GitLab

## 📋 Tổng quan

Repository backend có thể được quản lý trên cả **GitHub** và **GitLab** để:
- **GitHub**: Lưu trữ chính, dễ chia sẻ
- **GitLab**: Backup, CI/CD, collaboration

---

## 🚀 Thiết lập ban đầu

### Bước 1: Khởi tạo Git (Đã hoàn thành)

```bash
cd phong-kham-backend
git init
```

### Bước 2: Tạo repository trên GitHub

1. Truy cập: https://github.com/new
2. Tạo repository mới:
   - **Repository name**: `phong-kham-backend`
   - **Description**: `Backend API for Phong Kham Clinic Website`
   - **Visibility**: Private hoặc Public
   - **Không** chọn "Initialize with README" (đã có code)
3. Click "Create repository"

### Bước 3: Tạo repository trên GitLab

1. Truy cập: https://gitlab.com/projects/new
2. Tạo repository mới:
   - **Project name**: `phong-kham-backend`
   - **Project slug**: `phong-kham-backend`
   - **Visibility**: Private hoặc Public
   - **Không** chọn "Initialize with README" (đã có code)
3. Click "Create project"

### Bước 4: Thêm remotes

```bash
cd phong-kham-backend

# Thêm GitHub remote (origin)
git remote add origin https://github.com/bhviet12/phong-kham-backend.git

# Thêm GitLab remote
git remote add gitlab git@gitlab.com:bhviet1510/phong-kham-backend.git

# Hoặc dùng HTTPS cho GitLab:
# git remote add gitlab https://gitlab.com/bhviet1510/phong-kham-backend.git
```

### Bước 5: Kiểm tra remotes

```bash
git remote -v
```

Kết quả mong đợi:
```
gitlab  git@gitlab.com:bhviet1510/phong-kham-backend.git (fetch)
gitlab  git@gitlab.com:bhviet1510/phong-kham-backend.git (push)
origin  https://github.com/bhviet12/phong-kham-backend.git (fetch)
origin  https://github.com/bhviet12/phong-kham-backend.git (push)
```

### Bước 6: Commit và push lần đầu

```bash
# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit: Spring Boot backend setup"

# Push lên GitHub
git push -u origin main

# Push lên GitLab
git push -u gitlab main
```

**Lưu ý:** Nếu branch hiện tại không phải `main`, đổi tên:
```bash
git branch -M main
```

---

## 🔄 Workflow hàng ngày

### Push code lên cả hai nền tảng

```bash
# Cách 1: Push riêng lẻ
git push origin main    # GitHub
git push gitlab main    # GitLab

# Cách 2: Push cùng lúc (khuyến nghị)
git push origin main && git push gitlab main
```

### Workflow đầy đủ

```bash
# 1. Kiểm tra status
git status

# 2. Thêm files
git add .

# 3. Commit
git commit -m "Mô tả thay đổi"

# 4. Push lên cả hai nền tảng
git push origin main && git push gitlab main
```

### Pull và đồng bộ

```bash
# Pull từ nền tảng chính (ví dụ: GitHub)
git pull origin main

# Sau đó push lại lên cả hai để đồng bộ
git push origin main && git push gitlab main
```

---

## 🔧 Tùy chọn nâng cao

### Tạo alias để push nhanh

```bash
# Thêm alias
git config alias.pushall '!git push origin main && git push gitlab main'

# Sau đó chỉ cần chạy:
git pushall
```

### Push tất cả branches

```bash
git push origin --all
git push gitlab --all
```

### Push tags

```bash
git push origin --tags
git push gitlab --tags
```

---

## 🛠️ Các lệnh hữu ích

### Kiểm tra remote

```bash
# Xem tất cả remote
git remote -v

# Xem chi tiết một remote
git remote show origin
git remote show gitlab
```

### Xóa remote (nếu cần)

```bash
# Xóa GitLab remote
git remote remove gitlab

# Xóa GitHub remote
git remote remove origin
```

### Đổi URL remote

```bash
# Đổi từ HTTPS sang SSH (GitHub)
git remote set-url origin git@github.com:bhviet12/phong-kham-backend.git

# Đổi từ SSH sang HTTPS (GitLab)
git remote set-url gitlab https://gitlab.com/bhviet1510/phong-kham-backend.git
```

### Đổi tên remote

```bash
# Đổi tên remote
git remote rename origin github
git remote rename gitlab gl
```

---

## ⚠️ Xử lý lỗi

### Lỗi: Authentication failed

**Giải pháp 1: Sử dụng SSH keys (Khuyến nghị)**

```bash
# Tạo SSH key (nếu chưa có)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Thêm SSH key vào GitHub
# Copy public key: cat ~/.ssh/id_ed25519.pub
# GitHub → Settings → SSH and GPG keys → New SSH key

# Thêm SSH key vào GitLab
# GitLab → Preferences → SSH Keys → Add SSH key
```

**Giải pháp 2: Sử dụng Personal Access Token**

- GitHub: Settings → Developer settings → Personal access tokens
- GitLab: Preferences → Access Tokens

### Lỗi: Branch is protected

Nếu branch `main` bị bảo vệ trên GitLab:

```bash
# Pull trước khi push
git pull gitlab main

# Merge conflicts nếu có
# Sau đó push lại
git push gitlab main
```

### Lỗi: Remote already exists

```bash
# Xóa remote cũ
git remote remove origin
# hoặc
git remote remove gitlab

# Thêm lại
git remote add origin <url>
```

---

## 📝 Lưu ý quan trọng

1. **Đồng bộ code**: Luôn đảm bảo code trên cả hai nền tảng giống nhau
2. **Nền tảng chính**: GitHub là nền tảng chính, GitLab là bản sao
3. **Merge conflicts**: Giải quyết trên GitHub trước, sau đó push lên GitLab
4. **Protected branches**: GitLab có thể bảo vệ branch `main`, không cho force push
5. **Sensitive data**: Không commit file `application.properties` với credentials thật

---

## 🔐 Bảo mật

### File .gitignore

Đảm bảo `.gitignore` đã bao gồm:
```
target/
.idea/
*.iml
*.log
application-local.properties
application-prod.properties
```

### Environment variables

Sử dụng environment variables thay vì hardcode credentials:
```properties
# application.properties
spring.datasource.password=${DB_PASSWORD}
jwt.secret=${JWT_SECRET}
```

---

## ✅ Checklist

- [ ] Git repository đã được khởi tạo
- [ ] GitHub repository đã được tạo
- [ ] GitLab repository đã được tạo
- [ ] Remotes đã được thêm (origin và gitlab)
- [ ] Code đã được commit lần đầu
- [ ] Code đã được push lên GitHub
- [ ] Code đã được push lên GitLab
- [ ] SSH keys đã được setup (nếu dùng SSH)
- [ ] .gitignore đã được cấu hình đúng

---

## 🎯 Next Steps

Sau khi setup xong:

1. **Tạo README.md** cho backend
2. **Setup CI/CD** trên GitLab (nếu cần)
3. **Tạo branches** cho development
4. **Setup code review** process
5. **Tạo issues** và **milestones**

---

**Chúc bạn thành công!** 🎉
