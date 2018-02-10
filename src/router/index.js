import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '../components/About'
import Contact from '../components/Contact'
import Test from '../components/Test'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/about',
        name : 'About',
        component: About
      },
      {
        path: '/contact',
        name : 'Contact',
        component: Contact
      },
      {
        path: '/test',
          component: Test
      }
  ]
})
