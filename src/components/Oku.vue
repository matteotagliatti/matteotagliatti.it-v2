<template>
  <div>
    <p>
      Looking for a new book to read? Check out what I'm reading and the last
      few I've finished. All pulled from my
      <a href="https://oku.club/user/mattetgl" target="_blank">Oku.club</a>
      feed.
    </p>
    <!-- Reading -->
    <div>
      <p class="status reading">
        <img src="../assets/img/reading.svg" alt="reading" />
        Currently Reading...
      </p>
      <a
        class="book"
        v-for="(book, index) in booksReading"
        :key="index"
        :href="book.link"
        target="_blank"
      >
        <h3>{{ book.title }}</h3>
        <small>{{ book.author }}</small>
      </a>
    </div>
    <!-- Read -->
    <div>
      <p class="status read">
        <img src="../assets/img/read.svg" alt="read" />
        Last I've finished
      </p>
      <a
        class="book"
        v-for="(book, index) in filterBooks"
        :key="index"
        :href="book.link"
        target="_blank"
      >
        <h3>{{ book.title }}</h3>
        <small>{{ book.author }}</small>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OkuSection",
  data() {
    return {
      booksCollection: [
        "yoiVv", // Reading
        "EFF8a", // Read
      ],
      booksReading: [],
      booksRead: [],
    };
  },
  mounted() {
    /* Get Books Reading */
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Foku.club%2Frss%2Fcollection%2F${this.booksCollection[0]}`
      )
      .then((response) => {
        this.booksReading = response.data.items;
      });

    /* Get Books Read */
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Foku.club%2Frss%2Fcollection%2F${this.booksCollection[1]}`
      )
      .then((response) => {
        this.booksRead = response.data.items;
      });
  },
  computed: {
    filterBooks() {
      return this.booksRead.slice(0, 3);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/style/style.scss";

p {
  margin-bottom: $base-mb;
}

.book {
  display: block;
  margin-bottom: $base-mb;
}

.status {
  width: fit-content;
  padding: 0.25rem 0.5rem;
  @include flex(row, center, center);
  font-size: 0.875rem;
  gap: 0.25rem;

  &.reading {
    color: $reading-text;
    background-color: $reading-background;
  }

  &.read {
    color: $read-text;
    background-color: $read-background;
  }
}
</style>
