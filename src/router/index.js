import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import AboutPage from '../views/AboutPage.vue'
import SocialsPage from '../views/SocialsPage.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component:ProjectsPage
  },
  {
    path: "/about",
    name: "About",
    component:AboutPage
  },
  {
    path: "/social",
    name: "Socials",
    component:SocialsPage
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
