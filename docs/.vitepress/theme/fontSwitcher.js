export const fontMap = {
  // 字体映射表
  '霞鹜文楷': '霞鹜文楷',
  '霞鹜文楷-等宽': '霞鹜文楷-等宽',
  '霞鹜新晰黑': '霞鹜新晰黑',
  '霞鹜新晰黑-等宽': '霞鹜新晰黑-等宽',
  '使用系统字体': 'system-ui',
  '更纱黑体': '更纱黑体',
  '思源宋体': '思源宋体'
};

// 字体切换函数
export const switchFont = (font) => {
  document.documentElement.style.setProperty('--main-font', fontMap[font]);
};

// 添加全局字体切换事件监听
export const addFontSwitchListener = () => {
  // 选择汉堡菜单
  const hamburger = document.querySelector('.VPNavBarHamburger');
  const fontSwitchItems = document.querySelectorAll('.items a'); // 选择所有导航项的 a 标签
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

  // 添加汉堡菜单事件监听
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      // 在汉堡菜单打开时添加字体切换事件监听
      const fontSwitchItems = document.querySelectorAll('.items a'); // 选择所有导航项的 a 标签
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
    });
  }
};
