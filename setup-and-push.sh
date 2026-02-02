#!/bin/bash

# Script tự động setup và push lên GitHub/GitLab

echo "🚀 Bắt đầu setup repository..."

cd "/home/bhviet/Màn hình nền/clinic-website "

# Bước 1: Xóa .git trong subfolders
echo "📦 Bước 1: Xóa .git trong subfolders..."
if [ -d "phong-kham/.git" ]; then
    echo "   - Xóa phong-kham/.git"
    rm -rf phong-kham/.git
fi

if [ -d "phong-kham-backend/.git" ]; then
    echo "   - Xóa phong-kham-backend/.git"
    rm -rf phong-kham-backend/.git
fi

# Bước 2: Đổi branch sang main
echo "📦 Bước 2: Đổi branch sang main..."
git branch -M main 2>/dev/null || git checkout -b main

# Bước 3: Thêm tất cả files
echo "📦 Bước 3: Thêm tất cả files..."
git add .

# Bước 4: Commit
echo "📦 Bước 4: Commit code..."
git commit -m "Initial commit: Full stack clinic website with frontend and backend" 2>/dev/null || echo "   ⚠️  Đã có commit hoặc không có thay đổi"

# Hiển thị status
echo ""
echo "📊 Status hiện tại:"
git status --short | head -10

echo ""
echo "✅ Setup hoàn tất!"
echo ""
echo "📋 Các bước tiếp theo:"
echo ""
echo "1. Tạo repositories trên GitHub và GitLab:"
echo "   - GitHub: https://github.com/new"
echo "   - GitLab: https://gitlab.com/projects/new"
echo ""
echo "2. Thêm remotes (thay URL bằng URL thực tế của bạn):"
echo "   git remote add origin https://github.com/bhviet12/clinic-website.git"
echo "   git remote add gitlab git@gitlab.com:bhviet1510/clinic-website.git"
echo ""
echo "3. Push lên cả hai:"
echo "   git push -u origin main"
echo "   git push -u gitlab main"
echo ""
echo "📖 Xem file PUSH_NOW.md để biết chi tiết!"
