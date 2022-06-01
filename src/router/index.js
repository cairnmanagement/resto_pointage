import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import QrCode from '../views/QrCode.vue'
import PersonnelList from '../views/PersonnelList.vue'
import PersonnelPresent from '../views/PersonnelPresent.vue'
import Pointage from '../views/Pointage.vue'
import GoodBye from '../views/Goodbye.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // children: [
    //   {
    //     path: 'pin',
    //     component: () => import('../views/Pin.vue')
    //   },
    //   {
    //     path: 'qrcode',
    //     component: () => import('../views/QrCode.vue')
    //   }
    // ]
  },
  {
    path: '/qrcode',
    name: 'QrCode',
    component: QrCode
  },
  {
    path: '/personnel',
    name: 'PersonnelList',
    component: PersonnelList,
    children: [
      {
        path: '/personnel/pin/:id',
        name: 'ClockByPin',
        component: () => import('../views/CodePin.vue')
      },
    ]
  },
  {
    path: '/personnel-present',
    name: 'PersonnelPresent',
    component: PersonnelPresent
  },
  {
    path: '/pointage/:id',
    name: 'Pointage',
    component: Pointage
  },
  {
    path: '/goodbye',
    name: 'Goodbye',
    component: GoodBye
  },

  // {
  //   path: '/about',
  //   name: 'À propos',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/element/:id',
  //   name: 'Element',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Element.vue'),
  //   children: [
  //     {
  //       path: 'properties',
  //       component: () => import('../views/ElementProperties.vue')
  //     },
  //     {
  //       path: 'informations',
  //       component: () => import('../views/ElementInformations.vue')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
