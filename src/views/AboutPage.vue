<template>
  <main>
    <section class="content">
      <article class="head">
        <h2>About 🇲🇪🕷️</h2>
        <p>¿Do you want to know about me?🗻</p>

        <hr />
      </article>
      <div class="aboutme">
        <article class="about">
          <p>Name: Iker Sánchez Moreno</p>
          <a href="cviker.pdf" download
            ><button>
              <span class="button_top"> Download CV </span>
            </button></a
          >
        </article>
        <article class="about">
          <p>Hobbies:</p>
          <div class="hobbies">
            <li>Hip Hop ♟️</li>
            <li>Programming 🔌</li>
            <li>Technologies 🎩</li>
            <li>YouTube 👁️‍🗨️​</li>
          </div>
        </article>
        <article class="about">
          <p>Technologies:</p>
          <div class="hobbies">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>C#</li>
            <li>PawnScript</li>
            <li>Vue</li>
            <li>Flask</li>
            <li>Git</li>
            <li>Photoshop</li>
          </div>
        </article>
        <article class="about">
          <p>Life goals:</p>
          <div class="hobbies">
            <li>Own a company ✖️​​</li>
            <li>
              Work as a senior position in a company like Google or Meta ✖️​​
            </li>
            <li>Live in EEUU ✖️​​</li>
          </div>
        </article>
        <article class="about">
          <p>Languages:</p>
          <div class="hobbies">
            <li>English</li>
            <li>Spanish</li>
            <li>Basque</li>
            <li>Catalan</li>
          </div>
        </article>

        <article class="about">
          <details class="no-matter-info">
            <summary>Personal info that few want to see:</summary>
            <details>
              <summary>Are you sure? There is no way back</summary>
              <p>
                I am a cheerful and very outgoing person with great desire to
                learn new things and improve everything I do. Ambitious
                personally and professionally. I have been using technologies
                since I was 3-4 years old, thanks to this, I have ease of
                handling them.
              </p>
            </details>
          </details>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang ="scss" scoped>
button {
  /* Variables */
  --button_radius: 0.75em;
  --button_color: hsl(0 0% 17.9%);
  --button_outline_color: rgba(0, 0, 0, 0.4);

  font-size: 12px;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
}

.button_top {
  color: white !important;
  display: block;
  box-sizing: border-box;
  border: 2px solid var(--button_outline_color);
  border-radius: var(--button_radius);
  padding: 0.75em 1.5em;
  background: var(--button_color);
  transform: translateY(-0.2em);
  transition: transform 0.1s ease;
}

button:hover .button_top {
  /* Pull the button upwards when hovered */
  transform: translateY(-0.33em);
}

button:active .button_top {
  /* Push the button downwards when pressed */
  transform: translateY(0);
}
button:hover {
  cursor: pointer;
}
main {
  display: grid;
  place-content: center;
}

p {
  opacity: 0.8;
}
@media screen and (max-width: 600px) {
  .hobbies {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
}

/* place li elements centered on ul */
.hobbies {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.hobbies li {
  max-width: 30rem;
}
li {
  display: list-item;
  background: rgba(0, 0, 0, 0.4);
  padding: 5px 10px;
  margin: 0 3px;
  border-radius: 10px;
}
.about {
  text-align: center;
  margin-top: 1rem;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  padding: 0.5rem;

  width: 60vw;
  max-width: 60vw;
}

.aboutme {
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