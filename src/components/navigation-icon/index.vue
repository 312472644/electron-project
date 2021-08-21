<template>
  <div class="navigation-icon">
    <NavigationTheme />
    <div class="icon-item" title="最小化" @click="minimized">
      <i class="icon-mins"></i>
    </div>
    <div class="icon-item" title="最大化" @click="maximizeWin">
      <i class="icon-full"></i>
    </div>
    <div class="icon-item" title="关闭" @click="close">
      <i class="icon-close"></i>
    </div>
  </div>
</template>

<script>
import NavigationTheme from "../navigation-theme";
export default {
  name: "navigationIcon",
  components: {
    NavigationTheme,
  },
  data() {
    return {
      win: null,
    };
  },
  mounted() {
    this.win = this.remote.getCurrentWindow();
  },
  methods: {
    minimized() {
      this.win.minimize();
    },
    maximizeWin() {
      const { isMaximized } = this.win;
      if (isMaximized()) {
        this.win.restore(); // 恢复原窗口大小
      } else {
        this.win.maximize();
      }
    },
    close() {
      this.ipcRenderer.send("close");
    },
  },
};
</script>

<style scoped>
.navigation-icon {
  display: flex;
  align-items: center;
}

.icon-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

[class^="icon"] {
  opacity: 0.8;
}

[class^="icon"]:hover {
  opacity: 1;
  cursor: pointer;
}

.icon-mins {
  display: block;
  width: 16px;
  height: 1px;
  border-top: 1px solid #fff;
}

.icon-full {
  display: block;
  width: 14px;
  height: 10px;
  border-radius: 2px;
  border: 1px solid #fff;
}

.icon-close {
  display: block;
  width: 32px;
  height: 32px;
  background: url("../../assets/icon/close.svg") no-repeat;
}
</style>
