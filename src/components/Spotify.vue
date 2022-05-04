<template>
  <div class="spotify">
    <div class="container">
      <h2>Music</h2>
      <div class="grid" v-if="spotify">
        <SpotifyElement
          v-for="(song, index) in spotify"
          :song="song"
          :key="index"
        />
      </div>
      <div v-else class="loading">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
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
    gap: 1rem;
  }
}

/* Loading Spinner */
.loading {
  @include flex(row, center, center);
}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #d0d0d1;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
