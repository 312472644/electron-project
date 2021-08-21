<template>
  <div id="app">
    <NavigationBar />
    <NavigationMenu />
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import "./css/index.css";
import NavigationBar from "./components/navigation-bar";
import NavigationMenu from "./components/navigation-menu";

export default {
  name: "App",
  components: {
    NavigationBar,
    NavigationMenu,
  },
};
</script>

<style scoped>
.router-view {
  position: absolute;
  padding: 10px;
  top: 55px;
  left: 200px;
}
</style>
