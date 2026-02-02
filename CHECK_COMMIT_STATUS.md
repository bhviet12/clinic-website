# 📊 Kiểm tra trạng thái Commit

## ✅ Kết quả kiểm tra

### Commit hiện tại
- **Commit mới nhất**: `fa77c64 first commmit`
- **Đã có trên**: 
  - ✅ `origin/main` (GitHub)
  - ✅ `gitlab/main` (GitLab)

### Trạng thái
- ✅ **GitHub**: Đã đồng bộ (không có commits chưa push)
- ✅ **GitLab**: Đã đồng bộ (không có commits chưa push)

---

## 🔍 Cách kiểm tra commit đã push lên đâu

### 1. Kiểm tra commit mới nhất

```bash
git log --oneline -1
```

### 2. Kiểm tra commit đã có trên remote nào

```bash
git branch -r --contains HEAD
```

Kết quả:
- `origin/main` → Đã có trên GitHub
- `gitlab/main` → Đã có trên GitLab

### 3. Kiểm tra commits chưa push

```bash
# Commits chưa push lên GitHub
git log origin/main..main --oneline

# Commits chưa push lên GitLab
git log gitlab/main..main --oneline
```

Nếu không có output → Đã push hết

### 4. So sánh với remote

```bash
# Fetch mới nhất từ remote
git fetch origin
git fetch gitlab

# So sánh
git log origin/main..main --oneline  # Chưa push GitHub
git log gitlab/main..main --oneline  # Chưa push GitLab
```

---

## 📝 Lưu ý

1. **Commit chỉ ở local**: Chưa push lên đâu cả
2. **Commit có trên origin/main**: Đã push lên GitHub
3. **Commit có trên gitlab/main**: Đã push lên GitLab
4. **Commit có trên cả hai**: Đã push lên cả GitHub và GitLab

---

## 🚀 Nếu commit chưa push

```bash
# Push lên GitHub
git push origin main

# Push lên GitLab
git push gitlab main

# Hoặc push cả hai
git push origin main && git push gitlab main
```

---

**Commit của bạn đã được push lên cả GitHub và GitLab!** ✅
