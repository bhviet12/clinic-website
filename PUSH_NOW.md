# 🚀 Hướng dẫn Push lên GitHub và GitLab NGAY BÂY GIỜ

## ✅ Tình trạng hiện tại

- ✅ Git repository đã được khởi tạo ở root
- ⚠️ Chưa có remotes (GitHub/GitLab)
- ⚠️ Chưa có commit
- ⚠️ Có 2 folder: `phong-kham` và `phong-kham-backend` chưa được track

---

## 🎯 Mục tiêu

Push cả 2 folder (`phong-kham` và `phong-kham-backend`) lên GitHub và GitLab trong **một repository duy nhất**.

---

## 📋 Các bước thực hiện

### Bước 1: Kiểm tra và xóa .git trong subfolders (nếu có)

```bash
cd "/home/bhviet/Màn hình nền/clinic-website "

# Kiểm tra xem có .git trong subfolders không
find . -name ".git" -type d

# Nếu có, xóa chúng để merge vào repository root
rm -rf phong-kham/.git
rm -rf phong-kham-backend/.git
```

**Hoặc chạy script tự động:**
```bash
./merge-repos.sh
```

### Bước 2: Đổi branch sang main (nếu đang ở master)

```bash
git branch -M main
```

### Bước 3: Thêm tất cả files vào staging

```bash
git add .
```

### Bước 4: Commit code

```bash
git commit -m "Initial commit: Full stack clinic website with frontend and backend"
```

### Bước 5: Tạo repositories trên GitHub và GitLab

**GitHub:**
1. Truy cập: https://github.com/new
2. Repository name: `clinic-website` (hoặc tên bạn muốn)
3. Description: `Phong Kham Clinic Website - Full Stack Application`
4. **Quan trọng**: Chọn **Private** hoặc **Public**
5. **KHÔNG** chọn "Initialize with README" (đã có code)
6. Click "Create repository"

**GitLab:**
1. Truy cập: https://gitlab.com/projects/new
2. Project name: `clinic-website` (hoặc tên bạn muốn)
3. Project slug: `clinic-website`
4. **Quan trọng**: Chọn **Private** hoặc **Public**
5. **KHÔNG** chọn "Initialize with README" (đã có code)
6. Click "Create project"

### Bước 6: Thêm remotes

**Thay thế URL bằng URL thực tế của bạn:**

```bash
# Thêm GitHub remote
git remote add origin https://github.com/bhviet12/clinic-website.git

# Thêm GitLab remote (SSH - khuyến nghị)
git remote add gitlab git@gitlab.com:bhviet1510/clinic-website.git

# Hoặc GitLab với HTTPS (nếu chưa setup SSH)
# git remote add gitlab https://gitlab.com/bhviet1510/clinic-website.git
```

**Kiểm tra remotes:**
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

### Bước 7: Push lên GitHub và GitLab

```bash
# Push lên GitHub
git push -u origin main

# Push lên GitLab
git push -u gitlab main
```

---

## ✅ Sau khi push xong

Bạn sẽ thấy trên **GitHub** và **GitLab**:

```
clinic-website/
├── phong-kham/              # Frontend folder
│   ├── src/
│   ├── package.json
│   └── ...
│
└── phong-kham-backend/      # Backend folder
    ├── src/
    ├── pom.xml
    └── ...
```

**Cả 2 folder sẽ xuất hiện trong cùng một repository!** 🎉

---

## 🔄 Workflow hàng ngày

Sau khi setup xong, mỗi khi có thay đổi:

```bash
# 1. Thêm files
git add .

# 2. Commit
git commit -m "Mô tả thay đổi"

# 3. Push lên cả hai
git push origin main && git push gitlab main
```

---

## ⚠️ Lưu ý

1. **URL repositories**: Nhớ thay URL trong Bước 6 bằng URL thực tế của bạn
2. **SSH keys**: Nếu dùng SSH cho GitLab, đảm bảo đã setup SSH keys
3. **Authentication**: Nếu dùng HTTPS, bạn sẽ cần nhập username/password hoặc token

---

## 🐛 Xử lý lỗi

### Lỗi: "remote origin already exists"
```bash
# Xóa remote cũ
git remote remove origin
# Thêm lại
git remote add origin <url>
```

### Lỗi: "Authentication failed"
- **GitHub**: Sử dụng Personal Access Token thay vì password
- **GitLab**: Setup SSH keys hoặc sử dụng Access Token

### Lỗi: "Branch 'main' does not exist"
```bash
# Tạo và đổi sang branch main
git branch -M main
```

---

**Bắt đầu từ Bước 1 và làm theo thứ tự!** 🚀
