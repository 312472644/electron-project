<template>
  <div class="navigation-bar">
    <div class="navigation-bar-left"></div>
    <NavigationIcon />
  </div>
</template>

<script>
import NavigationIcon from "../navigation-icon";
export default {
  name: "NavigationBar",
  components: {
    NavigationIcon,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.navigation-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:55px;
  padding: 0 15px;
  background: var(--primary);
  box-sizing: border-box;
}
.navigation-bar-left{
  width: 100px;
}
</style>
