<template>
  <div class="navigation-menu">
    <ul class="menu-recommand">
      <router-link
        tag="li"
        :key="index"
        :to="router.path"
        :exact="router.path === '/'"
        v-for="(router, index) in configRouterList"
      >
        <span>{{ router.title }}</span>
      </router-link>
      <li><span>视频</span></li>
      <li><span>直播</span></li>
      <li><span>私人FM</span></li>
    </ul>
    <ul class="menu-setting">
      <li class="menu-setting-title"><span>我的音乐</span></li>
      <li><span>本地与下载</span></li>
      <li><span>最近播放</span></li>
      <li><span>我的音乐网盘</span></li>
      <li><span>我的播客</span></li>
      <li><span>我的收藏</span></li>
    </ul>
  </div>
</template>

<script>
import configRouterList from "../../router/config-router";
export default {
  name: "navigationMenu",
  data() {
    return {
      configRouterList: configRouterList,
    };
  },
  methods: {},
};
</script>

<style scoped>
.navigation-menu {
  padding: 15px;
  width: 200px;
  height: calc(100vh - 55px);
  border-right: 1px solid #e2e2e2;
  box-sizing: border-box;
  overflow-y: hidden;
}

.navigation-menu::-webkit-scrollbar,
.navigation-menu::-webkit-scrollbar-track {
  width: 6px;
}

.navigation-menu::-webkit-scrollbar-thumb {
  width: 6px;
  border-radius: 6px;
  background: #e2e2e2;
}

.navigation-menu:hover {
  overflow-y: auto;
}

.menu-recommand {
  width: 175px;
}

.menu-recommand li {
  padding: 8px;
  color: #333;
  font-size: 15px;
  margin-bottom: 2px;
}

.menu-recommand li:hover,
.menu-setting > li:not(.menu-setting-title):hover {
  border-radius: 2px;
  background: rgb(246, 246, 247);
  cursor: pointer;
}

.router-link-active {
  font-weight: bolder;
  border-radius: 2px;
  background: rgb(246, 246, 247);
}

.menu-setting {
  margin-top: 10px;
}
.menu-setting-title {
  color: #999;
  font-size: 13px;
}

.menu-setting > li:not(.menu-setting-title) {
  padding: 8px;
  color: #333;
  font-size: 14px;
}
</style>
