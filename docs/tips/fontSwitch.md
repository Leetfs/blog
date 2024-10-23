---
title: Vitepress 导航栏切换字体
author: Lee
---

## 实现原理

定义一个 css 变量，在导航栏按钮被点击时更新 css 变量

## 添加按钮

```ts
// docs/.vitepress/config.ts
// nav ...
{
    text: "切换字体",
    items: [
      {
        text: "霞鹜文楷",
        link: "#", // 因为不需要跳转，所以我们使用空链接
      },
      {
        text: "霞鹜新晰黑",
        link: "#",
      },
    ],
  },

```

## 在 CSS 中导入字体

将字体文件放入 `docs/public` 下

```css
@font-face {
  font-family: '霞鹜文楷';
  src: url('/LXGWWenKai-Regular.ttf') format('truetype');
}
```

## 在 CSS 中引入 CSS 变量

由于 `--main-font` 被赋值前的初值为空，我们可以将备用字体选项作为 `默认字体` 来使用

``` css
:root {
/* var(--main-font, '备用字体') */
--vp-font-family-base: var(--main-font, '霞鹜文楷');/* 文本字体 */
--vp-font-family-mono: "霞鹜文楷-等宽";/* 代码字体 */
}
```

## 监听按钮并传递字体名给 CSS 变量

这里我们新建一个 js 脚本，用于监听按钮和更新 CSS 变量

```js
// docs/.vitepress/theme/fontSwitcher.js
export const fontMap = {
  '霞鹜文楷': "'霞鹜文楷', serif", // '按钮名':'字体名',备用字体(可选)
  '霞鹜新晰黑': "'霞鹜新晰黑', serif",
  };

  // 字体切换函数
  export const switchFont = (font) => {
    document.documentElement.style.setProperty('--main-font', fontMap[font]);
  };

  // 添加全局字体切换事件监听
  export const addFontSwitchListener = () => {
    // 通常情况下 vitepress 下拉栏内容默认包裹在 span 标签，请替换为('.items span')，本站点下拉栏包裹在 a 标签内故使用 a
    const fontSwitchItems = document.querySelectorAll('.items a'); // 选择所有导航项的 a 标签
    // 此处日志用于调试，如果不生效可取消下方代码的注释
    // console.log(`找到 ${fontSwitchItems.length} 个字体切换项`);
    fontSwitchItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        const selectedFont = target.innerText; // 获取点击的字体名称
        // console.log(`${selectedFont}`);
        switchFont(selectedFont); // 切换字体
      });
    });
};
```

## 在 index.ts/index.js 内导入脚本

```ts
// docs/.vitepress/theme/index.ts
// https://vitepress.dev/guide/custom-theme
import PtjsTheme from '@project-trans/vitepress-theme-project-trans/theme'
import { onMounted } from 'vue'
import { addFontSwitchListener } from './fontSwitcher' // 导入脚本

import 'uno.css'
import './style.css'

export default {
  extends: PtjsTheme, // 这里是我导入的自定义主题
  setup() {
    onMounted(() => {
      addFontSwitchListener(); // 添加字体切换的事件监听器
    });
  },
}
```

## 结尾

如不生效，请善用控制台检查css文件的访问路径是否正确，脚本是否正常执行，是否正确的获取到了按钮内容（参考注释）
