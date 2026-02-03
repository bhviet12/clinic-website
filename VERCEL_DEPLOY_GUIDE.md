# 🚀 Hướng dẫn Deploy Frontend lên Vercel (Repo GitHub cũ)

## 📋 Tổng quan

Bạn có **2 loại repos**:

### 1. **Repo Fullstack** (Quản lý code)
- **GitHub**: `https://github.com/bhviet12/clinic-website.git` (origin)
- **GitLab**: `git@gitlab.com:bhviet1510/clinic-website.git` (gitlab)
- **Nội dung**: Frontend (`phong-kham/`) + Backend (`phong-kham-backend/`)

### 2. **Repo Frontend Only** (Vercel Deploy)
- **GitHub**: `https://github.com/bhviet12/phong-kham.git` (github-frontend)
- **Nội dung**: Chỉ có frontend (`phong-kham/`)
- **Mục đích**: Deploy lên Vercel (Vercel chỉ cần frontend)

---

## 🎯 Cách sử dụng

### **Cách 1: Push chỉ frontend lên Vercel** (Khuyến nghị)

```bash
# Commit code trước (nếu có thay đổi)
git add .
git commit -m "Update frontend"

# Push frontend lên repo GitHub cũ (Vercel)
./push-frontend-to-vercel.sh
```

### **Cách 2: Push tất cả repos cùng lúc**

```bash
# Commit code trước (nếu có thay đổi)
git add .
git commit -m "Update code"

# Push lên tất cả repos (GitHub fullstack + GitLab + GitHub frontend)
./push-all-repos.sh
```

### **Cách 3: Push thủ công**

```bash
# 1. Push lên GitHub fullstack
git push origin main

# 2. Push lên GitLab fullstack
git push gitlab main

# 3. Push frontend lên GitHub cũ (Vercel)
git subtree push --prefix=phong-kham github-frontend main --squash
```

---

## 🔧 Cấu hình Remotes

Hiện tại bạn có **3 remotes**:

```bash
# Xem tất cả remotes
git remote -v

# Kết quả:
# origin          → https://github.com/bhviet12/clinic-website.git (GitHub fullstack)
# gitlab          → git@gitlab.com:bhviet1510/clinic-website.git (GitLab fullstack)
# github-frontend → https://github.com/bhviet12/phong-kham.git (GitHub frontend - Vercel)
```

---

## ⚙️ Cấu hình Vercel

1. **Vào Vercel Dashboard**: https://vercel.com/dashboard
2. **Chọn project**: `phong-kham` (hoặc tạo mới nếu chưa có)
3. **Connect với GitHub repo**: `bhviet12/phong-kham`
4. **Root Directory**: Để mặc định (vì repo chỉ có frontend)
5. **Build Command**: `cd phong-kham && npm install && npm run build`
6. **Output Directory**: `phong-kham/dist`

**Hoặc** nếu Vercel tự detect:
- **Framework Preset**: Vite
- **Root Directory**: `.` (vì repo chỉ có frontend)

---

## 📝 Lưu ý quan trọng

### ✅ **Những gì sẽ xảy ra:**

1. **Repo GitHub cũ** (`phong-kham`):
   - ✅ Chỉ có folder `phong-kham/` (frontend)
   - ✅ Vercel sẽ tự động deploy khi có push mới
   - ✅ Không có backend

2. **Repo Fullstack** (`clinic-website`):
   - ✅ Có cả frontend + backend
   - ✅ Dùng để quản lý code, collaboration
   - ✅ Push lên cả GitHub và GitLab

### ⚠️ **Lưu ý:**

- **Luôn commit code trước khi push** (cả fullstack và frontend)
- **Backend không được push lên repo Vercel** (đúng như mong muốn)
- **Vercel chỉ cần frontend** để deploy
- **Git subtree** sẽ tự động chỉ push folder `phong-kham/` lên repo cũ

---

## 🐛 Troubleshooting

### **Lỗi: "fatal: could not read Username"**

```bash
# Cần xác thực với GitHub
# Cách 1: Dùng Personal Access Token
git remote set-url github-frontend https://YOUR_TOKEN@github.com/bhviet12/phong-kham.git

# Cách 2: Dùng SSH (khuyến nghị)
git remote set-url github-frontend git@github.com:bhviet12/phong-kham.git
```

### **Lỗi: "Updates were rejected"**

```bash
# Repo GitHub cũ có code mới, cần pull trước
git subtree pull --prefix=phong-kham github-frontend main --squash
git subtree push --prefix=phong-kham github-frontend main --squash
```

### **Lỗi: "git subtree: command not found"**

```bash
# Git subtree là tính năng built-in, không cần cài thêm
# Nếu vẫn lỗi, kiểm tra version Git (cần >= 1.7.11)
git --version
```

---

## 📊 Workflow đề xuất

```bash
# 1. Làm việc với code (frontend + backend)
# ... code changes ...

# 2. Commit code
git add .
git commit -m "Update: description"

# 3. Push lên tất cả repos
./push-all-repos.sh

# 4. Vercel tự động deploy từ repo GitHub cũ
# 5. Kiểm tra deployment tại: https://phong-kham-psi.vercel.app
```

---

## ✅ Checklist

- [x] Đã thêm remote `github-frontend`
- [x] Đã tạo script `push-frontend-to-vercel.sh`
- [x] Đã tạo script `push-all-repos.sh`
- [ ] Đã test push frontend lên repo GitHub cũ
- [ ] Đã cấu hình Vercel để deploy từ repo cũ
- [ ] Đã test deployment trên Vercel

---

## 🎉 Kết quả

Sau khi setup xong:

1. **Repo Fullstack**: Quản lý code, collaboration
2. **Repo Frontend (Vercel)**: Tự động deploy khi có push
3. **Vercel**: Tự động build và deploy frontend

**Bạn có thể vừa quản lý fullstack, vừa deploy frontend lên Vercel!** 🚀
