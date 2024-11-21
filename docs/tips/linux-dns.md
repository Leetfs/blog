---
title: Linux 修改 DNS
author: Lee
---

### 临时修改 DNS（重启失效）

打开 `etc/resolv.conf`, 修改 `nameserver` 参数，例：

```text
nameserver 1.1.1.1
nameserver 1.0.0.1
nameserver 2606:4700:4700::1111
nameserver 2606:4700:4700::1001
```

### 永久修改 DNS

打开 `etc/systemd/resolved.conf`,修改 `DNS=` 参数，例：

```text
DNS= 1.1.1.1 1.0.0.1 2606:4700:4700::1111 2606:4700:4700::1001
```

执行 `sudo systemctl restart systemd-resolved.service` 重启 DNS 服务。
