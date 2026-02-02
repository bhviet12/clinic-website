#!/bin/bash

# Script để merge các git repositories thành một repository duy nhất

echo "🔄 Đang hợp nhất các git repositories..."

cd "/home/bhviet/Màn hình nền/clinic-website "

# Kiểm tra xem đã ở trong git repository chưa
if [ ! -d ".git" ]; then
    echo "❌ Không tìm thấy .git ở root. Đang khởi tạo..."
    git init
    git branch -M main
fi

# Backup remotes của phong-kham (nếu có)
if [ -d "phong-kham/.git" ]; then
    echo "📦 Backup remotes của phong-kham..."
    cd phong-kham
    if [ -d ".git" ]; then
        git remote -v > ../phong-kham-remotes-backup.txt 2>/dev/null || true
    fi
    cd ..
fi

# Backup remotes của phong-kham-backend (nếu có)
if [ -d "phong-kham-backend/.git" ]; then
    echo "📦 Backup remotes của phong-kham-backend..."
    cd phong-kham-backend
    if [ -d ".git" ]; then
        git remote -v > ../phong-kham-backend-remotes-backup.txt 2>/dev/null || true
    fi
    cd ..
fi

# Xóa .git trong các subfolder
echo "🗑️  Xóa .git trong phong-kham..."
rm -rf phong-kham/.git

echo "🗑️  Xóa .git trong phong-kham-backend..."
rm -rf phong-kham-backend/.git

# Thêm tất cả vào repository root
echo "➕ Thêm tất cả files vào repository root..."
git add .

# Kiểm tra status
echo ""
echo "📊 Status hiện tại:"
git status --short | head -10

echo ""
echo "✅ Hoàn thành! Bây giờ bạn có thể:"
echo "   1. git commit -m 'Merge frontend and backend into single repository'"
echo "   2. Thêm remotes: git remote add origin <github-url>"
echo "   3. Thêm remotes: git remote add gitlab <gitlab-url>"
echo "   4. git push -u origin main && git push -u gitlab main"
