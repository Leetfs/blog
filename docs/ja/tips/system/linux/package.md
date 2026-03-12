---
title: パッケージビルドと修正ガイド
author: リー
---

## OBSの設定

略

## チェックアウト

```bash
osc co home:xxxx:xxxaa/xxx && cd $_
osc up -S

rm -f _service;for file in `ls`;do new_file=${file##*:};mv $file $new_file;done
```

## ビルド

```bash
osc build --no-verify --clean amd64 x86_64
osc build --no-verify --clean riscv64 riscv64
```

## パッケージ内容の確認

```bash
rpm -qpl /var/tmp/build-root/..../.rpm
```

## パッケージのアーキテクチャを確認する

```bash
rpm -qp --queryformat '%{ARCH}\n' libraw-0.22.0-1.or.riscv64.rpm
```

## すべてのパッケージのインストールをシミュレートする

```bash
sudo zypper install --dry-run /var/tmp/build-root/x86_64-x86_64/home/abuild/rpmbuild/RPMS/x86_64/libraw-*.rpm
```

## podmanコンテナ内でテスト実行する

```bash
podman run --rm -it --arch amd64 -v /あなたの/RPM/パス/:/mnt:z opensuse/tumbleweed:latest /bin/bash
podman run --rm -it --arch riscv64 -v /あなたの/RPM/パス/:/mnt:z opensuse/tumbleweed:latest /bin/bash

ls -F /mnt
zypper install --allow-unsigned-rpm /mnt/*.rpm
```
