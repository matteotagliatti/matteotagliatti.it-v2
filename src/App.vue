<template>
  <main id="app">
    <!-- Header -->
    <header>
      <div class="container">
        <h1>Hey, I'm Matteo</h1>
        <p>
          A developer with an eye for design from Milan, Italy. Instead of the
          traditional portfolio site that never gets updated I wanted to make
          something more personal as a collection of things I enjoy.
        </p>
      </div>
    </header>
    <!-- Works -->
    <section>
      <div class="container works">
        <div class="dotted">
          <h2>Closed Source Works</h2>
          <div>
            <a
              v-for="(work, index) in closedWorks"
              :href="work.link"
              :key="index"
            >
              <h3>{{ work.title }}</h3>
              <small>{{ work.tech }} - {{ work.date }}</small>
            </a>
          </div>
        </div>
        <div>
          <h2>Open Source Works</h2>
          <div>
            <a
              v-for="(work, index) in closedWorks"
              :href="work.link"
              :key="index"
            >
              <h3>{{ work.title }}</h3>
              <small>{{ work.tech }} - {{ work.date }}</small>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
    <section>
      <Spotify />
    </section>
  </main>
</template>

<script>
import Spotify from "./components/Spotify.vue";

export default {
  name: "App",
  components: {
    Spotify,
  },
  data() {
    return {
      closedWorks: [
        {
          title: "Centrufficio Outlet",
          tech: "WordPress",
          date: "2021",
          link: "https://centrufficiooutlet.it/",
        },
        {
          title: "Studio Acqua",
          tech: "WordPress",
          date: "2021",
          link: "https://studioacquatortona.it/",
        },
        {
          title: "Centro Sposi Paradiso",
          tech: "WordPress",
          date: "2020",
          link: "https://centrosposiparadiso.it/",
        },
        {
          title: "Magna Carta",
          tech: "HTML, CSS, JS",
          date: "2019",
          link: "https://magnacartasnc.it/",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./assets/style/style.scss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Inter, sans-serif;
  background-color: white;
  color: $text-color;
}

h1,
h2,
h3 {
  font-weight: 600;
}

h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 1.35rem;
}

h3,
p {
  font-size: 1rem;
}

p {
  line-height: 1.75rem;
}

a {
  text-decoration: none;

  h3 {
    color: $text-color;
  }

  small {
    color: $grey-color;
  }
}

header,
section {
  margin: 0 auto;
}

header {
  max-width: 42rem;
  padding-top: 6rem;
  padding-bottom: 6rem;

  p {
    font-size: 1.125rem;
  }
}

section {
  max-width: 64rem;
}

.container {
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
}

.works {
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4rem;

  & > div {
    padding: 2rem;

    a {
      display: block;
      margin-bottom: 0.85rem;
    }
  }

  .dotted {
    border: 1px dashed $text-color;
    border-radius: 0.75rem;
  }
}
</style>
