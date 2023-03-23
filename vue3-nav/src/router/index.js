import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TemoignagesView from '../views/TemoignagesView.vue'
import RatesView from '../views/RatesView.vue'
import TeamsView from '../views/TeamsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/temoignages',
      name: 'temoignages',
      component: TemoignagesView
    },
    {
      path: '/rates',
      name: 'rates',
      component: RatesView
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsView
    },
  ]
})

export default router
