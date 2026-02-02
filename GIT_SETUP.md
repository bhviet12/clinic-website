# 🔄 Hướng dẫn kết nối Repository với GitHub và GitLab

## 📋 Tổng quan

Repository `clinic-website` chứa cả **frontend** (`phong-kham`) và **backend** (`phong-kham-backend`), được quản lý trên cả **GitHub** và **GitLab**.

---

## 🚀 Thiết lập ban đầu

### Bước 1: Tạo repositories trên GitHub và GitLab

**GitHub:**
1. Truy cập: https://github.com/new
2. Tạo repository mới:
   - **Repository name**: `clinic-website` hoặc `phong-kham-clinic`
   - **Description**: `Phong Kham Clinic Website - Full Stack Application`
   - **Visibility**: Private hoặc Public
   - **Không** chọn "Initialize with README" (đã có code)
3. Click "Create repository"

**GitLab:**
1. Truy cập: https://gitlab.com/projects/new
2. Tạo repository mới:
   - **Project name**: `clinic-website` hoặc `phong-kham-clinic`
   - **Project slug**: `clinic-website` hoặc `phong-kham-clinic`
   - **Visibility**: Private hoặc Public
   - **Không** chọn "Initialize with README" (đã có code)
3. Click "Create project"

### Bước 2: Thêm remotes

```bash
cd "/home/bhviet/Màn hình nền/clinic-website "

# Thêm GitHub remote (origin)
git remote add origin https://github.com/bhviet12/clinic-website.git

# Thêm GitLab remote
git remote add gitlab git@gitlab.com:bhviet1510/clinic-website.git

# Hoặc dùng HTTPS cho GitLab:
# git remote add gitlab https://gitlab.com/bhviet1510/clinic-website.git
```

### Bước 3: Kiểm tra remotes

```bash
git remote -v
```

Kết quả mong đợi:
```
gitlab  git@gitlab.com:bhviet1510/clinic-website.git (fetch)
gitlab  git@gitlab.com:bhviet1510/clinic-website.git (push)
origin  https://github.com/bhviet12/clinic-website.git (fetch)
origin  https://github.com/bhviet12/clinic-website.git (push)
```

### Bước 4: Commit và push lần đầu

```bash
# Kiểm tra branch hiện tại
git branch

# Nếu chưa có branch main, tạo và đổi tên
git branch -M main

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit: Full stack clinic website (frontend + backend)"

# Push lên GitHub
git push -u origin main

# Push lên GitLab
git push -u gitlab main
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

### Tạo script push-all.sh

```bash
# Tạo file push-all.sh
cat > push-all.sh << 'EOF'
#!/bin/bash
echo "🚀 Pushing to GitHub and GitLab..."
git push origin main && git push gitlab main
EOF

# Cho phép thực thi
chmod +x push-all.sh

# Sử dụng
./push-all.sh
```

### Push tất cả branches

```bash
git push origin --all
git push gitlab --all
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
git remote set-url origin git@github.com:bhviet12/clinic-website.git

# Đổi từ SSH sang HTTPS (GitLab)
git remote set-url gitlab https://gitlab.com/bhviet1510/clinic-website.git
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
6. **Subfolders**: Cả `phong-kham` và `phong-kham-backend` đều được track trong repository này

---

## 🔐 Bảo mật

### File .gitignore

Đảm bảo `.gitignore` ở root đã bao gồm:
- `node_modules/` (frontend)
- `target/` (backend)
- `.idea/`, `.vscode/`
- `*.log`
- `application-local.properties`
- `application-prod.properties`

### Environment variables

Sử dụng environment variables thay vì hardcode credentials:
```properties
# application.properties
spring.datasource.password=${DB_PASSWORD}
jwt.secret=${JWT_SECRET}
```

---

## ✅ Checklist

- [ ] Git repository đã được khởi tạo ở level `clinic-website`
- [ ] GitHub repository đã được tạo
- [ ] GitLab repository đã được tạo
- [ ] Remotes đã được thêm (origin và gitlab)
- [ ] .gitignore đã được cấu hình đúng
- [ ] Code đã được commit lần đầu
- [ ] Code đã được push lên GitHub
- [ ] Code đã được push lên GitLab
- [ ] SSH keys đã được setup (nếu dùng SSH)

---

## 🎯 Cấu trúc Repository

```
clinic-website/              # Root repository
├── .git/                    # Git repository
├── .gitignore              # Git ignore rules
├── README.md               # Root README
├── GIT_SETUP.md            # Git setup guide
│
├── phong-kham/             # Frontend
│   ├── src/
│   ├── package.json
│   └── ...
│
└── phong-kham-backend/     # Backend
    ├── src/
    ├── pom.xml
    └── ...
```

---

**Chúc bạn thành công!** 🎉
