# 📋 Hướng dẫn Workflow Git

## 🎯 Mục tiêu

Bạn có **2 workflow riêng biệt**:

1. **Push Frontend lên Vercel** → Khi chỉnh sửa frontend xong
2. **Push Fullstack lên GitHub + GitLab** → Khi chỉnh sửa cả frontend + backend

---

## 🔄 Workflow 1: Push Frontend lên Vercel

**Khi nào dùng:** Khi bạn chỉnh sửa frontend (`phong-kham/`) và muốn deploy lên Vercel

### Các bước:

```bash
# 1. Commit code (nếu có thay đổi)
git add .
git commit -m "Update frontend: mô tả thay đổi"

# 2. Push frontend lên Vercel
./push-frontend-to-vercel.sh
```

### Kết quả:
- ✅ Frontend được push lên: `https://github.com/bhviet12/phong-kham` (github-frontend)
- ✅ Vercel tự động deploy
- ❌ **KHÔNG** push lên GitHub fullstack và GitLab

---

## 🔄 Workflow 2: Push Fullstack lên GitHub + GitLab

**Khi nào dùng:** Khi bạn chỉnh sửa cả frontend + backend và muốn lưu vào repos quản lý

### Các bước:

```bash
# 1. Commit code (nếu có thay đổi)
git add .
git commit -m "Update fullstack: mô tả thay đổi"

# 2. Push fullstack lên GitHub và GitLab
./push-fullstack.sh
```

### Kết quả:
- ✅ Fullstack được push lên: `https://github.com/bhviet12/clinic-website` (origin)
- ✅ Fullstack được push lên: `https://gitlab.com/bhviet1510/clinic-website` (gitlab)
- ❌ **KHÔNG** push lên Vercel (github-frontend)

---

## 📊 So sánh 2 Workflow

| Workflow | Script | Push lên đâu | Mục đích |
|----------|--------|--------------|----------|
| **Frontend → Vercel** | `./push-frontend-to-vercel.sh` | `github-frontend` (phong-kham) | Deploy lên Vercel |
| **Fullstack → Quản lý** | `./push-fullstack.sh` | `origin` (GitHub) + `gitlab` (GitLab) | Lưu code, collaboration |

---

## 🎯 Ví dụ thực tế

### Scenario 1: Chỉnh sửa giao diện frontend

```bash
# 1. Chỉnh sửa code trong phong-kham/
# ... làm việc với frontend ...

# 2. Commit
git add phong-kham/
git commit -m "Update: thay đổi màu sắc và font chữ"

# 3. Push frontend lên Vercel để deploy
./push-frontend-to-vercel.sh
```

**Kết quả:** Vercel tự động deploy frontend mới ✅

---

### Scenario 2: Thêm API endpoint mới (backend)

```bash
# 1. Chỉnh sửa backend trong phong-kham-backend/
# ... thêm API endpoint mới ...

# 2. Commit
git add phong-kham-backend/
git commit -m "Add: new API endpoint for appointments"

# 3. Push fullstack lên GitHub và GitLab để lưu code
./push-fullstack.sh
```

**Kết quả:** Code được lưu vào repos quản lý ✅

---

### Scenario 3: Chỉnh sửa cả frontend và backend

```bash
# 1. Chỉnh sửa cả frontend và backend
# ... làm việc với cả 2 ...

# 2. Commit
git add .
git commit -m "Update: integrate new API with frontend"

# 3. Push fullstack lên GitHub và GitLab
./push-fullstack.sh

# 4. (Tùy chọn) Nếu muốn deploy frontend lên Vercel
./push-frontend-to-vercel.sh
```

**Kết quả:** 
- Code được lưu vào repos quản lý ✅
- Frontend được deploy lên Vercel ✅

---

## 📝 Lệnh nhanh (Quick Reference)

### Push Frontend lên Vercel
```bash
./push-frontend-to-vercel.sh
```

### Push Fullstack lên GitHub + GitLab
```bash
./push-fullstack.sh
```

### Push tất cả (Frontend + Fullstack)
```bash
./push-fullstack.sh
./push-frontend-to-vercel.sh
```

---

## ⚠️ Lưu ý quan trọng

1. **Luôn commit trước khi push**
   ```bash
   git add .
   git commit -m "Mô tả thay đổi"
   ```

2. **Workflow Frontend → Vercel:**
   - Chỉ push folder `phong-kham/`
   - Backend **KHÔNG** được push
   - Vercel tự động deploy

3. **Workflow Fullstack → Quản lý:**
   - Push cả `phong-kham/` và `phong-kham-backend/`
   - Lưu vào GitHub và GitLab
   - **KHÔNG** tự động deploy Vercel

4. **Có thể dùng cả 2 workflow:**
   - Push fullstack để lưu code
   - Push frontend để deploy Vercel

---

## 🔧 Troubleshooting

### Lỗi: "Có thay đổi chưa commit"
```bash
# Commit trước
git add .
git commit -m "Your message"
```

### Lỗi: "fatal: could not read Username"
```bash
# Cần xác thực với GitHub/GitLab
# Xem hướng dẫn trong VERCEL_DEPLOY_GUIDE.md
```

### Lỗi: "Updates were rejected"
```bash
# Pull trước khi push
git pull origin main
git pull gitlab main
```

---

## ✅ Checklist

- [x] Đã tạo script `push-frontend-to-vercel.sh`
- [x] Đã tạo script `push-fullstack.sh`
- [ ] Đã test push frontend lên Vercel
- [ ] Đã test push fullstack lên GitHub + GitLab
- [ ] Đã cấu hình Vercel để deploy từ repo cũ

---

## 🎉 Kết quả

Sau khi setup xong, bạn có thể:

1. ✅ **Push frontend** → Vercel tự động deploy
2. ✅ **Push fullstack** → Lưu code vào GitHub + GitLab
3. ✅ **Quản lý code** → Có cả frontend + backend trong repos chính
4. ✅ **Deploy riêng** → Frontend deploy riêng trên Vercel

**Workflow hoàn hảo!** 🚀
