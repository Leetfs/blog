# Leeのブログ

[中文](README.md) | [English](README_en.md) | [日本語](README_ja.md)

## ようこそ

こんにちは、私のブログへようこそ。

このサイトは [vitepress](https://vitepress.dev/zh/) に基づいており、[VitePress Theme Project Trans](https://github.com/project-trans/vitepress-theme-project-trans) テーマを使用しています。

## ビルドプロセス

### 前提条件

- [Node.js](https://nodejs.org/zh-cn) をインストール
- pnpm をインストール `npm install -g pnpm`

### 依存関係のインストール

`pnpm install` を実行してすべての依存関係をインストールします。

### テーマパッケージのバージョンをアップグレード

このリポジトリは、リポジトリ内の `package.json` で宣言されたバージョンではなく、常に `VitePress Theme Project Trans` の最新プレビューバージョンを使用します。以下のコマンドを使用して `VitePress Theme Project Trans` を最新バージョンにアップグレードしてください。

```bash
pnpm update @project-trans/vitepress-theme-project-trans@prerelease
```

### 実行/ビルド

プレビューページを起動します。

```bash
pnpm dev
```

サイトを構築します。

```bash
pnpm build
```
