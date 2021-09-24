import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Good_list from '@/components/Good_list'
import Good_add from '@/components/Good_add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/good_list',
          name: 'Good_list',
          component: Good_list
        },
        {
          path: '/good_add',
          name: 'Good_add',
          component: Good_add
        }
      ]
    }
   
  ]
})
