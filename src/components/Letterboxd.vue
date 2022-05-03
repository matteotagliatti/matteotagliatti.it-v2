<template>
  <div>
    <p>
      Struggling for a film to watch? Here's the latest from my
      <a href="https://letterboxd.com/mattetgl/" target="_blank">Letterboxd</a>.
    </p>
    <div class="movies">
      <a
        v-for="(movie, index) in filterMovies"
        :key="index"
        :href="movie.link"
        target="_blank"
      >
        <img :src="movie.thumbnail" :alt="movie.title" />
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LetterboxdSection",
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fletterboxd.com%2Fmattetgl%2Frss%2F"
      )
      .then((response) => {
        this.movies = response.data.items;
      });
  },
  computed: {
    filterMovies() {
      return this.movies.slice(0, 8);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/style/style.scss";

p {
  margin-bottom: $base-mb;
}

.movies {
  @include grid(4);
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.3rem;
  }
}
</style>
