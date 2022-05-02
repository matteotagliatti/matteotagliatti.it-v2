<template>
  <a :href="song.node.externalUrls.spotify">
    <img :src="song.node.album.images[1].url" :alt="song.node.name" />
    <div class="info">
      <h3>{{ song.node.name }}</h3>
      <p class="author">{{ song.node.artists[0].name }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: "SpotifyElement",
  props: ["song"],
};
</script>

<style scoped lang="scss">
@import "../assets/style/style.scss";

a {
  display: flex;
  height: 80px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  .info {
    padding: 0.5rem;
    height: 100%;

    .author {
      font-size: 0.75rem;
      line-height: 1rem;
      color: $text-color;
    }
  }
}

@include mobile {
  a {
    .info {
      h3 {
        font-size: 0.875rem;
      }
    }
  }
}
</style>
