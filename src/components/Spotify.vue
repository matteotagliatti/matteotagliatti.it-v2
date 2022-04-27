<template>
  <div class="spotify">
    <div class="container">
      <h2>Music</h2>
      <div class="grid"></div>
    </div>
  </div>
</template>

<script>
/* import axios from "axios"; */

export default {
  name: "SpotifySection",
  data() {
    return {
      spotify: null,
    };
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
@import "../assets/style/style.scss";

.spotify {
  background-color: #f8f9fa;
  padding: 3rem 2rem;
  margin-bottom: 6rem;

  .container {
    max-width: 80rem;
  }
}

.grid {
  @include grid(4);
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}
</style>
