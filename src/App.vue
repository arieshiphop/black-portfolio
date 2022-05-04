<template>
  <header>
    <div id="nav">
      <router-link class="icon" to="/"
        ><img src="./assets/outline_face_white_24dp.png" alt="" />

        <div class="hideName">
          <p>Home</p>
        </div>
      </router-link>
      <router-link class="icon" to="/projects"
        ><img src="./assets/outline_tungsten_white_24dp.png" alt="" />
        <div class="hideName">
          <p>Projects</p>
        </div>
      </router-link>
      <router-link class="icon" to="/about"
        ><img src="./assets/outline_info_white_24dp.png" alt="" />
        <div class="hideName">
          <p>About</p>
        </div>
      </router-link>
      <hr class="border" />
      <router-link class="icon" to="/social"
        ><img src="./assets/outline_person_white_24dp.png" alt="" />
        <div class="hideName">
          <p>Socials</p>
        </div>
      </router-link>
    </div>
  </header>

  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
* {
  color: white;
  font-family: Poppins, sans-serif;
}

.hideName {
  display: none;
}

.icon:hover {
  -webkit-animation-name: pulse;
  animation-name: pulse;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  .hideName {
    display: block;
    background: var(--colors-gray2);
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    position: absolute;
    margin: 0 auto;
    font-size: 0.8rem;
    text-align: center;
    z-index: 1;
    opacity: 0.8;
  }
}
@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes pulse {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.border {
  width: 2px;
  height: 48px;
  background: var(--colors-grayA4);
  border: transparent;
}
:root {
  --colors-gray1: hsl(0 0% 8.5%);
  --colors-gray2: hsl(0 0% 11%);
  --colors-gray3: hsl(0 0% 13.6%);
  --colors-gray4: hsl(0 0% 15.8%);
  --colors-gray5: hsl(0 0% 17.9%);
  --colors-gray6: hsl(0 0% 20.5%);
  --colors-gray7: hsl(0 0% 24.3%);
  --colors-gray8: hsl(0 0% 31.2%);
  --colors-gray9: hsl(0 0% 43.9%);
  --colors-gray10: hsl(0 0% 49.4%);
  --colors-gray11: hsl(0 0% 62.8%);
  --colors-gray12: hsl(0 0% 93%);
  --colors-grayA1: hsl(0 0% 100% / 0);
  --colors-grayA2: hsl(0 0% 100% / 0.026);
  --colors-grayA3: hsl(0 0% 100% / 0.056);
  --colors-grayA4: hsl(0 0% 100% / 0.077);
  --colors-grayA5: hsl(0 0% 100% / 0.103);
  --colors-grayA6: hsl(0 0% 100% / 0.129);
  --colors-grayA7: hsl(0 0% 100% / 0.172);
  --colors-grayA8: hsl(0deg 0% 97% / 25%);
  --colors-grayA9: hsl(0 0% 100% / 0.386);
  --colors-grayA10: hsl(0 0% 100% / 0.446);
  --colors-grayA11: hsl(0 0% 100% / 0.592);
  --colors-grayA12: hsl(0 0% 100% / 0.923);
  --colors-blue1: hsl(212 35% 9.2%);
  --colors-blue2: hsl(216 50% 11.8%);
  --colors-blue3: hsl(214 59.4% 15.3%);
  --colors-blue4: hsl(214 65.8% 17.9%);
  --colors-blue5: hsl(213 71.2% 20.2%);
  --colors-blue6: hsl(212 77.4% 23.1%);
  --colors-blue7: hsl(211 85.1% 27.4%);
  --colors-blue8: hsl(211 89.7% 34.1%);
  --colors-blue9: hsl(206 100% 50%);
  --colors-blue10: hsl(209 100% 60.6%);
  --colors-blue11: hsl(210 100% 66.1%);
  --colors-blue12: hsl(206 98% 95.8%);
  --colors-bg: #000;
  --colors-lowContrast: black;
  --colors-highContrast: white;
}
html,
body {
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  background: var(--colors-gray1);
}
@media screen and (max-width: 600px) {
  .icon {
    padding: 0;
    width: 8vw;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 10vw;
      height: 10v;
    }
  }
}
.icon {
  --gradient-color-1: var(--colors-gray2);
  --gradient-color-2: var(--colors-gray3);
  background-image: linear-gradient(
    45deg,
    var(--gradient-color-1),
    var(--gradient-color-2),
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  background-size: 200% 100%;

  padding: 0 0.6rem;
  border-radius: 10px;
}

header {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
#nav {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  height: 4rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  backdrop-filter: blur(100px) saturate(400%) brightness(100%);
  margin: 1rem;
  background: rgba(22, 22, 22, 0.8);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
  padding: 0 1rem;
  a {
    font-weight: bold;
    color: white;
    text-decoration: none;

    // &.router-link-exact-active {
    //   border-bottom: 2px solid white;
    // }
  }
}
</style>
