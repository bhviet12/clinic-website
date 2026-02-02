# 🚀 Hướng dẫn Push lên cả GitHub và GitLab

## ✅ Remotes đã được cấu hình

- **GitHub (origin)**: `https://github.com/bhviet12/clinic-website.git`
- **GitLab (gitlab)**: `git@gitlab.com:bhviet1510/clinic-website.git`

---

## 📋 Cách push lên cả hai

### Cách 1: Push riêng lẻ

```bash
cd "/home/bhviet/Màn hình nền/clinic-website "

# Push lên GitHub
git push origin main

# Push lên GitLab
git push gitlab main
```

### Cách 2: Push cùng lúc (Khuyến nghị)

```bash
cd "/home/bhviet/Màn hình nền/clinic-website "

# Push lên cả hai cùng lúc
git push origin main && git push gitlab main
```

### Cách 3: Tạo alias (Một lần, dùng mãi)

```bash
# Tạo alias
git config alias.pushall '!git push origin main && git push gitlab main'

# Sau đó chỉ cần:
git pushall
```

---

## ⚠️ Xử lý lỗi Authentication

### GitHub (HTTPS)

Nếu gặp lỗi authentication khi push lên GitHub:

**Giải pháp 1: Sử dụng Personal Access Token**

1. Tạo token:
   - Truy cập: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Chọn quyền: `repo` (Full control)
   - Copy token

2. Push và nhập token:
```bash
git push origin main
# Username: bhviet12
# Password: [paste token here]
```

**Giải pháp 2: Đổi sang SSH**

```bash
# Đổi remote URL
git remote set-url origin git@github.com:bhviet12/clinic-website.git

# Push (cần setup SSH key trước)
git push origin main
```

### GitLab (SSH)

Nếu gặp lỗi SSH:

1. Kiểm tra SSH key:
```bash
cat ~/.ssh/id_ed25519.pub
# hoặc
cat ~/.ssh/id_rsa.pub
```

2. Thêm SSH key vào GitLab:
   - Truy cập: https://gitlab.com/-/profile/keys
   - Paste public key
   - Click "Add key"

3. Test connection:
```bash
ssh -T git@gitlab.com
```

---

## ✅ Sau khi push thành công

Bạn sẽ thấy trên **cả GitHub và GitLab**:

```
clinic-website/
├── phong-kham/              ← Frontend folder
│   ├── src/
│   ├── package.json
│   └── ...
│
└── phong-kham-backend/     ← Backend folder
    ├── src/
    ├── pom.xml
    └── ...
```

**Cả 2 folder sẽ xuất hiện trong cùng một repository trên cả hai nền tảng!** 🎉

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

## 🛠️ Kiểm tra trạng thái

```bash
# Xem remotes
git remote -v

# Xem commits
git log --oneline -5

# Xem status
git status

# So sánh với remote
git log origin/main..main  # Commits chưa push lên GitHub
git log gitlab/main..main  # Commits chưa push lên GitLab
```

---

## 📝 Lưu ý

1. **Đồng bộ**: Luôn push lên cả hai để đảm bảo code giống nhau
2. **Authentication**: GitHub cần token hoặc SSH key
3. **GitLab**: Đã setup SSH nên push tự động
4. **Protected branches**: Nếu branch bị bảo vệ, không thể force push

---

**Chúc bạn thành công!** 🎉
