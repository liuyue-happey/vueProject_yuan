import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import index from '@/pages/index'

import active from '@/pages/active'
import change from '@/pages/change'
import check from '@/pages/check'
import message from '@/pages/message'
import num from '@/pages/num'
import order from '@/pages/order'
import organization from '@/pages/organization'
import shop from '@/pages/shop'
import system from '@/pages/system'
import user from '@/pages/user'
import volunteer from '@/pages/volunteers'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }, {
      name: 'index',
      path: '/index',
      component: index,
      redirect:'/index/user',
      children: [
        {
          name: 'active',
          path: 'active',
          component: active,
        },
        {
          name: 'change',
          path: 'change',
          component: change,
        },
        {
          name: 'check',
          path: 'check',
          component: check,
        },
        {
          name: 'message',
          path: 'message',
          component: message,
        },
        {
          name: 'num',
          path: 'num',
          component: num,
        },
        {
          name: 'order',
          path: 'order',
          component: order,
        },
        {
          name: 'organization',
          path: 'organization',
          component: organization,
        },
        {
          name: 'shop',
          path: 'shop',
          component: shop,
        },
        {
          name: 'system',
          path: 'system',
          component: system,
        },
        {
          name: 'user',
          path: 'user',
          component: user,
        },
        {
          name: 'volunteer',
          path: 'volunteer',
          component: volunteer,
        },
      ]
    }
  ]
})
