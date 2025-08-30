import { createRouter, createWebHistory } from 'vue-router'
import task1 from '@/task1-3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/task1',
    name: 'task1',
    component: task1
  },
  {
    path: '/task2',
    name: 'task2',
    component: task1
  },
  {
    path: '/task3',
    name: 'task3',
    component: task1
  },
]
})

export default router
