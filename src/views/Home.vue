<template>
  <main>
    <section class="content">
      <article class="head">
        <h2>Iker Sánchez Moreno🏁</h2>
        <p>Passionate, proactive and ambitious fullstack developer 🤍</p>
        <hr />
      </article>
      <div class="experiencies">
        <article
          class="experiencie"
          v-for="experiencie in experiencies"
          :key="experiencie.title"
        >
          <h3>{{ experiencie.title }}</h3>
          <p>
            {{ experiencie.description }}
          </p>
          <p>{{ experiencie.time }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import data from "../data.json";
export default {
  name: "Home",
  data() {
    return {
      experiencies: data.data.experiencies,
    };
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .head {
    max-width: 290px;
  }
}

main {
  display: grid;
  place-content: center;
}

p {
  opacity: 0.8;
}
.experiencie {
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
.experiencies {
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
