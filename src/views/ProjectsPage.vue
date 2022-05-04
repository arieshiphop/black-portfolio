<template>
  <main>
    <section class="content">
      <article class="head">
        <h2>Projects 📓</h2>
        <p>All made with hearth 🖤</p>
        <hr />
      </article>
      <div class="projects">
        <article
          class="project"
          v-for="project in projects"
          :key="project.title"
        >
          <a target="_blank" :href="project.url">
            <h3 class="title">{{ project.title }}</h3>
          </a>
          <p>
            {{ project.description }}
          </p>
          <p>{{ project.time }}</p>

          <img :src="project.image" :alt="project.image" />
        </article>
      </div>
    </section>
  </main>
</template>

<script>
import data from "../data.json";
export default {
  data() {
    return {
      projects: data.data.projects,
    };
  },
};
</script>

<style lang ="scss" scoped>
main {
  display: grid;
  place-content: center;
}

p {
  opacity: 0.8;
}
.project {
  margin-top: 1rem;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  padding: 0.5rem;
  p {
    max-width: 90%;
  }
  max-width: 60vw;
}
.project img {
  display: none;
}
/* .project:hover {
  img {
    display: block;
  }
} */
.projects {
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding: 0 0.5rem;
  max-height: 65vh;
}
::-webkit-scrollbar {
  width: 1vw;
}
::-webkit-scrollbar-track {
  background: rgb(27, 27, 27);
}

::-webkit-scrollbar-thumb {
  background: #333333;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
  opacity: 0.6;
}
</style>