---
title: Git の簡単入門
author: Lee
---

## インストール

### Windows / macOS

<https://git-scm.com/downloads>

### Linux

```bash
sudo apt update
sudo apt install git
```

## 使用方法

インストール後、任意のターミナルで Git 関連のコマンドを実行できます。また、vscode のように Git プラグインが組み込まれているエディタを使って、Git を視覚的に管理することも可能です。

Git を使用する際は、[作業ディレクトリ](https://ja.wikipedia.org/wiki/%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA)の概念を理解しておく必要があります。作業ディレクトリは現在ターミナルやウィンドウが位置している場所であり、一部のコマンドが作用する場所です。

たとえば、`cd lee` を使って現在のフォルダー内の `lee` フォルダーに移動すると、この状態で `git clone` を実行すると、`blog` リポジトリが `lee` フォルダーにクローンされます。

### ユーザー名とメールアドレスの設定

```bash
git config --global user.name "username" # ユーザー名を設定
git config --global user.email useremail@qq.com # メールアドレスを設定
```

### ブランチをチェックアウト

```bash
git branch # 現在のブランチを表示
git checkout ブランチ名 # ブランチをチェックアウト
```

### リポジトリのクローン

```bash
git clone リポジトリURL
```

```bash
git clone https://github.com/Leetfs/blog
```

例：本リポジトリのURLは <https://github.com/Leetfs/blog> です。

```bash
git clone https://github.com/Leetfs/blog ./lee-blog
```

clone したリポジトリはデフォルトで現在の作業ディレクトリに配置され、デフォルトのフォルダー名はリポジトリ名になります。このコマンドの意味は、Git でクローンしたリポジトリをこのディレクトリ内の lee-blog フォルダーに保存するということです。

> ヒント: / で始まるパスはルートディレクトリから始まり、たとえば /lee はルート直下のlee、./lee は現在の作業ディレクトリ内のleeを示します。

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

### ステージ／プッシュ／プル

一般的な作業フロー：

```bash
git pull # 最新バージョンを取得
git add . # フォルダー内のすべてのファイルをステージ
git commit -m "ここにコミットメッセージ。何を変更したか簡単に説明、日本語も可。（必須）" # ステージした変更をコミット
git push # リモートにプッシュ
```

この後はまだ書いていません。続きは後日掲載します。
