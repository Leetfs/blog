---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'http://nhui.top/content/uploadfile/202503/ad7b1741690461.jpg',
    name: '玲雨兰夜',
    title: '诶嘿嘿...',
    links: [
      { icon: 'rss', link: 'http://nhui.top/' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      友情链接
    </template>
    <template #lead>
      这里是我的朋友们~(ฅ´ω`ฅ)
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>