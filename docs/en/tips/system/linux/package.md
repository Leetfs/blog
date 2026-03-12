---
title: Package Building and Repair Guide
author: Lee
---

## Configure OBS

Omitted

## Pull

```bash
osc co home:xxxx:xxxaa/xxx && cd $_
osc up -S

rm -f _service;for file in `ls`;do new_file=${file##*:};mv $file $new_file;done
```

## Build

```bash
osc build --no-verify --clean amd64 x86_64
osc build --no-verify --clean riscv64 riscv64
```

## View Package Contents

```bash
rpm -qpl /var/tmp/build-root/..../.rpm
```

## Confirm package architecture

```bash
rpm -qp --queryformat '%{ARCH}\n' libraw-0.22.0-1.or.riscv64.rpm
```

## Simulate installation of all packages

```bash
sudo zypper install --dry-run /var/tmp/build-root/x86_64-x86_64/home/abuild/rpmbuild/RPMS/x86_64/libraw-*.rpm
```

## Test run inside podman container

```bash
podman run --rm -it --arch amd64 -v /your/RPM/path/:/mnt:z opensuse/tumbleweed:latest /bin/bash
podman run --rm -it --arch riscv64 -v /your/RPM/path/:/mnt:z opensuse/tumbleweed:latest /bin/bash

ls -F /mnt
zypper install --allow-unsigned-rpm /mnt/*.rpm
```
