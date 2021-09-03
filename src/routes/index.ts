import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import type { App } from "vue"

const routes:RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import('@/layouts/index.vue'),
        meta: {title:'',icon:""}
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes: routes
})


export const setupRouter = (app: App<Element>) => {
    app.use(router)
} 