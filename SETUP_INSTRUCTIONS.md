# 📋 Hướng dẫn Setup Repository

## ⚠️ Tình huống hiện tại

Hiện tại có **3 Git repositories riêng biệt**:
1. `.git` ở root (`clinic-website/`) ✅
2. `phong-kham/.git` 
3. `phong-kham-backend/.git`

## 🎯 Mục tiêu

Để quản lý cả `phong-kham` và `phong-kham-backend` trong **một repository duy nhất**, bạn có 2 lựa chọn:

### Lựa chọn 1: Xóa Git trong subfolders (Khuyến nghị)

Xóa `.git` trong các subfolder để track chúng như folders thông thường trong repository root.

**Ưu điểm:**
- Đơn giản, dễ quản lý
- Tất cả code trong một repository
- Dễ push/pull

**Nhược điểm:**
- Mất lịch sử commit của các subfolder (nếu có)

**Cách làm:**
```bash
cd "/home/bhviet/Màn hình nền/clinic-website "

# Backup remotes của phong-kham (nếu cần)
cd phong-kham
git remote -v > ../phong-kham-remotes.txt
cd ..

# Backup remotes của phong-kham-backend (nếu cần)
cd phong-kham-backend
git remote -v > ../phong-kham-backend-remotes.txt
cd ..

# Xóa .git trong các subfolder
rm -rf phong-kham/.git
rm -rf phong-kham-backend/.git

# Thêm tất cả vào repository root
git add phong-kham/ phong-kham-backend/
git commit -m "Add frontend and backend to root repository"
```

### Lựa chọn 2: Sử dụng Git Submodules (Nâng cao)

Giữ các repositories riêng và link chúng như submodules.

**Ưu điểm:**
- Giữ lịch sử commit riêng
- Có thể quản lý riêng từng phần

**Nhược điểm:**
- Phức tạp hơn
- Cần quản lý submodules riêng

**Cách làm:**
```bash
cd "/home/bhviet/Màn hình nền/clinic-website "

# Thêm phong-kham như submodule
git submodule add <phong-kham-repo-url> phong-kham

# Thêm phong-kham-backend như submodule
git submodule add <phong-kham-backend-repo-url> phong-kham-backend
```

---

## ✅ Khuyến nghị

**Tôi khuyến nghị Lựa chọn 1** vì:
- Đơn giản hơn
- Phù hợp với monorepo structure
- Dễ quản lý và deploy

---

## 🚀 Sau khi chọn phương án

Sau khi setup xong, làm theo các bước trong `GIT_SETUP.md` để:
1. Thêm remotes (GitHub và GitLab)
2. Push code lên cả hai nền tảng

---

**Bạn muốn chọn phương án nào?** 🤔
