# Lee's blog

[中文](README.md) | [English](README_en.md) | [日本語](README_ja.md)

## Welcome

Hello, welcome to my blog.

This site is based on [vitepress](https://vitepress.dev/zh/), using the [VitePress Theme Project Trans](https://github.com/project-trans/vitepress-theme-project-trans) theme.

## Build process

### Prerequisites

- Install [Node.js](https://nodejs.org/zh-cn)
- Install pnpm `npm install -g pnpm`

### Install dependencies

Run `pnpm install` to install all dependencies.

### Upgrade theme package version

This repository always uses the latest preview version of `VitePress Theme Project Trans`, not the version declared in the repository's `package.json`. Use the following command to upgrade `VitePress Theme Project Trans` to the latest version.

```bash
pnpm update @project-trans/vitepress-theme-project-trans@prerelease
```

### Run/Build

Start the preview page.

```bash
pnpm dev
```

Build the site.

```bash
pnpm build
```
