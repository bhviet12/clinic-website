# 🔐 Hướng dẫn Push lên GitHub

## ❌ Lỗi hiện tại

```
fatal: could not read Username for 'https://github.com'
```

## ✅ Giải pháp

Bạn có **2 cách** để push lên GitHub:

---

## Cách 1: Sử dụng Personal Access Token (Nhanh - Khuyến nghị)

### Bước 1: Tạo Personal Access Token

1. Truy cập: https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Đặt tên token: `clinic-website-push`
4. Chọn quyền:
   - ✅ **`repo`** - Full control of private repositories
5. Click **"Generate token"**
6. **Copy token ngay** (chỉ hiện 1 lần!)

### Bước 2: Push với token

```bash
cd "/home/bhviet/Màn hình nền/clinic-website "

# Push
git push origin main

# Khi được hỏi:
# Username: bhviet12
# Password: [paste token vừa copy]
```

**Hoặc dùng script:**
```bash
./push-to-github.sh
```

### Bước 3: Lưu token (Tùy chọn - để không phải nhập lại)

```bash
# Lưu credentials (chỉ làm 1 lần)
git config --global credential.helper store

# Push lần đầu (nhập token)
git push origin main

# Các lần sau sẽ tự động
```

---

## Cách 2: Đổi sang SSH (An toàn - Khuyến nghị cho lâu dài)

### Bước 1: Kiểm tra SSH key

```bash
# Kiểm tra xem đã có SSH key chưa
ls -la ~/.ssh/

# Nếu thấy id_ed25519.pub hoặc id_rsa.pub → đã có
# Nếu không → tạo mới (Bước 2)
```

### Bước 2: Tạo SSH key (nếu chưa có)

```bash
# Tạo SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Nhấn Enter để chấp nhận đường dẫn mặc định
# Nhập passphrase (hoặc Enter để bỏ qua)
```

### Bước 3: Thêm SSH key vào GitHub

```bash
# Copy public key
cat ~/.ssh/id_ed25519.pub
# hoặc
cat ~/.ssh/id_rsa.pub
```

1. Copy toàn bộ output (bắt đầu từ `ssh-ed25519` hoặc `ssh-rsa`)
2. Truy cập: https://github.com/settings/keys
3. Click **"New SSH key"**
4. Title: `My Computer` (hoặc tên bạn muốn)
5. Key: Paste key vừa copy
6. Click **"Add SSH key"**

### Bước 4: Đổi remote URL sang SSH

```bash
cd "/home/bhviet/Màn hình nền/clinic-website "

# Đổi remote URL
git remote set-url origin git@github.com:bhviet12/clinic-website.git

# Kiểm tra
git remote -v
```

### Bước 5: Test và push

```bash
# Test SSH connection
ssh -T git@github.com
# Nếu thấy "Hi bhviet12! You've successfully authenticated" → OK

# Push
git push origin main
```

---

## ✅ Sau khi push thành công

Bạn sẽ thấy trên **GitHub**:

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

**Cả 2 folder sẽ xuất hiện trong repository!** 🎉

---

## 🔄 Push lên cả GitHub và GitLab

Sau khi setup xong:

```bash
# Push lên cả hai cùng lúc
git push origin main && git push gitlab main
```

---

## 🛠️ Troubleshooting

### Lỗi: "Permission denied (publickey)"

**Giải pháp:**
- Kiểm tra SSH key đã được thêm vào GitHub chưa
- Test: `ssh -T git@github.com`

### Lỗi: "Authentication failed"

**Giải pháp:**
- Token đã hết hạn → Tạo token mới
- Token không có quyền `repo` → Tạo lại với quyền đúng

### Lỗi: "Repository not found"

**Giải pháp:**
- Kiểm tra repository đã được tạo trên GitHub chưa
- Kiểm tra URL: `git remote -v`

---

## 📝 Khuyến nghị

**Cho lần đầu (Nhanh):**
- Dùng **Cách 1** (Personal Access Token)

**Cho lâu dài (An toàn):**
- Dùng **Cách 2** (SSH)

---

**Chọn một cách và làm theo!** 🚀
