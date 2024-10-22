import genConfig from '@project-trans/vitepress-theme-project-trans/config'
import type { SidebarOptions } from '@project-trans/vitepress-theme-project-trans/theme'
import type { ThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'
import { withThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'
import type { DefaultTheme } from 'vitepress'

type NavConfig = DefaultTheme.Config['nav']

const nav: NavConfig = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '关于',
    link: '/about/',
  },
  {
    text: '一些经验',
    link: '/tips/',
  },
  {
    text: '生活琐事',
    link: '/life/',
  },
  {
    text: "切换字体",
    items: [
      {
        text: "霞鹜文楷",
        link: "#",
      },
      {
        text: "霞鹜新晰黑",
        link: "#",
      },
    ],
  },
]

const baseConfig = {
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  excludeFilesByFrontmatterFieldName: true,
  collapsed: true,
  documentRootPath: '/docs',
} satisfies Partial<SidebarOptions>

const sidebarOptions = [
    // 首页
  {
    ...baseConfig,
    scanStartPath: '/',
    resolvePath: '/',
  },
  // 关于
  {
    ...baseConfig,
    scanStartPath: 'about',
    resolvePath: '/about/',
  },
  // 一些经验
  {
    ...baseConfig,
    scanStartPath: 'tips',
    resolvePath: '/tips/',
  },
    // 生活琐事
  {
    ...baseConfig,
    scanStartPath: 'life',
    resolvePath: '/life/',
  },
]

const themeConfig: ThemeContext = {
  siteTitle: "Lee's blog",
  siteDescription: "偶尔的废话和些许经验",
  siteLogo: '/logo.png',
  // SiteTitle值为false时，logo位置不显示标题。未定义SiteTitle时，显示标题。SiteTitle值为abcd时，显示abcd。
    //   SiteTitle: false,
  /** Repo */
  githubRepoLink: 'https://github.com/Leetfs/blog',
  /** vitepress 根目录 */
  rootDir: 'docs',
  /** 文档所在目录（目前似未使用此项） */
  include: ['about', 'tips', 'life'],
  nav,
  sidebarOptions,
  /** 文档所在目录（用于GitHub编辑链接） */
  sitePattern: `docs`,
  enableSuggestionBox: false,
}

// https://vitepress.dev/reference/site-config
export default withThemeContext(themeConfig, genConfig)
