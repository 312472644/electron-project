<template>
  <div class="navigation-theme">
    <i class="icon-skin"></i>
    <el-color-picker
      v-model="themeColor"
      @change="changeTheme"
    ></el-color-picker>
  </div>
</template>

<script>
export default {
  name: "navigationTheme",
  data() {
    return {
      themeColor: null,
    };
  },
  mounted() {
    this.getPrimaryColor();
  },
  methods: {
    getPrimaryColor() {
      const element = document.getElementById("app");
      this.themeColor =
        element.style.getPropertyValue("--primary") || "#ec4141";
    },
    changeTheme(currentColor) {
      this.themeColor = currentColor;
      const element = document.getElementById("app");
      element.style.setProperty("--primary", currentColor);
    },
  },
};
</script>

<style scoped>
.icon-skin {
  display: block;
  width: 24px;
  height: 24px;
  background: url("../../assets/icon/skin.svg") no-repeat;
  background-size: 100% 100%;
  opacity: 0.8;
}
.icon-skin:hover {
  opacity: 1;
  cursor: pointer;
}
.el-color-picker {
  opacity: 0;
  position: absolute;
  transform: translate(-10px, -30px);
}
</style>
