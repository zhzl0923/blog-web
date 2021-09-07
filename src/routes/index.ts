import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@layouts/index.vue'),
    meta: { title: '', icon: '' },
    children: [
      {
        path: '/',
        component: () => import('@views/Home.vue'),
        meta: { title: '首页', icon: 'fa-solid:home' }
      },
      {
        path: '/categories',
        component: () => import('@/views/Categories.vue'),
        meta: { title: '分类', icon: 'fa-solid:folder-open' }
      },
      {
        path: '/tags',
        component: () => import('@views/Tags.vue'),
        meta: { title: '标签', icon: 'fa-solid:tags' }
      },
      {
        path: '/archive',
        component: () => import('@views/Archive.vue'),
        meta: { title: '归档', icon: 'fa-solid:archive' }
      },
      {
        path: '/friends',
        component: () => import('@views/Friends.vue'),
        meta: { title: '友链', icon: 'fa-solid:user-friends' }
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}
