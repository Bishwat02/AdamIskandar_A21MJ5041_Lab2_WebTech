// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import ProfilePage from './components/ProfilePage.vue'
import PhotosPage from './components/PhotosPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/profile', component: ProfilePage },
  { path: '/photos', component: PhotosPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
