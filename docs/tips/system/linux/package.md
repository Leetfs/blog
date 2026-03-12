---
title: 打包修包指南
author: Lee
---

## 配置obs

略

## 拉取

```bash
osc co home:xxxx:xxxaa/xxx && cd $_
osc up -S

rm -f _service;for file in `ls`;do new_file=${file##*:};mv $file $new_file;done
```

## 构建

```bash
osc build --no-verify --clean amd64 x86_64
osc build --no-verify --clean riscv64 riscv64
```

## 查看包内内容

```bash
rpm -qpl /var/tmp/build-root/..../.rpm
```

## 确认包的架构

```bash
rpm -qp --queryformat '%{ARCH}\n' libraw-0.22.0-1.or.riscv64.rpm
```

## 模拟安装所有包

```bash
sudo zypper install --dry-run /var/tmp/build-root/x86_64-x86_64/home/abuild/rpmbuild/RPMS/x86_64/libraw-*.rpm
```

## 在 podman 容器内测试运行

```bash
podman run --rm -it --arch amd64 -v /你的/RPM/路径/:/mnt:z opensuse/tumbleweed:latest /bin/bash
podman run --rm -it --arch riscv64 -v /你的/RPM/路径/:/mnt:z opensuse/tumbleweed:latest /bin/bash

ls -F /mnt
zypper install --allow-unsigned-rpm /mnt/*.rpm
```
