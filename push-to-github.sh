#!/bin/bash

# Script để push lên GitHub (với Personal Access Token)

echo "🚀 Pushing to GitHub..."
echo ""
echo "⚠️  Nếu được hỏi Username/Password:"
echo "   Username: bhviet12"
echo "   Password: [Paste Personal Access Token]"
echo ""
echo "📝 Chưa có token? Tạo tại: https://github.com/settings/tokens"
echo ""

git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ GitHub push successful!"
    echo ""
    echo "📋 Bây giờ push lên GitLab:"
    echo "   git push gitlab main"
else
    echo ""
    echo "❌ GitHub push failed"
    echo ""
    echo "💡 Giải pháp:"
    echo "   1. Tạo Personal Access Token: https://github.com/settings/tokens"
    echo "   2. Hoặc đổi sang SSH: git remote set-url origin git@github.com:bhviet12/clinic-website.git"
fi
