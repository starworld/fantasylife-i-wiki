#!/bin/bash

# Netlifyに新しいサイトを作成してデプロイ
echo "Netlifyにデプロイを開始します..."

# ビルドが最新か確認
if [ ! -d "dist" ]; then
    echo "distフォルダが見つかりません。ビルドを実行します..."
    npm run build
fi

# Netlifyにデプロイ（ドラフトとして）
echo "Netlifyにデプロイ中..."
netlify deploy --dir=dist

# 本番環境にデプロイするか確認
echo ""
echo "プレビューURLが表示されました。確認後、本番環境にデプロイしますか？"
echo "本番環境にデプロイする場合は以下のコマンドを実行してください："
echo "netlify deploy --dir=dist --prod"