# Lee's blog

[中文](README.md) | [English](README_en.md) | [日本語](README_ja.md)

## 欢迎

你好，欢迎来到我的博客。

本站点基于 [vitepress](https://vitepress.dev/zh/), 使用 [VitePress Theme Project Trans](https://github.com/project-trans/vitepress-theme-project-trans) 主题。

## 构建流程

### 前置条件

- 安装 [Node.js](https://nodejs.org/zh-cn)
- 安装 pnpm `npm install -g pnpm`

### 安装依赖

执行 `pnpm install` 安装所有依赖。

### 升级主题包版本

本仓库始终使用 `VitePress Theme Project Trans` 的最新预览版本，而非使用仓库中 `package.json` 声明的版本，使用以下命令升级将 `VitePress Theme Project Trans` 升级至最新版本。

```bash
pnpm update @project-trans/vitepress-theme-project-trans@prerelease
```

### 运行/构建

启动预览页面。

```bash
pnpm dev
```

构建站点。

```bash
pnpm build
```
