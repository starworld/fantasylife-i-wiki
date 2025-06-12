# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

ファンタジーライフi（Fantasy Life i）のゲームガイド・Wiki静的ウェブサイト。日本語コンテンツで構成され、ビルドツールや依存関係のないシンプルな構造。

## アーキテクチャと構造

### ディレクトリ構成
- `/` - index.htmlとメインリソース
- `/css/` - スタイルシート（style.css）
- `/js/` - JavaScriptファイル（main.js）
- `/pages/guides/` - ゲームガイドページ
- `/pages/lives/` - ライフ（職業）別ページ
- `/pages/resources/` - リソースページ（今後追加予定）

### 技術スタック
- **HTML5** - セマンティックマークアップ
- **CSS3** - モダンCSS（CSS変数、Grid、Flexbox）
- **Vanilla JavaScript** - ES6+機能（外部依存なし）

### 主要機能
1. **レスポンシブデザイン** - モバイルファースト、ハンバーガーメニュー
2. **ダークモード** - システム設定に基づく自動切り替え
3. **アクセシビリティ** - キーボードナビゲーション対応
4. **スムーススクロール** - アンカーリンクのアニメーション

## 開発コマンド

### ローカルサーバーの起動
```bash
# Python 3
python -m http.server 8000

# Node.js (http-serverがインストールされている場合)
http-server -p 8000

# VS Code Live Server拡張機能を使用する場合
# index.htmlを右クリック → "Open with Live Server"
```

### ファイル監視（変更の自動リロード）
```bash
# browser-syncがインストールされている場合
browser-sync start --server --files "**/*"
```

## コーディング規約

### HTML
- セマンティックHTML5要素を使用
- 適切な見出し階層（h1 → h2 → h3）
- 日本語コンテンツのlang="ja"属性

### CSS
- BEM風の命名規則（`.block__element--modifier`）
- CSS変数で色とフォントを管理
- モバイルファーストのメディアクエリ

### JavaScript
- ES6+の機能を活用
- グローバル変数を避け、即時実行関数でスコープを管理
- イベントリスナーはDOMContentLoadedで初期化

## 注意事項

- ビルドプロセスなし - ファイルを直接編集してブラウザで確認
- 外部依存関係なし - CDNやnpmパッケージは使用しない
- 画像は`/images/`ディレクトリに配置（現在は空）
- 新規ページは既存ページの構造に従って作成