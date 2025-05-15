---
title: Simple Git Introduction
author: Lee
---

## Installation

### Windows / macOS

<https://git-scm.com/downloads>

### Linux

```bash
sudo apt update
sudo apt install git
```

## Usage

After installation, you can run Git-related commands in any terminal, or use an editor like VS Code that has built-in Git plugins to visually manage Git.

When using Git, it's important to understand the concept of the [working directory](https://zh.wikipedia.org/wiki/%E5%B7%A5%E4%BD%9C%E7%9B%AE%E9%8C%84), which is the location where the current terminal or window is, and is also where some commands operate.

For example, you can use `cd lee` to switch to the `lee` folder under the current directory. At this point, running `git clone` will clone the `blog` repository into the `lee` folder.

### Set username and email

```bash
git config --global user.name "username" # Set username
git config --global user.email useremail@qq.com # Set email
```

### Checkout branch

```bash
git branch # View current branches
git checkout branch name # Checkout branch
```

### Clone Repository

```bash
git clone repository_url
```

```bash
git clone https://github.com/Leetfs/blog
```

Example: The URL of this repository is <https://github.com/Leetfs/blog>

```bash
git clone https://github.com/Leetfs/blog ./lee-blog
```

By default, the cloned repository is placed in the current working directory, and the folder name defaults to the repository name.This command means placing the Git-cloned repository into the 'lee-blog' folder in this directory.

> Tips: A path starting with / means starting from the root directory, for example, /lee means 'lee' under the root directory, and ./lee means 'lee' under the current working directory.

### 远程仓库

```bash
git remote add 自定义远程仓库名 https://github.com/example/source.git # 添加远程仓库
git fetch 远程仓库名 # 把远程仓库拉到本地
git branch -a # 列出所有分支
git checkout -b 新分支名 远程仓库名/远程分支名 # 基于远程分支检出一个本地新分支
git switch feature # 基于远程分支检出一个本地新分支（简化操作）
```

### cherry-pick

使用 `git cherry-pick` 可从其他分支/仓库挑选一个或多个提交，把这些提交“复制”到当前分支，产生新的提交。

```bash
git checkout 目标分支
git cherry-pick <起始哈希>^..<结束哈希>
git cherry-pick --skip # 跳过当前冲突的提交
git cherry-pick --abort # 放弃 cherry-pick（回退到之前状态）
```

### Stash / Push / Pull

A common workflow:

```bash
git pull # Pull the latest version
git add . # Stage all files in the folder
git commit -m "Put the commit message here, briefly describe what you changed, language is not limited. (Required)" # Commit staged changes
git push # Push to remote
```

Not finished yet, to be continued.
