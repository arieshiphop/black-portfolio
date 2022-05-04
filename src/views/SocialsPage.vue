<template>
  <main>
    <section class="content">
      <article class="head">
        <h2>Social 🎱​​</h2>
        <p>Connect me 🌚​​</p>
        <hr />
      </article>
      <div class="socials">
        <article style="width: 100%" class="social">
          <h3>YouTube</h3>
          <p>
            Suscribers: {{ youtube.subscriberCount }} | Video views:
            {{ youtube.viewCount }} | Videos count: {{ youtube.videoCount }}
          </p>
          <p></p>
          <p></p>
        </article>
      </div>
      <hr />
      <p>Urls</p>

      <div class="socials">
        <article class="social" v-for="social in socials" :key="social.title">
          <a target="_blank" :href="social.url">
            <h3>{{ social.title }}</h3>
          </a>
        </article>
      </div>
      <hr />
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
      socials: data.data.socials,
      youtube: {},
    };
  },
  mounted() {
    this.loadYoutubeData();
  },
  methods: {
    async loadYoutubeData() {
      const endpoint =
        "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCuIeP0lTW_h8-UY_fzT349Q&key=AIzaSyAGkfEUdVJr4ftVbpnoNwYuqF0L7h_xq-Y";
      let response = await fetch(endpoint);
      let data = await response.json();
      this.youtube = data.items[0].statistics;
    },
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
.social {
  text-align: center;
  gap: 1rem;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  padding: 1rem;
  margin-left: 0.4rem;
}
.socials {
  display: flex;

  padding: 0 0.5rem;
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
