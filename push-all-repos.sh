#!/bin/bash

# Script để push code lên TẤT CẢ các repos:
# 1. origin (GitHub fullstack): https://github.com/bhviet12/clinic-website.git
# 2. gitlab (GitLab fullstack): git@gitlab.com:bhviet1510/clinic-website.git
# 3. github-frontend (GitHub frontend only - Vercel): https://github.com/bhviet12/phong-kham.git

set -e

echo "🚀 Bắt đầu push code lên tất cả repos..."
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
git push origin $CURRENT_BRANCH || echo "⚠️  Lỗi khi push lên origin"
echo ""

# 2. Push lên GitLab fullstack
echo "2️⃣  Đang push lên GitLab fullstack (gitlab)..."
git push gitlab $CURRENT_BRANCH || echo "⚠️  Lỗi khi push lên gitlab"
echo ""

# 3. Push frontend lên GitHub cũ (Vercel)
echo "3️⃣  Đang push frontend lên GitHub cũ (github-frontend - Vercel)..."
git subtree push --prefix=phong-kham github-frontend main --squash || echo "⚠️  Lỗi khi push lên github-frontend"
echo ""

echo "✅ Đã hoàn tất push lên tất cả repos!"
echo ""
echo "📊 Tóm tắt:"
echo "   ✅ GitHub fullstack: https://github.com/bhviet12/clinic-website"
echo "   ✅ GitLab fullstack: https://gitlab.com/bhviet1510/clinic-website"
echo "   ✅ GitHub frontend (Vercel): https://github.com/bhviet12/phong-kham"
echo ""
