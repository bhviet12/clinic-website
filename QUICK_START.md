# 🚀 Quick Start - Push lên GitHub và GitLab

## Bước 1: Hợp nhất repositories (Chỉ cần làm 1 lần)

```bash
cd "/home/bhviet/Màn hình nền/clinic-website "
./merge-repos.sh
```

## Bước 2: Commit code

```bash
git add .
git commit -m "Initial commit: Full stack clinic website (frontend + backend)"
```

## Bước 3: Tạo repositories trên GitHub và GitLab

**GitHub:**
1. Truy cập: https://github.com/new
2. Repository name: `clinic-website` hoặc `phong-kham-clinic`
3. Click "Create repository"

**GitLab:**
1. Truy cập: https://gitlab.com/projects/new
2. Project name: `clinic-website` hoặc `phong-kham-clinic`
3. Click "Create project"

## Bước 4: Thêm remotes và push

```bash
# Thêm GitHub remote
git remote add origin https://github.com/bhviet12/clinic-website.git

# Thêm GitLab remote (SSH)
git remote add gitlab git@gitlab.com:bhviet1510/clinic-website.git

# Hoặc HTTPS
# git remote add gitlab https://gitlab.com/bhviet1510/clinic-website.git

# Push lên cả hai
git push -u origin main
git push -u gitlab main
```

## Bước 5: Workflow hàng ngày

```bash
# Commit và push
git add .
git commit -m "Mô tả thay đổi"
git push origin main && git push gitlab main
```

## ✅ Xong!

Bây giờ bạn có một repository chứa cả frontend và backend, được quản lý trên cả GitHub và GitLab! 🎉
