#!/bin/bash

# Script để push frontend lên repo GitHub cũ (cho Vercel deploy)
# Repo cũ: https://github.com/bhviet12/phong-kham.git (chỉ frontend)

set -e

echo "🚀 Bắt đầu push FRONTEND lên GitHub cũ (Vercel)..."
echo ""

# Kiểm tra xem đã commit chưa
if [ -n "$(git status --porcelain)" ]; then
  echo "⚠️  Có thay đổi chưa commit. Vui lòng commit trước khi push!"
  echo "   git add ."
  echo "   git commit -m 'your message'"
  exit 1
fi

CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Branch hiện tại: $CURRENT_BRANCH"
echo ""

# Sử dụng git subtree để push chỉ folder phong-kham
echo "📦 Đang push folder phong-kham/ lên github-frontend..."
echo "🔄 Đang push subtree phong-kham lên github-frontend..."
git subtree push --prefix=phong-kham github-frontend main --squash || {
  echo "⚠️  Lỗi khi push lên github-frontend"
  exit 1
}

echo ""
echo "✅ Đã push FRONTEND lên GitHub cũ thành công!"
echo "📍 Repo: https://github.com/bhviet12/phong-kham"
echo "🔗 Vercel sẽ tự động deploy từ repo này"
echo ""
echo "💡 Lưu ý:"
echo "   - Chỉ folder phong-kham/ được push lên repo này"
echo "   - Backend KHÔNG được push lên repo này (đúng như mong muốn)"
echo "   - Để push fullstack, dùng: ./push-fullstack.sh"
echo ""
