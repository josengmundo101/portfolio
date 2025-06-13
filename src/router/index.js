import { createRouter, createWebHistory } from 'vue-router'
import PHome from '@/views/PHome.vue'
import PResume from '@/views/PResume.vue'
import PPortfolio from '@/views/PPortfolio.vue'
import PContact from '@/views/PContact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PHome,
    },
    {
      path: '/about',
      name: 'about',
      component: PResume,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PPortfolio,
    },
    {
      path: '/contact',
      name: 'contact',
      component: PContact,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
