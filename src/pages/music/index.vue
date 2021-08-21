<template>
  <div class="music">
    music
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.getMusicList();
  },
  methods: {
    getMusicList() {
      this.axios.get("/music/discover", (result) => {
        console.log("result", result);
      });
    },
  },
};
</script>

<style scoped></style>
