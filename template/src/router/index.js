import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/home',
        name: 'index',
        component: () => import('@/components/Home.vue')
      }, {
        path: '/home/aaa',
        name: 'index111',
        component: () => import('@/components/Foo.vue')
      }
    ]
  })
}