import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/App.vue'
import CooEnglish from '@/components/CooEnglish.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/coordinacion-i',
      name: 'CoordinacionI',
      component: CooEnglish
    },
    {
      path: '/dir-er',
      name: 'DireccionER',
      component: CooEnglish
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})
