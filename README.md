# ファンタジーライフi 攻略Wiki

ファンタジーライフi『グルグルの竜と時をぬすむ少女』の世界一詳しい攻略サイトのソースコードです。

## 🚀 技術スタック

- **フレームワーク**: [Astro](https://astro.build/) - 高速な静的サイト生成
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストCSS
- **検索**: [Pagefind](https://pagefind.app/) - 静的サイト向け全文検索
- **コンテンツ管理**: Markdown/MDX + YAML
- **デプロイ**: Vercel/Netlify対応

## 📁 プロジェクト構造

```
fantasylife-i/
├── src/
│   ├── components/    # UIコンポーネント
│   ├── content/       # Markdownコンテンツ
│   ├── data/          # YAMLデータベース
│   ├── layouts/       # ページレイアウト
│   ├── pages/         # ルーティング
│   └── styles/        # グローバルスタイル
├── public/            # 静的アセット
└── dist/              # ビルド出力
```

## 🛠️ 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## 📝 コンテンツの追加

### 新しい記事を追加する

1. `src/content/`の適切なディレクトリにMarkdownファイルを作成
2. フロントマターに必要な情報を記入
3. 本文をMarkdown形式で記述

例：
```markdown
---
title: "記事のタイトル"
publishDate: 2024-01-20
description: "記事の説明"
---

記事の本文
```

### データベースの更新

`src/data/`内のYAMLファイルを編集してアイテムやモンスター情報を追加・更新できます。

## 🔧 カスタマイズ

### テーマカラーの変更

`tailwind.config.js`でカラーパレットをカスタマイズできます。

### レイアウトの変更

`src/layouts/`内のAstroコンポーネントを編集してページレイアウトを変更できます。

## 📊 パフォーマンス

- Lighthouse Score: 95+（全項目）
- Core Web Vitals: 
  - LCP < 2.5s
  - CLS < 0.1
  - FID < 100ms

## 🚀 デプロイ

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 コントリビューション

バグ報告や機能提案はGitHub Issuesまでお願いします。