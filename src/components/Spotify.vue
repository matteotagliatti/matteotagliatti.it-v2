<template>
  <div class="spotify">
    <div class="container">
      <h2>Music</h2>
      <div class="grid">
        <SpotifyElement
          v-for="(song, index) in spotify"
          :song="song"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SpotifyElement from "./SpotifyElement.vue";

export default {
  name: "SpotifySection",
  components: {
    SpotifyElement,
  },
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
  }
}
</style>
