---
title: Certbot Automatic SSL Certificate Acquisition
author: Lee
---

## Installation

```bash
sudo apt update
sudo apt install certbot
```

If using nginx, also install the plugin:

```bash
sudo apt install certbot python3-certbot-nginx
```

If applying for a wildcard certificate using DNS, install the plugin:

```bash
sudo apt install python3-certbot-dns-cloudflare
```

## Request Certificate

No web server used:

```bash
sudo certbot certonly -d 域名.com -d '*.域名.com'
```

### Using nginx

```bash
sudo certbot --nginx -d yourdomain
```

### Using DNS

Taking Cloudflare as an example:

1. Cloudflare management account > Account API Tokens > API Token Templates > Edit Zone DNS
2. Install plugin `sudo apt install python3-certbot-dns-cloudflare`
3. 新建文件 `/etc/letsencrypt/cloudflare.ini` ，将此参数放入文件 `dns_cloudflare_api_token = 你的token`
4. Run `sudo certbot certonly -d yourdomain` and choose DNS authentication when prompted.

> It is not recommended to remove `cloudflare.ini` after applying. Certbot needs this file for automatic renewal.

## Using the Certificate

After configuration, the terminal will display the paths for the certificate and private key, which can be set in `ssl_certificate` and `ssl_certificate_key` for use.

For other configuration parts, refer to [nginx reverse proxy basics](./nginx.md)

## 查看所有证书

```bash
sudo certbot certificates
```

## 删除证书

```bash
sudo certbot delete --cert-name 证书名
```

## Note

Certbot will automatically add relevant configurations to nginx's `etc/nginx/sites-available/default` file. This may conflict with your site configuration file. You can comment out lines marked with `# managed by Certbot`.
