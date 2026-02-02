# 🔧 Xử lý lỗi Push lên GitLab

## ❌ Lỗi gặp phải

```
! [rejected]        main -> main (fetch first)
error: gặp lỗi khi đẩy tới một số tham chiếu đến 'gitlab.com:...'
```

## 🔍 Nguyên nhân

Repository trên GitLab đã có commit (có thể là README hoặc file khác được tạo khi tạo repository).

## ✅ Giải pháp

### Cách 1: Merge (Khuyến nghị - An toàn)

```bash
cd "/home/bhviet/Màn hình nền/clinic-website "

# 1. Pull và merge từ GitLab
git pull gitlab main --allow-unrelated-histories

# 2. Nếu có conflict, giải quyết conflict rồi commit
# (Thường không có conflict nếu chỉ là README)

# 3. Push lại
git push gitlab main
```

### Cách 2: Force Push (Nhanh - Nếu chỉ có README mặc định)

**⚠️ CẢNH BÁO:** Chỉ dùng nếu bạn chắc chắn muốn ghi đè hoàn toàn repository trên GitLab.

```bash
cd "/home/bhviet/Màn hình nền/clinic-website "

# Force push (ghi đè)
git push -f gitlab main
```

**Lưu ý:** Nếu branch `main` trên GitLab bị bảo vệ (protected), bạn không thể force push. Phải dùng Cách 1.

---

## 🎯 Khuyến nghị

**Dùng Cách 1 (Merge)** vì:
- An toàn hơn
- Giữ lại lịch sử
- Không gây mất dữ liệu

---

## 📋 Các bước chi tiết (Cách 1)

### Bước 1: Pull và merge

```bash
git pull gitlab main --allow-unrelated-histories
```

Lệnh này sẽ:
- Lấy commits từ GitLab
- Merge vào local repository
- `--allow-unrelated-histories` cho phép merge 2 histories không liên quan

### Bước 2: Nếu có conflict

Nếu có conflict (thường là README.md), bạn sẽ thấy:

```
Auto-merging README.md
CONFLICT (add/add): Merge conflict in README.md
```

**Giải quyết:**
1. Mở file `README.md`
2. Giữ lại nội dung bạn muốn (hoặc merge cả hai)
3. Save file
4. Commit:

```bash
git add README.md
git commit -m "Merge GitLab initial commit"
```

### Bước 3: Push

```bash
git push gitlab main
```

---

## ✅ Sau khi xong

Bạn sẽ thấy cả 2 folder trên GitLab:
```
clinic-website/
├── phong-kham/
└── phong-kham-backend/
```

---

**Làm theo Cách 1 là an toàn nhất!** 🚀
