import genConfig from '@project-trans/vitepress-theme-project-trans/config'
import type { SidebarOptions } from '@project-trans/vitepress-theme-project-trans/theme'
import type { ThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'
import { withThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'
import type { DefaultTheme } from 'vitepress'

type NavConfig = DefaultTheme.Config['nav']

const nav: NavConfig = [
  {
    text: 'Home',
    link: '/en/',
  },
  {
    text: 'About',
    link: '/en/about/',
  },
  {
    text: 'Some experience',
    link: '/en/tips/',
  },
  {
    text: 'Daily Life',
    link: '/en/life/',
  },
  {
    text: 'Friendly links',
    link: '/en/friendly/',
  },
  {
    text: 'Bound for',
    link: 'https://www.travellings.cn/go.html',
  },
]

const baseConfig = {
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  excludeFilesByFrontmatterFieldName: true,
  collapsed: true,
  documentRootPath: '/docs/',
} satisfies Partial<SidebarOptions>

const sidebarOptions = [
  // 首页
  {
    ...baseConfig,
    scanStartPath: 'en',
    resolvePath: '/en/',
  },
  // 关于
  {
    ...baseConfig,
    scanStartPath: 'en/about',
    resolvePath: '/en/about/',
  },
  // 一些经验
  {
    ...baseConfig,
    scanStartPath: 'en/tips',
    resolvePath: '/en/tips/',
  },
  // 生活琐事
  {
    ...baseConfig,
    scanStartPath: 'en/life',
    resolvePath: '/en/life/',
  },
  {
    ...baseConfig,
    scanStartPath: 'en/friendly',
    resolvePath: '/en/friendly/',
  },
]

const themeConfig = {
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
  // include: ['about', 'tips', 'life'],
  nav,
  sidebarOptions,
  /** 文档所在目录（用于GitHub编辑链接） */
  sitePattern: `docs`,
  enableSuggestionBox: false,
  hostName: 'https://leetfs.com',
}

// https://vitepress.dev/reference/site-config
export default withThemeContext(themeConfig, genConfig)
