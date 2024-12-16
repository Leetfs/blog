---
title: Certbot 自动获取 SSL 证书
author: Lee
---

## 安装

```bash
sudo apt update
sudo apt install certbot
```

如使用 nginx，需同步安装插件：

```bash
sudo apt install certbot python3-certbot-nginx
```

## 申请证书

未使用任何 web 服务:

```bash
sudo certbot certonly -d 你的域名
```

使用 nginx:

```bash
sudo certbot --nginx -d 你的域名
```

## 使用证书

配置成功后会在终端输出证书和私钥路径，可填入 `ssl_certificate` 和 `ssl_certificate_key` 使用。

其余配置部分参考 [nginx 反代入门](./nginx.md)

## 注意

certbot 会自动向 nginx 的 `etc/nginx/sites-available/default` 文件添加相关配置，这可能与站点配置文件冲突，可注释掉标有 `# managed by Certbot` 的行。
