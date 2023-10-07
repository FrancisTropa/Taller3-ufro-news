import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'noticias',
      component: () => import('../views/NoticiasView.vue')
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: () => import('../views/EventosView.vue')
    },
    {
      path: '/noticia/:newsId',
      name: 'NoticiaDetalladaView',
      component: () => import('../views/NoticiaDetalladaView.vue')
    }
  ]
})

export default router
