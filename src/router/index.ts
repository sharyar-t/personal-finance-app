import { privateRoutes } from './privateRoutes.ts'
import { publicRoutes } from './publicRoutes.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes, ...privateRoutes],
})

export default router
