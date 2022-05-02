<template>
  <a :href="song.node.externalUrls.spotify">
    <img :src="song.node.album.images[1].url" :alt="song.node.name" />
    <div class="info">
      <h3>{{ removeParentesis }}</h3>
      <p class="author">
        <span v-for="(artist, index) in song.node.artists" :key="index">
          {{ artist.name
          }}<span v-if="index !== song.node.artists.length - 1">, </span>
        </span>
      </p>
    </div>
  </a>
</template>

<script>
export default {
  name: "SpotifyElement",
  props: ["song"],
  computed: {
    removeParentesis() {
      return this.song.node.name.replace(/\(.*\)/, "");
    },
  },
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
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}

@include mobile {
  a {
    height: 60px;

    img {
      width: 60px;
      height: 60px;
    }

    .info {
      padding-top: 0.25rem;

      h3 {
        font-size: 0.875rem;
      }
    }
  }
}
</style>
