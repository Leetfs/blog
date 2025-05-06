---
layout: ページ
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const title = '友達リンク'
const lead = 'ここは私の友人たちです～(ฅ´ω`ฅ)'

const members = [
  {
    avatar: '/nhui.jpg',
    name: '玲雨兰夜',
    title: 'えへへ...',
    links: [
      { icon: 'rss', link: 'http://nhui.top/' },
    ]
  },
  {
    avatar: '/xiangcai.png',
    name: '香菜',
    title: '香菜のブログ',
    links: [
      { icon: 'rss', link: 'https://mdzz.pro/' },
    ]
  },
]
</script>

<VPTeamPage><span>
    <VPTeamPageTitle>
      <template #title>{{ title }}</template>
      <template #lead>{{ lead }}</template>
    </VPTeamPageTitle>
  </span>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<style>
  .promo-wrapper {
    position: fixed;
    bottom: 3%;
    right: 2%;
    width: 185px;          /* 表示エリアのサイズ */
    height: 140px;
    overflow: hidden;
    z-index: 9999;
    border-radius: 8px;
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .promo-zoom {
    width: 310px;          /* 元のコンテンツの幅 */
    height: 250px;         /* 元のコンテンツの高さ */
    transform: scale(0.6); /* 表示縮尺 */
    transform-origin: top left;
    pointer-events: auto;
  }

  .promo-zoom iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  .promo-close {
    position: absolute;
    top: 4px;
    right: 6px;
    width: 20px;
    height: 20px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    text-align: center;
    z-index: 10000;
  }
</style>

<div class="promo-wrapper" id="promoBox"><button class=\"promo-close\" onclick=\"document.getElementById('promoBox').style.display='none'\">×</button>
  <div class="promo-zoom">
    <iframe src="https://support.nodeget.com/page/promotion?id=Leetfs" scrolling="no"></iframe>
  </div>
</div>
