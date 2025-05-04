// docs/.vitepress/theme/index.ts
// https://vitepress.dev/guide/custom-theme
import PtjsTheme from '@project-trans/vitepress-theme-project-trans/theme'
import { onMounted } from 'vue'

import 'uno.css'
import './style.css'

export default {
  extends: PtjsTheme,
}
