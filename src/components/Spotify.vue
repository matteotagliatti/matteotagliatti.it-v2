<template>
  <div class="spotify">
    <div class="container">
      <h2>Music</h2>
      <div class="grid" v-if="spotify">
        <a
          v-for="(song, index) in spotify"
          :href="song.node.externalUrls.spotify"
          :key="index"
        >
          <img :src="song.node.album.images[1].url" :alt="song.node.name" />
          <div class="info">
            <h3>{{ song.node.name }}</h3>
            <p class="author">{{ song.node.artists[0].name }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SpotifySection",
  data() {
    return {
      spotify: null,
    };
  },
  mounted() {
    axios.get("/api/spotify").then((response) => {
      this.spotify =
        response.data.GetMostPlayedTracksData.me.spotify.topTracks.edges;
    });
  },
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

  a {
    display: flex;
    height: 80px;

    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 0.25rem;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
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
}

@include tablet {
  .spotify {
    padding: 3rem 0rem;
  }

  .grid {
    @include grid(3);
  }
}

@include mobile {
  .spotify {
    margin-bottom: 3rem;
  }

  .grid {
    @include grid(2);

    a {
      .info {
        h3 {
          font-size: 0.875rem;
        }
      }
    }
  }
}
</style>
