<template>
  <div>
    <p>
      Looking for a new book to read? Check out what I'm reading and the last
      few I've finished. All pulled from my <a href="#">Oku.club</a> feed.
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
        console.log(this.booksReading);
      });

    /* Get Books Read */
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Foku.club%2Frss%2Fcollection%2F${this.booksCollection[1]}`
      )
      .then((response) => {
        this.booksRead = response.data.items;
        console.log(this.booksRead);
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
p {
  margin-bottom: 1rem;

  a:hover {
    text-decoration: underline;
  }
}

a {
  color: blue;

  &.book {
    display: block;
    margin-bottom: 1rem;
  }
}

.status {
  width: fit-content;
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  gap: 0.25rem;

  &.reading {
    color: #c77c41;
    background-color: #fffbeb;
  }

  &.read {
    color: #4b6c20;
    background-color: #f7fee7;
  }
}
</style>
