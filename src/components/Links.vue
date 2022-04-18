<template>
  <nav>
    <a
      v-for="(link, index) in links"
      :href="link.url"
      :key="index"
      target="_blank"
    >
      <img :src="link.icon" :alt="link.name" />
    </a>
  </nav>
</template>

<script>
export default {
  name: "LinksSection",
  data() {
    return {
      links: [
        {
          name: "Email",
          icon: require("../assets/img/email.svg"),
          url: "mailto:matteotagliatti@gmail.com",
        },
        {
          name: "GitHub",
          icon: require("../assets/img/github.svg"),
          url: "https://github.com/matteotagliatti?tab=repositories",
        },
        {
          name: "LinkedIn",
          icon: require("../assets/img/linkedin.svg"),
          url: "https://www.linkedin.com/in/matteotagliatti/",
        },
        {
          name: "LinkedIn",
          icon: require("../assets/img/instagram.svg"),
          url: "https://www.instagram.com/matteotagliatti/",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
nav {
  width: fit-content;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 2rem;
  background-color: #e7e9ed;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 2;

  a {
    width: 20px;
    height: 20px;
  }

  img {
    width: 100%;
  }
}
</style>
