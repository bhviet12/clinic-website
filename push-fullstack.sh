#!/bin/bash

# Script để push FULLSTACK (frontend + backend) lên GitHub và GitLab
# KHÔNG push lên github-frontend (Vercel)

set -e

echo "🚀 Bắt đầu push FULLSTACK lên GitHub và GitLab..."
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

# 1. Push lên GitHub fullstack
echo "1️⃣  Đang push lên GitHub fullstack (origin)..."
git push origin $CURRENT_BRANCH || {
  echo "⚠️  Lỗi khi push lên origin"
  exit 1
}
echo "   ✅ GitHub: https://github.com/bhviet12/clinic-website"
echo ""

# 2. Push lên GitLab fullstack
echo "2️⃣  Đang push lên GitLab fullstack (gitlab)..."
git push gitlab $CURRENT_BRANCH || {
  echo "⚠️  Lỗi khi push lên gitlab"
  exit 1
}
echo "   ✅ GitLab: https://gitlab.com/bhviet1510/clinic-website"
echo ""

echo "✅ Đã push FULLSTACK lên GitHub và GitLab thành công!"
echo ""
echo "📊 Tóm tắt:"
echo "   ✅ GitHub fullstack: https://github.com/bhviet12/clinic-website"
echo "   ✅ GitLab fullstack: https://gitlab.com/bhviet1510/clinic-website"
echo ""
echo "💡 Lưu ý:"
echo "   - Frontend KHÔNG được push lên Vercel (github-frontend)"
echo "   - Để push frontend lên Vercel, dùng: ./push-frontend-to-vercel.sh"
echo ""
