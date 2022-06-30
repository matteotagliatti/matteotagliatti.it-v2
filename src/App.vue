<template>
  <main>
    <!-- Header -->
    <header>
      <div class="container">
        <h1>Hey, I'm Matteo</h1>
        <p>
          A web developer with an eye for design from Milan, Italy. Instead of
          the traditional portfolio site that never gets updated I wanted to
          make something more simple and personal as a collection of things I
          enjoy.
        </p>
      </div>
    </header>
    <!-- Works -->
    <section>
      <div class="container works">
        <div class="dotted">
          <h2>Tech I use</h2>
          <div>
            <div v-for="(info, index) in infos" :key="index" class="info">
              <h3>{{ info.title }}</h3>
              <small>{{ info.tech }}</small>
            </div>
          </div>
        </div>
        <div>
          <h2>Works</h2>
          <div>
            <a
              v-for="(work, index) in works"
              :href="work.link"
              :key="index"
              target="_blank"
            >
              <h3>{{ work.title }}</h3>
              <small>{{ work.tech }} - {{ work.date }}</small>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Spotify -->
    <section class="no-mw">
      <Spotify />
    </section>
    <!-- Oku & Letterboxd -->
    <section class="container">
      <h2>Books & Movies</h2>
      <div class="activity">
        <Oku />
        <Letterboxd />
      </div>
    </section>
  </main>
  <Links />
</template>

<script>
import Spotify from "./components/Spotify.vue";
import Oku from "./components/Oku.vue";
import Letterboxd from "./components/Letterboxd.vue";
import Links from "./components/Links.vue";

export default {
  name: "App",
  components: {
    Spotify,
    Oku,
    Letterboxd,
    Links,
  },
  data() {
    return {
      infos: [
        {
          title: "HTML, CSS",
          tech: "Bootstrap, Scss, Tailwind",
        },
        {
          title: "JavaScript",
          tech: "Vue.js, Node.js",
        },
        {
          title: "PHP & DB",
          tech: "Laravel, MySQL",
        },
        {
          title: "CMS / Static Site Generators",
          tech: "WordPress, Shopify, Jekyll, 11ty",
        },
        {
          title: "Design",
          tech: "Photoshop, Illustrator, Figma",
        },
      ],
      works: [
        {
          title: "DeliveBoo",
          tech: "Laravel, Vue.js",
          date: "2022",
          link: "https://github.com/matteotagliatti/deliveboo",
        },
        {
          title: "Arcade Games",
          tech: "JavaScript, Jekyll",
          date: "2022",
          link: "https://github.com/matteotagliatti/arcade-games",
        },
        {
          title: "matteotagliatti.it (Old)",
          tech: "JQuery, Jekyll",
          date: "2021",
          link: "https://github.com/matteotagliatti/matteotagliatti.it-v1",
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
  font-weight: 450;
}

h1,
h2,
h3 {
  font-weight: 600;
}

h1 {
  margin-bottom: $base-mb;
  font-size: 1.875rem;
  line-height: 2.25rem;
}

h2 {
  margin-bottom: 1.35rem;
  font-size: 1.25rem;
  line-height: 1.75rem;

  a.link {
    display: inline !important;
    color: $text-color;
    &:hover {
      text-decoration: underline;
    }
  }
}

h3,
p {
  font-size: 1rem;
}

p {
  line-height: 1.5rem;

  a {
    color: blue;
    text-decoration: underline;
  }
}

a {
  text-decoration: none;

  h3 {
    color: $text-color;
  }

  small {
    color: $grey-color;
  }

  &:hover {
    cursor: pointer;

    h3 {
      text-decoration: underline;
    }
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
    line-height: 1.75rem;
  }

  p:first-of-type {
    margin-bottom: 0.5rem;
  }
}

section {
  max-width: 64rem;
}

.no-mw {
  max-width: unset;
}

.strong {
  font-weight: 600;
}

.container {
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
}

.works {
  margin-bottom: 6rem;
  @include grid(2);
  gap: 4rem;

  & > div {
    padding: 2rem;

    a,
    div.info {
      display: block;
      margin-bottom: $base-mb;
    }

    div.info {
      h3 {
        font-weight: 450;
      }
    }
  }

  .dotted {
    border: 1px dashed $text-color;
    border-radius: 0.75rem;
  }
}

.activity {
  margin-bottom: 6rem;
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  gap: 4rem;
}

@include mobile {
  header {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .works {
    margin-bottom: 0;
    @include grid(1);
    gap: 0;
  }

  .activity {
    @include grid(1);
    gap: 2rem;
  }
}
</style>
