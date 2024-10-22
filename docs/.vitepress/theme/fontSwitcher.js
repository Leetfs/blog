// fontSwitcher.js
export const fontMap = {
  '霞鹜文楷': "'霞鹜文楷', serif",
  '霞鹜新晰黑': "'霞鹜新晰黑', serif",
  };

  // 字体切换函数
  export const switchFont = (font) => {
    document.documentElement.style.setProperty('--main-font', fontMap[font]);
  };

  // 添加全局字体切换事件监听
  export const addFontSwitchListener = () => {
    const fontSwitchItems = document.querySelectorAll('.items span'); // 选择所有导航项的 span
    console.log(`找到 ${fontSwitchItems.length} 个字体切换项`);
    fontSwitchItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        const selectedFont = target.innerText; // 获取点击的字体名称
        switchFont(selectedFont); // 切换字体
      });
    });
};
