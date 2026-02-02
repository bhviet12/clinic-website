#!/bin/bash

# Script để push code lên cả GitHub và GitLab

echo "🚀 Pushing to GitHub and GitLab..."

# Push lên GitHub
echo "📤 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ GitHub push successful"
else
    echo "❌ GitHub push failed"
    exit 1
fi

# Push lên GitLab
echo "📤 Pushing to GitLab..."
git push gitlab main

if [ $? -eq 0 ]; then
    echo "✅ GitLab push successful"
    echo "🎉 All pushes completed successfully!"
else
    echo "❌ GitLab push failed"
    exit 1
fi
