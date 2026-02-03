#!/bin/bash

# Script để push frontend lên repo GitHub cũ (cho Vercel deploy)
# Repo cũ: https://github.com/bhviet12/phong-kham.git (chỉ frontend)

set -e

echo "🚀 Bắt đầu push frontend lên GitHub cũ (Vercel)..."
echo ""

# Kiểm tra xem đã commit chưa
if [ -n "$(git status --porcelain)" ]; then
  echo "⚠️  Có thay đổi chưa commit. Vui lòng commit trước khi push!"
  echo "   git add ."
  echo "   git commit -m 'your message'"
  exit 1
fi

# Tạo branch tạm để push frontend
BRANCH_NAME="frontend-only-$(date +%Y%m%d-%H%M%S)"
CURRENT_BRANCH=$(git branch --show-current)

echo "📦 Đang tạo subtree từ folder phong-kham..."
echo ""

# Sử dụng git subtree để push chỉ folder phong-kham
# Lưu ý: Cần commit trước khi chạy script này

# Cách 1: Push subtree trực tiếp (đơn giản nhất)
echo "🔄 Đang push subtree phong-kham lên github-frontend..."
git subtree push --prefix=phong-kham github-frontend main --squash

echo ""
echo "✅ Đã push frontend lên GitHub cũ thành công!"
echo "📍 Repo: https://github.com/bhviet12/phong-kham"
echo "🔗 Vercel sẽ tự động deploy từ repo này"
echo ""
echo "💡 Lưu ý:"
echo "   - Repo fullstack vẫn giữ nguyên tại: origin (GitHub) và gitlab (GitLab)"
echo "   - Chỉ folder phong-kham được push lên repo cũ"
echo "   - Backend không được push lên repo cũ (đúng như mong muốn)"
